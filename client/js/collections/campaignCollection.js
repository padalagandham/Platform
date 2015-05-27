define([ 'backbone', 'models/campaignModel' ], function( Backbone, CampaignModel ) {
  
  return Backbone.Collection.extend({

    model: CampaignModel,
 
  });

 
});
