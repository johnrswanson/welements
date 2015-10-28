(function (window) {
		
window.deletePage = function (itemId) {
	$('#plist'+itemId+'').slideUp(300);
	$.post('navigation/confirm.php', { deleteme: itemId },
	function () {
			// 200, it worked; resource deleted
			}, function () {
				// it didn't delete			
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
				'<a href="'+ldat.link+'" onclick="">'+ldat.title+'</a> ' + 
				'</li>');	
			});	
			
		});	
		
	}
	
	
		
	window.addPage = function (){	
	    var pagedata= $( "#addform" ).serialize();
	  	var myresult = $.post("navigation/confirm.php" , pagedata);
	  	$('#lightbox>#content').html('New Page Added!');
	  	window.closehelper();
	  	window.showPages(); 	
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

