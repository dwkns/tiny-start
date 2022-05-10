// utility function to log value to HTML & the Console
const consoleFunction = (value) => {
  return "sssss"
  let str = util.inspect(value);
  console.log('-------------start console output-------------');
  console.log(str);
  console.log('-------------end-------------');
  let html = `<div style="white-space: pre-wrap;">${unescape(str)}</div>`
  return unescape(html)
}

function logToConsole(eleventyConfig) {
  eleventyConfig.addFilter("console", consoleFunction);
}
module.exports = {
  logToConsole,
}