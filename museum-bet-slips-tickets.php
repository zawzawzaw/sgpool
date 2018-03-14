<?php 
ob_start();
?>
<?php
  global $current_page;
  $current_page = "page-museum-details";
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

  <div class="header-desktop-spacer hidden-xs hidden-sm"></div>
  <div class="header-mobile-spacer visible-xs visible-sm"></div>

  <div id="museum-detail-sticky-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h3>Lottery Bet Slips And Tickets</h3>
          <a href="museum.html" class="back-cta"><span>Back</span></a>
        </div>
      </div>    
    </div>
  </div>

  <div id="page-wrapper">
    <div id="page-wrapper-content">
      
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            
            <div id="page-museum-details-item-container">

              <div id="item-1" class="page-museum-details-item">

                <div class="scroll-target" data-value="1960s"></div>
            
<!--                 <div class="page-museum-detail-item-title">
                  <h2>1960s</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br class="hidden-xs hidden-sm"> sed do eiusmod tempor.</p>
                </div> -->

                <div class="page-museum-detail-item-content">
                  <div id="bet-slips-masonry-container-01" class="bet-slips-masonry-container-01 masonry-container">
                    <div class="item" data-width="600" data-height="1172">
                      <img src="images_cms/museum/bet-slips-tickets/01.jpg">
                    </div>
                    <div class="item" data-width="600" data-height="839">
                      <img src="images_cms/museum/bet-slips-tickets/01-2.jpg">
                    </div>
                    <div class="item" data-width="600" data-height="856">
                      <img src="images_cms/museum/bet-slips-tickets/01-3.jpg">
                    </div>                    
                    <div class="item" data-width="600" data-height="856">
                      <img src="images_cms/museum/bet-slips-tickets/01-4.jpg">
                    </div>                    
                    <div class="item" data-width="600" data-height="1172">
                      <img src="images_cms/museum/bet-slips-tickets/02.jpg">
                    </div>
                  </div> <!-- masonry-container -->                  
                  <div id="bet-slips-masonry-container-02" class="bet-slips-masonry-container-02 masonry-container">
                    <div class="item" data-width="1200" data-height="636">
                      <img src="images_cms/museum/bet-slips-tickets/06.jpg">
                    </div>
                    <div class="item" data-width="1200" data-height="488">
                      <img src="images_cms/museum/bet-slips-tickets/07.jpg">
                    </div>
                    <div class="item" data-width="1200" data-height="408">
                      <img src="images_cms/museum/bet-slips-tickets/08.jpg">
                    </div>
                  </div> <!-- masonry-container -->
                  <div id="bet-slips-masonry-container-03" class="bet-slips-masonry-container-03 masonry-container">
                    <div class="item" data-width="600" data-height="839">
                      <img src="images_cms/museum/bet-slips-tickets/03.jpg">
                    </div>                    
                    <div class="item" data-width="600" data-height="889">
                      <img src="images_cms/museum/bet-slips-tickets/04.jpg">
                    </div>                    
                    <div class="item" data-width="600" data-height="1100">
                      <img src="images_cms/museum/bet-slips-tickets/05.jpg">
                    </div>
                    <div class="item" data-width="600" data-height="956">
                      <img src="images_cms/museum/bet-slips-tickets/09.jpg">
                    </div>
                    <div class="item" data-width="600" data-height="989">
                      <img src="images_cms/museum/bet-slips-tickets/10.jpg">
                    </div>
                  </div> <!-- masonry-container -->
                  <div id="bet-slips-masonry-container-04" class="bet-slips-masonry-container-04 masonry-container">
                    <div class="item" data-width="1200" data-height="487">
                      <img src="images_cms/museum/bet-slips-tickets/11.jpg">
                    </div>
                    <div class="item" data-width="1200" data-height="542">
                      <img src="images_cms/museum/bet-slips-tickets/12.jpg">
                    </div>
                    <div class="item" data-width="1200" data-height="544">
                      <img src="images_cms/museum/bet-slips-tickets/13.jpg">
                    </div>
                  </div> <!-- masonry-container -->
                  <div id="bet-slips-masonry-container-05" class="bet-slips-masonry-container-05 masonry-container">
                    <div class="item" data-width="1200" data-height="687">
                      <img src="images_cms/museum/bet-slips-tickets/14.jpg">
                    </div>
                    <div class="item" data-width="1200" data-height="551">
                      <img src="images_cms/museum/bet-slips-tickets/15.jpg">
                    </div>
                    <div class="item" data-width="1200" data-height="543">
                      <img src="images_cms/museum/bet-slips-tickets/16.jpg">
                    </div>
                    <div class="item" data-width="1200" data-height="544">
                      <img src="images_cms/museum/bet-slips-tickets/17.jpg">
                    </div>
                  </div> <!-- masonry-container -->
                  
                </div>

              </div> <!-- end page-museum-details-item -->              

            </div>


          </div>
        </div>
      </div>
      
    </div> <!-- #page-wrapper-content -->
  </div> <!-- #page-wrapper -->

  <?php include "includes/footer_desktop.php"; ?>
  <?php include "includes/footer_mobile.php"; ?>

  <?php include "includes/script_museum.php" ?>

</body>
</html>
<?php
// saving captured output to file
file_put_contents('museum-bet-slips-tickets.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>