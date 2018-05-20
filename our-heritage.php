<?php 
ob_start();
?>
<?php
  global $current_page;
  $current_page = "page-museum";
  $page_title = "Our Heritage";
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

  <?php //include "includes/preloader.php"; ?>

  <?php include "includes/header_desktop.php"; ?>
  <?php include "includes/header_mobile.php"; ?>

  <div class="header-desktop-spacer"></div>

  <div id="page-wrapper">
    <!-- <div id="headerMargin"></div> -->
    <div id="page-wrapper-content">
      <div id="heritage-wrapper">
        <div class="col-md-12">
          <div class="row">
            <div class="heritage__banner">
              <div class="heritage__banner__bg">
                <div class="bg-image"><img src="images_cms/museum/banner.jpg"></div>
              </div>
              <div class="heritage__banner__content">
                <h1>Our Heritage</h1>
                <p>We have been progressing through the years in many different areas and here is to share what has been evolved in a rich 50 years of history.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="heritage__album col-md-12">
              <div class="row">
                <div class="col-md-4" data-portion="#lottery_draws">
                  <div class="heritage__thumbnail thumbnail--hide">
                    <div class="heritage__thumbnail__bg">
                      <div class="bg-image"><img src="images_cms/museum/thumbnail1.jpg"></div>
                    </div>
                    <div class="heritage__thumbnail__gradient">
                      <h3>Lottery Draws</h3>
                    </div>
                    <div class="heritage__thumbnail__mask"></div>
                    <div class="heritage__thumbnail__content">
                      <h3>Lottery Draws</h3>
                      <p>Lottery draws were once conducted in public. In present draws, only people above 18 year old can witness the draw at Singapore Pools Building.</p>
                      <div class="heritage__thumbnail__button">
                        <div class="button"><a href="our-heritage-museum.html#lottery_draws">LEARN MORE</a>
                          <div class="button__mask"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4" data-portion="#retail_outlets">
                  <div class="heritage__thumbnail thumbnail--hide">
                    <div class="heritage__thumbnail__bg">
                      <div class="bg-image"><img src="images_cms/museum/thumbnail2.jpg"></div>
                    </div>
                    <div class="heritage__thumbnail__gradient">
                      <h3>Retail Outlets</h3>
                    </div>
                    <div class="heritage__thumbnail__mask"></div>
                    <div class="heritage__thumbnail__content">
                      <h3>Retail Outlets</h3>
                      <p>Progressed from a humid small booth to a brick and mortar retail outlet.</p>
                      <div class="heritage__thumbnail__button">
                        <div class="button"><a href="our-heritage-museum.html#retail_outlets">LEARN MORE</a>
                          <div class="button__mask"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4" data-portion="#bet_slips">
                  <div class="heritage__thumbnail thumbnail--hide">
                    <div class="heritage__thumbnail__bg">
                      <div class="bg-image"><img src="images_cms/museum/thumbnail3.jpg"></div>
                    </div>
                    <div class="heritage__thumbnail__gradient">
                      <h3>Bet Slips</h3>
                    </div>
                    <div class="heritage__thumbnail__mask"></div>
                    <div class="heritage__thumbnail__content">
                      <h3>Bet Slips</h3>
                      <p>Evolved from a manual operation of checking the winning tickets, the betting slips morph from the carbon copy ticket to a digitized printed ticket.</p>
                      <div class="heritage__thumbnail__button">
                        <div class="button"><a href="our-heritage-museum.html#bet_slips">LEARN MORE</a>
                          <div class="button__mask"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4" data-portion="#posters">
                  <div class="heritage__thumbnail thumbnail--hide">
                    <div class="heritage__thumbnail__bg">
                      <div class="bg-image"><img src="images_cms/museum/thumbnail4.jpg"></div>
                    </div>
                    <div class="heritage__thumbnail__gradient">
                      <h3>Posters</h3>
                    </div>
                    <div class="heritage__thumbnail__mask"></div>
                    <div class="heritage__thumbnail__content">
                      <h3>Posters</h3>
                      <p>Our prizes evolve through the years with influences from the social and economic changes.</p>
                      <div class="heritage__thumbnail__button">
                        <div class="button"><a href="our-heritage-museum.html#posters">LEARN MORE</a>
                          <div class="button__mask"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4" data-portion="#first_sweep_tickets">
                  <div class="heritage__thumbnail thumbnail--hide">
                    <div class="heritage__thumbnail__bg">
                      <div class="bg-image"><img src="images_cms/museum/thumbnail5.jpg"></div>
                    </div>
                    <div class="heritage__thumbnail__gradient">
                      <h3>Sweep Tickets</h3>
                    </div>
                    <div class="heritage__thumbnail__mask"></div>
                    <div class="heritage__thumbnail__content">
                      <h3>Sweep Tickets</h3>
                      <p>SWEEP ticket designs have appeared in different themes which reflect Singaporean’s way of life.</p>
                      <div class="heritage__thumbnail__button">
                        <div class="button"><a href="our-heritage-museum.html#first_sweep_tickets">LEARN MORE</a>
                          <div class="button__mask"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4" data-portion="#sg_pools_logo">
                  <div class="heritage__thumbnail thumbnail--hide">
                    <div class="heritage__thumbnail__bg">
                      <div class="bg-image"><img src="images_cms/museum/thumbnail6.jpg"></div>
                    </div>
                    <div class="heritage__thumbnail__gradient">
                      <h3>Logos</h3>
                    </div>
                    <div class="heritage__thumbnail__mask"></div>
                    <div class="heritage__thumbnail__content">
                      <h3>Logos</h3>
                      <p>Singapore Pools’ brand evolved through the times to reflect the strong commitment as a company who exist for community benefit.</p>
                      <div class="heritage__thumbnail__button">
                        <div class="button"><a href="our-heritage-museum.html#sg_pools_logo">LEARN MORE</a>
                          <div class="button__mask"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <?php include "includes/footer_desktop.php"; ?>
  <?php include "includes/footer_mobile.php"; ?>

  <?php include "includes/script_museum.php" ?>

</body>
</html>
<?php
// saving captured output to file
file_put_contents('our-heritage.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>