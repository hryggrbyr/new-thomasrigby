const Eleventy = require('@11ty/eleventy');
const eleventyHelmetPlugin = require('eleventy-plugin-helmet');
const eleventySchemaPlugin = require('@quasibit/eleventy-plugin-schema');
const eleventySitemapPlugin = require('@quasibit/eleventy-plugin-sitemap');
const syntaxHighlight = require('@pborenstein/eleventy-md-syntax-highlight');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginPWA = require('eleventy-plugin-pwa');
const CleanCSS = require('clean-css');

const path = {}
path.config = './_config'
path.src = './src'
path.assets = `${path.src}/assets`

const { getPosts } = require(`${path.config}/collections.js`);
const { year, imageShortcode } = require(`${path.config}/shortcodes`);
const { html } = require(`${path.config}/transforms/index.js`);

const eleventy = config => {

  // Collections
  config.addCollection('posts', getPosts);

  // Plugins
  config.addPlugin(html);

  // Pass-through
  config.addPassthroughCopy({ [`${path.assets}/images/favicons/*`]: '/' });
  config.addPassthroughCopy({ [`${path.src}/**/*.js`]: '/js' });
  config.addPassthroughCopy({ [`${path.assets}/css/**/*.css`]: '/css' });
  config.addPassthroughCopy({ [`${path.assets}/fonts/*.*`]: '/fonts' });
  // config.addPassthroughCopy({ [`${path.assets}/assets/images/**/*.*`]: '/assets/images' });
  config.addPassthroughCopy(`${path.src}/robots.txt`);
  config.addPassthroughCopy(`${path.src}/humans.txt`);
  config.addPassthroughCopy(`${path.src}/hackers.txt`);
  config.addPassthroughCopy(`${path.src}/manifest.json`);

  // Filters
  config.addNunjucksFilter('humanReadableDate', require(`${path.config}/utils/human-readable-date.js`));
  config.addNunjucksFilter('humanReadableNumber', require(`${path.config}/utils/human-readable-number.js`));
  config.addNunjucksFilter('readingTime', require(`${path.config}/utils/reading-time.js`));
  config.addNunjucksFilter('wordCount', require(`${path.config}/utils/word-count.js`));
  config.addNunjucksFilter('toISO', require(`${path.config}/utils/to-iso.js`));
  config.addNunjucksFilter('getYear', x => new Date(x).getFullYear());
  config.addNunjucksFilter('stringify', x => JSON.stringify(x, null, 2));

  config.addFilter('cssmin', (code) => new CleanCSS({}).minify(code).styles);

  // Shortcodes
  config.addNunjucksShortcode('year', year);
  config.addNunjucksShortcode('image', imageShortcode);

  // Register plugins
  const options = {
    sitemap: { sitemap: { hostname: 'http://thomasrigby.com/' } }
  }
  config.addPlugin(eleventyHelmetPlugin);
  config.addPlugin(eleventySchemaPlugin);
  config.addPlugin(eleventySitemapPlugin, options.sitemap);
  config.addPlugin(pluginRss);
  config.addPlugin(syntaxHighlight);
  if (process.env.NETLIFY) config.addPlugin(pluginPWA);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    }
  };
};

module.exports = eleventy
