define(['react'], function( React) {

	var ImageModule=React.createClass({
		render:function(){		
			var imgObj=this.props.imgObj;
			var classString ="col-md-";
			classString += imgObj.cols;
			var imgString=<div className={classString}><img src={imgObj.media.url} /></div>;
			return( 
					imgString									
			);
		}
	});
	return ImageModule; 

});	