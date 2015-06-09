define(['react','templates/components/ImageModule','templates/components/TextModule',], function( React,ImageModule,TextModule) {

	var SliderModule=React.createClass({
		render:function(){

				console.log("dsfs",this.props.data)
					var a=[],b=[];

 this.props.data.sliderObj.forEach(function(sliderObj){
		a.push(
				<li data-target="#myCarousel" data-slide-to={sliderObj.slideTo} className={sliderObj.hasActive}></li>
				);
		});

   this.props.data.sliderObj.forEach(function(sliderObj){
   
		   	var classString="item " + sliderObj.hasActive;
		     if(sliderObj.media.type==="image"){
		     b.push(
		     	 <div className={classString}>
		      <ImageModule imgObj={sliderObj}/></div>
		      )
		     }

		      if(sliderObj.media.type==="text"){
		     b.push(
		     	 <div className={classString}>
		      <TextModule txtObj={sliderObj}/></div>
		      )
		     }
		    
		    
   });
			return( 

					<div id="myCarousel" className="carousel slide col-md-12" data-ride="carousel">
						<ol className="carousel-indicators">
							{a}
						</ol>
						 <div className="carousel-inner" role="listbox">
						 	{b}
						 </div>
					</div>							
			);
		}
	});
	return SliderModule; 

});	