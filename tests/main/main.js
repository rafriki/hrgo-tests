process.setMaxListeners(0);

module.exports = {
  '404' : function (client) {
    client
      .maximizeWindow()
      .url('http://hrgo.co.uk/thiswillbea404')
      .waitForElementPresent('body', 500, 'page loaded')
      .verify.title('404', '404 page');
  },
  'home' : function (client) {
    client
      .url('http://hrgo.co.uk')
      .waitForElementPresent('body', 500, 'page loaded')
      .assert.urlEquals('http://www.hrgo.co.uk/', 'We are redirected to http://www.hrgo.co.uk')
      .assert.elementPresent('.hero-carousel', 'Home carousel is loaded')
      .click('.navigation a[href^="/locations"]')
      .pause(500)
      .verify.urlEquals('http://www.hrgo.co.uk/locations', 'we navigated to locations')
      .click('.navigation .logo')
      .pause(500)
      .verify.urlEquals('http://www.hrgo.co.uk/', 'Clicking the logo brought us to home page again');
  },
  'about' : function (client){
    client
      .url('http://hrgo.co.uk/about')
      .waitForElementPresent('body', 500, 'page loaded')
      .verify.elementPresent('.clients-hero', 'About page has a hero section')
      .verify.elementPresent('.person-card-narrow', 'Senior Management team are being displayed');
  },
  'keyAccounts' : function (client) {
    client
      .url('http://hrgo.co.uk/key-accounts')
      .waitForElementPresent('body', 500, 'page loaded')
      .verify.elementPresent('.ns-hero', 'key accounts page has a hero section');
  },
  'locations' : function (client) {
    client
      .url('http://hrgo.co.uk/locations')
      .waitForElementPresent('body', 500, 'page loaded')
      .verify.elementPresent('.locations-hero', 'Locations page has a hero section')
      .verify.elementPresent('.branch-card', 'Locations macro is working');
  },
  'branch' : function (client) {
    client
      .url('http://hrgo.co.uk/dudley')
      .waitForElementPresent('body', 500, 'page loaded')
      .assert.urlEquals('http://www.hrgo.co.uk/locations/midlands/dudley', 'We are redirected to the Dudley Branch Page')
      .verify.elementPresent('.industry-specialisms', 'Sector cards have been displayed')
      .verify.elementPresent('.person-card-wide', 'Members of the team are being displayed');
  },
  'sectors' : function (client) {
    client
      .url('http://hrgo.co.uk/sectors')
      .waitForElementPresent('body', 500, 'page loaded')
      .verify.elementPresent('.industries-hero', 'We have reached the sectors page')
      .verify.elementPresent('.industry-card-wide', 'Sectors macro is working');
  },
  'blog' : function (client) {
    client
      .url('http://hrgo.co.uk/blog')
      .waitForElementPresent('body', 500, 'page loaded')
      .verify.elementPresent('.blog-hero', 'We have reached the blog page')
      .verify.elementPresent('.blog-hero h1', 'Featured post is rendered')
      .verify.elementPresent('.blog-post', 'Blog posts are being displayed')
      .click('h1')
      .waitForElementPresent('body', 500, 'page loaded')
      .verify.elementPresent('.post-body', 'We have reached a blog post')
      .verify.elementPresent('#disqus_thread', 'Disqus is installed');
  },
  'end': function (client) {
    client
      .end();
  }
};
