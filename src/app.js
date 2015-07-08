/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Settings = require('settings');

var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
});

main.show();

main.on('click', function(e) {
  var first_name = localStorage.getItem(1);
  var last_name = localStorage.getItem(2);
  var card = new UI.Card({
    title: 'Welcome!',
    body: 'Welcome, ' + first_name + " " + last_name
  });
  card.show();
});

Settings.config(
  { url:'http://mlb406.github.io/pebbleAppSettings/' },
  function(e) {
    console.log('opened config');
  },
  function(e) {
    console.log('Recieved settings!');
    var options = e.options;
    var firstName = options.firstname;
    var lastName = options.lastname;
    console.log(firstName + " " + lastName);
    localStorage.setItem(1, firstName);
    localStorage.setItem(2, lastName);
  }
  
);

