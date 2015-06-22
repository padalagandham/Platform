/**
 * @jsx React.DOM
 */
define(['react', 'templates/Row','bootstrap'], function( React, Row ,bootstrap) {

	 var Campaign = React.createClass({
	  render: function () {
	  	var arr = [];		
		var camPaignObj = this.props.catObj[0].get("camPaign");
		camPaignObj.forEach(function(row){
				console.log("row",row);
				arr.push(<Row cols={row} />)
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