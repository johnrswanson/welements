// register
(function (window) {
		
	window.deleteListItem = function (itemId) {
		$('#plist'+itemId+'').slideUp(300);
		$.post('list/listconfirm.php', { deleteme: itemId },
		function () {
				// 200, it worked; resource deleted
			}, function () {
				// it didn't delete			
		});
	}
	
	window.showList= function (){
		$("#listcontent").html('<i class="fa fa-circle-o-notch fa-spin"></i>');
		var url="list/listdata.php";
		$.getJSON(url,function(json){
			$("#listcontent").html('');
			$.each(json.listinfo,function(i,ldat){
				$("#listcontent").append(''+
				'<p class="plist" ID="plist'+ldat.ID+'"> '+
				'<a class="editbutton dlist" ID="dlist'+ldat.ID+'" href="#" onclick="deleteListItem(' + ldat.ID + ');">'+
				'<i class="fa fa-remove"></i></a>'+
				'<a href="'+ldat.link+'" onclick="">'+ldat.title+'</a> ' + 
				//'<a class="editbutton elist" href="list/listedit.php?update='+ldat.ID+'" onclick="openLightBox(); return false;" > <i class="fa fa-pencil"></i></a> ' +
				'</p>');	
			});	
		});	
	}
	
	
		
	window.addListItem = function (){	
	    var data= $( "#newItem" ).serialize();
	  	var myresult = $.post("list/listconfirm.php" , data);
	  	$("#listadd").html(myresult);
	  	window.showList(); 	
	  	window.hideAddNew();
	  	window.helperclose();
	}
	
	window.addNew= function(){
		window.helperadd();
		$("#lightbox #content").html('Add A New Item'+
		'<form  ID="newItem" method="POST">'+
		'<input type="hidden" name="new" value="add">'+
		'<input type="text" name="title" placeholder="Enter A Title"><br>'+
		'<input type="text" name="link" placeholder="Enter Link">'+
		'<input type="button" name="submit" value="Add" onclick="addListItem()">'+
		'</form>');
		$("#listadd").slideDown(300);	
		$(".addon").hide(0);
		$(".addoff").show(0);
		
		
		
	}
	
	window.hideAddNew= function(){
		$("#listadd").slideUp(500);
		$(".addoff").hide(0);
		$(".addon").show(0);
			$("#lightbox").fadeOut(500);		
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

	$("#list").html(''+
	'<div id="listactions">'+
		'<a href="#" class="lister" onclick="showList()"><i class="fa fa-list"></i></a> '+
		'<a href="#" class="addon"  onclick="addNew()"><i class="fa fa-plus-circle"></i></a>'+
		'<a href="#" class="addoff"  onclick="hideAddNew()"><i class="fa fa-minus"></i></a>'+
		'<a href="#" class="editOn" onclick="showEditButtons()">Edit<i class="fa fa-remove"></i></a>'+
		'<a href="#" class="editOff" onclick="hideEditButtons()">Done <i class="fa fa-remove"></i></a>'+
	'</div>'+
		'<div id="listadd"></div>'+
	'<div id="listcontent"></div>'+'');
	
	window.showList();	
});

