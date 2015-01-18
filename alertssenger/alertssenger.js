	
	/*
		Alertssenger
		https://github.com/RDmitriev/Alertssenger
	*/
	
	(function ( $ ) {
		$.fn.alertplugin = function( options ) {
			var settings = $.extend( {
				'message' : 'Hello!',
				'color' : '#fff',
				'background' : '#37b3d9'
			}, options);
			
			this.append('<div class="alert"><span>' + settings.message + '</span></div>');
			
			$('.alert').css('color', settings.color);
			$('.alert').css('background', settings.background);
			$('.alert').css('position', 'fixed');
			$('.alert').css('top', '0');
			$('.alert').css('width', '100%');
			$('.alert').css('text-align', 'center');
			$('.alert').css('padding', '14px');
			$('.alert').css('z-index', '1');
			
			$('.alert').hide();
			$('.alert').slideDown();
			
			setTimeout(function() {
				
			$( ".alert" ).animate({
				opacity: 0.25,
				top: "-=48"
				}, 5000, function() {
			});
			}, 3000);
		};
	}( jQuery ));