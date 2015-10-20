// register
(function (window) {	
	window.deleteListItem = function (itemId) {
		$.post('list/listconfirm.php', { deleteme: itemId },
		function () {
				$('.plist').slideUp(500);
				// 200, it worked; resource deleted
			}, function () {
				// it didn't delete
				
			});
	}
	
}(this));




$(document).ready(function(){

	$("#new").click(function(a){
			a.preventDefault();
			$("#listcontent").slideUp(200);
			$("#listadd").load('list/listadd.php');
		});	
				
		var url="list/listdata.php";
		$.getJSON(url,function(json){
		$.each(json.listinfo,function(i,ldat){
		$("#listcontent").append(''+
		'<p class="plist" ID="plist'+ldat.ID+'"> <a href="'+ldat.link+'">'+ldat.title+'</a> ' + 
		//'<a class="lightbox_trigger" href="./list/listedit.php?update='+ldat.ID+'" > <i class="fa fa-pencil"></i></a> ' +
		'<a class="dlist" ID="dlist'+ldat.ID+'" href="#" onclick="deleteListItem(' + ldat.ID + ');">'+
		//'<a class="lightbox_trigger" ID="dlist'+ldat.ID+'" href="list/listconfirm.php?delete='+ldat.ID+'">'+
		'<i class="fa fa-remove"></i></a></p>');	
		});	
				
	});
	
});



