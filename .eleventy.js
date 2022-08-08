const { logToConsole } = require('dwkns-eleventy-plugins')

module.exports = (eleventyConfig) => {
  // utility function to log value to HTML
  // use {{ thingToLog | console | safe }}
  eleventyConfig.addPlugin(logToConsole);

  // watch our script folder for changes. 
  eleventyConfig.addWatchTarget("./src/scripts/");
  eleventyConfig.addWatchTarget("./tailwind.config.js");

  eleventyConfig.addPassthroughCopy({
    'src/fonts': './fonts',
    'src/images': './images',
    'src/styles/compiled.css': './styles/compiled.css',
  });

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.setServerOptions({
    domdiff: false, // reload instead of domdiff
    port: 8080,
    showAllHosts: true, 
    showVersion: false,
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_partials/',
      layouts: '_partials/_layouts',
      data: '_data',
    },
  };
};
