/**
 * @jsx React.DOM
 */
define(['react'], function( React ) {

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
	
	var TextModule=React.createClass({
		render:function(){
			var txtObj=this.props.txtObj;
			var classString ="col-md-";
			classString += txtObj.cols;			
			return( 
			<div className={classString} style={{border:"1px solid red"}}>						
			{txtObj.media.txt}
			</div>
			
			);					
		}	
	});
	
	
	var ImageModule=React.createClass({
		render:function(){		
			var imgObj=this.props.imgObj;
			var classString ="col-md-";
			classString += imgObj.cols;
			return( 
				<div className={classString} style={{border:"1px solid red"}}>						
					<img src={imgObj.media.url} />
				</div>
										
			);
		}
	
	});
	return Row; 
});	