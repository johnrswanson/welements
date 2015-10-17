<?
include('../connect.php');


if (isset($_POST['submitlogin'])) 
	{ 
		


	if(!$_POST['email'] | !$_POST['pass']) 
			{
echo'Login Details Incorrect';
exit;
			}
	
		
	if (!get_magic_quotes_gpc()) 
		{
		$_POST['email'] = addslashes($_POST['email']);
		}
	$check = mysql_query("SELECT * FROM users WHERE email = '".$_POST['email']."'")or die(mysql_error());
	
	//Gives error if user dosen't exist
	$check2 = mysql_num_rows($check);
	if ($check2 == 0) 
		{
		echo'Login Details Incorrect';
		
		}
		
		
while($info = mysql_fetch_array( $check )) 
		{
			$_POST['pass'] = stripslashes($_POST['pass']);
			$info['password'] = stripslashes($info['password']);
			$pass = $_POST['pass'];
			
			//gives error if the password is wrong
		if (md5($pass)!= $info['password']) 
				{
				echo' Login Details Incorrect';
				
				}
			
			
else{// if login is ok then we add a cookie 
	$_POST['email'] = stripslashes($_POST['email']); 
	$hour = time() + 100000; 
	setcookie(ID_myapp, $_POST['email'], $hour, "/"); 
	setcookie(Key_myapp, md5($_POST['pass']), $hour, "/");	
				
	//then redirect them to the members area 
	header("Location: ../index.php");
			
			} 
		} 
	} 

?>



