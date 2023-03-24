const { logToConsole } = require("dwkns-eleventy-plugins");
const site = require("./src/_data/site.js"); // import our site data

// check if the CURRENT_ENV variable is set. If not, log a warning to the console.
if (!site.currentEnv) {
  brightRed = "\x1b[31m";
  reset = "\x1b[0m";
  console.log(`${brightRed}
The ${reset}CURRENT_ENV ${brightRed}enviroment variable is not set. Things may not work as expected. 
Check your enviroment variables or ${reset}.env ${brightRed}file. See ${reset}.env-template ${brightRed}for details${reset}
`);
} 


module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(logToConsole, {
    logToHtml: true,
    logToConsole: false,
    colorizeConsole: true,
  });

  // watch our script folder & tailwind config for changes.
  eleventyConfig.addWatchTarget("./src/scripts/");
  eleventyConfig.addWatchTarget("./tailwind.config.js");

  eleventyConfig.addPassthroughCopy({
    "src/fonts": "./fonts",
    "src/images": "./images",
    "src/styles/compiled.css": "./styles/compiled.css",
  });

  eleventyConfig.setServerOptions({
    domdiff: false, // reload instead of domdiff
    port: 8080,
    showAllHosts: false,
    showVersion: false,
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_partials/",
      layouts: "_partials/_layouts",
      data: "_data",
    },
  };
};
