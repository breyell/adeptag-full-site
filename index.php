<?php

use Timber\Timber;

$context = Timber::context();

if (is_404()) {
	$context['post'] = get_field('navigation_color_404', 'option');
	return Timber::render('templates/404.twig', $context);
}

if (get_post_type() === 'product') {
	if ($parent_page_id = Timber::get_term(yoast_get_primary_term_id('product-category', $context['post']->id))?->category_page) {
		$breadcrumbs = [];
		do {
			$parent_page = Timber::get_post($parent_page_id);
			array_unshift($breadcrumbs, $parent_page);
			$parent_page_id = $parent_page->post_parent;
		} while ($parent_page_id !== 0);
		$context['breadcrumbs'] = $breadcrumbs;
	}

	if ($parent_term_id = yoast_get_primary_term_id('product-category', $context['post']->id)) {
		do {
			$parent_term = Timber::get_term($parent_term_id);
			$parent_term_id = $parent_term->parent;
		} while ($parent_term_id != 0);
		$context['top_category'] = $parent_term;
	}
	return Timber::render('templates/product.twig', $context);
}

if (get_post_type() === 'line') {
	$context['post']->navigation_color = 'transparent';
	return Timber::render('templates/line.twig', $context);
}

if (get_post_type() === 'blog') {
	return Timber::render('templates/blog.twig', $context);
}

if (get_post_type() === 'news') {
	return Timber::render('templates/news-article.twig', $context);
}

if (get_post_type() === 'success-story') {
	$context['post']->navigation_color = 'transparent';
	return Timber::render('templates/success-story.twig', $context);
}

return Timber::render('templates/page-builder.twig', $context);
