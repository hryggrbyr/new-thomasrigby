const wordCount = (x) => x.toString().replace( /(<([^>]+)>)/ig, '').match(/\w+/gm).length;

module.exports = wordCount;
