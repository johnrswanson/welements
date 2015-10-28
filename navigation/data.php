<?
include('../connect.php');
$query = mysql_query("SELECT * FROM pages order by pageorder asc ")
or die(mysql_error());	
$arr = array();
while($info = mysql_fetch_object( $query )) 
	{	
	$arr[] = $info;			
	}
echo '{"navinfo":'.json_encode($arr).'}';
?>