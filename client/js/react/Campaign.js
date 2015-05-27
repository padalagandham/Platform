/**
 * @jsx React.DOM
 */
define(['react', 'templates/Row'], function( React, Row ) {

	 var Campaign = React.createClass({
	  render: function () {
	    return (
	      <div>
	        <div id="main-container">
	        	<Row rows={this.props.catObj} />
	        </div>
	      </div>
	    );
	  }
	}); 
	return Campaign; 

});	