var App = Ember.Application.create({
  name: "Hello, world!",
  secondsViewed: 0
});

setInterval(function() {
  var viewed = App.get('secondsViewed');
  App.set('secondsViewed', viewed + 1);
}, 1000);

