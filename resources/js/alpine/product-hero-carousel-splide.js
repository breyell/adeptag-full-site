import Alpine from 'alpinejs'
import Splide from '@splidejs/splide'
import { Video } from '@splidejs/splide-extension-video'
import '@splidejs/splide/css'
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';

export default function () {
	return {
		splideMain: undefined,
		splideThumbnails: undefined,
		// currentSlide: 0,
		// totalSlides: undefined,
		init() {
			var main = new Splide( '#main-slider', {
				type       : 'fade',
				heightRatio: 0.5,
				pagination : false,
				arrows     : false,
				height: 700,
				// cover      : true,
				// video: {
				// 	loop: false,
				// 	mute: false,
				// }
			} )
			.mount( { Video } )

			var thumbnails = new Splide( '#thumbnail-slider', {
				type: "loop",
				focus: "center",
				direction: "ttb",
				height: "100%",
				perPage: 3,
				wheel: true,
				fixedWidth: 66,
				fixedHeight: 38
			} )

			main.sync( thumbnails )
			main.mount()
			thumbnails.mount()
		},
	}
}
