<html>
<head>
	<title>Web-elements</title>
	
</head>
	
<body>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="admin/style.css">
<link rel="stylesheet" href="login/style.css">
<link rel="stylesheet" href="list/style.css">
<link rel="stylesheet" href="navigation/style.css">

<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script type="text/javascript" type="text/javascript" src="navigation/navigation.js"></script>
<script type="text/javascript" type="text/javascript" src="admin/admin.js"></script>
<script type="text/javascript" type="text/javascript" src="helper/helper.js"></script>


<script type="text/javascript" type="text/javascript" src="login/login.js"></script>
<script type="text/javascript" type="text/javascript" src="list/list.js"></script>

<?php //required for admin
include('./connect.php'); 
include('./admin/usercheck.php');
include('./helper/helper.php');	
?>
<div id="admincontent"></div>
<div ID="header">
	<a class="logo" href="./index.php"><i class="fa fa-home"></i></a>
	<div id="nav"></div>
</div>
	

<?include('./login/usercheck.php');?>
<div id="logincontent"></div>
<?if($loggedin=='true'){?>
		<div id="list"></div>
					
<?}?>	
	
	
</body>
</html>