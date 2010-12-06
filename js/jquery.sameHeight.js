/* sameHeight - jQuery plugin
 * 
 * This plugin is used to set same height on elements on a web page.
 * 
 * How to use:
 * $("#myElement .elements").sameHeight({
 * 		noResize: false,
 * 		numberPerLine: 3,
 * 		classFirst: "first",
 * 		classLast: "last"
 * });
 * 
 * Usage for no lines :
 * 
 * numberPerLine: 0
 * 
 * 
 * Developed with jQuery version: 1.4.4
 * 
 * Version: 0.3
 * Name: sameHeight
 * 
 * Author: Rodolphe Stoclin
 * E-mail: rodolphe@2clics.net
 * Web: http://www.2clics.net
 */
 
(function($){
	$.fn.sameHeight = function(options){
        var defaults = {
        	noResize: false,
        	numberPerLine: 3,
        	classFirst: "first",
        	classLast: "last"
        };
        
        settings = $.extend(defaults, options);
        
        // How many lines ?
        var totalItems = this.size();
        var loop = totalItems / settings.numberPerLine;
        
        var setHeight = function(elt, k){
	        var maxHeight = 0, j = 0;
			var start = (k == 0) ? k : k * settings.numberPerLine;
	        var end = (settings.numberPerLine === 0) ? totalItems : start + settings.numberPerLine;
        	
        	if(!settings.noResize){
		        elt.slice(start, end).each(function(){
		            maxHeight = Math.max(maxHeight, $(this).height());
		        });
	        }
	        
		    elt.slice(start, end).each(function(){
		        if(!settings.noResize) jQuery(this).css({ height: maxHeight + "px" });
		        
		        // Set first class
	            if(j === 0 && settings.classFirst){
	            	jQuery(this).addClass(settings.classFirst);
	            }
		        
		        // Set last class
		        var last = (settings.numberPerLine === 0) ? totalItems : settings.numberPerLine;
	            if((j+1) === last  && settings.classLast){
	            	jQuery(this).addClass(settings.classLast);
	            	j = -1;
	            }
	            
	            j++;
		    });
        };
        
        if(settings.numberPerLine > 0){
	        // For each lines
	        for(k=0; k<loop; k++){
	        	setHeight(this, k);
	        }
        } else {
	        setHeight(this, 0);
        }
        
        return true;
	};
})(jQuery);