const EleventyFetch = require('@11ty/eleventy-fetch');
const fetch = require('isomorphic-fetch');
const fs = require('fs-extra')
const excerpt = require('excerpts');
const toTitleCase = require('to-title-case');

const dataPath = 'src/_data/books.json'

const getUrl = async (url) => await EleventyFetch(url, {
  duration: '1w',
  type: 'json'
});

const getAuthor = async (url) => {
  const author = await getUrl(`${url}.json`);
  // console.log('👱', author)
  return author.name;
}

const getBook = async ({
  id
}) => {
  if (!id) return;

  const bookData = await getUrl(`${id}.json`);

  if (bookData) {
    // console.log('📚', bookData)
    const authors = await Promise.all(bookData.authors.map(getAuthor));
    const {
      cover,
      description,
      firstPublishedDate,
      publishedDate,
      title,
      subtitle,
      series,
      seriesNumber,
      subjects
    } = bookData
    const book = {
      id,
      seriesNumber
    }
    if (authors) book.authors = [...new Set(authors)].join(', ')
    if (title) book.title = toTitleCase(title)
    if (subtitle) book.subtitle = toTitleCase(subtitle)
    if (series) book.series = toTitleCase(series)
    if (description) book.description = excerpt(description)
    if (subjects && subjects.length) book.subjects = [...new Set(subjects.map(x => x.split('-')).flat().map(x => x.split('-')).flat().map(x => x.trim()).filter(Boolean))]
    // console.log(book.subjects)
    book.publishedDate = new Date(firstPublishedDate || publishedDate)
    book.cover = cover ? cover.url : null
    return book
  }
}

const getJSON = async endpoint => await fetch(endpoint).then(r => r.json())

const formatPageUrl = url => url.replace('?page=', '.json?page=')

const getBooks = async response => {
  let page = await getJSON(formatPageUrl(response.first));
  // console.log('📰', page)
  let feed = await Promise.all(page.orderedItems.map(getBook));

  while (page.next) {
    const next = formatPageUrl(page.next)
    page = await getJSON(next);
    feed = feed.concat(await Promise.all(page.orderedItems.map(getBook)));
  }

  // console.log('💘', feed[0])
  return feed.sort((a,b) => a.title > b.title)
}

const getShelf = async shelf => {
  const response = await getJSON(`https://bookwyrm.social/user/hryggrbyr/books/${shelf}.json`)
  // console.log('🦛', shelf, response.first)
  const obj = {}
  obj[shelf] = {}
  obj[shelf].label = shelf
  obj[shelf].id = response.id || shelf
  obj[shelf].url = response.first || null
  obj[shelf].title = response.name || null
  obj[shelf].books = await getBooks(response) || []
  obj[shelf].count = obj[shelf].books.length
  // console.log(obj[shelf])
  return obj[shelf]
}

const getAllShelves = async () => {
  const shelves = ['reading', 'to-read', 'read']
  const promises = await shelves.map(async shelf => await getShelf(shelf))
  return Promise
  .all(promises)
  .then(x => {
    const y = {
      [shelves[0]]: x[0],
      [shelves[1]]: x[1],
      [shelves[2]]: x[2],
    }
    return y
  })
  .then(y => fs.writeFile(dataPath, JSON.stringify(y, null, 2), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }))
  .catch(error => {
    console.error(error)
    return []
  })
}

module.exports = getAllShelves();
