/**
 * @jsx React.DOM
 */
define(['backbone', 'templates/Campaign','collections/campaignCollection', 'models/campaignModel', 'react','bootstrap'], function( Backbone, Campaign, CampaignCollection, campaignModel, React,bootstrap) {

	var MainView = Backbone.View.extend({
		initialize: function () {
			this.collections = new CampaignCollection();
			this.collections.add(new campaignModel({

					"camPaign": [
									 { 	
										"rowObj":[
													{cols:'5', media: { "url":"images/bag-icon.png","type":"image" } },
													{cols:'4', media: { "txt":"hello Text","type":"text" } },
													{cols:'3', media: { "url":"b.png","type":"image" } },
												 ],
										
									},
									{
										"rowObj":[
										
										
													{cols:'7', media: { "url":"a.png","type":"image" } },
													{cols:'2', media: { "txt":"hello Text2222","type":"text" } },
													{cols:'3', media: { "url":"b.png","type":"image" } },
										
												]
									}
								
							]	
				}))
    	},
		
    	render: function () {

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