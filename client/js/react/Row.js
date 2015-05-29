/**
 * @jsx React.DOM
 */
define(['react'], function( React ) {

	 var Row = React.createClass({
	  render: function () {
	  	var rows = [];
	  	console.log(this.props.cols);
	  	this.props.cols.className.forEach(function(colObj){
	  	console.log(colObj)
	  				rows.push(
						<div className={colObj} style={{border:"1px solid red"}}>
						DummyText
						<Media media={this.props.cols} />
						</div>
					);		
	  			 	
	  	}.bind(this));

	    return (
	      
	        <div className="row">       	
	        	{rows}
	        </div>
	      
	    );
	  }
	});

	 // var Media=React.createClass({
	 // 		render:function(){


	 // 			var media=[];
	 // 			console.log(this.props);

	 // 			this.props.media.mediaType.forEach(function(mediaObj){
	 // 				console.log(mediaObj)
	 // 					media.push(

	 // 						);
	 // 			});

	 // 			return(
	 // 				<div></div>
	 // 				);
	 // 		}
	 // })

	 // var Columns=React.createClass({
	 // 	render:function(){

	 // 		 var cols=[];
	 // 		var columsData=this.props.cols.classname;
	 // 		columsData.forEach(function(colObj){
	 // 			//console.log(colObj)
	 // 			cols.push(
	 // 			<div className={colObj} style={{border:"1px solid red"}}>fghfgh </div>
	 // 				);
	 // 		}); 

	 // 		return(
	 // 			<div>sdsdf
	 // 			</div>
	 				
	 // 		);

	 // 	}

	 // });
	return Row; 

});	