<?php

add_shortcode('button_link', 'button_link');
function button_link($atts, $text = '')
{
	return Timber::compile('shortcodes/button-link.twig', [
		'url' => $atts['url'],
		'text' => $text,
	]);
}
