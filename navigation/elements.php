<?
include('../connect.php');
$load=addslashes($_GET['l']);
$query = mysql_query("SELECT * FROM page_element where pageID='$load' order by elementlist asc ")
or die(mysql_error());	
$arr = array();
while($info = mysql_fetch_object( $query )) 
	{	
	$arr[] = $info;			
	}
echo '{"elementinfo":'.json_encode($arr).'}';
?>