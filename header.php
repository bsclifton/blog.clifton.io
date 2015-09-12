<!doctype html>

<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

  <?php wp_head(); ?>

  <link rel="stylesheet" href="https://clifton.io/vendor/bootstrap-3.3.4-dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://clifton.io/styles/app.css">
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
            <a class="navbar-brand" title="<?php bloginfo('description'); ?>" href="https://clifton.io/"><?php bloginfo('name'); ?></a>
          </div>

          <?php if (has_nav_menu("main_nav")): ?>
          <div id="navbar-responsive-collapse" class="collapse navbar-collapse">
            <?php
                simple_bootstrap_display_main_menu();
            ?>
            <ul class="nav navbar-nav navbar-right">
              <li class="active"><a href="https://blog.clifton.io">blog</a></li>
              <li><a href="https://bugs.clifton.io">bugs</a></li>
            </ul>
          </div>
          <?php endif ?>

        </div>
      </nav>
    </header>

    <div id="page-content">
      <div class="container">
