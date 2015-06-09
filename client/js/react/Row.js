/**
 * @jsx React.DOM
 */
define(['react','templates/components/ImageModule','templates/components/TextModule','templates/components/SliderModule','bootstrap','templates/components/NavBarSection'], function( React,ImageModule,TextModule,SliderModule,bootstrap,NavBarSection) {

	var MultipleModule=React.createClass({
		render:function(){
			var innerArr=[];
			var multipleMediaObj=this.props.multipleMediaObj;
			var classString ="col-md-";
			classString += multipleMediaObj.cols;	
			multipleMediaObj.innerRowObj.forEach(function(rows){
					innerArr.push(<Row cols={rows} />);
				});
			return( 
				<div className={classString}>
					{innerArr}
				</div>	
			);					
		}	
	});


	 var ColumnSection=React.createClass({
	 	render:function(){
	 		var colObj=this.props.columnsObj;
	 		var column=[];
	 	colObj.forEach(function(colObj){

	 		if(colObj.menuObjStatus){
	 				column.push(

	 					<NavBarSection navObj={colObj} />
	 				);
	 			}

	 	//Check Condition for multiples objects within object
	 			if(colObj.rowObjStatus){
	 				
					column.push(
									<MultipleModule multipleMediaObj={colObj} />
								);						
				}
					
		//Check condition for media type Image and calling respective Component
	 		 	  if (colObj.rowObjStatus==false && colObj.media.type == "image" && !colObj.hasSliderType ) {
					column.push(
									<ImageModule imgObj={colObj} />										
							);
				}
		//Check condition for media type Text and calling respective Component
				if(colObj.rowObjStatus==false &&colObj.media.type == "text" && !colObj.hasSliderType) {
					column.push(
									
									<TextModule txtObj={colObj}  />
							 );
				}
				 if( colObj.hasSliderType === true) {
				 	column.push(
						
					
								 <SliderModule data={colObj}/>						
							
								);
						
				}

	 		 });
	 return(
	 		<div className="row">      
	 			{column}
	 		</div>
	 	  );
	 	}   
	 });

	  var Row = React.createClass({
	  render: function () {
		var colObj=this.props.cols.rowObj;	
	    return (	
				<ColumnSection columnsObj={colObj} />      
	    );
	  }
	});
return Row; 
});	