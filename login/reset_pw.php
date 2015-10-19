<?
include('connect.php');
	echo'
	<!DOCTYPE html>
<!-- HTML5 Boilerplate -->
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>

	<meta charset="utf-8">
	<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title></title>
	<meta name="description" content="">
	<meta name="keywords" content="">

	<meta name="author" content="">

	<meta http-equiv="cleartype" content="on">

	<link rel="shortcut icon" href="/favicon.ico">

	<!-- Responsive and mobile friendly stuff -->
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Stylesheets -->
	<link rel="stylesheet" href="css/html5reset.css" media="all">
	<link rel="stylesheet" href="css/responsivegridsystem.css" media="all">
	<link rel="stylesheet" href="css/col.css" media="all">
	<link rel="stylesheet" href="css/2cols.css" media="all">
	<link rel="stylesheet" href="css/3cols.css" media="all">
	<link rel="stylesheet" href="css/4cols.css" media="all">
	<link rel="stylesheet" href="css/5cols.css" media="all">
	<link rel="stylesheet" href="css/6cols.css" media="all">
	<link rel="stylesheet" href="css/7cols.css" media="all">
	<link rel="stylesheet" href="css/8cols.css" media="all">
	<link rel="stylesheet" href="css/9cols.css" media="all">
	<link rel="stylesheet" href="css/10cols.css" media="all">
	<link rel="stylesheet" href="css/11cols.css" media="all">
	<link rel="stylesheet" href="css/12cols.css" media="all">

	<!-- Responsive Stylesheets -->
	<link rel="stylesheet" media="only screen and (max-width: 1024px) and (min-width: 769px)" href="./css/1024.css">
	<link rel="stylesheet" media="only screen and (max-width: 768px) and (min-width: 481px)" href="./css/768.css">
	<link rel="stylesheet" media="only screen and (max-width: 480px)" href="./css/480.css">

	<!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements and feature detects -->
	<script src="js/modernizr-2.5.3-min.js"></script>

	<style type="text/css">



	</style>
	

</head>';

	
echo'<div class="container">';

include('/style.css');

echo'<center>';
?>

<?
error_reporting(0);
//Connect To Database
include('connect.php');




//This code runs if the form has been submitted
if (isset($_POST['submit'])) 
		{  
			
$usercheck = $_POST['email'];
$resetkey = $_POST['resetkey'];


		$check = mysql_query("SELECT * FROM users WHERE email = '$usercheck' and password='$resetkey' order by ID desc limit 1") 
		or die(mysql_error());
		$check2 = mysql_num_rows($check);
	if($check2!='0'){	
	while($info = mysql_fetch_array( $check )) 
	{$confirm=$info['ID'];}
	}
	else {echo'Invalid Request.';exit;}
			
			
		//This makes sure they did not leave any fields blank
		if (!$_POST['email'] | !$_POST['pass'] | !$_POST['pass2']) 
			{
			die('You did not complete all of the required fields');
			}
		
	
			// checks if the username is in use
		if (!get_magic_quotes_gpc()) 
			{
			$_POST['email'] = addslashes($_POST['email']);
			}
				

		// this makes sure both passwords entered match
		if ($_POST['pass'] != $_POST['pass2']) 
			{
			die('Your passwords did not match. <a href="">GO BACK</a>');
			}
	
		
		// now we insert it into the database
$email=addslashes($_POST['email']);
$pass=addslashes($_POST['pass']);
$safepass=md5($pass);





//mysql_query("update users set OLDpassword='$pass' where ID ='$confirm' limit 1") or die(mysql_error());
mysql_query("update users set password='$safepass' where ID ='$confirm' limit 1") or die(mysql_error());

echo'Your Password Has Been Updated. <a href="login.php">Log In</a> '; 
?>
	
		
		
<?				$_POST['email'] = stripslashes($_POST['email']); 
				$hour = time() + 3600; 
				setcookie(ID_my_site, $_POST['email'], $hour); 
				setcookie(Key_my_site, $_POST['pass'], $hour);
				//echo'<META HTTP-EQUIV=REFRESH CONTENT="1; URL=login.php">';


		?>
		 <P>
		
		
		<?php 

		}

else 
{	
	
	$usercheck = $_GET['email'];
$resetkey = $_GET['resetkey'];


		$check = mysql_query("SELECT * FROM users WHERE email = '$usercheck' and password='$resetkey' order by ID desc limit 1") 
		or die(mysql_error());
		$check2 = mysql_num_rows($check);
	if($check2!='0'){	
	while($info = mysql_fetch_array( $check )) 
	{echo'RESET YOUR PASSWORD:<p>';}
	}
	else {echo'Invalid Request.';exit;}
?>
<div id="concert">
<table><tr><td valign="top">

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">

<input type="hidden" name="email" value="<?echo $usercheck; ?>" maxlength="50"><P>
<input type="hidden" name="resetkey" value="<?echo $resetkey; ?>" maxlength="50"><P>

* Create a NEW Password<br>
<input type="password" name="pass" maxlength="10"><P>

* Confirm Password<br>
<input type="password" name="pass2" maxlength="10"><P>


<input type="submit" name="submit" value="Update Password"></form>

</td><td valign="top">
<div id="article"><div id="alert">
<b></p>
</div></div>
</td></tr></table>

</div>
<?php
}
?>

</div></div></div>
</td>


</tr></table>
</div></body>
</html>
