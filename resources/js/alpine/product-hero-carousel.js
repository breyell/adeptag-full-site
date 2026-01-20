import Alpine from "alpinejs";
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";

export default function () {
	return {
		splideMain: undefined,
		splideThumbnails: undefined,
		init() {
			this.splideMain = new Splide(this.$refs.mainSlider, {
				type: "fade",
				heightRatio: 0.5,
				pagination: false,
				arrows: true,
				height: 700,
				lazyLoad: "nearby",

				breakpoints: {
					1024: {
						pagination: true,
						// type: "slide",
						lazyLoad: "nearby",
					},
				},
			});

			this.splideThumbnails = new Splide(this.$refs.thumbnailSlider, {
				direction: "ttb",
				height: 700,
				fixedWidth: "100%",
				fixedHeight: "60px",
				perMove: 1,
				isNavigation: true,
				cover: true,
				pagination: false,
				rewind: true,
				lazyLoad: "nearby",
				gap: 10,
				arrows: false,

				breakpoints: {
					1024: {
						direction: "ltr",
						fixedWidth: "100px",
						fixedHeight: "100px",
					},
				},
			});

			this.splideMain.sync(this.splideThumbnails);
			this.splideMain.mount();
			this.splideThumbnails.mount();
		},
	};
}
