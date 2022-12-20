const htmlmin = require('html-minifier-terser');
const isProduction = process.env.NETLIFY;

module.exports = config => {
  config.addTransform('html-minify', (content, path) => {
    if (path && path.endsWith('.html') && isProduction) {
      return htmlmin.minify(content, {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        includeAutoGeneratedTags: false,
        removeComments: true
      });
    }

    return content;
  });
};
