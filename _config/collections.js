const sortByDate = (a,b) => a.date > b.date
const get = (x,y) => x.getFilteredByGlob(y).sort(sortByDate)

// blog posts
const getPosts = collection => get(collection, 'src/posts/**/*.md');

module.exports = {
  getPosts
};
