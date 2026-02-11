export default function ($products) {
	return {
		showFilters: false,
		products: $products,
		selectedMarkets: [],
		currentPage: 1,
		perPage: 12,
		width: undefined,
		init() {
			this.$watch("width", () => {
				this.perPage = this.width < 768 ? 4 : 12;
				if (this.width < 370) {
					this.perPage = 4;
				} else if (this.width < 1024) {
					this.perPage = 6;
				} else if (this.width < 1280) {
					this.perPage = 9;
				} else {
					this.perPage = 12;
				}
			});

			this.$watch("selectedMarkets", (value, oldValue) => {
				if (value.length > oldValue.length) {
					const difference = value.filter((x) => !oldValue.includes(x))[0];
					dataLayer.push({
						event: "filter_click",
						market: difference,
					});
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
			return Math.ceil(this.filteredProducts.length / this.perPage);
		},
		get filteredProducts() {
			let filteredProducts = this.products;

			if (this.selectedMarkets.length) {
				const selectedMarketsSet = new Set(this.selectedMarkets);
				filteredProducts = filteredProducts.filter((product) => {
					const set1 = new Set(product.markets);
					return !!set1.intersection(selectedMarketsSet).size;
				});
			}

			return filteredProducts;
		},
		get displayedProducts() {
			return this.filteredProducts.slice(
				(this.currentPage - 1) * this.perPage,
				this.currentPage * this.perPage,
			);
		},
	};
}
