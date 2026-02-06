<?php

use Timber\Timber;
use Timber\Post;

/**
 * Class Product
 *
 * Implements custom JSON serialization.
 */
class Blog extends Post implements JsonSerializable
{
	/**
	 * Defines data that is used when post is converted to JSON.
	 *
	 * @return array
	 */
	public function jsonSerialize(): mixed
	{
		$image = Timber::get_post($this->featured_image);

		return [
			'id' => $this->id,
			'title' => $this->title(),
			'link' => $this->link(),
			'featured_image' => [
				'src' => $image->src,
				'srcset' => $image->srcset(),
				'alt' => $image->alt,
				'width' => $image->width,
				'height' => $image->height,
			],
			'article_preview' => $this->article_preview,
			'date' => $this->date,
			'crop_image' => $this->crop_image,
		];
	}
}
