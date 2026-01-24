export default function ($posts) {
	return {
		activeIndex: 1,
		items: {},
		lineDrawingBottom: undefined,
		updateLineDrawingBottom() {
			this.lineDrawingBottom =
				this.$refs.lineDrawing.getBoundingClientRect().bottom;
		},
		scrollToProduct(slug) {
			const element = this.$root.querySelector(`[data-slug='${slug}']`);
			console.log(element);
			console.log(element.getBoundingClientRect());
			console.log(window.scrollY);
			// window.scrollTo(0, window.scrollY + element.getBoundingClientRect().y);
			// console.log();
			const lineDrawingHeight =
				this.$refs.lineDrawing.getBoundingClientRect().height;
			window.scrollBy(
				0,
				element.getBoundingClientRect().top -
					element.getBoundingClientRect().height -
					lineDrawingHeight,
			);
			// document.getElementById("wpadminbar");
		},
		init() {},
	};
}
