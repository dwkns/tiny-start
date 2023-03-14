const { logToConsole } = require("dwkns-eleventy-plugins");

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
