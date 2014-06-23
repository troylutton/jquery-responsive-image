/**
 * Basic responsive image plugin. Overrides width/height styles and width/height attributes to make the image responsive.
 */
(function($) {	
	
	$.fn.responsiveImage = function() {
		
		// run through to get natural image size
		$.each(this, function(index, element){			
			
			var image = $(element);
			
			// get the real width from the DOM element
			var originalWidth = this.naturalWidth;
			
			// browsers older than IE8 don't support this property. fallback below
			if (!originalWidth) {
				originalWidth = image.css('width', 'auto').width();				
			}
			
			// Remove the height and width attributes
			image.removeAttr('height');
			image.removeAttr('width');
			
			// add the style just in case
			image.css('width', '100%');
			image.css('height', 'auto');
			
			// set teh max width
			image.css('max-width', originalWidth);
		});	    
	};
	
})(jQuery);
