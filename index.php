<?php

use Timber\Timber;

$context = Timber::context();

if (is_404()) {
	return Timber::render('templates/404.twig', Timber::context());
}

if (get_post_type() === 'product') {
	return Timber::render('templates/product.twig', $context);
}

if (get_post_type() === 'blog') {
	return Timber::render('templates/blog.twig', $context);
}

return Timber::render('templates/page-builder.twig', $context);
