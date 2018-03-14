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
          <h3>Retail Outlets</h3>
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
                  <div id="retail-outlets-masonry-container-01" class="retail-outlets-masonry-container-01 masonry-container">
                    <div class="item" data-width="639" data-height="446">
                      <img src="images_cms/museum/retail-outlets/01.jpg">
                    </div>
                    <div class="item" data-width="396" data-height="420">
                      <img src="images_cms/museum/retail-outlets/02.jpg">
                    </div>
                    <div class="item" data-width="639" data-height="426">
                      <img src="images_cms/museum/retail-outlets/03.jpg">
                    </div>                    
                    <div class="item" data-width="639" data-height="428">
                      <img src="images_cms/museum/retail-outlets/04.jpg">
                    </div>                    
                    <div class="item" data-width="276" data-height="420">
                      <img src="images_cms/museum/retail-outlets/05.jpg">
                    </div>
                    <div class="item" data-width="1140" data-height="770">
                      <img src="images_cms/museum/retail-outlets/06.jpg">
                    </div>
                    <div class="item" data-width="277" data-height="420">
                      <img src="images_cms/museum/retail-outlets/07.jpg">
                    </div>
                    <div class="item" data-width="639" data-height="430">
                      <img src="images_cms/museum/retail-outlets/08.jpg">
                    </div>
                    <div class="item" data-width="639" data-height="437">
                      <img src="images_cms/museum/retail-outlets/09.jpg">
                    </div>
                    <div class="item" data-width="277" data-height="420">
                      <img src="images_cms/museum/retail-outlets/10.jpg">
                    </div>                    

                    <div class="item" data-width="640" data-height="428">
                      <img src="images_cms/museum/retail-outlets/11.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="436">
                      <img src="images_cms/museum/retail-outlets/12.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="425">
                      <img src="images_cms/museum/retail-outlets/13.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="423">
                      <img src="images_cms/museum/retail-outlets/14.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="421">
                      <img src="images_cms/museum/retail-outlets/15.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="422">
                      <img src="images_cms/museum/retail-outlets/16.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="425">
                      <img src="images_cms/museum/retail-outlets/17.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="432">
                      <img src="images_cms/museum/retail-outlets/18.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="480">
                      <img src="images_cms/museum/retail-outlets/19.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="480">
                      <img src="images_cms/museum/retail-outlets/20.jpg">
                    </div>

                    <div class="item" data-width="315" data-height="420">
                      <img src="images_cms/museum/retail-outlets/21.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="480">
                      <img src="images_cms/museum/retail-outlets/22.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="480">
                      <img src="images_cms/museum/retail-outlets/23.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="480">
                      <img src="images_cms/museum/retail-outlets/24.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="427">
                      <img src="images_cms/museum/retail-outlets/25.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="480">
                      <img src="images_cms/museum/retail-outlets/26.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="427">
                      <img src="images_cms/museum/retail-outlets/27.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="427">
                      <img src="images_cms/museum/retail-outlets/28.jpg">
                    </div>                    
                    <div class="item" data-width="640" data-height="427">
                      <img src="images_cms/museum/retail-outlets/29.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="427">
                      <img src="images_cms/museum/retail-outlets/30.jpg">
                    </div>

                    <div class="item" data-width="640" data-height="427">
                      <img src="images_cms/museum/retail-outlets/31.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="426">
                      <img src="images_cms/museum/retail-outlets/32.jpg">
                    </div>
                    <div class="item" data-width="640" data-height="427">
                      <img src="images_cms/museum/retail-outlets/33.jpg">
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
file_put_contents('museum-retail-outlets.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>