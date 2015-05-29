/**
 * @jsx React.DOM
 */
define(['react', 'templates/Row','bootstrap'], function( React, Row ,bootstrap) {

	 var Campaign = React.createClass({
	  render: function () {
	  	var arr = [];
	  	this.props.catObj.forEach(function(rowObj){
	  		var obj = rowObj.toJSON();
	  		arr.push(<Row cols={obj.className} />);
	  	});	
	    return (
	     
	        <div id="main-container">
	        	{arr}
	        </div>
	    
	    );
	  }
	}); 
	return Campaign; 

});	