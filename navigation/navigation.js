(function (window) {
	
	window.addElement = function (pageID){	
		var elementdata= $( "#addform" ).serialize();
		var myresult = $.post("navigation/confirm.php" , elementdata);
		$('#lightbox>#content').html('Element Added!');
		
		window.closehelper();
		window.loadPage(pageID); 	
	}
	
	window.secret= function(){
		$(".secretmenu").toggle(200);
	}
	
	window.secretmenu = function (pageID) {
		var url="admin/userdata.php";
		$.getJSON(url,function(json){
			$.each(json.userinfo,function(i,dat){
				$("#admincontent").html('<a href="#" class="adminsecret" onclick="secret();"><i class="fa fa-star "></i></a>'+
				'<div class="secretmenu"> Hello '+dat.shortname + '<br>'+
				
				'<a href="#" class="pop"  onclick="addNewPage()">'+
					'<i class="fa fa-plus-circle"></i>New Page</a><br>'+
				
				'<a href="#" class="pop"  onclick="formNewElement('+pageID+')">'+
					'<i class="fa fa-plus-circle"></i>Add Element</a><br>'+
				
				'<a href="#" class="deleteOn" onclick="showDeleteButtons()">'+
					'<i class="fa fa-remove"></i>Delete Pages</a>'+
				'<a href="#" class="deleteOff" onclick="hideDeleteButtons()">'+
					'<i class="fa fa-remove"></i>Done</a>'+
				
				'<p><a class="logout pop" href="admin/logout.php">'+
					'<i class="fa fa-user"></i>Log out</p></div>');
			});
		});	
		
	}


	window.loadHomePage= function (pageID){
		loadPage(''+ window.homePage +'');
	}
	
	
	
	window.showPages= function (pageID){
		$("#navcontent").html('<i class="fa fa-circle-o-notch fa-spin"></i>');
		var x='x';
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
				
				if( x='x'){ 
					x='y'; 
					var homePage = ldat.ID;
				}
					
					
					
			});	
			
		});	
		
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
					'font-size:' + ldat.fontsize + ';' +
					'line-height:' + ldat.fontsize 	+ ';' +
					'color: ' + ldat.color 	+ ';' +
					'background: ' + ldat.background + ';' +
					'font-family: ' + ldat.fontfamily + ';' +
					'font-weight: ' + ldat.fontweight + ';' +
					'float: none; ' +
					'text-align: ' + ldat.textalign+';' +
					'height: ' + ldat.height + ';' +
					'width:	' + ldat.width + ';' +
					'line-height: ' + ldat.lineheight + 'px;' +
					'letter-spacing: ' + ldat.spacing + ';' +
					'padding:' + ldat.padding + ';' +
					'margin:0px;' +
					'opacity: ' + ldat.opacity  + ';' +	
					'border-radius: ' + ldat.radius + ';' +
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
							'<i class="fa fa-remove"></i></a>'+
					'</div>'+	
					''+ldat.pagecontent +
				'</div>');	
					
					
					
				$( ".elements" ).resizable({  
					handles: "n, e, s, w, ne, se, sw, nw",
					containment:"parent",
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
						$('#resposleft').val(''+safeleft+'');
						$('#absresleft').val(''+width+'');
						$('#resleft').val(''+safewidth+'');
						$('#restop').val(''+height+'');
						var thisID=$(ui.element).attr("ID");
						$('#sizeelementID').val(''+thisID+'');
						var data= $( "#sizesaver" ).serialize();
						$.post('admin/confirm_live.php' , data);	
					}	
				});
				
				
				
				$('.elements').click(function(){
					$('.elements>.editbutton').hide(0); 
					$('.elements').css('box-shadow', 'inset 0px 0px 0px #fff');
					$(this).css('box-shadow', 'inset 0px 0px 1px #00F');
					$(this).find('.editbutton').show(0);
					});
						
						
									
				$('.elements').draggable({  
					delay: 100,  
					cursor: "move", 
					cancel:".stacker", 
					cancel:"iframe",
					grid: [ 5, 5 ],
				 
					drag:function(b,ui){ 
						dragposition = ui.position;
						var myleft=dragposition['left'];
						var sideWidth = $(this).offsetParent().width();
						var leftpct = 100 * myleft / sideWidth;
						var safeleft=leftpct.toFixed(3);
					    $('#dragtop').val(''+dragposition['top']+'');
					    $('#dragleft').val(''+safeleft+'');
					    var thisID=$(this).attr("ID");
					    $('#elementID').val(''+thisID+'');
						}, 
						
					stop: function(b,ui){
				        var data= $( "#livesaver" ).serialize();
				        $.post('admin/confirm_live.php' , data);	
				        }
				  		
					});

							
				});	//each
					
			});//get
					
		window.secretmenu(''+pageID+'');	
	
		}//loadpage


		
