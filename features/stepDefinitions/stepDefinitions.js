var {Given,When,Then,Before,BeforeAll,After,AfterAll} = require('cucumber');

Before(function () {
  return console.log('Inside Before function');
});


BeforeAll(function () {
  return console.log('Inside >>>>>Before All<<<<< function');
});

After(function () {
  return console.log('Inside After function');
});

AfterAll(function () {
  return console.log('Inside >>>>>After All<<<<< function');
});


Given(/^User navigate to Amazon.com$/, function () {
    return console.log('User navigate to Amazon.com');
  });

  When(/^User validate Homepage Title$/, function () {

    return console.log('User validate Homepage Title');
  });

  Then(/^User enter "([^"]*)" Username$/, function (usertype) {
      
    return console.log('User enter ' +usertype+ ' Username');
  });


  Then(/^User enter "([^"]*)" Password$/, function (pwdtype) {

    return console.log('User enter ' +pwdtype+ ' Password');
  });

  Then(/^User loggin should "([^"]*)" successfully login$/, function (logintype) {
    
    return console.log('User loggin should ' +logintype+ ' successfully login');
  });
  
 