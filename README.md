# jQuery Karussell

Karussell is just another carousel plugin for jQuery. Contrary to other plugins it offers continuous carousel playback without skipping back to the first frame. 

## Features
* jQuery plugin for carousel without skipping back to start
* chainable
* just basic functionality, if you want more, go ahead, fork and send a PR
	
## Usage
	
Include "jquery.plugin.karussell-1.0.js" in your HTML like so:

		<script src="jquery.plugin.karussell-1.0.js" type="text/javascript" charset="utf-8"></script>

Call .karussell() on the &lt;div&gt; that contains the individual carousel frames (enclosed by &lt;div&gt;s preferrably):

		$('#k1').karussell();
		<div id="k1">
	       	<div class="data"><img src="pano1.jpg"></div>
	       	<div class="data"><img src="pano2.jpg"></div>
			<div class="data"><img src="pano3.jpg"></div>
		</div>
	
Optionally, Karussell supports two parameters, "wipetime" and "pause", indicating the time for sliding a frame and the pause, respectively:

		$('#k1').karussell({wipetime: 500, pause: 2000});
	
## Example

see the plugin in action on http://ok200.org/carousel

## License 

jQuery Karussell is licensed under the MIT License
