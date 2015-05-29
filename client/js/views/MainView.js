/**
 * @jsx React.DOM
 */
define(['backbone', 'templates/Campaign','collections/campaignCollection', 'models/campaignModel', 'react','bootstrap'], function( Backbone, Campaign, CampaignCollection, campaignModel, React,bootstrap) {

	var MainView = Backbone.View.extend({
		initialize: function () {
			this.collections = new CampaignCollection();

			for(var i=0; i<3; i++){
				this.collections.add(new campaignModel({
					media : "slideshow" + i,
					extra : "empty",
					className:['col-md-5','col-md-4','col-md-3'],
					//mediaType:['images/bag-icon.png','fghfg','fghgfhgh']



				}))
			}
    	},
    	render: function () {
		      //React.render(this.component(), this.el);
		      //console.log(this.collections);
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