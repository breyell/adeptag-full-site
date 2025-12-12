import Alpine from 'alpinejs'
import Splide from '@splidejs/splide'

import '@splidejs/splide/css'

export default function () {
	return {
		splideMain: undefined,
		splideThumbnails: undefined,
		// currentSlide: 0,
		// totalSlides: undefined,
		init() {
			var main = new Splide( '#main-slider', {
				type:         	'fade',
				heightRatio:	0.5,
				pagination:		false,
				arrows:			false,
				height:			700,
				arrows:			false,
				lazyLoad:    	"nearby",
				// cover      : true,
				// video: {
				// 	loop: false,
				// 	mute: false,
				// }
			} )
			// .on('move', function(newIndex, prevIndex, destIndex) {
			// 	// console.log('change slide')
			// 	// console.log(prevIndex)
			// })

			window.main = main
			// .mount( { Video } )

			var thumbnails = new Splide( '#thumbnail-slider', {
				// type: "slide",
				direction: "ttb",
				height: 700,
				// perPage: 4,
				fixedWidth: '100%',
				fixedHeight: '50px',
				perMove: 1,
				// focus: "center",
				isNavigation: true,
				cover: true,
				pagination: false,
				rewind: true,
				lazyLoad: "nearby",
				gap: 10,
				arrows: false,
			} )

			main.sync( thumbnails )
			main.mount()
			thumbnails.mount()
		},
	}
}
