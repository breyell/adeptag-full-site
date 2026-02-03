export default function () {
	return {
		activeIndex: 1,
		lineOpen: false,
		// items: {},
		// lineDrawingBottom: 209,
		// // lineDrawingBottom: 369,
		// edgeWidth: 8,
		// width: 0,
		// init() {
		// 	this.$watch("width", (value, oldValue) => {
		// 		// These values should align with grid-padding in peak.css
		// 		if (this.width < 480) {
		// 			this.edgeWidth = 8;
		// 		} else if (this.width >= 480) {
		// 			this.edgeWidth = 12;
		// 		} else if (this.width >= 640) {
		// 			this.edgeWidth = 16;
		// 		} else if (this.width >= 768) {
		// 			this.edgeWidth = 20;
		// 		} else if (this.width >= 1024) {
		// 			this.edgeWidth = 32;
		// 		}
		// 	});
		// 	if (this.width < 1024) {
		// 		this.$watch("activeIndex", (value, oldValue) => {
		// 			const element = this.$refs.lineDrawingButtons.querySelector(
		// 				`[data-button-slug='${this.items[value].slug}']`,
		// 			);
		// 			const left = element.offsetLeft;
		// 			this.$refs.lineDrawingScroller.scrollTo({
		// 				top: 0,
		// 				left: left - 12,
		// 				behavior: "smooth",
		// 			});
		// 		});
		// 	}
		// },
		// updateActiveItem() {
		// 	for (const key in this.items) {
		// 		if (this.items[key].bottom >= this.lineDrawingBottom) {
		// 			this.activeIndex = parseInt(key);
		// 			return;
		// 		}
		// 	}
		// },
		// scrollToProduct(slug) {
		// 	const element = this.$root.querySelector(`[data-slug='${slug}']`);
		// 	element.scrollIntoView({
		// 		behavior: "smooth",
		// 		block: "start",
		// 		inline: "nearest",
		// 	});
		// },
	};
}
