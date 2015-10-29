 
$(document).ready(function(){
	var login='y';

	$(function() {$("#navcontent ul").sortable({
		opacity: 0.6,  forcePlaceholderSize: true, delay: 0, forceHelperSize: true, cursor: 'move',
		update: function() {
			$("#navactions").html('');
			var pageorder = $(this).sortable("serialize") + '&action=updatePageOrder'; 
			$.post("navigation/confirm.php", pageorder, function(theResponse)
				{	window.helperadd();
					$('#lightbox>#content').html('Page Order Saved');
					$('#lightbox').fadeOut(2000);
				});
		
			}
		});
	
	//$( "#navcontent a" ).disableSelection();
	});

});