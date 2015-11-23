(function (window) {
	
window.helperadd = function() {
	
		var myoffset = $( this ).offset();
		$('.secretmenu').slideUp(500);	
		$('#lightbox').removeAttr('style');
		$('#lightbox').offset( myoffset);        
        $('#lightbox').show();
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
		cancel:"form",
		stop: function() {
			$( "#lightbox" ).attr('style', $(this).attr("style") + " width:auto;");
			}
	});
});

  
   
  
  }(this));

  	
	

