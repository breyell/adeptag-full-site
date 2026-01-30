import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import resize from "@alpinejs/resize";
import collapse from "@alpinejs/collapse";
import Toolkit from "@alpine-collective/toolkit";

import autoAnimate from "@formkit/auto-animate";

import plyr from "./resources/js/alpine/plyr.js";
import blogFilter from "./resources/js/alpine/blog-filter.js";
import newsFilter from "./resources/js/alpine/news-filter.js";
import eventFilter from "./resources/js/alpine/event-filter.js";
import pressFilter from "./resources/js/alpine/press-filter.js";
import storyFilter from "./resources/js/alpine/story-filter.js";
import productFilter from "./resources/js/alpine/product-filter.js";
import testimonialCarousel from "./resources/js/alpine/testimonial-carousel.js";
import productHeroCarousel from "./resources/js/alpine/product-hero-carousel.js";
import lineProductAccordion from "./resources/js/alpine/line-product-accordion.js";
import successStoriesCarousel from "./resources/js/alpine/success-stories-carousel.js";
import productHeroCarouselVideo from "./resources/js/alpine/product-hero-carousel-video.js";
import successStoriesCarouselVideo from "./resources/js/alpine/success-stories-carousel-video.js";
import productSpecificationsCarousel from "./resources/js/alpine/product-specifications-carousel.js";

Alpine.plugin([Toolkit, focus, resize, collapse]);

window.Alpine = Alpine;

Alpine.data("plyr", plyr);
Alpine.data("blogFilter", blogFilter);
Alpine.data("newsFilter", newsFilter);
Alpine.data("eventFilter", eventFilter);
Alpine.data("pressFilter", pressFilter);
Alpine.data("storyFilter", storyFilter);
Alpine.data("productFilter", productFilter);
Alpine.data("testimonialCarousel", testimonialCarousel);
Alpine.data("productHeroCarousel", productHeroCarousel);
Alpine.data("lineProductAccordion", lineProductAccordion);
Alpine.data("successStoriesCarousel", successStoriesCarousel);
Alpine.data("productHeroCarouselVideo", productHeroCarouselVideo);
Alpine.data("successStoriesCarouselVideo", successStoriesCarouselVideo);
Alpine.data("productSpecificationsCarousel", productSpecificationsCarousel);

Alpine.directive("auto-animate", (el, { expression }, { evaluate }) => {
	autoAnimate(el, (expression && evaluate(expression)) || {});
});

Alpine.start();
