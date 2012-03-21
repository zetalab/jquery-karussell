#jQuery Karussell

Karussell is just another carousel plugin for jQuery. Contrary to other plugins it offers a continuous carousel playback without skipping back to the first frame. 

##Features
* jQuery plugin for carousel without skipping back to start
* chainable
* just basic functionality, if you want more, go ahead, fork and tell me to pull
	
##Usage
	
Include "jquery.plugin.karussell-1.0.js" in your HTML like so:

		<script src="jquery.plugin.karussell-1.0.js" type="text/javascript" charset="utf-8"></script>

Call .karussell() on the <div> that contains the individual carousel frames (enclosed by <div>s preferrably):

		$('#k1').karussell();
		<div id="k1">
	       	<div class="data"><img src="pano1.jpg"></div>
	       	<div class="data"><img src="pano2.jpg"></div>
			<div class="data"><img src="pano3.jpg"></div>
		</div>
	
Optionally, Karussel supports two parameters, "wipetime" and "pause", indicating the time for sliding a frame and the pause, respectively:

		$('#k1').karussell({wipetime: 500, pause: 2000});
	

