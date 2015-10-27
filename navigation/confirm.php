<?
include('../connect.php');
echo'Hello';

$title=$_POST['title'];
$urltext=$_POST['urltext'];
$newpage=$_POST['newpage'];
$update=$_POST['update'];
$deletepage=$_POST['deleteme'];


if ($newpage='add')
	{	echo 'adding... ';
	mysql_query("insert into pages (ID, title, urltext) values('', '$title', '$urltext')")or die(mysql_error());
	echo 'New Page has been Added';
	}


if ($deletepage!='')
	{	
	mysql_query("delete from pages where ID='$deletepage' limit 1")or die(mysql_error());
	echo 'Item Deleted Successfully';
	}
	
	
?>