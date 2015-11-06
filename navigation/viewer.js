
(function (window) {
	var firstpage='true';
	var mode='viewer';

		
	
window.loadCss = function(){
		var url="navigation/userstyle.php";
		$("#userCss").html('');
		$.getJSON(url,function(json){
			$.each(json.userstyle,function(i,cdat){
			$("#userCss").html(''+
				'<style>'+cdat.usercss+'</style>'+	
				'');
			});
		});
	}




	window.loadHomePage= function (){
		$("#navcontent").html('<i class="fa fa-circle-o-notch fa-spin"></i>');
		var url="navigation/data.php";
		var x='1';	
		$("#navcontent").html('<ul></ul>');
		$.getJSON(url,function(json){
			$.each(json.navinfo,function(i,ldat){
				if( x=='1'){ 
					x='2'; 
					var home = ''+ldat.ID+'';
					showPages();
					loadPage(''+ home +'');
				}	

			});	
		});
}
	
	
	window.showPages= function (){
			
		$("#navcontent").html('<i class="fa fa-circle-o-notch fa-spin"></i>');
		var url="navigation/data.php";
		$("#navcontent").html('<ul></ul>');
		$.getJSON(url,function(json){
			$.each(json.navinfo,function(i,ldat){
				$("#navcontent>ul").append(''+
				'<li class="plist link" ID="pageArray_'+ldat.ID+'"> '+
				'<a class="deletebutton dlist" ID="dlist'+ldat.ID+'" href="#" onclick="deletePage(' + ldat.ID + ');">'+
				'<i class="fa fa-remove"></i></a>'+
				'<a href="#" onclick="loadPage('+ldat.ID+')">'+ldat.title+'</a> ' + 
				'</li>');	
			
			});	//each
		});//get
			
			
		
		
		
		
	if(firstpage=='true'){	
				loadHomePage();
				firstpage='false';	
				}

	
	}
	

	
	window.loadPage= function (pageID){
		window.closehelper();
		if( pageID ==''){ loadHomePage();}
		$("#page").html('<i class="fa fa-circle-o-notch fa-spin"></i>');
		var login='y';
		
		
		var url="navigation/elements.php?l="+ pageID;
		$("#page").html(' ');
		$.getJSON(url,function(json){
			$.each(json.elementinfo,function(i,ldat){
				$("#page").append(''+
				'<style>' +
				'.element_' + ldat.ID +  '{' +
					'position : absolute' + ';' +
					'z-index: ' + ldat.layer + ';' +
					'top: ' + ldat.posx + 'px;' +
					'left:' + ldat.posy + '%;' +
					'font-size:' + ldat.fontsize + 'px;' +
					'line-height:' + ldat.fontsize 	+ 'px;' +
					'letter-spacing: ' + ldat.spacing + 'px;' +
					'color: ' + ldat.color 	+ ';' +
					'background: ' + ldat.background + ';' +
					'font-family: ' + ldat.fontfamily + ';' +
					'font-weight: ' + ldat.fontweight + ';' +
					'float: none; ' +
					'text-align: ' + ldat.textalign+';' +
					'height: ' + ldat.height + ';' +
					'width:	' + ldat.width + ';' +
					'padding:' + ldat.padding + 'px;' +
					'margin:0px;' +
					'opacity: ' + ldat.opacity  + ';' +	
					'border-radius: ' + ldat.radius + 'px;' +
					'}	' +
					'@media (max-width:479px){' +
						'.element' + ldat.ID +
						'{font-size: 15px;' +
						'position: relative;}' +
						'}'+
				'</style>'+
				'<div class="elements element_'+ldat.ID+' plist" ID="element_'+ldat.ID+'">'+
				
				
				
					'<div class="editbutton">' +
						'<div class="mover"> ' +
						'<i class="fa fa-arrows"></i>'+
						'</div>'+
						
						'<a class="editelement" ID="dlist'+ldat.ID+'" href="#" '+
							'onclick="editElement( '+ ldat.ID + ');">'+
							'<i class="fa fa-pencil"></i></a>'+
						
						
						'<a class="deleteelement" ID="dlist'+ldat.ID+'" href="#" '+
							'onclick="deleteElement(' + ldat.ID + ');">'+
							'<i class="fa fa-trash"></i></a>'+
					'</div>'+	
					'<div ID="pagecontent'+ldat.ID+'">'+ldat.pagecontent +'</div>'+
				'</div>');	
				if (ldat.file != ''){
					$("#pagecontent"+ldat.ID).append('<img src="img/full/'+ldat.file+'" style="width: 100%; ">');
				}
					
					

							
				});	//each
					
			});//get
					
	
	window.loadCss();
	}//loadpage
	
	

}(this));


	
$(document).ready(function(){


		
	$("#nav").html(''+
	'<div id="navcontent"></div>'+
	'<div id="navactions">'+
		'<a href="#" class="links" onclick="showPages()"><i class="fa fa-bars"></i></a> '+
		
	'</div>'+
	'<div id="navadd"></div>'+	
	'<div id="usercss"></div>'+
	
		'');
			
		window.showPages();	
		window.loadCss();
//		window.loadhomepage()

	
});
