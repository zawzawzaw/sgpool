<?php 
ob_start();
?>
<?php
  global $current_page;
  $current_page = "page-events";
  $page_title = "Events";

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

  <div id="page-wrapper">
    <div id="page-wrapper-content">
  
      <div class="header-desktop-spacer hidden-xs hidden-sm"></div>   
      <div class="header-mobile-spacer visible-xs visible-sm"></div>

      <article id="page-events-details-content-container">            

            <div id="page-events-details-content">

              <div class="container-fluid">                    

                <div class="row">       

                    <div class="col-sm-12">                    

                        <div id="page-events-details-event-box" class="page-default-event-box events-version" data-geo-lat="1.2906024" data-geo-lng="103.8442855">
                          <div class="tag-container"><h6>Public</h6></div>                    
                          <div class="text-container">
                            <h3>Roving Tour: 50th Anniversary Limited Edition Pennies</h3>
                            <p>Look out for our roving penny press machine at our Singapore Pools Branches and spin for our free limited edition 50th Anniversary Pennies. Whist stocks last.</p>                            
                          </div>
                          <div class="manic-image-container">
                            <img src="" class="img-responsive" 
                              data-image-tablet="images_cms/events/event-02-tablet.jpg" 
                              data-image-mobile="images_cms/events/event-02-mobile.jpg" alt="">
                          </div>

                        </div> <!-- end page-default-event-box -->                                   

                    </div> <!-- end col-md-4 -->

                </div> <!-- end row -->

              </div>

              <div class="container-fluid reduce-padding-mobile">                    

                <div class="row">

                    <div class="col-sm-12 no-padding-mobile">  
                      
                      <div id="page-events-slider-map" style="display: none;"></div>

                    </div> <!-- end col-md-4 -->

                </div> <!-- end row -->

              </div> <!-- end container-fluid -->

              <div class="container-fluid">
                
                <div class="row">
                  <div class="col-sm-12">
                    
                    <div id="page-events-details-back-btn">
                        
                      <a href="events.html" class="square-cta">See all events</a>

                    </div>

                  </div>  
                </div>                

              </div>
                                            
            </div> <!-- end page-events-content -->          

      </article> <!-- end page-events-content-container -->

    </div> <!-- #page-wrapper-content -->
  </div> <!-- #page-wrapper -->

  <?php include "includes/footer_desktop.php"; ?>
  <?php include "includes/footer_mobile.php"; ?>

  <?php include "includes/script_events.php" ?>

</body>
</html>
<?php
// saving captured output to file
file_put_contents('events-roving-tour.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>