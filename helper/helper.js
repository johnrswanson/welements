(function (window) {
	
window.helperadd = function() {
	
		var myoffset = $( this ).offset();
		$('.secretmenu').slideUp(500);	
		$('#lightbox').removeAttr('style');
		$('#lightbox').show();
		$('#lightbox').offset( myoffset);
		$('#lightbox').animate({left: "15%"}, 300, "swing" );
	
	}
	
	window.helperdelete = function() {
	
		var myoffset = $( this ).offset();
		$('#content').html('Press X to delete any item');		
		$('#lightbox').removeAttr('style');
		$('#lightbox').show();
		$('#lightbox').offset( myoffset);
		$('#lightbox').animate({left: "15%"}, 300, "swing" );
	
	}

window.closehelper= function() {
		$('#content').html('');
		$('#lightbox').hide(0);
		
	}


$(function() {
	$( "#lightbox" ).draggable({
		cancel:".ui-sortable",
		cancel:"form",
		stop: function( z, ui ) {
			$( "#lightbox" ).attr('style', $(this).attr("style") + " width:auto;");
			}
	});});

  
    function positionf(e)
    {
	    x = e.clientX+window.scrollX;
	    y = e.clientY+window.scrollY;        
	    document.getElementById("lightbox").style.left=x+"px";
	    document.getElementById("lightbox").style.top=y+"px";
	}  


  
  }(this));


  	
	

