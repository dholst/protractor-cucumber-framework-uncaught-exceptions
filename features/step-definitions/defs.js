module.exports = function() {
  this.Given(/something throws an uncaught exception/, function() {
    browser.get('/index.html');
    return expect(element(by.css('[nuthin]')).getText()).to.eventually.eql('anything');
  });
};
