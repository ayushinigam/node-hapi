const expect = require('chai').expect;
const server = require('../server');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

lab.test('returns true when 1 + 1 equals 2', (done) => {

    Lab.expect(1 + 1).to.equal(2);
    done();
});

lab.experiment('hello world', () => {
  lab.test('response test on main url', (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    server.inject(options, (response) => {
      expect(response.result).to.eqls('hello world');
      done();
    });
  });
  lab.test('response test on url with params', (done) => {
    const options = {
      method: 'GET',
      url: '/myname'
    };
    server.inject(options, (response) => {
      expect(response.result).to.eqls('Hello, myname!');
      done();
    })
  })
});
