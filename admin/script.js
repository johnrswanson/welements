$(document).ready(function(){
	var url="admin/userdata.php";
	$.getJSON(url,function(json){
	// loop through the members here
		$.each(json.userinfo,function(i,dat){
		$("#logincontent").html(
		'Hello '+dat.shortname+' '+
		'<a class="logout" href="admin/logout.php">Log out</a></div>'
		);
		});
	});
	
	$(".login").click(function(a){
			a.preventDefault();	
			$("#userlogin").load('admin/index.php');
		});	
	
	$(".register").click(function(a){
			a.preventDefault();	
			$("#userlogin").load('admin/register.php');
		});	

	});


