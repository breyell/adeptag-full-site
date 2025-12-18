<?php

/**
 * Template Name: Product Category Page
 */

use Timber\Timber;

$context = Timber::context();

return Timber::render('templates/product-category.twig', $context);
