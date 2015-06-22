/**
 * @jsx React.DOM
 */
define(['react'], function( React ) {

	 var Columns = React.createClass({
	  render: function () {

	  	var columns = [];

	  	this.props.rows.forEach(function(rowObj){
	  		
	  		rows.push(<div id="row">{rowObj.get("media")}</div>);
	  		console.log(rowObj);
	  	}.bind(this));

	    return (
	      
	        <div id="columns">
	        	
	        	{columns}
	        </div>
	      
	    );
	  }
	}); 
	return Columns; 

});	