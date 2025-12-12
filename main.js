import Alpine from 'alpinejs'
// import focus from '@alpinejs/focus'
// import resize from '@alpinejs/resize'
import collapse from '@alpinejs/collapse'

import autoAnimate from '@formkit/auto-animate'

import plyr from './resources/js/alpine/plyr.js'
import testimonialCarousel from './resources/js/alpine/testimonial-carousel.js'
import productHeroCarousel from './resources/js/alpine/product-hero-carousel.js'
import productHeroCarouselVideo from './resources/js/alpine/product-hero-carousel-video.js'

Alpine.plugin([collapse])
// Alpine.plugin([focus, resize, collapse])

window.Alpine = Alpine

Alpine.data('plyr', plyr)
Alpine.data('testimonialCarousel', testimonialCarousel)
Alpine.data('productHeroCarousel', productHeroCarousel)
Alpine.data('productHeroCarouselVideo', productHeroCarouselVideo)

Alpine.directive('auto-animate', (el, { expression }, { evaluate }) => {
	autoAnimate(el, (expression && evaluate(expression)) || {})
})

Alpine.start()
