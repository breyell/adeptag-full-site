<?php

use Timber\Timber;
use Timber\Post;

/**
 * Class Product
 *
 * Implements custom JSON serialization.
 */
class Event extends Post implements JsonSerializable
{
	/**
	 * Defines data that is used when post is converted to JSON.
	 *
	 * @return array
	 */
	public function jsonSerialize(): mixed
	{
		$image = Timber::get_post($this->image);
		$start_date = DateTime::createFromFormat('Ymd', $this->start_date);

		if ($this->end_date) {
			$end_date = DateTime::createFromFormat('Ymd', $this->end_date);
			if (date_format($start_date, "F") === date_format($end_date, "F")) {
				$date_range = date_format($start_date, "F j") . '–' . date_format($end_date, "j, Y");
			} elseif (date_format($start_date, "Y") === date_format($end_date, "Y")) {
				$date_range = date_format($start_date, "F j") . ' – ' . date_format($end_date, "F j, Y");
			} else {
				$date_range = date_format($start_date, "F j, Y") . ' – ' . date_format($end_date, "F j, Y");
			}
		} elseif ($this->end_date) {
			$start_date = date_format($start_date, "F j, Y");
			$date_range = $start_date;
		} else {
			$date_range = '';
		}

		return [
			'id' => $this->id,
			'title' => $this->title(),
			'link' => $this->link,
			'image' => [
				'src' => $image->src,
				'srcset' => $image->srcset(),
				'alt' => $image->alt,
				'width' => $image->width,
				'height' => $image->height,
			],
			'date' => $this->date,
			'date_range' => $date_range,
			'location' => $this->location,
			'description' => $this->description,
		];
	}
}

// {% if event.end_date %}
// 	{% if event.date_or_start_date|date('F') == event.end_date|date('F') %}
// 	{{ event.date_or_start_date|date('F j') }} - {{ event.end_date|date('j, Y') }}
// 	{% else %}
// 	{{ event.date_or_start_date|date('F j') }} - {{ event.end_date|date('F j, Y') }}
// 	{% endif %}
// {% else %}
// 	<div class="text-body-medium">{{ event.date_or_start_date|date('F j, Y') }}</div>
// {% endif %}
