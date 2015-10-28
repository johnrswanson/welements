<?
include('../connect.php');
echo'Hello';

$title=$_POST['pagetitle'];
$urltext=$_POST['urltext'];
$newpage=$_POST['newpage'];
$update=$_POST['update'];
$deletepage=$_POST['deleteme'];
echo $title; 

if ($newpage=='add')
	{	echo 'adding... ';
	mysql_query("insert into pages (ID, title, urltext) values('', '$title', '$urltext')")or die(mysql_error());
	echo 'New Page has been Added';
	}


if ($deletepage!='')
	{	
	$delete = mysql_query("delete from pages where ID='$deletepage' limit 1");
	echo 'Item Deleted Successfully';
	}
	
	
	
	
$action = mysql_real_escape_string($_POST['action']); 
$updatepage = $_POST['pageArray'];

if ($action == "updatePageOrder"){
	
	$pageCounter = 1;
	foreach ($updatepage as $value) {
		$updatenow=mysql_query("UPDATE pages SET pageorder = '$pageCounter' WHERE ID = '$value'")or die(mysql_error('Page order was not updated in DB'));
		$pageCounter = $pageCounter + 1;	
	}
	
	echo '<pre>';
	print_r($updateRecordsArray);
	echo '</pre>';
	echo 'Page Order Saved';
}

	
?>