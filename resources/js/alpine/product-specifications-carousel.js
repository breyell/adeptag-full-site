import Alpine from "alpinejs";
import Splide from "@splidejs/splide";

import "@splidejs/splide/css";

export default function () {
	return {
		splide: undefined,
		activeIndex: 0,
		init() {
			this.splide = new Splide(this.$refs.splide, {
				type: "fade",
				pagination: false,
				arrows: false,
				drag: false,
			});

			this.splide.mount();

			this.splide.on("moved", (newIndex) => (this.activeIndex = newIndex));
		},
	};
}
