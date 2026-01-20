import Alpine from "alpinejs";
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";

export default function () {
	return {
		splide: undefined,
		init() {
			this.splide = new Splide(this.$refs.splide, {
				// fixedWidth: "95%",
				// perPage: 1,
				gap: 24,
				pagination: false,
				lazyLoad: "nearby",
				// // Desktop first
				breakpoints: {
					1024: {
						fixedWidth: "95%",
						gap: 18,
						lazyLoad: "nearby",
					},
				},
			}).mount();
		},
	};
}
