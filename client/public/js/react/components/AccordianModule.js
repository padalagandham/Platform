define(['react','templates/components/ImageModule','templates/components/TextModule','templates/Row','templates/components/SliderModule'], function( React,ImageModule,TextModule,Row,SliderModule) {

var AccordianModule=React.createClass({

	generateAccordion:function(accordianObj){
		 return <AccordionHeader header={accordianObj}  />

	},
	

	render:function(){
		var accordianObj=this.props.accordianObj;
		console.log(accordianObj)
		var items = accordianObj.accordianObject.map(this.generateAccordion);
		console.log(items);
		
	return(

			<div className="col-md-12 panel-group">

			{items}

			</div>

		);
	}

});
var AccordionHeader=React.createClass({

	render:function(){
		var accheadObj=this.props.header;
		console.log(accheadObj)

		return(<div className="panel panel-default">
				<AccordionTitle title={accheadObj.panelHeadersObject} />
				<AccordionBody  body={accheadObj.panelContetntObject} />
				</div>);
	}
});

var AccordionTitle=React.createClass({

render:function(){
	var titleObj=this.props.title;
	return(<div className="panel-heading">
			<h4 className="panel-title">
			<TitleLink title={titleObj} />
			</h4>
			</div>);
}


});

var AccordionBody=React.createClass({

render:function(){
	var titleObj=this.props.body;
	return(<div id={titleObj.id} className="panel-collapse collapse">

			<ContentPart content={titleObj} />
		</div>);
}


});

var TitleLink=React.createClass({
render:function(){

var titleMediaObj=this.props.title;
if(titleMediaObj.media.type="image"){

	titleString=<img src={titleMediaObj.media.url} />
}
if(titleMediaObj.media.type="text"){

	titleString=titleMediaObj.media.txt
}

return(
 <a data-toggle="collapse" data-parent="#accordion" href={titleMediaObj.linkTo}>{titleString}</a>
 );
}


});

var ContentPart=React.createClass({
render:function(){
var contentMediObj=this.props.content;
var ar=[]

console.log("contentMediObj",contentMediObj);

if(contentMediObj.media&& contentMediObj.media.type==="image"){

	ar.push(<ImageModule imgObj={contentMediObj} />);
}

if(contentMediObj.media &&  contentMediObj.media.type==="text"){

	ar.push(<TextModule txtObj={contentMediObj} />);
}

if(contentMediObj.mediaType==="corousel"){

	ar.push(<SliderModule data={contentMediObj} />)

}


	return(

 		<div className="panel-body">{ar}</div>

		);
}


});




return AccordianModule;
});
