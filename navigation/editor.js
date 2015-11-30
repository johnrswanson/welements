
(function (window) {
	var firstpage='true';
	var mode='designer';


	window.addElement = function (pageID){	
		//var elementdata= 
		var elementdata = new FormData($("#addform")[0]);
		$.ajax({
			'url' : "navigation/confirm.php",
			'type' : 'post',
			'data'	: elementdata,
			processData: false,
			contentType: false,
			beforeSend: function(XHR){
				
			}
		}).done(function(){
			window.loadPage(''+pageID+'');	
			});
		
	
		}
	
	window.secret= function(){
		$(".secretmenu").toggle(200);
	}
	
	window.secretmenu = function (pageID) {
		var url="admin/userdata.php";
		$.getJSON(url,function(json){
			$.each(json.userinfo,function(i,dat){
				$("#admincontent").html('<a href="#" class="adminsecret" onclick="secret();"><i class="fa fa-star" style=" font-size: 40px; "></i></a>'+
				'<div class="secretmenu"> Hello '+dat.shortname + '<br>'+
				
				'<a href="#" class="pop"  onclick="addNewPage()">'+
					'<i class="fa  fa-file-text-o"></i> New Page</a><br>'+
				
				'<div ID="addText"><a href="#" class="pop"   onclick="addText('+pageID+')">'+
					'<i class="fa fa-pencil"></i> Add Text</a></div>'+
					
					'<div ID="addPhoto"><a href="#" class="pop"  ID="addPhoto"onclick="addPhoto('+pageID+')">'+
					'<i class="fa fa-camera"></i> Add Photo</a></div>'+
					
					'<div ID="addBox"><a href="#" class="pop"  ID="addPhoto"onclick="addBox('+pageID+')">'+
					'<i class="fa fa-th"></i> Add Box</a></div>'+
					

				
				'<div ID = "addBgPhoto"><a href="#" class="pop"  onclick="addBgPhoto('+pageID+')">'+
					'<i class="fa fa-image"></i> Page Background</a><br></div>'+
					
					
				'<div ID = "addLogo"><a href="#" class="pop"  onclick="addLogo('+pageID+')">'+
					'<i class="fa fa-star"></i> Site Banner</a><br></div>'+
					
				'<div ID = "addLinkColor"><a href="#" class="pop"  onclick="addLinkColor('+pageID+')">'+
					'<i class="fa fa-star"></i> Link Colors</a><br></div>'+
					
				'<a href="#" class="pop"  onclick="editCss('+pageID+')">'+
					'<i class="fa fa-paperclip"></i> CSS Editor</a><br>'+
				
				
				'<a href="#" class="deleteOn" onclick="showDeleteButtons()">'+
					'<i class="fa fa-remove"></i> Delete Pages</a>'+
				'<a href="#" class="deleteOff" onclick="hideDeleteButtons()">'+
					'<i class="fa fa-remove"></i> Done</a>'+
					
				'<form ID="livesaver"  method="POST" style="height: 0px; overflow:hidden; "> '+	
				'<input type="hidden" ID="elementID" name="elementID" value=""/>'+	
				'top:<input type="text" ID="dragtop" name="dragtop" value="" />px<br>'+	
				'left:<input type="text" ID="dragleft" name="dragleft" value="" /> %'+	
				'<input type="hidden" ID="suxess" name="suxess" value="ready"/>'+	
				'<input type="hidden" ID="mode" name="mode" value="designer"/>'+	
				'<input  type="submit" ID="elementpos" name="elementpos" value="Save Position">'+	
				'</form>'+
				'<form  ID="sizesaver" method="POST"  style="height: 0px; overflow:hidden; "> '+	
				'<input type="hidden" ID="sizeelementID" name="sizeelementID" value="">'+	
				'width : <input type="text" ID="resleft" name="resleft" value="" /> %<br>'+	
				'abs w : <input type="text" ID="absresleft" name="absresleft" value=""/>px<br>'+	
				'height:<input type="text" ID="restop" name="restop" value=""/>px<br>'+	
				'top:<input type="text" ID="respostop" name="dragrestop" value=""/>px<br>'+	
				'left:<input type="text" ID="resposleft" name="dragresleft" value=""/> %'+	
				'<input type="hidden" ID="suxess" name="suxess" value="ready"/>'+	
				'<input type="hidden" ID="mode" name="mode" value="designer"/>'+	
				'<input  type="submit" ID="elementres" name="elementres" value="Save Size">'+	
				'</form>'+
				'<p><a class="logout pop" href="admin/logout.php">'+
					'<i class="fa fa-user"></i> Log out</p></div>');
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
					
					loadPage(''+ home +'');
				}	

			});	
		});
}
	
	window.sortem = function(){	$("#navcontent ul").sortable({
			opacity: 0.6,  forcePlaceholderSize: true, delay: 0, distance: 40, forceHelperSize: true, cursor: 'move',
			update: function() {
				var pageorder = $(this).sortable("serialize") + '&action=updatePageOrder'; 
				$.post("navigation/confirm.php", pageorder, function(theResponse){	
					window.helperadd();
					$('#lightbox>#content').html('Page Order Saved');
					$('#lightbox').fadeOut(2000);
				});
			}
		});
	
}
	
	window.showPages= function (){
			
		$("#navcontent").html('<i class="fa fa-circle-o-notch fa-spin"></i>');
		var x = 0;
		var home='';
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
	
			
	window.sortem();	

			
			
		

	
	}
	

	
	window.showEdit = function(elementID){

					$('.elements>.editbutton').hide(0); 
					$('.elements').css('box-shadow', '0px 0px 0px 0px #fff');
					$('.element_'+elementID).css('box-shadow', '0px 0px 1px 1px #00F');
					$('.element_'+elementID).find('.editbutton').show(0);
					}
	

	
	window.loadPage= function (pageID){
				$('.links').click();	
			
		if (pageID=='home'){
			window.loadHomePage();	
			}
			else{
				window.closehelper();
		$("#page").html('<i class="fa fa-circle-o-notch fa-spin"></i>');
		var login='y';
		
	
		$("#page").html('<div ID="bg"></div> ');
		var url="navigation/data.php?page="+pageID+"";
		$("#navcontent").html('<ul></ul>');
		$.getJSON(url,function(json){
			$.each(json.navinfo,function(i,ldat){
			if (ldat.photo !='' ){
			$('#page>#bg').html('<img src="img/full/'+ldat.photo+'" style=" max-width: 100%; min-width: 100vw; min-height: 100vh; ">');
			}
			if (ldat.background !='' ){
			$('#page>#bg').css("background-color", ""+ldat.background+"");
			$('#page>#bg').css("width", "100%");
			$('#page>#bg').css("height", "100%");
			}
			});	//each
		});//get

		
		var url="navigation/elements.php?l="+ pageID;
		$.getJSON(url,function(json){
			$.each(json.elementinfo,function(i,ldat){
				
				$("#page").append(''+
				'<style>' +
				'.element_' + ldat.ID +  '{' +
					'position : absolute' + ';' +
					'top: ' + ldat.posx + 'px;' +
					'left:' + ldat.posy + 'px;' +
					'font-size:' + ldat.fontsize + 'px;' +
					'line-height:' + ldat.fontsize 	+ 'px;' +
					'letter-spacing: ' + ldat.spacing + 'px;' +
					'color: ' + ldat.color 	+ ';' +
					'font-family: ' + ldat.fontfamily + ';' +
					'font-weight: ' + ldat.fontweight + ';' +
					'float: none; ' +
					'text-align: ' + ldat.textalign+';' +
					'padding-bottom:' + ldat.padding + 'px;' +
					'width:	' + ldat.absw + ';' +
					'height: '+ldat.height+';' +
					'margin:0px;'+
					'}' +
				'.pagecontent'+ldat.ID+'{' +
					'position:relative;'+
					'background-color: ' + ldat.background + ';' +
					'z-index: ' + ldat.layer + ';' +
					'opacity: ' + ldat.opacity  + ';' +	
					'height: 100%;' +
					'padding:' + ldat.padding + 'px;' +
					
					'border-radius: ' + ldat.radius + 'px;' +
					'}' +
					
				'</style>');
				
				$("#page").append(''+
				'<div class="elements element_'+ldat.ID+'" ID="element_'+ldat.ID+'" onclick=showEdit('+ldat.ID+')></div>' );
				
				$("#element_"+ldat.ID).append(''+	
					'<div class="editbutton" ID="editbutton'+ldat.ID+'">' +
						'<div class="mover"> ' +
						'<i class="fa fa-arrows"></i>'+
						'</div>'+
						'</div><div class="pagecontents pagecontent'+ldat.ID+'" ID="pagecontent'+ldat.ID+'"></div>');
						
			
						
				
					$("#editbutton"+ldat.ID).append(''+
						'<a class="editelement nodrag" ID="edit'+ldat.ID+' edit" href="#" '+
							'onclick="editElement( '+ ldat.ID + ');">'+
							'<i class="fa fa-pencil"></i></a>'+
						'');
			if (ldat.file == ''){
					if (ldat.boxID != ''){
							$("#editbutton"+ldat.ID).append(''+
							'<a class="addboxitem nodrag" href="#" '+
							'onclick="boxItemForm( '+ ldat.ID + ');">'+
							'<i class="fa fa-plus"></i>Add</a>'+
							'');
							
					}
				}
					
					$("#editbutton"+ldat.ID).append(''+
						'<a class="deleteelement nodrag" ID="dlist'+ldat.ID+'" href="#" '+
							'onclick="deleteElement(' + ldat.ID + ');">'+
							'<i class="fa fa-trash"></i></a><br><div class="newitem"></div>'+
						'');
						
				
						
				if (ldat.file != ''){
					$(".pagecontent"+ldat.ID).append('<img src="img/full/'+ldat.file+'" style="width: 100%; ">');
											
								
									
				$( '.element_'+ldat.ID ).resizable({   
					aspectRatio: "true", 
					containment:"#page",
				 	stop: function( event, ui ) {	
						var width = ui.size.width;
						var height = ui.size.height;
						var boxWidth = $('#page').offsetParent().width();
						var mywidth = 100 * width / boxWidth;
						var safewidth=mywidth.toFixed(3);
						var dragposition = ui.position;
						var myleft=dragposition['left'];
						var sideWidth = $(this).offsetParent().width();
						var leftpct = 100 * myleft / sideWidth;
						var safeleft=leftpct.toFixed(3);
						$('#respostop').val(''+dragposition['top']+'');
						$('#resposleft').val(''+myleft+'');
						$('#absresleft').val(''+width+'');
						$('#resleft').val(''+width+'');
						$('#restop').val(''+height+'');
						var thisID=$(ui.element).attr("ID");
						$('#sizeelementID').val(''+thisID+'');
						var data= $( "#sizesaver" ).serialize();
						$.post('admin/confirm_live.php' , data);	

					}
				});//resize

				
				}
					
				else {
					$(".pagecontent"+ldat.ID).append(''+ldat.pagecontent+'<br>');
										
				$( '.element_'+ldat.ID ).resizable({   
					
					containment:"#page",
				 	stop: function( event, ui ) {	
						var width = ui.size.width;
						var height = ui.size.height;
						var boxWidth = $('#page').offsetParent().width();
						var mywidth = 100 * width / boxWidth;
						var safewidth=mywidth.toFixed(3);
						var dragposition = ui.position;
						var myleft=dragposition['left'];
						var sideWidth = $(this).offsetParent().width();
						var leftpct = 100 * myleft / sideWidth;
						var safeleft=leftpct.toFixed(3);
						$('#respostop').val(''+dragposition['top']+'');
						$('#resposleft').val(''+myleft+'');
						$('#absresleft').val(''+width+'');
						$('#resleft').val(''+width+'');
						$('#restop').val(''+height+'');
						var thisID=$(ui.element).attr("ID");
						$('#sizeelementID').val(''+thisID+'');
						var data= $( "#sizesaver" ).serialize();
						$.post('admin/confirm_live.php' , data);	

					}
				});//resize



				}
															
															
			$('.elements').draggable({  
					handle:".mover",
					containment:"#page",
					cursor: "move",
					distance: 0,
					snap:".elements",
					grid: [ 3, 3 ],
				
					drag:function(b,ui){ 
						dragposition = ui.position;
						var myleft=dragposition['left'];
						var sideWidth = $(this).offsetParent().width();
						var leftpct = 100 * myleft / sideWidth;
						var safeleft=leftpct.toFixed(3);
					    $('#dragtop').val(''+dragposition['top']+'');
					    $('#dragleft').val(''+myleft+'');
					    var thisID=$(this).attr("ID");
					    $('#elementID').val(''+thisID+'');
					   
						}, 
						
					stop: function(c,ui){
				        var data= $( "#livesaver" ).serialize();
				        $.post('admin/confirm_live.php' , data);	
				        }	
					});//drag
					
				
	if (ldat.boxID != ''){
		var url="navigation/boxelements.php?box="+ldat.boxID+"";
		$.getJSON(url,function(json){
			$.each(json.boxiteminfo,function(i,bdat){
				var colwidth= 100 / ldat.columnset;
				$( '.pagecontent' +ldat.ID).append(''+
				'<div style="width:'+colwidth+'%; min-height: 300px; float: left; text-align: center; "><img src="img/full/'+bdat.photo+'" style="height: 160px; width: auto; margin: auto; "><br>'+
				' <h2>'+bdat.title+'</h2>'+
				' '+bdat.mytext+'<br>'+
				'</div>');
				
			});
		});
						
	}
							
				});	//each
				
				
					
			});//get
					
			window.secretmenu(''+pageID+'');
			
			$('#page>#bg').click(function(){
			$('.elements>.editbutton').hide(0); 
			$('.elements').css('box-shadow', '0px 0px 0px 0px #fff');
			});

			
			$('#page>.elements').click(function(){
				$('.elements>.editbutton').hide(0); 
				$('.elements .ui-resizable-handle, .ui-resizable-se, .ui-icon, .ui-icon-gripsmall-diagonal-se').hide(0); 
				$('.elements').css('box-shadow', '0px 0px 0px 0px #fff');
				$(this).css('box-shadow', '0px 0px 1px 0px #00F');
				$(this).find('.editbutton').show(0).zIndex(10000000);
				$(this).find('.ui-resizable-handle, .ui-resizable-se, .ui-icon, .ui-icon-gripsmall-diagonal-se').show(0);
			
			});
					
		}			
					
	}//loadpage
	
	
	
	
	
	
	
	window.editNow = function (elementID) {	
	
		
		var elementdata = new FormData($("#formElement")[0]);
		$.ajax({
			'url' : "navigation/confirm.php",
			'type' : 'post',
			'data'	: elementdata,
			processData: false,
			contentType: false,
			beforeSend: function(XHR){
				
			}
		}).done(function(){
	window.reloadElement(''+elementID+'');	
			});
		
	
		

		
			
	}	//editnow
	
	
	window.reloadElement= function (elementID){
		var login='y';
		var url="navigation/elements.php?e="+ elementID;
		$.getJSON(url,function(json){
			
			$.each(json.elementinfo,function(i,ldat){
				$("#element_"+ldat.ID).css("font-family", ldat.fontfamily);
				$("#element_"+ldat.ID).css("font-weight", ldat.fontweight);
				$("#element_"+ldat.ID).css("font-size", ldat.fontsize +'px');
				$("#element_"+ldat.ID).css("line-height", ldat.fontsize +'px');
				$("#element_"+ldat.ID).css("letter-spacing", ldat.spacing +'px');
				$("#element_"+ldat.ID).css("text-align", ldat.textalign +'');
				$("#element_"+ldat.ID).css("color", ldat.color +'');
				$("#pagecontent"+ldat.ID).css("background-color", ldat.background +'');
				$("#pagecontent"+ldat.ID).css("padding", ldat.padding +'px');
				$("#pagecontent"+ldat.ID).css("opacity", ldat.opacity +'');
				$("#pagecontent"+ldat.ID).css("border-radius", ldat.radius +'px');
				$("#pagecontent"+ldat.ID).css("z-index", ldat.layer);
				
				$("#pagecontent"+ldat.ID).html(''+ldat.pagecontent+'');
				if (ldat.file != ''){
					$("#pagecontent"+ldat.ID).append('<img src="img/full/'+ldat.file+'" style="width: 100%; ">');
				}

				
			});
		
		});
	}
	
	
	window.usecolor = function(elementID){
		$("#overridebg").html('');
		$("#clearall").html('<input type="button" name="clearbg"'+
							 'value="transparent" onclick="clearall('+elementID+');">');
							 
		$("#color2").html(''+
				'-  Background<br>'+
				'<input type="color" name="background"  ID="pickbg"'+
				'value="#ffffff" onchange="editNow('+elementID+');" onfocus="editNow('+elementID+');" '+
				'style="height: 30px; width: 100px; padding: 0px; margin-right: 3px;">'+
				'');
				
		$("#pickbg").spectrum({
		    showButtons:true,
		    showInput:true,
			showInitial:true,
			preferredFormat: "hex"
		
    	});
	}

	
	
	window.clearall = function(elementID){
	
	$("#overridebg").html('<input type="hidden" name="background"  value="transparent"></div>');
	
	$("#clearall").html('<input type="button" name="clearbg"'+
						 'value="Use BG Color" onclick="usecolor('+elementID+');">');
	$("#color2").html('');
	
	
	
	window.editNow(''+elementID+'');
	}
	
	
	window.editElement = function (itemID) {
		window.helperadd();
			var url="navigation/elements.php?e="+ itemID;
		$.getJSON(url,function(json){
			$.each(json.elementinfo,function(i,idat){
				$('#lightbox>#content').html('<div class="boxtitle">Edit Element</span>');
				var str = idat.pagecontent;
				var safetext= str.replace(/<br>/g, "\r");
			
				
				$("#lightbox>#content").append(''+
				
					'<form  ID="formElement">'+
					'<input type="hidden" name="editme" value="'+idat.ID+'">'+
					'<input type="hidden" name="pageID" value="'+idat.pageID+'"></form>'+
					'');
					
			
					
			if(idat.file==''){
				$("#formElement").append(''+
					'<textarea style="width: 100%; max-width: 100% ; min-height: 100px; margin: auto;" name="pagecontent"'+
					'placeholder="Enter Text Here">'+safetext+'</textarea><br>'+
					
					
					'<div ID="color1" style=" float: left; " >Text Color<br>'+
						'<input type="color" name="color"   class="pick"  '+
							'value="'+idat.color+'" onfocus="editNow('+idat.ID+');" onchange="editNow('+idat.ID+');"'+
							'style="height: 30px; width: 100px; float: left; padding: 0px; margin-right: 3px;">'+
					'</div>'+
					
					'<div ID ="color2" style=" float: left; " > -  Background<br>'+
						'<input type="color" name="background"  ID="pickbg"'+
						 'value="'+idat.background+'" onfocus="editNow('+idat.ID+');" onchange="editNow('+idat.ID+');"'+
							'style="height: 30px; width: 100px; padding: 0px; margin-right: 3px;">'+
					'</div>'+ 
					
					'<div style=" float: left; " > <br>'+
					
						'<div ID="clearall"><input type="button" name="clearbg"'+
						 'value="Transparent" onclick="clearall('+idat.ID+');"></div>'+
					'</div>'+ 

					
					'<div style=" clear:both;"></div>'+
					
					'<input  type="text" name="fontfamily" placeholder="Enter Font Family" '+
						'value="'+idat.fontfamily+'" onkeyup="editNow('+idat.ID+');"><br>'+
					
					'<input type="text" name="textalign" placeholder="Text align" '+
						'value="'+idat.textalign+'" onkeyup="editNow('+idat.ID+');"><br>'+
				
					'Font Size<input  type="range" data-show-value="true" min="10" max="100" name="fontsize" '+
						'value="'+idat.fontsize+'"><br>'+		
					
					'Weight :<input  type="range" data-show-value="true" min="0" max="900" step="100" name="fontweight"'+		 					
						'value="'+idat.fontweight+'"><br>'+
					
					'Spacing:<input type="range" data-show-value="true" min="0" max="10" name="spacing" '+
						'value="'+idat.spacing+'" ><br>'+
						
					'Padding:<input type="range" data-show-value="true" min="0" max="50" name="padding" '+
						'value="'+idat.padding+'" ><br>'+
					
					'Radius :<input type="range" data-show-value="true" min="0" max="50" name="radius"  '+
						'value="'+idat.radius+'"><br>');
						
					}
					
					
					
				$("#formElement").append(''+
					'Opacity:<input type="text" style="width: 40px;" name="opacity" '+
					'value="'+idat.opacity+'"><br>'+
					'Layer : <input  style="width: 40px;" type="text" name="layer"'+
						'value="'+idat.layer+'"><br>'+
					
					'<input style=" display:none; " ID="saveedit" type="button" name="submit" '+
						'value="Save" onclick="editNow('+idat.ID+'); "><input type="hidden" id="dummy1"><input type="hidden" id="dummy2">'+
						'<div ID="overridebg"></div>'+
				'');
				
				if(idat.background==''||idat.background=='transparent' ){
					$("#overridebg").html('<input type="hidden" name="background" ID="overridebg" value="transparent">');
					$("#clearall").html('<input type="button" name="clearbg"'+
						 'value="Use BG Color" onclick="usecolor('+idat.ID+');">'+
						 '');
						 $("#color2").html('');
						 
						 }
						 
						
					
	
				
			
	$(".pick").spectrum({
			
		preferredFormat: "hex",
		showInput:true,
		showInitial:true
		
    });
    
   
    
    
    
    
    
     $("#pickbg").spectrum({
	   
	    showButtons:true,
	    showInput:true,
		showInitial:true,
		preferredFormat: "hex"
		
		
    });
        
			$('button.sp-choose').on('input',function(){
					$('#saveedit').click( );
					}).on('focus', function(){
					$('#saveedit').click( );
					}).on('blur', function() { 
					$('#saveedit').click( );	
					}).on('change', function() {	
					$('#saveedit').click( );
					});
				

				
				$('#formElement>input').on('input',function(){
					$('#saveedit').click( );
					}).on('focus', function(){
					$('#saveedit').click( );
					}).on('blur', function() { 
					$('#saveedit').click( );	
					}).on('keyup', function() {	
					$('#saveedit').click( );
					});
								
				$('#formElement>textarea').on('input',function(){
					$('#saveedit').click( );
					}).on('focus', function(){
					$('#saveedit').click( );
					}).on('blur', function() { 
					$('#saveedit').click( );	
					}).on('keyup', function() {	
					$('#saveedit').click( );
					});

			
			});
		});
	
		
			
	
	}	
	
window.loadCss = function(){
		var url="admin/userdata.php";
		$("#userCss").html('');
		$.getJSON(url,function(json){
			$.each(json.userinfo,function(i,ldat){
			$("#userCss").html(''+
				'<style>'+ldat.usercss+'</style>'+	
				'');
			});
		});
	}

	

window.saveCss = function(){
		var elementdata= $( "#cssEditor" ).serialize();
		var myresult = $.post("navigation/confirm.php" , elementdata);
		window.loadCss()
	}


	
	window.editCss= function(pageID){
		window.resetMenu(''+ pageID +'');
		var url="admin/userdata.php";
		window.helperadd();
		$("#lightbox>content").html('');
		$.getJSON(url,function(json){
			$.each(json.userinfo,function(i,ldat){
				$("#lightbox>#content").html(''+
				'<form ID="cssEditor">'+
				'<input type = "hidden" name="css" value="edit">'+
				'<a class="button" href="#" style="float: right;color: #333; background:#eee; padding: 10px; " name="updatecss" value="Save CSS" onclick="saveCss(); return false;">SAVE CSS</a>'+
				'<textarea name="usercss"  style="width:300px; min-height: 400px">'+ldat.usercss+'</textarea>'+
				'');
			});
		});
	}


	
window.deletePage = function (itemID) {
	$('#pageArray_'+itemID+'').slideUp(300);
	$.post('navigation/confirm.php', { deleteme: itemID },
	function () {
			// 200, it worked; resource deleted
			}, function () {
				// it didn't delete			
				});
	}
	
	
		

	window.deleteElement = function (pageID) {
		$('#element_'+pageID+'').slideUp(300);
		$.post('navigation/confirm.php', { deleteelement: pageID },
		function () {
				// 200, it worked; resource deleted
				}, function () {
					// it didn't delete			
					});
	}	
	

	
	
		
	window.addPage = function (){	
		//var elementdata= 
		var pagedata = new FormData($("#newpageform")[0]);
		$.ajax({
			'url' : "navigation/confirm.php",
			'type' : 'post',
			'data'	: pagedata,
			processData: false,
			contentType: false,
			beforeSend: function(XHR){
				
			}
		}).done(function(){
			$(".links").click();
			//window.showPages();	
			});
		
	
		}
		
		
		
	window.resetMenu= function(pageID){
		$("#addText").html('<a href="#" class="pop"   onclick="addText('+pageID+')">'+
				'<i class="fa fa-pencil"></i> Add Text</a>').css("background", "none");
		$("#addBox").html('<a href="#" class="pop"   onclick="addBox('+pageID+')">'+
				'<i class="fa fa-th"></i> Add Box</a>').css("background", "none");
		$("#addPhoto").html('<a href="#" class="pop"   onclick="addPhoto('+pageID+')">'+
				'<i class="fa fa-camera"></i> Add Photo</a>').css("background", "none");
		$("#addBgPhoto").html('<a href="#" class="pop"   onclick="addBgPhoto('+pageID+')">'+
				'<i class="fa fa-image"></i> Page Background</a>').css("background", "none");
		$("#addLogo").html('<a href="#" class="pop"   onclick="addLogo('+pageID+')">'+
				'<i class="fa fa-star"></i> Site Banner</a>').css("background", "none");
		$("#addLinkColor").html('<a href="#" class="pop"   onclick="addLinkColor('+pageID+')">'+
				'<i class="fa fa-star"></i>Link Colors</a>').css("background", "none");


		}	
		
		window.resetboxMenu= function(pageID){
		$("#addboxPost").html('<a href="#" class="pop"   onclick="addText('+pageID+')">'+
				'<i class="fa fa-pencil"></i> Posts</a>').css("background", "none");
		$("#addboxPhoto").html('<a href="#" class="pop"   onclick="addBox('+pageID+')">'+
				'<i class="fa fa-th"></i> Photos</a>').css("background", "none");
		$("#addboxVideo").html('<a href="#" class="pop"   onclick="addPhoto('+pageID+')">'+
				'<i class="fa fa-film"></i> Videos</a>').css("background", "none");
		/*$("#addboxShop").html('<a href="#" class="pop"   onclick="addBgPhoto('+pageID+')">'+
				'<i class="fa fa-image"></i> Products</a>').css("background", "none");
		$("#addboxShop").html('<a href="#" class="pop"   onclick="addBgPhoto('+pageID+')">'+
			'<i class="fa fa-image"></i> Products</a>').css("background", "none");
		*/

		}	
		
	
	window.addNewPage= function(){
		window.helperadd();
		window.resetMenu();
		$('#lightbox>#content').html('<div class="boxtitle"> Add a New Page</div>');
		$("#lightbox>#content").append(''+
		'<form  ID="newpageform">'+
		'<input type="hidden" name="newpage" value="add">'+
		'<input type="text" name="pagetitle" placeholder="Page Title"><br>'+
		'<input type="button" name="submit" value="Add Page" onclick="addPage();">'+
		'</form>');
	}
		
		
	window.addText= function(pageID){
			
					
		window.resetMenu(''+pageID+'');

			
		$("#addText").css("background", "#dddddd");
		$("#addText").html('<i class="fa fa-pencil"></i> Add Text<br>'+
		'<form  ID="addform">'+
		'<input type="hidden" name="newelement" value="add">'+
		'<input type="hidden" name="pageID" value="'+ pageID +'">'+
		'<textarea name="mytext" ID="pagecontent" style="min-width: 80%; min-height: 100px; "  placeholder="Write some words here."></textarea><br>'+
		'<input name="color" class="pick">' +
		'<input name="background" class="pickbg" >' +
'<input type="button" name="submit" value="Add" onclick="addElement('+ pageID +'); ">'+
		'</form>');					
		
	$(".pick").spectrum({
			
		preferredFormat: "hex",
		showInput:true
    });
    
    $(".pickbg").spectrum({
		
			allowEmpty:true,
		preferredFormat: "hex",
		showInput:true
    });
}
		
		
	
		
		window.addPhoto= function(pageID){	
			window.resetMenu(''+pageID+'');
			
			$("#addPhoto").css("background", "#dddddd");
			$("#addPhoto").html('<i class="fa fa-camera"></i> Add Photo<br>'+
			'<form ID="addform">'+
			'<input type="hidden" name="newelement" value="add">'+
			'<input type="hidden" name="pageID" value="'+ pageID +'" >'+
			'<input type="file" name="file"  accept="image/*;capture=camera"> '+
			'<input type="button" name="submit" value="Add" onclick="addElement('+ pageID +');">'+
			'</form>');	
			
							
		}
	
		window.addBox= function(pageID){	
			window.resetMenu(''+pageID+'');

			$("#addBox").css("background", "#dddddd");
			$("#addBox").html('<i class="fa fa-th"></i> Add Box<br>'+
				'<form ID="addform">'+
				'<input type="hidden" name="newelement" value="add">'+
				'<input type="hidden" name="isbox" value="true">'+

				'<input type="hidden" name="pageID" value="'+ pageID +'" >'+
				'<input type="text" name="boxtitle" ID="boxtitle" placeholder="Title for New Box"><br>'+
				'<input type="button" name="submit" value="Add" onclick="addElement('+ pageID +');">'+
			'</form>');	
			
							
		}
		
		window.addBoxItem= function(elementID){
		
		var elementdata = new FormData($("#addform")[0]);
		$.ajax({
			'url' : "navigation/confirm.php",
			'type' : 'post',
			'data'	: elementdata,
			processData: false,
			contentType: false,
			beforeSend: function(XHR){
				
			}
		}).done(function(){
		$('.element_'+elementID+' .editbutton .newitem').html('');
			window.reloadElement(''+elementID+'');	
			
			});
			

}
				
		
		
		window.boxItemForm= function(elementID){	
			$('.element_'+elementID+' .editbutton .newitem').html('<br>'+
				'<form ID="addform">'+
				'<input type="hidden" name="newboxitem" value="add">'+
				'<input type="hidden" name="elementID" value="'+ elementID +'" >'+
				
				'<input type="text" name="title" ID="boxtitle" placeholder="Title for New Post"><br>'+

				'<textarea name="mytext" ID="pagecontent" style="min-width: 80%; min-height: 100px; "  placeholder="Write your post here."></textarea><br>'+
				
				'<span style="font-size: 12px; color: #555">Add Photo<br> <input type="file" name="file"  accept="image/*;capture=camera"> '+
				
				'<input type="button" name="submit" value="Add" onclick="addBoxItem('+ elementID +');">'+
				
			'</form>');		
						
		}

window.changeBgNow= function(pageID){
	//var elementdata= 
		var elementdata = new FormData($("#addform")[0]);
		$.ajax({
			'url' : "navigation/confirm.php",
			'type' : 'post',
			'data'	: elementdata,
			processData: false,
			contentType: false,
			beforeSend: function(XHR){
				
			}
		}).done(function(){
			window.loadPage(''+pageID+'');	
			});
			

}

	window.addBgColor= function(pageID){	
		
		$("#bgtoggle").html('<a href="#" onclick="addBgPhoto('+pageID+')">Use Photo</a>');
		
		$("#addBgPhoto").html('<i class="fa fa-image"></i> Page Background<br>'+
		'<form ID="addform">'+
		'<input type="hidden" name="bgcolor" value="new">'+
		'<input type="hidden" name="pageID" value="'+ pageID +'" >'+
		'<input type="color" name="color" ID="bgcolorpick" >'+
		'<input type="button" name="submit" value="Add" onclick="changeBgNow('+ pageID +');">'+
		'</form><div ID="bgtoggle"><a href="#" onclick="addBgPhoto('+ pageID +')">Use Photo</a></div>');
		
		  $("#bgcolorpick").spectrum({
		
			allowEmpty:true,
		preferredFormat: "hex",
		showInput:true
    });

		
	}



	window.addBgPhoto= function(pageID){	
	window.resetMenu(''+pageID+'');
		
		$("#addBgPhoto").css("background", "#dddddd");
		$("#addBgPhoto").html('<i class="fa fa-image"></i> Page Background<br>'+
		'<form ID="addform">'+
		'<input type="hidden" name="bgphoto" value="new">'+
		'<input type="hidden" name="pageID" value="'+ pageID +'" >'+
		'<input type="file" name="file"  accept="image/*;capture=camera"> '+
		'<input type="button" name="submit" value="Add" onclick="changeBgNow('+ pageID +');">'+
		'</form><div ID="bgtoggle"><a href="#" onclick="addBgColor('+ pageID +')">Use Solid Color</a></div>');	
		
						
	}
	
	
	
	
	window.addLogoNow= function(pageID){
				var elementdata = new FormData($("#addform")[0]);
		$.ajax({
			'url' : "navigation/confirm.php",
			'type' : 'post',
			'data'	: elementdata,
			processData: false,
			contentType: false,
			beforeSend: function(XHR){
				
			}
		}).done(function(){
			window.loadPage(''+pageID+'');	
			});
			

}
		
		
		
	
	
	
		window.addLogo= function(pageID){	
		window.resetMenu(''+pageID+'');	
		$("#addLogo").css("background", "#dddddd");
		$("#addLogo").html('<i class="fa fa-image"></i> Site Banner<br>'+
		'<form ID="addform">'+
		'<input type="hidden" name="logo" value="new">'+
		'<input type="hidden" name="pageID" value="'+ pageID +'" >'+
	
		'<input type="button" name="submit" value="Add" onclick="addLogoNow('+ pageID +');">'+
		'</form>');	
		
						
	}
	
	window.addLinkColorNow= function(pageID){
		
				var elementdata = new FormData($("#addform")[0]);
		$.ajax({
			'url' : "navigation/confirm.php",
			'type' : 'post',
			'data'	: elementdata,
			processData: false,
			contentType: false,
			beforeSend: function(XHR){
				
			}
		}).done(function(){
			window.loadPage(''+pageID+'');	
			});
			
	
	}
	
	
	
	
	window.addLinkColor= function(pageID){	
	window.resetMenu(''+pageID+'');		
		$("#addLinkColor").css("background", "#dddddd");
		$("#addLinkColor").html('<i class="fa fa-image"></i>Link Colors<br>'+
		'<form ID="addform">'+
		'<input type="hidden" name="linkColor" value="new">'+
		'<input type="hidden" name="pageID" value="'+ pageID +'" >'+
		
		'<input type="button" name="submit" value="Add" onclick="addLinkColorNow('+ pageID +');">'+
		'</form>');	
		
						
	}

	
	
	window.formNewElement= function(pageID){
		window.helperadd();
		$('#lightbox>#content').html('<div class="boxtitle">Add New Element</span>');
		$("#lightbox>#content").append(''+
		'<div style="float:left; auto min-height:250px; margin: auto; text-align: center;">' + 
		'<div class="flippers">' +

		'<div class=" addtext_button buttons"><a href="#" onclick="addText('+pageID+')"><i class="fa fa-pencil" style="font-size:60px;"></i><br>Add Text</a></div>' +
		
		'<div class=" addphoto_button buttons"><a href="#" onclick="addPhoto('+pageID+')"><i class="fa fa-camera" style="font-size:60px;"></i><br>Add Photo</a></div>' +
		/*
		'<div class="addbox_button buttons" > <a class="loadbox_trigger"  href="/admin/admin_new_pagebox.php?page='.$thispage.'&type=2"><img src="/img/icons/gallerybox.png"><br>Photo box</a></div> ' +
		'<div class="addbox_button buttons" style="clear:both;" > <a class="loadbox_trigger"  href="/admin/admin_new_pagebox.php?page='.$thispage.'&type=3"><img src="/img/icons/blogbox.png"><br>Blog box</a></div> ' +
		'<div class="addbox_button buttons" > <a  class="loadbox_trigger"  href="/admin/admin_new_pagebox.php?page='.$thispage.'&type=4"><img src="/img/icons/videobox.png"><br>Video box</a></div>' +
		'<div class="addbox_button buttons"  > <a  class="loadbox_trigger"  href="/admin/admin_new_pagebox.php?page='.$thispage.'&type=7"><img src="/img/icons/shopbox.png"><br>Shop box</a></div>' +
		
		
		'<div class="addbox_button buttons"style="clear:both;" > <a class="loadbox_trigger" href="/admin/admin_new_pagebox.php?page='.$thispage.'&type=1"><img src="/img/icons/mobilemenu.png" height="40px;" width="40px;"><br>Menu Box</a></div></p> ' +
		*/
		'</div>');

	}
	
	window.hideAddNew= function(){
		$("#navadd").slideUp(500);
		$(".addPageOff").hide(0);
		$(".addPageOn").show(0);
		}

	window.showDeleteButtons= function(){
		$(".deletebutton").show(0);
		$(".deleteOn").hide(0);
		$(".deleteOff").show(0);
		window.helperdelete();
		$(".secretmenu").toggle(200);
		}
		
	window.hideDeleteButtons= function(){
		$(".deletebutton").hide(0);
		$(".deleteOn").show(0);
		$(".deleteOff").hide(0);
		$(".secretmenu").toggle(200);
		}	
		

}(this));


	
$(document).ready(function(){


		
	$("#nav").html(''+
	'<div id="navcontent"></div>'+
	'<div id="navactions">'+
		'<a href="#" class="links" onclick="showPages();"><i class="fa fa-bars"></i></a> '+
		
	'</div>'+
	'<div id="navadd"></div>'+	
	'<div id="usercss"></div>'+
	
		'');

	window.showPages();
	window.loadPage('home');
	window.loadCss();
		
});
