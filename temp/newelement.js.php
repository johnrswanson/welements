'<div style="float:left; auto min-height:250px; margin: auto; text-align: center;">' + 
'<div class="flippers">' +

'<div class=" addtext_button buttons"><a href="" onclick="return false"><img src="/img/icons/text.png"><br>Add Text</a></div>' +
/*
'<div class=" addphoto_button buttons"><a href="" onclick="return false"><img src="/img/icons/camera.png"><br>Add Photo</a></div>' +


'<div class="addbox_button buttons" > <a class="loadbox_trigger"  href="/admin/admin_new_pagebox.php?page='.$thispage.'&type=2"><img src="/img/icons/gallerybox.png"><br>Photo box</a></div> ' +

'<div class="addbox_button buttons" style="clear:both;" > <a class="loadbox_trigger"  href="/admin/admin_new_pagebox.php?page='.$thispage.'&type=3"><img src="/img/icons/blogbox.png"><br>Blog box</a></div> ' +


'<div class="addbox_button buttons" > <a  class="loadbox_trigger"  href="/admin/admin_new_pagebox.php?page='.$thispage.'&type=4"><img src="/img/icons/videobox.png"><br>Video box</a></div>' +

'<div class="addbox_button buttons"  > <a  class="loadbox_trigger"  href="/admin/admin_new_pagebox.php?page='.$thispage.'&type=7"><img src="/img/icons/shopbox.png"><br>Shop box</a></div>' +


'<div class="addbox_button buttons"style="clear:both;" > <a class="loadbox_trigger" href="/admin/admin_new_pagebox.php?page='.$thispage.'&type=1"><img src="/img/icons/mobilemenu.png" height="40px;" width="40px;"><br>Menu Box</a></div></p> ' +

'</div>' +
*/


'<div ID ="addboxhere"></div>' +

		'<div class="addtext flippers">' +
		'<FORM ENCTYPE="multipart/form-data"  METHOD="POST" >' +
		'<input type="hidden" name="pageID" value="'.$thispage.'">' +
		
			
		
	'<textarea name="mytext" style=" min-height: 50px; width:89%; margin-bottom: 10px;" placeholder="Write some words here. Choose Font and Style options below."></textarea><br>' +
			
				
//FONT 
	'<div class="selex2" >
	<input name="color" id="html5colorpicker" class="form-control" type="color" value="#777777" onchange="clickColor(0, -1, -1, 5)" style="height: 30px; width: 30px; float: left; padding: 0px; margin-right: 3px;">' +
