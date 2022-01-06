var {Given,When,Then} = require('cucumber');


Then('User validate the captcha', function (tables) {

    var data = tables.hashes()[1];
    return console.log('User validate the captcha' + ' Country Name is ' +data['Country'] + ' Code is ' +data['Code'] );
  });
