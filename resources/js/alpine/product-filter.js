export default function ($products) {
	return {
		showFilters: true,
		products: $products,
		selectedMarkets: [],
		currentPage: 1,
		perPage: 12,
		get totalPages() {
			return Math.ceil(this.filteredProducts.length / this.perPage)
		},
		get filteredProducts() {
			let filteredProducts = this.products;

			if (this.selectedMarkets.length) {
				const selectedMarketsSet = new Set(this.selectedMarkets)
				filteredProducts = filteredProducts.filter((product) => {
					const set1 = new Set(product.markets)
					return !!set1.intersection(selectedMarketsSet).size
				})
			}

			return filteredProducts
		},
		get displayedProducts() {
			return this.filteredProducts.slice(
				(this.currentPage - 1) * this.perPage,
				this.currentPage * this.perPage
			)
		},
	}
}
