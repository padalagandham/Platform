require.config({
  shim: {
    'zepto': {
      exports: 'Zepto'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'zepto'],
      exports: 'Backbone'
    },
    'react' : {
      exports : 'React'
    },
    'jsx' : {
      exports :'jsx'
    }
  },
  paths: {
      zepto: 'libs/zepto'
    , underscore: 'libs/underscore'
    , backbone: 'libs/backbone'
    , text: 'libs/require/text'
    , react : 'libs/reactJS'
    , jsx : 'libs/JSXTransformer'
  }
});

require([ 'backbone', 'routers/workspace' ], function( Backbone, Router) {

  var router = new Router();

  Backbone.history.start({pushState: false});
});