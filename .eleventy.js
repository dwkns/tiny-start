const { logToConsole, addAnOrA } = require('dwkns-eleventy-plugins')

module.exports = (eleventyConfig) => {
  // utility function to log value to HTML
  // use {{ thingToLog | console | safe }}
    eleventyConfig.addPlugin(logToConsole);
   
   eleventyConfig.addPlugin(addAnOrA);

  
  // detect changes in the output folder and reload browser
  eleventyConfig.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  });

  // watch our script folder for changes. 
  eleventyConfig.addWatchTarget("./src/scripts/");
  eleventyConfig.addWatchTarget("./tailwind.config.js");

  eleventyConfig.addPassthroughCopy({
    'src/fonts': './fonts',
    'src/images': './images',
    'src/styles/compiled.css': './styles/compiled.css',
  });

  eleventyConfig.setDataDeepMerge(true);

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
