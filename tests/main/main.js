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
      .url('http://hrgo.co.uk/')
      .waitForElementPresent('body', 500, 'page loaded')
      .verify.urlEquals('http://www.hrgo.co.uk/', 'We are redirected to http://www.hrgo.co.uk/')
      .verify.elementPresent('.home-hero', 'Home Hero section is displayed')
      .verify.elementPresent('.navigation', 'Navbar macro is working')
      .verify.elementPresent('a[href^="/about/"]', 'Navbar links are rendered')
      .verify.elementPresent('.subNavigation', 'Subnav macro is working')
      .verify.hidden('.subNavigation', 'Subnav is not currently visible')
      .moveToElement('a[href^="/locations/"]', 10, 10)
      .verify.visible('.subNavigation', 'Subnav is visible when dropdown is hovered')
      .verify.elementPresent('.subNavigation a[href^="/head-office"]', 'SubNavigation links are rendered')
      .verify.elementPresent('.navigation', 'Footer macro is working')
      .click('.navigation a[href^="/locations/"]')
      .pause(500)
      .verify.urlEquals('http://www.hrgo.co.uk/locations/', 'we navigated to locations')
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
  'locations' : function (client) {
    client
      .url('http://hrgo.co.uk/locations')
      .waitForElementPresent('body', 500, 'page loaded')
      .verify.elementPresent('.locations-hero', 'Locations page has a hero section')
      .verify.elementPresent('.branch-card', 'Locations macro is working');
  },
  'branch' : function (client) {
    client
      .url('http://hrgo.co.uk/locations/dudley')
      .waitForElementPresent('body', 500, 'page loaded')
      .verify.containsText('h1', 'Dudley', 'We have reached the dudley branch page')
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
