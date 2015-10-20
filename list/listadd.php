<?php
include('../connect.php');
include('../login/usercheck.php');
?>
<script>
$(document).ready(function (){
	$("#addlist").submit(function (xyz) {
  	xyz.preventDefault();
    var data= $( "#addlist" ).serialize();
  	var myresult = $.post("list/listconfirm.php" , data);
  	$(".add").html('New item has been added. <META HTTP-EQUIV=REFRESH CONTENT="1; URL=./index.php">');
  	});  
$("#listview").click(function(b){
	b.preventDefault();
	$("#listcontent").slideDown(200);
	$("#listadd").slideUp(200);
	$("#listadd").html(' ');
	});
   });
</script>

<div class="add"">
	<form  ID="addlist" method="POST">
		<input type="hidden" name="new" value="add">
		<input type="text" name="title" placeholder="Enter A Title"><br>
		<input type="text" name="link" placeholder="Enter Link (Include the http://)">
		<p><input type="submit" name="submit" value="Add"></p>
	</form>		
</div>