<?php

use Timber\Timber;
use Timber\Post;

/**
 * Class Product
 *
 * Implements custom JSON serialization.
 */
class NewsArticle extends Post implements JsonSerializable
{
	/**
	 * Defines data that is used when post is converted to JSON.
	 *
	 * @return array
	 */
	public function jsonSerialize(): mixed
	{
		return [
			'id' => $this->id,
			'title' => $this->title(),
			'link' => $this->link(),
			'date' => $this->date,
		];
	}
}
