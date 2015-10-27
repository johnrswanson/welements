// register
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
		$.getJSON(url,function(json){
			$("#navcontent").html('');
			$.each(json.listinfo,function(i,ldat){
				$("#navcontent").append(''+
				'<p class="plist" ID="plist'+ldat.ID+'"> '+
				'<a class="editbutton dlist" ID="dlist'+ldat.ID+'" href="#" onclick="deleteListItem(' + ldat.ID + ');">'+
				'<i class="fa fa-remove"></i></a>'+
				'<a href="'+ldat.link+'" onclick="">'+ldat.title+'</a> ' + 
				//'<a class="editbutton elist" href="list/listedit.php?update='+ldat.ID+'" onclick="openLightBox(); return false;" > <i class="fa fa-pencil"></i></a> ' +
				'</p>');	
			});	
		});	
	}
	
	
		
	window.addPage = function (){	
			window.closehelper();
	
	    var data= $( "#newPage" ).serialize();
	  	var myresult = $.post("navigation/confirm.php" , data);
	  	window.showPages(); 	
	}
	
	window.addNewPage= function(){
		window.helperadd();
		$('#lightbox>#content').html('<div class="boxtitle">Add a New Page</span>');
		$("#lightbox>#content").append(''+
		'<form  ID="newPage">'+
		'<input type="hidden" name="newpage" value="add">'+
		'<input type="text" name="pagetitle" placeholder="Page Title"><br>'+
		'<input type="button" name="submit" value="Add Page" onclick="addPage(); ">'+
		'</form>');
		$("#listadd").slideDown(300);	
		$(".addon").hide(0);
		$(".addoff").show(0);
	
		
	}
	
	window.hideAddNew= function(){
		$("#navadd").slideUp(500);
		$(".addPageOff").hide(0);
		$(".addPageOn").show(0);
		}

	
	window.showEditButtons= function(){
		$(".editbutton").show(0);
		$(".editOn").hide(0);
		$(".editOff").show(0);
		window.helperdelete();
		}
		
	window.hideEditButtons= function(){
		$(".editbutton").hide(0);
		$(".editOn").show(0);
		$(".editOff").hide(0);
		}	
}(this));


	
  
  
$(document).ready(function(){

	$("#nav").html(''+
	'<div id="navactions">'+
		'<a href="#" class="links" onclick="showList()"><i class="fa fa-bars"></i></a> '+
	'</div>'+
	'<div id="navadd"></div>'+
	'<div id="navcontent"></div>'+'');
	window.showPages();	
});

