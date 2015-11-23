<html>
<head>
	<title>Web-elements</title>
	
<!--IPHONE-->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="380" content="width=device-width, user-scalable=no" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimal-ui" />


	

<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">

<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="admin/style.css">
<link rel="stylesheet" href="login/style.css">
<link rel="stylesheet" href="list/style.css">

</head>
<body>
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="navigation/touchpunch.js"></script>




<script type="text/javascript" src="admin/admin.js"></script>
<script type="text/javascript" src="helper/helper.js"></script>






<div ID="maincontent">
	
	<?php //required for admin
	include('./connect.php'); 
	
	include('./admin/usercheck.php');
	if($admin=='true'){?>
	
	<script type="text/javascript" type="text/javascript" src="navigation/editor.js"></script>
	
	<?}
	else{
		?>
	<script type="text/javascript" type="text/javascript" src="navigation/viewer.js"></script>

	<?	}	?>
	
	
	<div ID="admincontent"></div>
	<div ID="header">
		<a class="logo" href="./index.php"><i class="fa fa-home"></i></a>
		<div id="nav"></div>
	</div>
	<div id="page"></div>
	

	<?
	//include('./login/usercheck.php');
	//echo'<div id="logincontent"></div>';
	if($loggedin=='true'){
			//echo'<div id="list"></div>';				
	}?>	
	
	<div id="footer"></div>
	<? include('./helper/helper.php');	?>
</div>

<style>
 @media (max-width:700px){
		.elements
			{
			width: 98%;
			font-size: 15px; 
				line-height: 15px; 
			position: relative;
			left:0px;
			top: 0px;
			margin:auto; 
			padding: 5px;
			height: auto;} 
			}			 
</style>
<div id="userCss"></div>
<link rel="stylesheet" href="navigation/style.css">

</body>
</html>
