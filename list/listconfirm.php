<?
include('../connect.php');
include('../login/usercheck.php');
$title=$_POST['title'];
$link=$_POST['link'];
$new=$_POST['new'];
$update=$_POST['update'];
$deleteme=$_POST['deleteme'];
/*
$delete=$_POST['delete'];
	
switch($_SERVER['REQUEST_METHOD']) {
	case 'GET': // rerieve a list
	
		break;
	case 'POST': // create a new list
	
		break;
	case 'PUT': // update a list
		
		break;
	case 'DELETE': // delete an existing list
		delete();
		break;
	default:
		// please complain bad method
		break;
}

function delete() {
		
	if ($delete == '') {
		http_response_code(400);
		echo '{ error: "missing item id" }'
	}

	if (mysql_query("delete from list where ID='$delete' and userID='$userID' limit 1")) {
		http_response_code(200);
	} else {
		http_response_code(500);
	}
}
*/
	

if (isset($new))
	{
	mysql_query("insert into list(ID, title, link, userID) values('', '$title', '$link', '$userID')")or die(mysql_error());
	echo 'New Item has been Added';
	}
/*
if (isset($update))
	{	
	mysql_query("update list set title = '$title' where ID='update' and userID='$userID' limit 1");
	mysql_query("update list set link = '$link' where ID='update' and userID='$userID' limit 1");
	
	echo 'Item has been Updated';
	
	}
*/

if (isset($deleteme))
	{	
	mysql_query("delete from list where ID='$deleteme' and userID='$userID' limit 1")or die(mysql_error());
	echo 'Item Deleted Successfully';
	//echo'<META HTTP-EQUIV=REFRESH CONTENT="1; URL=../index.php">';
	}
?>