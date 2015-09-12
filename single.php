<?php get_header(); ?>

<div id="content" class="row">

  <div id="main" class="<?php simple_boostrap_main_classes(); ?>" role="main">

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

    <?php simple_boostrap_display_post(false); ?>

    <?php comments_template('',true); ?>

    <?php if (get_next_post() || get_previous_post()) { ?>
    <nav class="block">
      <ul class="pager pager-unspaced">
        <li class="previous"><?php previous_post_link('%link', "&laquo; " . __( 'Previous Post', "default")); ?></li>
        <li class="next"><?php next_post_link('%link', __( 'Next Post', "default") . " &raquo;"); ?></li>
      </ul>
    </nav>
    <?php } ?>

    <?php endwhile; ?>

    <?php else : ?>

    <article id="post-not-found" class="block">
        <p><?php _e("No posts found.", "default"); ?></p>
    </article>

    <?php endif; ?>

  </div>

  <?php get_sidebar("left"); ?>
  <?php get_sidebar("right"); ?>

</div>

<?php get_footer(); ?>