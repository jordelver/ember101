var App = Ember.Application.create();
App.name = "Hello, world!";
App.secondsViewed = 0;

setInterval(function() {
  App.set('secondsViewed', App.get('secondsViewed') + 1);
}, 1000);

