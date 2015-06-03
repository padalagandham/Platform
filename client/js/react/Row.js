/**
 * @jsx React.DOM
 */
define(['react','templates/components/ImageModule','templates/components/TextModule'], function( React,ImageModule,TextModule ) {

	 var Row = React.createClass({
	  render: function () {
	  	var column = [];	  	
		console.log("cols",this.props.cols);		
	this.props.cols.rowObj.forEach(function(colObj){
			console.log("colObj",colObj);
						if(colObj.media.type == "text") {
								column.push(

										 <TextModule txtObj={colObj}  />
									);
						}
						if(colObj.media.type == "image") {
								column.push(

										 <ImageModule imgObj={colObj} />										
	
									);
						}	
	}); 
					
	    return (	      
	        <div className="row">       	
				{column}
	        </div>	      
	    );
	  }
	});
	return Row; 
});	