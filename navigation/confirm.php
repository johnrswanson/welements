<?
include('../connect.php');
echo'Hello ';
$pageID=$_POST['pageID'];
$title=$_POST['title'];
$pagetitle=$_POST['pagetitle'];
$urltext=$_POST['urltext'];
$newpage=$_POST['newpage'];
$newelement=$_POST['newelement'];
$update=$_POST['update'];
$deletepage=$_POST['deleteme'];
$deleteelement=$_POST['deleteelement'];
$editme=$_POST['editme'];
$css=$_POST['css'];



if ($newpage=='add'){
	echo 'adding... ';
	mysql_query("insert into pages (ID, title, urltext) values('', '$pagetitle', '$urltext')")or die(mysql_error());
	echo ' New Page Added';
}
	
	
if ($css=='edit'){
	$newcss = addslashes($_POST['usercss']);
	$update=mysql_query("update admin set usercss= '$newcss'");
	echo'CSS was updated';
}
			
			
	
if ($newelement=='add'){	
	$newtext = str_replace("\r",'<br>',$_POST['mytext']);			
	$cleantext=addslashes($newtext);
	
	$margin=addslashes($_POST['margin']);
	$padding=addslashes($_POST['padding']);
	$height=addslashes($_POST['height']);
	$width='500';
	$color=addslashes($_POST['color']);
	$background=addslashes($_POST['background']);

	$posy='100';
	$posx='100';
	$fontfamily=addslashes($_POST['fontfamily']);
	$fontsize=addslashes($_POST['fontsize']);
	$fontweight=addslashes($_POST['fontweight']);	
	$floaty=addslashes($_POST['floaty']);	
	$opacity=addslashes($_POST['opacity']);
	$textalign=addslashes($_POST['textalign']);
	$radius=addslashes($_POST['radius']);
	echo 'Adding element';
	
	$boxtitle=addslashes($_POST['boxtitle']);
	if($boxtitle!=''){
		$cleantext=addslashes($_POST['boxtitle']);
		}
	
	$photo=addslashes($_FILES[file][name]);
	if($photo!=''){
		echo ' -> Adding Photo ';
		$add="../img/full/".$_FILES[file][name];
		echo $add;
		if(move_uploaded_file ($_FILES[file][tmp_name],$add)){

			//echo "<P>Successfully uploaded the image<P>";
			chmod("$add",0777);
		}
		else{
			echo " -> Photo Upload Directory Error";exit;}
			
			$photoerror='true';
			if ($_FILES[file][type]=="image/jpg"){$photoerror='false';}
			if ($_FILES[file][type]=="image/jpeg"){$photoerror='false';}
			if ($_FILES[file][type]=="image/png"){$photoerror='false';}
			if ($_FILES[file][type]=="image/gif"){$photoerror='false';}
			if ($_FILES[file]['size'] > 2000000000) {
	        $photoerror='true';
	            }	
			if ($photoerror=='true'){
				echo " -> Photo Upload Type Error";
				exit;
			}
		else{echo' -> Photo Upload Success';}
	}
	mysql_query("insert into page_element (
	ID,
	 pagecontent, 
	 fontsize, 
	 file,
	 fontfamily, 
	 color, 
	 fontweight, 
	 background, 
	 margin, 
	 padding, 
	 height, 
	 spacing,
	 width, 
	 floaty, 
	 opacity, 
	 textalign, 
	 radius, 
	 pageID, 
	 layer,
	 elementlist,
	 posx, 
	 posy, 
	 absw, 
	 boxID
	  )VALUES
	('',
	'$cleantext', 
	'20', 
	'$photo', 
	'helvetica', 
	'$color', 
	'100',
	'#ffffff', 
	'0', 
	'0', 
	'auto', 
	'0',
	'300', 
	'none',
	'$opacity', 
	'$textalign', 
	'0',
	'$pageID', 
	'5',
	'1000', 
	'100', 
	'30', 
	'400',
	'1' )
	") or die (mysql_error());
	echo 'New Element Added';
}


