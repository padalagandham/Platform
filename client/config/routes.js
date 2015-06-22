/** 
 * Routes
 * Module dependencies.
 */
var config = require('./config'),
    index = require('../app/controllers/index');



exports.init = function(app, auth) {
    console.log('Initializing Routes');
      
    
   app.get('/', index.render);
};
