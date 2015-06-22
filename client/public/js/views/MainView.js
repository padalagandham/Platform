/**
 * @jsx React.DOM
 */
define(['backbone', 'templates/Campaign','collections/campaignCollection', 'models/campaignModel', 'react','bootstrap'], function( Backbone, Campaign, CampaignCollection, campaignModel, React,bootstrap) {

	var MainView = Backbone.View.extend({
		initialize: function () {
			var collections = new CampaignCollection();
			collections.fetch({success:this.render});
    	},
		
    	render: function (collection, resObj) {
    		  React.render(
		        React.createElement(Campaign, {"catObj" : collection.models}),
		        document.getElementById('container')
		      ); 
		      return this;
    	},
		component: function () {
			return MainComponent;
		}
	});

	return MainView;

});	