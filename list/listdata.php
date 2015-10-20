<?
include('../connect.php');
include('../login/usercheck.php');
$listquery = mysql_query("SELECT * FROM list where userID = '$userID' order by title asc ")
or die(mysql_error());	
$listarr = array();
while($listinfo = mysql_fetch_object( $listquery )) 
	{	
	$listarr[] = $listinfo;			
	}
echo '{"listinfo":'.json_encode($listarr).'}';
?>