if ($deletepage!=''){	
	$delete = mysql_query("delete from pages where ID='$deletepage' limit 1");
	$delete = mysql_query("delete from page_element where pageID='$deleteelement' ");

	echo 'Page Deleted Successfully';
	echo 'Page Items Deleted Successfully';
}
	
	
if ($deleteelement!=''){	
	$delete = mysql_query("delete from page_element where ID='$deleteelement' limit 1");
	echo 'Item Deleted Successfully';
}


	
if ($editme!=''){	
	echo $editmy;
	$newtext = str_replace("\r",'<br>',$_POST['pagecontent']);			
	$pagecontent=addslashes($newtext);
	$pageID=addslashes($_POST['pageID']);
	$elementID=addslashes($_POST['editme']);
	$layer=addslashes($_POST['layer']);
	$spacing=addslashes($_POST['spacing']);
	$lineheight=addslashes($_POST['lineheight']);
	$margin=addslashes($_POST['margin']);
	$padding=addslashes($_POST['padding']);
	//$height=addslashes($_POST['height']);
	//$width=addslashes($_POST['width']);
	$color=addslashes($_POST['color']);
	$background=addslashes($_POST['background']);
	$fontfamily=addslashes($_POST['fontfamily']);
	$fontsize=addslashes($_POST['fontsize']);
	$fontweight=addslashes($_POST['fontweight']);
	$margin=addslashes($_POST['margin']);
	$padding=addslashes($_POST['padding']);
	$opacity=addslashes($_POST['opacity']);
	$textalign=addslashes($_POST['textalign']);
	$radius=addslashes($_POST['radius']);
	$columnset=addslashes($_POST['columnset']);
	$boxtitle=addslashes($_POST['boxtitle']);
	
	$update=mysql_query("update page_element set layer= '$layer' where ID='$elementID' limit 1");		
	$update=mysql_query("update page_element set pagecontent= '$pagecontent' where ID='$elementID' limit 1");
	$update=mysql_query("update page_element set fontfamily= '$fontfamily' where ID='$elementID' limit 1");
	$update=mysql_query("update page_element set fontsize= '$fontsize' where ID='$elementID' limit 1");
	$update=mysql_query("update page_element set fontweight= '$fontweight' where ID='$elementID' limit 1");
	$update=mysql_query("update page_element set textalign= '$textalign' where ID='$elementID' limit 1");
	$update=mysql_query("update page_element set background= '$background' where ID='$elementID' limit 1");
	$update=mysql_query("update page_element set color= '$color' where ID='$elementID' limit 1");
	//$update=mysql_query("update page_element set width= '$width' where ID='$elementID' limit 1");
	//$update=mysql_query("update page_element set height= '$height' where ID='$elementID' limit 1");
	$update=mysql_query("update page_element set margin= '$margin' where ID='$elementID' limit 1");
	$update=mysql_query("update page_element set padding= '$padding' where ID='$elementID' limit 1");
	$update=mysql_query("update page_element set opacity= '$opacity' where ID='$elementID' limit 1");
	$update=mysql_query("update page_element set fontweight= '$fontweight' where ID='$elementID' limit 1");
	$update=mysql_query("update page_element set radius= '$radius' where ID='$elementID' limit 1");
	$update=mysql_query("update page_element set spacing= '$spacing' where ID='$elementID' limit 1");
	$update=mysql_query("update page_element set lineheight= '$lineheight' where ID='$elementID' limit 1");
	$myphoto=addslashes($_FILES[file][name]);
	if($myphoto!=''){
		$add="./img/full/".$_FILES[file][name];
		//echo $add;
		echo'<br>';

		if(move_uploaded_file ($_FILES[file][tmp_name],$add)){
			chmod("$add",0777);
		}
		else{
		echo "Permissions Failed.";
		exit;
		}
		$photoerror='true';
		if ($_FILES[file][type]=="image/jpg"){$photoerror='false';}
		if ($_FILES[file][type]=="image/jpeg"){$photoerror='false';}
		if ($_FILES[file][type]=="image/png"){$photoerror='false';}
		if ($_FILES[file][type]=="image/gif"){$photoerror='false';}
		if ($_FILES[file]['size'] > 20000000) { $photoerror='true';}
		if ($photoerror=='true'){
			echo "Your file must be a Photo ( Jpeg , PNG , or GIF) <br>
			Other file types are not allowed. <br>
			Maximum Default File size for uploading is set to 2MB for now.
			<br>You must resize your photos and try again.  <BR>";
			exit;
			}
		else{
			$photo=addslashes($_FILES[file][name]);
			mysql_query("update page_element set file='$photo' where ID='$elementID' limit 1") or die (mysql_error());
		}
	}

	
	//$update=mysql_query("update page_element set floaty= '$floaty' where ID='$elementID' limit 1");
	$data3=mysql_query("select * from page_element where ID='$elementID' ");
	while($info3=mysql_fetch_array($data3))
		{$thisPage=$info3['pageID'];
		$boxID=$info3['boxID'];
		$update=mysql_query("update page_box set columnset= '$columnset' where ID='$boxID' limit 1");
		
		$update=mysql_query("update page_box set title= '$boxtitle' where ID='$boxID' limit 1");
	}
	echo 'Item Saved Successfully';
}

	
	
//reorder navigation links	
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
	
	
//reorder elements links	
$elementaction = mysql_real_escape_string($_POST['elementaction']); 
$updateElements = $_POST['element'];
if ($elementaction == "updateElementOrder"){
	$elementCounter = 1;
	foreach ($updateElements as $value) {
		$updatenow=mysql_query("UPDATE page_element SET pageorder = '$elementCounter' WHERE ID = '$value'")or die(mysql_error('Element order was not updated in DB'));
		$elementCounter = $elementCounter + 1;	
	}
	echo '<pre>';
	print_r($updateRecordsArray);
	echo '</pre>';
	echo 'Element Order Saved';
}
	

	
?>