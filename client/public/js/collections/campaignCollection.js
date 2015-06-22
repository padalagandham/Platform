define([ 'backbone', 'models/campaignModel' ], function( Backbone, CampaignModel ) {
  
  return Backbone.Collection.extend({
  	url : 'js/data/firstObject.json',
    model: CampaignModel
 
  });

 
});
