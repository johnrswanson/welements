<?
include('../connect.php');
$box=addslashes($_GET['box']);

if($box!=''){
	$query = mysql_query("SELECT * FROM box_element where boxID='$box' order by boxelementorder asc ")or die(mysql_error());
	}
	
$arr = array();
while($info = mysql_fetch_object( $query )) 
	{	
	$arr[] = $info;			
	}
echo '{"boxiteminfo":'.json_encode($arr).'}';
?>