<?php

use Timber\Timber;
use Timber\Post;

/**
 * Class Product
 *
 * Implements custom JSON serialization.
 */
class SuccessStory extends Post implements JsonSerializable
{
	/**
	 * Defines data that is used when post is converted to JSON.
	 *
	 * @return array
	 */
	public function jsonSerialize(): mixed
	{
		$image = Timber::get_post($this->thumbnail());

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
			'company' => $this->meta_company,
			'project' => $this->meta_project,
			'preview' => $this->meta_preview,
		];
	}
}
