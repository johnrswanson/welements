<?	
include('../connect.php');


///////Saved Dropped Position
$dragtop=$_POST['dragtop'];
if (isset($dragtop))
	{
		
$dragleft = addslashes($_POST['dragleft']);
echo'$dragleft';
$elementID=addslashes($_POST['elementID']);
$thiselement=str_replace('element_', '', $elementID );
 $update=mysql_query("update page_element set posx='$dragtop' where ID='$thiselement' limit 1") or die (mysql_error());
 $update=mysql_query("update page_element set posy='$dragleft' where ID='$thiselement' limit 1") or die (mysql_error());
//echo 'element'.$elementID;
//echo'Element position saved';

	}
	
	///////Saved SIZE
	$restop=$_POST['restop'];
if (isset($restop))
	{
	$dragrestop=$_POST['dragrestop'];
	$dragresleft=$_POST['dragresleft'];
	$restop = addslashes($_POST['restop']).'px';
	$resleft = $_POST['resleft'].'%';
	$absresleft = $_POST['absresleft'].'px';
$sizeelementID=addslashes($_POST['sizeelementID']);
$sizeelement=str_replace('divArray_', '', $sizeelementID );
 $update=mysql_query("update page_element set height='$restop' where ID='$sizeelement' limit 1") or die (mysql_error());
 $update=mysql_query("update page_element set width='$resleft' where ID='$sizeelement' limit 1") or die (mysql_error());
  $update=mysql_query("update page_element set absw='$absresleft' where ID='$sizeelement' limit 1") or die (mysql_error());
$update=mysql_query("update page_element set posx='$dragrestop' where ID='$sizeelement' limit 1") or die (mysql_error());
$update=mysql_query("update page_element set posy='$dragresleft' where ID='$sizeelement' limit 1") or die (mysql_error());
echo 'element'.$sizeelement;
echo 'width'.$resleft;
echo 'height'.$restop;
//echo'Element SIZE saved';

	}



echo'Live drag drop action is OK';
?>