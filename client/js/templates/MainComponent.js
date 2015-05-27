/**
 * @jsx React.DOM
 */
define(['react'], function( React ) {

	 var MainComponent = React.createClass({displayName: "MainComponent",
	  render: function () {
	    return (
	      React.createElement("div", null, 
	        React.createElement("div", {id: "main-container"}, "Hello main-container")
	      )
	    );
	  }
	}); 
	return MainComponent; 

});	