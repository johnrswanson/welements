<?include('../connect.php');
//Check for cookie and bounce to root index if found - already logged in
if(isset($_COOKIE['ID_myapp'])){ 
	$email = $_COOKIE['ID_myapp']; 
	$pass = $_COOKIE['Key_myapp'];
	$check = mysql_query("SELECT * FROM users WHERE email = '$email'")or die(mysql_error());
	while($info = mysql_fetch_array( $check )) 
		{$mypass= $info['password'];
		if($pass == $mypass){header("Location:../index.php");}	
		}
	}

?>


<html>
<head>
<title>Log In</title>
	
</head>
<body>
	
	
		
<form ID="user" method="post" action="login.php">
	<input type="text" name="email" placeholder="Email" ><br>

	<input type="password" placeholder="Password" name="pass"> 
	
	<p><input type="submit" name="submitlogin" value="Login"></p>
</form>

<p>
<a href="./register.php">Sign up</a>
</p>
