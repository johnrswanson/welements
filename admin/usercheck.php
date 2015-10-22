<?include('../connect.php');
if (isset($_COOKIE['ID_myapp']))
	{ 
	$email = $_COOKIE['ID_myapp']; 
	$pass = $_COOKIE['Key_myapp'];
$query1 = mysql_query("SELECT * FROM admin WHERE email = '$email' ")
or die(mysql_error());
while($info = mysql_fetch_array( $query1 )) 
	{	
	$userID=$info['ID'];
	$name=$info['shortname'];
	if($pass!=$info['password'])
		{
	header("Location:./index.php");
		exit;
		}
		else { $loggedin='true'; 
		//echo 'You are logged in';
		}		
	}	
	}
	else{
	echo'<div ID="userlogin">
	<a class="login" href="admin/index.php">Login</a>
	<!--<a class="register" href="admin/register.php">Sign Up</a><br>-->
	</div>';
		}
?>


