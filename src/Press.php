<?php

use Timber\Timber;
use Timber\Post;

/**
 * Class Product
 *
 * Implements custom JSON serialization.
 */
class Press extends Post implements JsonSerializable
{
	/**
	 * Defines data that is used when post is converted to JSON.
	 *
	 * @return array
	 */
	public function jsonSerialize(): mixed
	{
		$logo = Timber::get_post($this->logo);

		return [
			'id' => $this->id,
			'title' => $this->title(),
			'link' => $this->link(),
			'logo' => [
				'src' => $logo->src,
				'srcset' => $logo->srcset(),
				'alt' => $logo->alt,
				'width' => $logo->width,
				'height' => $logo->height,
			],
			'date' => $this->date,
			'description' => $this->description,
			'url' => $this->url ?? '',
		];
	}
}
