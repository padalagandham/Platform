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
													{cols:'9', media: { "url":"images/img1.jpg","type":"image" } },
													{cols:'3', media: { "url":"images/img2.jpg","type":"image"} },
													//{cols:'3', media: { "url":"images/img2.jpg","type":"image" } },
												 ],
										
									},
									{
										"rowObj":[
										
										
													{cols:'12', media: { "url":"images/img-slider.jpg","type":"image"  } }
												]
									},
								
									{
										"rowObj":[
										
										
													{cols:'4', media: { "url":"images/img4.jpg","type":"image"  } },
													{cols:'4', media: { "url":"images/img5.jpg","type":"image" } },
													{cols:'4', media: { "url":"images/img6.jpg","type":"image" } },
										
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