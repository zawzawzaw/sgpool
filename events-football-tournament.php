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

                        <div id="page-events-details-event-box" class="page-default-event-box events-version" data-geo-lat="1.3529944" data-geo-lng="103.94039739999994">
                          <!-- <div class="tag-container"><h6>Public</h6></div>                     -->
                          <div class="manic-image-container">
                            <img src="" class="img-responsive" 
                              data-image-tablet="images_cms/events/event-05-tabletv3.jpg" 
                              data-image-mobile="images_cms/events/event-05-mobilev3.jpg" alt="">
                          </div>
                          <div class="text-container">
                            <h3>Football With A Heart 2018</h3>
                            <p>Swing by to be present at Singapore’s largest football charity
                            fundraiser, Football With A Heart (FWAH)!</p>
                            <p>Over the past few edition, we have raised more than S2.2 million in aid of many beneficiaries with organisations from different industry coming together for a good cause.</p>
                            <p>In its fifth edition, FWAH will welcome about 900 footballers from various corporations for a friendly five-a-side football tournament. Catch our Parliamentarian Team and Team Public Service in action as they pit against each other at the celebrity matches. Be there to cheer for them!</p>
                            <p>The event is fully funded by organising partners and supported by venue partner, Our Tampines Hub. All proceeds from the event go to designated charities.</p>
                            <p><b>Venue</b><br>
                            Our Tampines Hub (Town Square)</p>
                            <p><b>Admission</b><br>
                            Free</p>
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
file_put_contents('events-football-tournament.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>