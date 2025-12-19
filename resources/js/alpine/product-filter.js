export default function ($products) {
	return {
		showFilters: true,
		products: $products,
		selectedMarkets: [],
		currentPage: 1,
		perPage: 12,
		queryParams: new URLSearchParams(window.location.search),
		query: '',
		start() {
			// Set query params to variables
			if (this.queryParams.get('pg')) {
				if (parseInt(this.queryParams.get('pg')) > this.totalPages) {
					this.currentPage = this.totalPages
					this.updateUrl()
				} else {
					this.currentPage = parseInt(this.queryParams.get('pg'))
				}
			}

			// Watch filter options and upadte url on change
			this.$watch('selectedMarkets', (value, oldValue) => {
				if (value.length > oldValue.length) {
					const difference = value.filter(x => !oldValue.includes(x))[0]
					dataLayer.push({
						'event': 'filter_click',
						'market': difference,
					})
				}
				this.updateUrl()
				this.currentPage = 1
			})
			this.$watch('currentPage', () => this.updateUrl())
		},
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
		updateUrl() {
			this.$nextTick(() => {
				if (this.selectedMarkets.length) {
					this.queryParams.set('markets', this.selectedMarkets.join(','))
				} else {
					this.queryParams.delete('markets')
				}

				if (this.currentPage != 1) {
					this.queryParams.set('pg', this.currentPage)
				} else {
					this.queryParams.delete('pg')
				}

				if (this.queryParams.size === 0) {
					window.history.replaceState(
						{},
						'',
						window.location.protocol.concat(
							'//',
							window.location.host,
							window.location.pathname
						)
					)
				} else {
					window.history.replaceState({}, '', `?${this.queryParams.toString()}`)
				}
			})
		},
		getUrl(newPage) {
			let tempQueryParams = this.queryParams

			if (newPage != 1) {
				this.queryParams.set('pg', newPage)
			} else {
				this.queryParams.delete('pg')
			}

			if (tempQueryParams.size === 0) {
				return window.location.protocol.concat(
					'//',
					window.location.host,
					window.location.pathname
				)
			}

			return '?' + this.queryParams.toString()
		}
	}
}
