const site = require('../_data/site');

test('site.development.domain is localhost', () => {
  expect(site.development.domain).toBe('localhost');
});
