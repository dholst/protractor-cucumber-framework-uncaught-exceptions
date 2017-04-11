module.exports = function() {
  this.Given(/something throws an uncaught exception/, function(done) {
    browser.get('/index.html');
    element(by.css('[nuthin]')).getText().then(done);
  });
};
