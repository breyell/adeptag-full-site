<?php

use Timber\Timber;
use Timber\Post;

/**
 * Class Product
 *
 * Implements custom JSON serialization.
 */
class Product extends Post implements JsonSerializable
{
	/**
	 * Defines data that is used when post is converted to JSON.
	 *
	 * @return array
	 */
	public function jsonSerialize(): mixed
	{
		$image = Timber::get_post($this->thumbnail());

		$parent_product_category_ids = array_column($this->terms([
			'taxonomy' => 'product-category',
			'parent' => 0,
		]), 'id');

		$parent_product_category_tags = array_map(
			fn($term_id) => get_field('tag', 'term_' . $term_id),
			$parent_product_category_ids
		);

		return [
			'id' => $this->id,
			'title' => $this->title(),
			'link' => $this->link(),
			'image' => [
				'src' => $image->src,
				'srcset' => $image->srcset(),
				'alt' => $image->alt,
				'width' => $image->width,
				'height' => $image->height,
			],
			'overview' => $this->hero_overview,
			'parent_product_category_tags' => $parent_product_category_tags,
			'markets' => array_column($this->terms('market'), 'slug'),
		];
	}
}
