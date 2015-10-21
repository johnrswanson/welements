$(function() {
	$( "#lightbox" ).draggable({cancel:".ui-sortable",cancel:"form",
	stop: function( z, ui ) {
	$( "#lightbox" ).attr('style', $(this).attr("style") + " width:auto;");
	}
	});
  });

  
    function positionf(e)
    {
    x = e.clientX+window.scrollX;
    y = e.clientY+window.scrollY;        
    document.getElementById("lightbox").style.left=x+"px";
    document.getElementById("lightbox").style.top=y+"px";
}   
  

  $(document).ready(function(){
$('.lightbox_trigger').click(function(e) {
	e.preventDefault();
	$('.secretmenu').slideUp(500);
	var link_href = $(this).attr("href");
	var myoffset = $( this ).offset();
	$('#content').html('loading...');		
	$('#content').load(link_href);
	$('#lightbox').removeAttr('style');
	$('#lightbox').show();
	$('#lightbox').offset( myoffset);
	$('#lightbox').animate({left: "15%"}, 300, "swing" );
	
});


$('.close a').click(function() {
			$('#content').html('');
		$('#lightbox').hide(0);
		
	});
	
}
