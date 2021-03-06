/**
 * Sap v1.0.4
 * 
 * Inspired by Contained Sticky Scroll v1.1 By Matt Ward
 * http://blog.echoenduring.com/2010/11/15/freebie-contained-sticky-scroll-jquery-plugin/
 *
 * (c) 2011 Forrst, LLC
 * Modified by Tony Stuck - Feb. 5, 2012
 */
 
(function($) {

	$.fn.sap = function(options) {

		var defaults = {
			activeClass : 'sappy',
			distanceFromTheTop: 0,
			top : ''
		};

		options = $.extend(defaults, options);
		
		var $objizzle = $(this);
		
		if (!$objizzle.length) return;
		
		var oldTop    = $objizzle.offset().top,
			oldPos    = $objizzle.css('position'),
			width     = $objizzle.width() + 'px',
			$shim     = $('<div class="sap-shimy-shim"></div>'),
			theWindow = $(window),
			theDoc    = $(document);

		theWindow.scroll(function() {

			var top = theWindow.scrollTop();
			
			if ((top + options.distanceFromTheTop + $objizzle.height()) < (theDoc.height() - theWindow.height()) && (top + options.distanceFromTheTop) > $objizzle.offset().top)        
			{
				$objizzle.css({
					position: 'fixed',
					width: options.width ? options.width : width,
					top: options.distanceFromTheTop + 'px'
				}).addClass(options.activeClass);

				$shim.css({width: width, height: $objizzle.height()});

				$objizzle.before($shim);
			}
			else if (top + options.distanceFromTheTop < oldTop) 
			{
				$shim.remove();
				$objizzle.css({
					position: oldPos,
					width: options.width ? options.width : width,
					top: '' 
				}).removeClass(options.activeClass);
			}
		});
	};
}(jQuery));