
 
$(document).ready(function(){
	var url="list/listdata.php";
	$.getJSON(url,function(json){
	// loop through the members here
		$.each(json.listinfo,function(i,ldat){
		$("#listcontent").html(
		'<div class="list">Your List<br>'+
		'<p> title: '+ldat.title+'</p>'+
		'<p>link  '+ldat.link+'</p>'+
		'</div>'
		);
		});
	});
	});


