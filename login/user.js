
 
$(document).ready(function(){
	var url="login/userdata.php";
	$.getJSON(url,function(json){
	// loop through the members here
		$.each(json.userinfo,function(i,dat){
		$("#logincontent").html(
		'<div ID="userlogin">'+
		'<p>  Hello, '+dat.shortname+' '+
		'<a class="logout" href="login/logout.php">Log out</a></div>'
		);
		});
	});
	});


