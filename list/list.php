<?
include('../connect.php');

$query = mysql_query("SELECT * FROM list where userID = '$userID' ")
or die(mysql_error());
	
while($listinfo = mysql_fetch_object( $query )) 
	{	
	$arr = array();
	$arr[] = $listinfo;			
	}
	

echo '{"listinfo":'.json_encode($arr).'}';

?>
