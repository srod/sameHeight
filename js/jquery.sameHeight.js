/* sameHeight - jQuery plugin
 * 
 * This plugin is used to set same height on elements on a web page.
 * 
 * How to use:
 * $("#myElement .elements").sameHeight();
 * 
 * Developed with jQuery version: 1.4.3
 * 
 * Version: 0.1
 * Name: sameHeight
 * 
 * Author: Rodolphe Stoclin
 * E-mail: rodolphe@2clics.net
 * Web: http://www.2clics.net
 */
 
(function($){
	$.fn.sameHeight = function(options){
            var defaults = {
            };
            
            settings = $.extend(defaults, options);
            
            var maxHeight = 0;
            
            this.each(function(){
                maxHeight = Math.max(maxHeight, $(this).height());
            });
            
		    this.each(function(){
		        jQuery(this).css({ height: maxHeight + "px" });
		    });
            
            return maxHeight;
		}
	});
})(jQuery);