$(document).ready(function () {
    "use strict";
    
	//Revolution Slider
	jQuery('#rev_slider_1').show().revolution({
		/* Options are 'auto', 'fullwidth' or 'fullscreen' */
		sliderLayout: 'auto',
		delay: 4000,
		gridwidth: 1140,
		gridheight: 900,//500
		autoplay:true,
		
		/* Navigation arrows and bullets */
		navigation: {
			onHoverStop:"off",
			arrows: {
				enable: false,
				hide_onleave: false,
				hide_onmobile: true,
				hide_under: 480
			}
		}
	});

	//Revolution Slider
	jQuery('#rev_slider_2').show().revolution({
		/* Options are 'auto', 'fullwidth' or 'fullscreen' */
		sliderLayout: 'auto',
		gridwidth: 1140,
		gridheight: 790,
		autoplay:true,
		onHoverStop: 'off',
		/* Navigation arrows and bullets */
		navigation: {
			arrows: {
				enable: true,
				hide_onleave: false,
				hide_onmobile: true,
				hide_under: 480
			}
		}
	});

});
