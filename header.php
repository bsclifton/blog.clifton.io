<!doctype html>

<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <div id="content-wrapper">
    <header>
      <nav class="navbar navbar-default navbar-static-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <?php if (has_nav_menu("main_nav")): ?>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-responsive-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <?php endif ?>
            <a class="navbar-brand" title="<?php bloginfo('description'); ?>" href="https://clifton.io/" data-event-category="navigation-menu" data-event-action="home">
              <?php bloginfo('name'); ?>
            </a>
          </div>
          <?php if (has_nav_menu("main_nav")): ?>
          <div id="navbar-responsive-collapse" class="collapse navbar-collapse">
            <?php simple_bootstrap_display_main_menu(); ?>
          </div>
          <?php endif ?>

        </div>
      </nav>
    </header>

    <div id="page-content">
      <div class="container">