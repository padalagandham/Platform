/**
 * @jsx React.DOM
 */
define(['react'], function( React ) {

	 var MainComponent = React.createClass({
	  render: function () {
	    return (
	      <div>
	        <div id="main-container">Hello main-container</div>
	      </div>
	    );
	  }
	}); 
	return MainComponent; 

});	