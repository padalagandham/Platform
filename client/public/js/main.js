require.config({
  shim: {
    'jquery':{
    exports: '$'
  },
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
    },
    'bootstrap':{
    deps: ['jquery'],
    exports:'bootstrap'
  },
  },
  paths: {
    jquery:'libs/jquery'
    ,zepto: 'libs/zepto'
    , underscore: 'libs/underscore'
    , backbone: 'libs/backbone'
    , text: 'libs/require/text'
    , react : 'libs/reactJS'
    , jsx : 'libs/JSXTransformer'
    ,bootstrap :  'libs/bootstrap'
  }
});

require([ 'backbone', 'routers/workspace' ], function( Backbone, Router) {

  var router = new Router();

  Backbone.history.start({pushState: false});
});