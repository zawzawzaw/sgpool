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

                        <div id="page-events-details-event-box" class="page-default-event-box events-version" data-geo-lat="1.3248134" data-geo-lng="103.8577874">
                          <!-- <div class="tag-container"><h6>Corporate</h6></div>                     -->
                          <div class="manic-image-container">
                            <img src="" class="img-responsive" 
                              data-image-tablet="images_cms/events/event-01-tabletv2.jpg" 
                              data-image-mobile="images_cms/events/event-01-mobilev2.jpg" alt="">
                          </div>
                          <div class="text-container">
                            <h3>Corporate Tour: Singapore Pools’ 50-Year Journey</h3>
                            <p>Hear the nostalgic stories of how we started our journey in 1968 in providing a legal and trusted betting avenue to counter illegal gambling in Singapore. Witness an actual live lottery draw, and learn about our operations and commitment towards responsible gaming.</p>
                            <p>This tour will also take you down our memory lane on our contributions to the community – 50 years and beyond.</p>
                            <p>Our corporate tours are complimentary. Each session is 1.5 hours.</p>
                            <p>To book a tour*, please email us at <br><a href="mailto:CommunityPartnerships@sgpoolz.com.sg">CommunityPartnerships@sgpoolz.com.sg</a> with the title “Singapore Pools Corporate Tour” along with the following details:</p>
                            <ul>
                              <li><p>Your name and contact number</p></li>
                              <li><p>Organisation name</p></li>
                              <li><p>The number of attendees</p></li>
                            </ul>
                            <span>*Please note that corporate tour participants must be of legal age as Singapore Pools adheres strictly to a “no betting for under-18s” rule.</span>                            
                          </div>                          

                        </div> <!-- end page-default-event-box -->                                   

                    </div> <!-- end col-md-4 -->

                </div> <!-- end row -->

              </div>

              <div class="container-fluid reduce-padding-mobile">                    

                <div class="row">

                    <div class="col-sm-12 no-padding-mobile">  
                      
                      <div id="page-events-slider-map"></div>

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
file_put_contents('events-corporate-tour.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>