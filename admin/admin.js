

$(document).ready(function(){
	var url="admin/userdata.php";
	$.getJSON(url,function(json){
	// loop through the members here
		$.each(json.userinfo,function(i,dat){
		$("#admincontent").html('<a href="#" class="adminsecret"><i class="fa fa-star "></i></a>'+
		'<div class="secretmenu"> Hello '+dat.shortname + '<br>'+
		'<a href="#" class="pop"  onclick="addNewPage()"><i class="fa fa-plus-circle"></i>Add Page</a><br>'+
		'<a href="#" class="deleteOn" onclick="showDeleteButtons()"><i class="fa fa-remove"></i>Delete Page</a>'+
		'<a href="#" class="deleteOff" onclick="hideDeleteButtons()"><i class="fa fa-remove"></i>Done</a>'+
		'<p><a class="logout pop" href="admin/logout.php"><i class="fa fa-user"></i>Log out</p></div>');
		});
		
		$(".adminsecret").click(function(v){
		v.preventDefault();	
		$(".secretmenu").toggle(200);
		});
	});
	
	

	
	$(".adminlogin").click(function(c){
			c.preventDefault();	
			$("#adminlogin").load('admin/index.php');
			$('.login').slideUp();
			$('.register').slideUp();
			$('#logincontent').slideUp();
		});	
	
	$(".adminregister").click(function(d){
			d.preventDefault();	
			$("#adminlogin").load('admin/register.php');
		});	

	});
  



