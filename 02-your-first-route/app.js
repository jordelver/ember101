var App = Ember.Application.create();

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return { name: 'My App', timer: 0 }
  },

  activate: function() {
    this.interval = setInterval(function() {
      var timer = this.get('controller.model.timer');
      this.set('controller.model.timer', timer + 1);
    }.bind(this), 1000);
  },

  deactivate: function() {
    clearInterval(this.interval);
  }
});

