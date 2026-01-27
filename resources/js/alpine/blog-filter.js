export default function ($posts) {
	return {
		showFilters: true,
		posts: $posts,
		// selectedMarkets: [],
		currentPage: 1,
		perPage: 12,
		width: undefined,
		init() {
			// col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3
			this.$watch("width", () => {
				this.perPage = this.width < 768 ? 4 : 12;
				if (this.width < 768) {
					this.perPage = 6;
				} else if (this.width < 1024) {
					this.perPage = 8;
				} else if (this.width < 1280) {
					this.perPage = 9;
				} else {
					this.perPage = 12;
				}
			});
		},
		pageChange() {
			this.$root.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		},
		get totalPages() {
			return Math.ceil(this.filteredPosts.length / this.perPage);
		},
		get filteredPosts() {
			let filteredPosts = this.posts;

			// if (this.selectedMarkets.length) {
			// 	const selectedMarketsSet = new Set(this.selectedMarkets)
			// 	filteredPosts = filteredPosts.filter((product) => {
			// 		const set1 = new Set(product.markets)
			// 		return !!set1.intersection(selectedMarketsSet).size
			// 	})
			// }

			return filteredPosts;
		},
		get displayedPosts() {
			return this.filteredPosts.slice(
				(this.currentPage - 1) * this.perPage,
				this.currentPage * this.perPage,
			);
		},
	};
}
