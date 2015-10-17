
 
$(document).ready(function(){
	var url="login/usercheck.php";
	$.getJSON(url,function(json){
	// loop through the members here
		$.each(json.userinfo,function(i,dat){
		$("#content").html(
		'<div class="user">Home<br>'+
		'<p>  Hello '+dat.shortname+''+
		'<p>Email : '+dat.email+'</p>'+
		'<p>userID : <strong>'+dat.ID+'</strong></p>'+
		'<hr><a class="logout" href="login/logout.php">Log out</a></div>'
		);
		});
	});
	});


