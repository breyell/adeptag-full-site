import Alpine from 'alpinejs'
import Splide from '@splidejs/splide'

import '@splidejs/splide/css'

export default function () {
	return {
		splide: undefined,
		init() {
			this.splide = new Splide( this.$refs.splide, {
				fixedWidth: 414,
				gap: 24,
				pagination: false,
				lazyLoad: "nearby",
				// Desktop first
				breakpoints: {
					1024: {
						fixedWidth: 264,
					}
				}
			} ).mount()
		},
	}
}
