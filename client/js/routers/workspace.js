define([  'zepto', 'backbone', 'views/MainView' ], function( $, Backbone, MainView ) {
  
  var Router = Backbone.Router.extend({
    routes : {
      '':'startCampaign'
    },

    initialize: function() {
      // fetching campaign object once on app start
    },

   
    startCampaign: function(){
      console.log("start startCampaign");
      var mainView = new MainView({
        el : document.getElementById('container')
      });
      mainView.render();

    }

  });

  return Router;
});