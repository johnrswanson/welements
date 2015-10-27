$(document).ready(function(){
	var url="admin/userdata.php";
	$.getJSON(url,function(json){
	// loop through the members here
		$.each(json.userinfo,function(i,dat){
		$("#admincontent").html(
		'Hello '+dat.shortname+ ' '+
		'<a class="logout pop" href="admin/logout.php">Log out</a></div>');
		});
	});
	
	$(".adminlogin").click(function(c){
			c.preventDefault();	
			$("#adminlogin").load('admin/index.php');
			('#logincontent').slideUp();
		});	
	
	$(".adminregister").click(function(d){
			d.preventDefault();	
			$("#adminlogin").load('admin/register.php');
		});	

	});
  



