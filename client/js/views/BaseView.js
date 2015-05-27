define(['backbone','react',''], function( Backbone, React ) {

  var BaseView = Backbone.View.extend({
    initialize: function (options) {
      this.options = options || {};
    },

    component: function () {
      return null;
    },

    render: function () {
      //React.render(this.component(), this.el);
      React.render(
        React.createElement(this.component(), null),
        this.el
      );
      return this;
    }
  });

  return BaseView;
  
});