'<div class="slimx">' +
'<select class= "fontfamily" name="fontfamily">' +



	foreach(myfonts as myfont){
			$(".fontfamily").append(''+
		'<option style="font-family:'+$myfont+'" ' +
		' value="'+$myfont+'" ' +
		
		' >'+ myfont +'</option>' +
		
		}
		
		'</select></div>' +    
     
		'<div class="smallx">
		<select style="  width: 60px ;" name="fontsize">' +
		var z='10'; 			
			
			while(z<'120'){
			'<option style="" value="'.$z.'px"' +
			if ($fontsize==$z){echo ' selected' +}
			'>'.$z.'px</option>' +
			$z++;
			}
		
		'</select></div>' +
	
	

		// FONT WEIGHT
		//'<input style="float: right;" type="submit" name="editelementnow" value="Save">' + 
		$fontweight='regular' +
	'<div class="slimx">
	<select name="fontweight">' +
		
		'<option style="font-weight: regular" value="regular"' +
		if($fontweight=='regular'){' selected' +}
		'>Regular</option>' +
		
		'<option style="font-weight: lighter" value="lighter"' +
		if($fontweight=='lighter'){' selected' +}
		'>Light</option>' +
		
		'<option style="font-weight: bold" value="bold"' +
		if($fontweight=='bold'){' selected' +}
		'>Bold</option>' +
		
		'</select></div>' +
		
			
			
$textalign='left' +
//ALIGN
'<div class="slimx" >' +
'<select name="textalign">' +
if ($textalign=='-'){$textalign='none' +}
if ($textalign==' '){$textalign='none' +}
	'<option value="left" ' +
	if ($textalign=='left'){echo ' selected' +}
	'>Left</option>' +

	'<option value="center"' +
	if ($textalign=='center'){echo ' selected' +}
	'>Center</option>' +
		
	
			
	'<option value="right"' +
	if ($textalign=='right'){echo 'selected' +}
	'> Right</option>' +
	
	'</select></div>' +

		'</div><div class="selex2" >' +	

			
//Layer
	$z='1' +
	'<div class="smallx clear" style="float:left;">Layer  ' +
	'<select name="layer">' +
	
	while($z<'6'){
			'<option value="'.$z.'"' +
			if ($layer==$z.''){echo ' selected' +}
			'>'.$z.'</option>' +
			$z++;
			}
			'</select></div>' +

	//PADDING
	$z='0' +
	$padding='5px' +
	'<div class="smallx">Padding' +
	'<select name="padding">Padding' +
	
			while($z<'101'){
			'<option style="" value="'.$z.'px"' +
			if ($padding==$z.'px'){echo ' selected' +}
			'>'.$z.'px</option>' +
			$z++;
			}
			'</select></div>' +
			
//Opacity
$opacity='1' +
	'<div class="smallx">Opacity' +
	'<select name="opacity">' +
		$i='9' +
			'<option style="" value="1" ' +
			if ($opacity=='1'){echo ' selected' +}
			'>1</option>' +
			
			while($i>'2'){
			'<option style="" value="0.'.$i.'"' +
			if ($opacity=='0.'.$i){echo ' selected' +}
			'>0.'.$i.'</option>' +
			$i--;
			}
		
		'</select></div>' +
		

$radius='0' +
//Border Radius
	$z='0' +
	'<div class="smallx">Round ' +
	'<select name="radius">' +
	
	while($z<'101'){
			'<option value="'.$z.'px"' +
			if ($radius==$z.'px'){echo ' selected' +}
			'>'.$z.'</option>' +
			$z++;
			}
			'</select></div>' +
			
			
			
			
	//Line Height
	$z='0' +
	$lineheight='5px' +
	'<div class="smallx " style="font-size: 10px">Line Height' +
	'<select name="lineheight">' +
	
			while($z<'101'){
			'<option style="" value="'.$z.'px"' +
			if ($lineheight==$z.'px'){echo ' selected' +}
			'>'.$z.'px</option>' +
			$z++;
			}
			'</select></div>' +
	
	
	
	//Letter Spacing
	$z='0' +
	
	'<div class="smallx " style="font-size: 10px">Letter Spacing' +
	'<select name="spacing">' +
	
			while($z<'101'){
			'<option style="" value="'.$z.'px"' +
			if ($spacing==$z.'px'){echo ' selected' +}
			'>'.$z.'px</option>' +
			$z++;
			}
			'</select></div>' +
	
			
	
				

	
		
	
	
'</div>' +
//BACKGROUND COLOR FOR ELEMENT
	'<div class="selex2">' +
	$background='-' +
	' <input style="padding: 0px;  margn: 0px;  height: 28px; width:30px" name="background" id="html5colorpicker" class="form-control" type="color" value="'.$background.'" onchange="clickColor(0, -1, -1, 5)">
	Background Color
	<span style="float:right;"><input name="background" type="checkbox" value="-" ' +
	if($background=='-'){echo 'checked' +}
			'> None</span></div> ' +
			'<div style="clear:both"></div>' +
			


			
		


	
/*
/FLOAT DISABLED
$floaty='none' +
'<div  class="selex">' +
'<select name="floaty">' +
if ($floaty=='-'){$floaty='none' +}
if ($floaty==' '){$floaty='none' +}
	'<option value="none" ' +
	if ($floaty=='none'){echo ' selected' +}
	'>No Float</option>' +

	'<option value="left"' +
	if ($floaty=='left'){echo ' selected' +}
	'>Float Left</option>' +
			
	'<option value="right"' +
	if ($floaty=='right'){echo 'selected' +}
	'>Float Right</option>' +
	
	'</select></div>' +
	*/
	
	'<div style="clear:both"></div>' +
	
	//SUBMIT BUTTON
'<INPUT  style="clear:both; width: 100px; margin:auto; margin-top:20px;" TYPE="submit" name="submitnewelement" VALUE="Add Text">' +
	

'</div>' +

	'</FORM>' +


' <div class="addphoto flippers"><div style="text-align:left; width: 100%;">Upload a Photo</div><FORM ENCTYPE="multipart/form-data"  METHOD="POST" class="dropzone">

<INPUT style="height: 150px; width: 350px; margin-top:20px;" NAME="file" TYPE="file">' +
'<input type="hidden" name="pageID" value="'.$thispage.'">' +
'<p><INPUT style="text-align: center; padding: 10px; margin-top:20px;"  TYPE="submit" name="submitelementphoto" VALUE="UPLOAD File"></FORM></p></div>' +



' <div class="addbox flippers">' +

$thistype=$_GET['type'];
'</script>' +
	'<form method="POST" action="/index.php">' +
	'<div class="alert" ><b></b>
	<input type="text" name="title" value="" placeholder="Box Title">' +
	'<input type="hidden" name="page" value="'.$thispage.'">' +
	'<input type="hidden" name="type" value="'.$thistype.'">' +
	echo $thispagetype;
'</div>' +

	'<input type="submit" name="newpagebox" value="Create Box">' +
	'</form>' +

'</div>');
