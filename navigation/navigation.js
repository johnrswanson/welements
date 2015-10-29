(function (window) {
	
		
	
	window.secret= function(){
	$(".secretmenu").toggle(200);
	}
	
	window.secretmenu = function (pageID) {
		var url="admin/userdata.php";
		$.getJSON(url,function(json){
		// loop through the members here
			
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
				
				if( x='x'){ x='y'; 
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
		$("#page").html('<ul></ul>');
		
		$.getJSON(url,function(json){
		$.each(json.elementinfo,function(i,ldat){
				$("#page ul").append('<li class="plist elements" ID="element_'+ldat.ID+'">'+
					
						'<a class="editelement" ID="dlist'+ldat.ID+'" href="#" '+
							'onclick="editElement( '+ ldat.ID + ');">'+
							'<i class="fa fa-pencil"></i>'+
						'</a>'+
						
						'<a class="deleteelement" ID="dlist'+ldat.ID+'" href="#" '+
							'onclick="deleteElement(' + ldat.ID + ');">'+
							'<i class="fa fa-remove"></i>'+
						'</a>'+ldat.pagecontent +'</li>');	
				
			});	
		
		});	
window.secretmenu(''+pageID+'');	

	}


			
	
	
	
	
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
		$('#lightbox>#content').html('<div class="boxtitle">Add a New Page</span>');
		$("#lightbox>#content").append(''+
		'<form  ID="addform">'+
		'<input type="hidden" name="newpage" value="add">'+
		'<input type="text" name="pagetitle" placeholder="Page Title"><br>'+
		'<input type="button" name="submit" value="Add Page" onclick="addPage(); ">'+
		'</form>');

	}
		
	window.addElement = function (pageID){	
	    var elementdata= $( "#addform" ).serialize();
	  	var myresult = $.post("navigation/confirm.php" , elementdata);
	  	$('#lightbox>#content').html('Element Added!');
	  	window.closehelper();
	  	window.loadPage(pageID); 	
	}
	
	window.formNewElement= function(pageID){
		window.helperadd();
		$('#lightbox>#content').html('<div class="boxtitle">Add New Element</span>');
		$("#lightbox>#content").append(''+
		'<form  ID="addform">'+
		'<input type="hidden" name="newelement" value="add">'+
		'<input type="hidden" name="pageID" value="'+ pageID +'">'+
		'<input type="text" name="title" placeholder="Enter Text Here"><br>'+
		'<input type="button" name="submit" value="Add" onclick="addElement('+ pageID +'); ">'+
		'</form>');

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
	'<div id="navadd"></div>'+
	'');

	window.showPages();	

});

