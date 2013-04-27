var App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about', function() {
    this.route('location');
    this.route('product');
  });
  this.resource('login');
});

