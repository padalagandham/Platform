/**
 * @jsx React.DOM
 */
define(['react'], function( React ) {

	 var Row = React.createClass({
	  render: function () {

	  	var rows = [];

	  	this.props.rows.forEach(function(rowObj){
	  		rows.push(<div id="row">{rowObj.get("media")}</div>);
	  		console.log(rowObj);
	  	}.bind(this));

	    return (
	      
	        <div id="row">
	        	
	        	{rows}
	        </div>
	      
	    );
	  }
	}); 
	return Row; 

});	