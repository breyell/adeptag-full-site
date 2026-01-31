<?php

use Timber\Timber;

global $wp_query;

$context = Timber::context();
$context['total_results'] = $wp_query->found_posts;

return Timber::render('templates/search.twig', $context);
