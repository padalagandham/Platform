define(['react'], function( React) {
	var TextModule=React.createClass({
		render:function(){
			var txtObj=this.props.txtObj;
			var classString ="col-md-";
			classString += txtObj.cols;	
			var txtString=<div className={classString} style={{border:"1px solid red"}}>{txtObj.media.txt}</div>					
			return( 
				txtString		
			);					
		}	
	});
	return TextModule; 

});	