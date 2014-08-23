import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DummyENV.locationType
});

Router.map(function() {
  this.route('render-helper');
  this.route('using-item-controller');
  this.route('limited-axis');
});

export default Router;
