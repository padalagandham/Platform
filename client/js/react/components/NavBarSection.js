define(['react','bootstrap'], function( React,bootstrap) {

	var NavBarSection=React.createClass({
		render:function(){		
			var navObj=this.props.navObj;
			var navarr=[];
			var classString="nav";
			classString +=' ' + navObj.menuType;

			console.log("navObj",navObj);
		navObj.menuObject.forEach(function(menuObj){
			navarr.push(
					<li role={menuObj.role} className={menuObj.classname}>
						<a href={menuObj.link}>{menuObj.menuName}</a>
					</li>
				);
				
			});
		console.log(navarr)
		
			return( 
					<nav>
						<ul className={classString} style={{background:'black'}}>
							{navarr}
						</ul>
					</nav>					
			);
		}
	});




// var NavSection=React.createClass({

// render:function(){

// 	var navSec=this.props.nav;
// 	var menuArr=[];
// 	var classString="nav";
// 	classString +=' ' + navSec.menuType;
// 	navSec.menuObject.forEach(function(menu){
// 		menuArr.push(

// 				<li role={menu.role} className={menu.classname}>
// 				<a href={menu.link}>{menu.menuName}</a>
// 				</li>
// 			);
// 	});
// 	return(

// 			<ul className={classString} style={{background:'black'}}>
// 				{menuArr}
// 			</ul>

// 		);
// }

// });

	return NavBarSection; 

});	