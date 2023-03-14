require('dotenv').config();

let site = {
  name: "site name",
  theme: {
   colour: '#93C5FD'
  },
  development: {
    domain: 'localhost',
    baseURL: 'https://localhost:8080',
    debug: true,
    minifyCSS: false,
  },
  staging: {
    domain: 'staging-tiny-start.netlify.app',
    baseURL: 'https://staging-tiny-start.netlify.app',
    debug: true,
    minifyCSS: true,
  },
  production: {
    domain: 'tiny-start.netlify.app',
    baseURL: 'https://tiny-start.netlify.app',
    debug: false,
    minifyCSS: true,
  },
  currentYear: new Date().getFullYear(),
  currentDate: new Date(),
  version: Math.random().toString(36).substr(2, 8),
  currentEnv: process.env.CURRENT_ENV
}
module.exports = site
