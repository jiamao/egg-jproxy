'use strict';

const mock = require('egg-mock');

describe('test/jproxy.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/jproxy-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, jproxy')
      .expect(200);
  });
});
