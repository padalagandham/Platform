/**
 * @jsx React.DOM
 */
define(['backbone', 'templates/Campaign','collections/campaignCollection', 'models/campaignModel', 'react'], function( Backbone, Campaign, CampaignCollection, campaignModel, React ) {

	var MainView = Backbone.View.extend({
		initialize: function () {
			this.collections = new CampaignCollection();

			for(var i=0; i<10; i++){
				this.collections.add(new campaignModel({
					media : "slideshow"+i,
					extra : "empty"
				}))
			}

     	 	
    	},
    	render: function () {
		      //React.render(this.component(), this.el);
		      console.log(this.collections);
		      React.render(
		        React.createElement(Campaign, {"catObj" : this.collections.models}),
		        this.el
		      );
		      return this;
    	},
		component: function () {
			return MainComponent;
		},

		 pageRender: function (view) {
		    this.$('#main-container').html(view.render().$el);
		 }

	});

	return MainView;

});	