window.editNow = function (itemID) {
		
		
	}
	
	
	
window.editElement = function (itemID, itemtitle) {
	window.helperadd()
		$('#lightbox>#content').html('<div class="boxtitle">Edit Element</span>');
		$("#lightbox>#content").append(''+
		'<form  ID="formElement">'+
		'<input type="hidden" name="editelement" value="'+itemID+'">'+
		'<input type="text" name="title" placeholder="Enter Text Here " value="'+itemtitle+'"><br>'+
		'<input type="button" name="submit" value="Save" onclick="editNow(); ">'+
		'</form>');
		
		
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
		window.helperadd();
	    var pagedata= $( "#addform" ).serialize();
	  	var myresult = $.post("navigation/confirm.php" , pagedata);
	  	$('#lightbox>#content').html('New Page Added!');	
	  	window.showPages(); 	
	  	$('#lightbox').fadeOut(2000);
	  	window.sortnav();
	}
	
	window.addNewPage= function(){
		window.helperadd();
		$('#lightbox>#content').html('<div class="boxtitle">Add a New Page</div>');
		$("#lightbox>#content").append(''+
		'<form  ID="addform">'+
		'<input type="hidden" name="newpage" value="add">'+
		'<input type="text" name="pagetitle" placeholder="Page Title"><br>'+
		'<input type="button" name="submit" value="Add Page" onclick="addPage(); ">'+
		'</form>');

	}
		
		
	window.addText= function(pageID){	
		$("#lightbox>#content").html('<div class="boxtitle">Add Text</div>'+
		'<form  ID="addform">'+
		'<input type="hidden" name="newelement" value="add">'+
		'<input type="hidden" name="pageID" value="'+ pageID +'">'+
		'<textarea name="mytext" ID="pagecontent" placeholder="Write some words here."></textarea><br>'+
		'<input name="color" id="html5colorpicker" class="form-control colorpicker" type="color" value="#777777" onchange="clickColor(0, -1, -1, 5)" style="">' +
		'<input type="button" name="submit" value="Add" onclick="addElement('+ pageID +'); ">'+
		'</form>');
		
					
}
		
	
	
	window.formNewElement= function(pageID){
		window.helperadd();
		$('#lightbox>#content').html('<div class="boxtitle">Add New Element</span>');
		$("#lightbox>#content").append(''+
		'<div style="float:left; auto min-height:250px; margin: auto; text-align: center;">' + 
		'<div class="flippers">' +

		'<div class=" addtext_button buttons"><a href="#" onclick="addText('+pageID+')"><img src="img/icons/text.png"><br>Add Text</a></div>' +
		/*
		'<div class=" addphoto_button buttons"><a href="" onclick="return false"><img src="/img/icons/camera.png"><br>Add Photo</a></div>' +
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
		'<a href="#" class="links" onclick="showPages()"><i class="fa fa-bars"></i></a> '+
		
	'</div>'+
	'<div id="navadd"></div>	'+	
	'<form ID="livesaver"  method="POST"> '+	
	'<input type="hidden" ID="elementID" name="elementID" value=""/>'+	
	'top:<input type="text" ID="dragtop" name="dragtop" value="" />px<br>'+	
	'left:<input type="text" ID="dragleft" name="dragleft" value="" /> %'+	
	'<input type="hidden" ID="suxess" name="suxess" value="ready"/>'+	
	'<input type="hidden" ID="mode" name="mode" value="designer"/>'+	
	'<input  type="submit" ID="elementpos" name="elementpos" value="Save Position">'+	
	'</form>'+
	
	
					
	
	'<form  ID="sizesaver" method="POST"> '+	
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
		'');
		
	(function(){
		$(".elements" ).draggable();
	});
	
		window.showPages();	


	
	$(".addphoto_button a").click(function(){
		$(".flippers").hide();
		$(".addphoto").slideDown(200);
			$(".buttons").css("background","none");
		$(".addphoto_button").css("background","#aaa");
		
		
	});
	
	
	$(".addtext_button a").click(function(){
		$(".flippers").hide();
		$(".addtext").slideDown(200);
		$(".buttons").css("background","none");
		$(".addtext_button").css("background","#aaa");
	});
	
	
$('.loadbox_trigger').click(function(e) {
		e.preventDefault();

		var link_href = $(this).attr("href");
		$(".flippers").hide();
		$('#addboxhere').html('loading...');		
		$('#addboxhere').load(link_href);
		
		
	});
	
	

	
});
