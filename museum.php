<?php 
ob_start();
?>
<?php
  global $current_page;
  $current_page = "page-museum";
  $page_title = "Museum";
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
<head>
  <?php include 'includes/head.php'; ?>
</head>

<body class="<?php echo $current_page; ?>"> <!-- home-expand-header-version -->
  <!-- only the home page has the class home-expand-header-version by default -->

  <?php include "includes/preloader.php"; ?>

  <?php include "includes/header_desktop.php"; ?>
  <?php include "includes/header_mobile.php"; ?>

  <div class="header-desktop-spacer"></div>

  <div id="page-wrapper">
    <div id="page-wrapper-content">

      <!--
         ____    _    _   _ _   _ _____ ____
        | __ )  / \  | \ | | \ | | ____|  _ \
        |  _ \ / _ \ |  \| |  \| |  _| | |_) |
        | |_) / ___ \| |\  | |\  | |___|  _ <
        |____/_/   \_\_| \_|_| \_|_____|_| \_\

      -->

      <article id="page-default-banner-section" class="">

        <div id="page-default-banner-slider" class="sgpool-slick-slider">
          
          <!-- 
              __________________  ___   ____ ___
             /  _/_  __/ ____/  |/  /  / __ <  /
             / /  / / / __/ / /|_/ /  / / / / /
           _/ /  / / / /___/ /  / /  / /_/ / /
          /___/ /_/ /_____/_/  /_/   \____/_/

          -->

          <div class="page-default-banner-slider-item">
            <div id="page-default-banner-image" class="short-banner visible-lg visible-md">
              <div class="manic-image-container">
                <img src="" data-image-desktop="images_cms/museum/museum-banner-01.jpg">
              </div>
            </div>

            <div id="page-default-banner-image-mobile" class="visible-sm visible-xs">
              <div class="manic-image-container">
                <img src="" data-image-tablet="images_cms/museum/museum-banner-01-tablet.jpg"
                            data-image-mobile="images_cms/museum/museum-banner-01-mobile.jpg">
              </div>
            </div>

            <div id="page-default-banner-caption-container" class="museum-version">
              <div class="container-fluid">
                <div class="row">                  

                  <div class="col-md-12">

                    <div id="page-default-banner-copy">
                      <h2>Museum</h2>
                      <p>From sweep tickets to old posters of the 60s, bringing you <br class="hidden-xs hidden-sm"> a collection of nostalgic memories of our 50 years.</p>
                    </div> <!-- page-default-banner-logo -->

                  </div>
                </div>
              </div>
            </div> <!-- page-default-banner-logo-container -->

          </div>
        </div>

      </article>

      <article id="page-museum-grid-section">
        <div class="container-fluid">
          
          <div class="row">
            <div class="col-md-12">
              
              <div id="masonry-container-01" class="masonry-container-01 masonry-container">
                <div class="item" data-width="806" data-height="474">
                  <img src="images_cms/museum/01.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-sweep.html#1960s">
                    <h3>Sweep Tickets 1960s</h3>
                  </div>
                </div>
                <div class="item" data-width="1140" data-height="473">
                  <img src="images_cms/museum/02.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-sweep.html#1970s">
                    <h3>Sweep Tickets 1970s</h3>
                  </div>
                </div>
              </div>
              <div id="masonry-container-02" class="masonry-container-02 masonry-container">
                <div class="item" data-width="639" data-height="405">
                  <img src="images_cms/museum/03.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-sweep.html#1980s">
                    <h3>Sweep Tickets 1980s</h3>
                  </div>
                </div>
                <div class="item" data-width="639" data-height="405">
                  <img src="images_cms/museum/04.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-sweep.html#1990s">
                    <h3>Sweep Tickets 1990s</h3>
                  </div>
                </div>
                <div class="item" data-width="639" data-height="405">
                  <img src="images_cms/museum/05.jpg">
                  <div class="item-caption-container">
                    <h3>Sweep Tickets</h3>
                    <h3>1968 – 2017</h3>
                    <a href="museum-sweep.html" class="see-all-cta"><span>See all</span></a>
                  </div>
                </div>
              </div>
              <div id="masonry-container-03" class="masonry-container-03 masonry-container">
                <div class="item" data-width="588" data-height="374">
                  <img src="images_cms/museum/06.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-sweep.html#2000s">
                    <h3>Sweep Tickets 2000s</h3>
                  </div>
                </div>
                <div class="item" data-width="740" data-height="371">
                  <img src="images_cms/museum/07.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-sweep.html#2010s">
                    <h3>Sweep Tickets 2010s</h3>
                  </div>
                </div>
                <div class="item" data-width="597" data-height="371">
                  <img src="images_cms/museum/08.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-sweep.html#charity">
                    <h3>Charity Sweep Tickets</h3>
                  </div>
                </div>
              </div>
              <div id="masonry-container-04" class="masonry-container-04 masonry-container">
                <div class="item" data-width="473" data-height="645">
                  <img src="images_cms/museum/09.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-posters.html#1960s">
                    <h3>Posters From 1960s</h3>
                  </div>
                </div>
                <div class="item" data-width="473" data-height="645">
                  <img src="images_cms/museum/10.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-posters.html#1970s">
                    <h3>Posters From 1970s</h3>
                  </div>
                </div>
                <div class="item" data-width="473" data-height="645">
                  <img src="images_cms/museum/11.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-posters.html#1980s">
                    <h3>Posters From 1980s</h3>
                  </div>
                </div>
                <div class="item" data-width="473" data-height="645">
                  <img src="images_cms/museum/12.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-posters.html#1990s">
                    <h3>Posters From 1990s</h3>
                  </div>
                </div>
              </div>
              <div id="masonry-container-05" class="masonry-container-05 masonry-container">
                <div class="item" data-width="305" data-height="417">
                  <img src="images_cms/museum/13.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-posters.html#2000s">
                    <h3>Posters From 2000s</h3>
                  </div>
                </div>
                <div class="item" data-width="305" data-height="417">
                  <img src="images_cms/museum/14.jpg">
                </div>
                <div class="item" data-width="305" data-height="417">
                  <img src="images_cms/museum/15.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-posters.html#charity">
                    <h3>Charity <br class="hidden-xs hidden-sm"> Sweep Posters</h3>
                  </div>
                </div>
                <div class="item" data-width="305" data-height="417">
                  <img src="images_cms/museum/16.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-posters.html#community">
                    <h3>Community <br class="hidden-xs hidden-sm"> Posters</h3>
                  </div>
                </div>
                <div class="item" data-width="305" data-height="417">
                  <img src="images_cms/museum/17.jpg">
                  <div class="item-caption-container hover-version" data-link="museum-posters.html#responsible">
                    <h3>Responsible <br class="hidden-xs hidden-sm"> Gaming</h3>
                  </div>
                </div>
                <div class="item" data-width="305" data-height="417">
                  <img src="images_cms/museum/18.jpg">
                  <div class="item-caption-container">
                    <h3>Posters from the past</h3>
                    <a href="museum-posters.html" class="see-all-cta"><span>See all</span></a>
                  </div>
                </div>
              </div>
              <div id="masonry-container-06" class="masonry-container-06 masonry-container">
                <div class="item" data-width="305" data-height="420">
                  <img src="images_cms/museum/19.jpg">
                </div>
                <div class="item" data-width="305" data-height="420">
                  <img src="images_cms/museum/20.jpg">
                </div>
                <div class="item" data-width="305" data-height="420">
                  <img src="images_cms/museum/21.jpg">
                  <div class="item-caption-container">
                    <h3>Retail Outlets</h3>
                    <a href="museum-retail-outlets.html" class="see-all-cta"><span>See all</span></a>
                  </div>
                </div>
                <div class="item hidden-xs" data-width="972" data-height="420">
                  <img src="images_cms/museum/22.jpg">
                </div>
              </div>
              <div id="masonry-container-07" class="masonry-container-07 masonry-container">
                <div class="item" data-width="471" data-height="420">
                  <img src="images_cms/museum/23.jpg">
                  <div class="item-caption-container">
                    <h3>‘Live’ Lottery Draws</h3>
                    <a href="museum-lottery-draws.html" class="see-all-cta"><span>See all</span></a>
                  </div>
                </div>
                <div class="item" data-width="804" data-height="420">
                  <img src="images_cms/museum/24.jpg">
                </div>
                <div class="item" data-width="639" data-height="420">
                  <img src="images_cms/museum/25.jpg">
                  <div class="item-caption-container">
                    <h3>Lottery Bet Slips and <br class="hidden-xs hidden-sm"> Tickets</h3>
                    <a href="museum-bet-slips-tickets.html" class="see-all-cta"><span>See all</span></a>
                  </div>
                </div>
              </div> <!-- masonry-container -->

              <!-- <div class="grid">
                <div class="grid-sizer"></div>
                <div class="grid-item grid-item--width5 grid-item--height5">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/museum/01.jpg">
                  </div>
                </div>
                <div class="grid-item grid-item--width5 grid-item--height5">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/museum/02.jpg">
                  </div>
                </div>
                <div class="grid-item grid-item--width4 grid-item--height4">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/museum/03.jpg">
                  </div>
                </div>
                <div class="grid-item grid-item--width4 grid-item--height4">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/museum/04.jpg">
                  </div>
                </div>
                <div class="grid-item grid-item--width4 grid-item--height4">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/museum/05.jpg">
                  </div>
                </div>
                <div class="grid-item grid-item--width4-2 grid-item--height5">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/museum/06.jpg">
                  </div>
                </div>
                <div class="grid-item grid-item--width4-1 grid-item--height5">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/museum/07.jpg">
                  </div>
                </div>
                <div class="grid-item grid-item--width4-2 grid-item--height5">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/museum/08.jpg">
                  </div>
                </div>
                
              </div> --> <!-- masonry-container -->

            </div>
          </div>

        </div>
      </article>

    </div> <!-- #page-wrapper-content -->
  </div> <!-- #page-wrapper -->

  <?php include "includes/footer_desktop.php"; ?>
  <?php include "includes/footer_mobile.php"; ?>

  <?php include "includes/script_museum.php" ?>

</body>
</html>
<?php
// saving captured output to file
file_put_contents('museum.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>