<?
include('../connect.php');
echo'Hello';
$pageID=$_POST['pageID'];

$title=$_POST['title'];
$urltext=$_POST['urltext'];
$newpage=$_POST['newpage'];
$newelement=$_POST['newelement'];
$update=$_POST['update'];
$deletepage=$_POST['deleteme'];
$deleteelement=$_POST['deleteelement'];
$editelement=$_POST['editelement'];
echo $title; 

if ($newpage=='add')
	{	echo 'adding... ';
	mysql_query("insert into pages (ID, title, urltext) values('', '$title', '$urltext')")or die(mysql_error());
	echo 'New Page Added';
	}
	
	
if ($newelement=='add')
	{	echo 'adding... ';
	mysql_query("insert into page_element (ID, pagecontent, pageID ) values('', '$title', '$pageID')")or die(mysql_error());
	echo 'New Element Added';
	}


if ($deletepage!='')
	{	
	$delete = mysql_query("delete from pages where ID='$deletepage' limit 1");
	echo 'Item Deleted Successfully';
	}
	
	
if ($deleteelement!='')
	{	
	$delete = mysql_query("delete from page_element where ID='$deleteelement' limit 1");
	echo 'Item Deleted Successfully';
	}


	
if ($editelement!='')
	{	
		//update query
	echo 'Item Saved Successfully';
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