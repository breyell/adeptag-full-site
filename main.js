import Alpine from 'alpinejs'
// import focus from '@alpinejs/focus'
// import resize from '@alpinejs/resize'
import collapse from '@alpinejs/collapse'

import autoAnimate from '@formkit/auto-animate'

import plyr from './resources/js/alpine/plyr.js'
import productFilter from './resources/js/alpine/product-filter.js'
import testimonialCarousel from './resources/js/alpine/testimonial-carousel.js'
import productHeroCarousel from './resources/js/alpine/product-hero-carousel.js'
import successStoriesCarousel from './resources/js/alpine/success-stories-carousel.js'
import productHeroCarouselVideo from './resources/js/alpine/product-hero-carousel-video.js'
import successStoriesCarouselVideo from './resources/js/alpine/success-stories-carousel-video.js'

Alpine.plugin([collapse])
// Alpine.plugin([focus, resize, collapse])

window.Alpine = Alpine

Alpine.data('plyr', plyr)
Alpine.data('productFilter', productFilter)
Alpine.data('testimonialCarousel', testimonialCarousel)
Alpine.data('productHeroCarousel', productHeroCarousel)
Alpine.data('successStoriesCarousel', successStoriesCarousel)
Alpine.data('productHeroCarouselVideo', productHeroCarouselVideo)
Alpine.data('successStoriesCarouselVideo', successStoriesCarouselVideo)

Alpine.directive('auto-animate', (el, { expression }, { evaluate }) => {
	autoAnimate(el, (expression && evaluate(expression)) || {})
})

Alpine.start()
