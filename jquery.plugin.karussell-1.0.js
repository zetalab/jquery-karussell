(function( $ ) {
	$.fn.karussell = function(params) {
		var defaults = {
			wipetime: 500,
			pause: 2000
		};

		var config = $.extend(defaults, params);
        var item = 0;

		return this.each(function() {
			var $this = $(this);
			var totalwidth = 0;
			
			var elements = $this.children();
			
			for (var n = 0; n < elements.length; n++) {
				totalwidth += $(elements[n]).width();
			}
			var elemwidth = totalwidth / elements.length;
			var height = $(elements[0]).height();
			var e = $('<div>').attr('id', 'jk_elements' + item.toString())
			                  .width(totalwidth)
			                  .height(height)
			                  .css('position', 'relative');
			e.append(elements.detach());
			var t = $('<div>').attr('id', 'jk_mask' + item.toString())
			                  .width(elemwidth)
			                  .height(height)
			                  .css('overflow', 'hidden');
			t.append(e);
			$this.append(t);
			item++;
			
			animate = function(duration, container) 	{
				var offset = (-elemwidth).toString() + "px";
				container.animate({'left': offset}, duration, function () {		
					container.css({'left': 0});
					var first = container.children(':first').detach();
					container.append(first);
				});

			}
			setInterval(function () { animate(config.wipetime, e); }, config.pause);
			}); // return	
		};
		})( jQuery );