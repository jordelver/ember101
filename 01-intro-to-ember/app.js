var App = Ember.Application.create({
  name: "Hello, world!",
  secondsViewed: 0
});

setInterval(function() {
  App.set('secondsViewed', App.get('secondsViewed') + 1);
}, 1000);

