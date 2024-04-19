/** Puppeteer configs needed for deployment like render.com or other server hosting sites
 * Also, make sure to exclude big files in .gitignore 
 * # Exclude Puppeteer cache
      .cache/puppeteer/
 */

const { join } = require('path');
// Importing the join function from Node.js's path module. 
// This function will be used to construct the cache directory path.

/**
 * @type {import("puppeteer").Configuration}
 */
// This JSDoc comment provides type information for the configuration object.
// It specifies that the object conforms to the Configuration interface defined in the puppeteer module.

module.exports = {
  // Exporting an object containing the configuration settings for Puppeteer.

  // Changes the cache location for Puppeteer.
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
  // Setting the cacheDirectory property of the configuration object.
  // It uses the join function to construct the cache directory path relative to the current directory (__dirname).
  // The cache will be stored in a subdirectory named .cache/puppeteer.
};
