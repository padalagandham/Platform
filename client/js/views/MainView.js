define(['backbone', 'views/BaseView', 'templates/MainComponent'], function( Backbone, BaseView, MainComponent ) {

	var MainView = BaseView.extend({

		component: function () {
			return MainComponent;
		},

		  pageRender: function (view) {
		    this.$('#main-container').html(view.render().$el);
		  }

	});

	return MainView;

});	