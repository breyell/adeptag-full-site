export default function ($posts) {
	return {
		posts: $posts,
		currentPage: 1,
		perPage: 6,
		get totalPages() {
			return Math.ceil(this.filteredPosts.length / this.perPage)
		},
		get filteredPosts() {
			let filteredPosts = this.posts;

			return filteredPosts
		},
		get displayedPosts() {
			return this.filteredPosts.slice(
				(this.currentPage - 1) * this.perPage,
				this.currentPage * this.perPage
			)
		},
	}
}
