export default function ($posts) {
	return {
		posts: $posts,
		currentPage: 1,
		perPage: 12,
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
