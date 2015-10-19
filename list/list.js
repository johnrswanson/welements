
 
$(document).ready(function(){
	var url="list/list.php";
	$.getJSON(url,function(json){
	// loop through the members here
		$.each(json.userinfo,function(i,dat){
		$("#content").html(
		'<div class="user">Home<br>'+
		'<p>  title '+dat.title+''+
		'<p>Email : '+dat.link+'</p>'+
		'<p>userID : <strong>'+dat.ID+'</strong></p>'+
		'</div>'
		);
		});
	});
	});


