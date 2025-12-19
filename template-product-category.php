<?php

/**
 * Template Name: Product Category Page
 */

use Timber\Timber;

$context = Timber::context();

$context['products'] = Timber::get_posts([
	'post_type' => 'product',
	'posts_per_page' => -1,
	'orderby' => 'title',
	'order' => 'ASC',
	'tax_query' => $context['post']->product_category ? [
		[
			'taxonomy' => 'product-category',
			'field' => 'term_id',
			'terms' => $context['post']->product_category,
		],
	] : [],
]);

$context['categories'] = Timber::get_terms([
	'taxonomy' => 'product-category',
	'parent' => $context['post']->product_category ?: 0,
]);

$context['top_category_data'] = Timber::get_terms([
	'taxonomy' => 'product-category',
	'parent' => 0,
]);

$context['markets'] = Timber::get_terms([
	'taxonomy' => 'market',
	'parent' => 0,
	'hide_empty' => false,
]);

return Timber::render('templates/product-category.twig', $context);
