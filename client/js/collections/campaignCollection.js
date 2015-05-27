define([ 'backbone', 'models/campaign' ], function( Backbone, CampaignModel ) {
  
  return Backbone.Collection.extend({

    model: CampaignModel,
    url: ''

  });

 
});
