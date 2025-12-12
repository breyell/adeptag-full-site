<?php

use Timber\Timber;

$context = Timber::context();

// if (is_404()) {
//     Timber::render('templates/404.twig', Timber::context());
// }

if (get_post_type() === 'product') {
	return Timber::render('templates/product.twig', $context);
}

return Timber::render('templates/page-builder.twig', $context);
