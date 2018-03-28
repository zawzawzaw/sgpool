<?php 
ob_start();
?>
<?php
  global $current_page;
  $current_page = "page-gallery";
  $page_title = "Gallery";
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

      <article id="page-default-banner-section" class="gallery-version">

        <div id="page-default-banner-slider" class="sgpool-slick-slider">
          
          <!-- 
              __________________  ___   ____ ___
             /  _/_  __/ ____/  |/  /  / __ <  /
             / /  / / / __/ / /|_/ /  / / / / /
           _/ /  / / / /___/ /  / /  / /_/ / /
          /___/ /_/ /_____/_/  /_/   \____/_/

          -->

          <div class="page-default-banner-slider-item">
            <div id="page-default-banner-image" class="shorter-banner visible-lg visible-md">
              <div class="manic-image-container">
                <img src="" data-image-desktop="images_cms/gallery/gallery-banner-01.jpg">
              </div>
            </div>

            <div id="page-default-banner-image-mobile" class="short-banner visible-sm visible-xs">
              <div class="manic-image-container">
                <img src="" data-image-tablet="images_cms/gallery/gallery-banner-01-tablet.jpg"
                            data-image-mobile="images_cms/gallery/gallery-banner-01-mobile.jpg">
              </div>
            </div>

            <div id="page-default-banner-caption-container" class="gallery-version">
              <div class="container-fluid">
                <div class="row">                  

                  <div class="col-md-12">

                    <div id="page-default-banner-copy">
                      <h2>Gallery</h2>
                      <p>We celebrate our Golden Jubilee with a host of events all year round <br class="hidden-sm hidden-xs"> with our community and people. Take a look at what we have done so far.</p>                      
                    </div> <!-- page-default-banner-logo -->

                  </div>
                </div>
              </div>
            </div> <!-- page-default-banner-logo-container -->

          </div>
        </div>

      </article>

      <!-- <article id="page-gallery-event-slider-container">
        <div class="container-fluid">
          
          <div class="row">
            <div class="col-md-12">
              
              <div id="page-gallery-event-slider-header">
                <h6>05 Jan 2018</h6>
                <h2>Concert With A Heart</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla consequat ullamcorper. Phasellus in ante blandit, tempus tellus et, rutrum nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

              </div>

              <div id="page-gallery-event-slider" class="page-gallery-event-slider sgpool-slick-slider">
                
                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-slider-01.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-slider-01-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-slider-01-mobile.jpg">
                  </div>
                </div> <!- - end page-gallery-event-slider-item - ->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-slider-01.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-slider-01-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-slider-01-mobile.jpg">
                  </div>
                </div> <!- - end page-gallery-event-slider-item - ->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-slider-01.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-slider-01-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-slider-01-mobile.jpg">
                  </div>
                </div> <!- - end page-gallery-event-slider-item - ->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-slider-01.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-slider-01-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-slider-01-mobile.jpg">
                  </div>
                </div> <!- - end page-gallery-event-slider-item - ->


              </div>

            </div>
          </div>

        </div>
      </article> -->

      <!-- <article id="page-gallery-event-grid-container">
        <div class="container-fluid">                  
              
          <div id="page-gallery-event-grid-header">

            <div class="row">
              <div class="col-md-12">
                <h6>05 Jan 2018</h6>
                <h2>Lorem Ipsum Events Title</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla consequat ullamcorper. Phasellus in ante blandit, tempus tellus et, rutrum nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

              </div>
            </div>

          </div>

          <div id="page-gallery-event-grid">

            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                  
                <div id="page-gallery-event-grid-01" class="row">
                  <div class="col-md-12">
                    
                    <div class="manic-image-container">
                      <img src="" data-image-desktop="images_cms/gallery/gallery-event-grid-01.jpg"
                            data-image-tablet="images_cms/gallery/gallery-event-grid-01-tablet.jpg"
                            data-image-mobile="images_cms/gallery/gallery-event-grid-01-mobile.jpg">
                    </div>
                  </div>
                </div>                
                <div id="page-gallery-event-grid-02" class="row">
                  <div class="col-md-7">

                    <div id="page-gallery-event-grid-slider" class="page-gallery-event-grid-slider sgpool-slick-slider">
                      
                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-grid-02.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-grid-02-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-grid-02-mobile.jpg">
                        </div>
                      </div>  end page-gallery-event-grid-slider-item

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-grid-02.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-grid-02-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-grid-02-mobile.jpg">
                        </div>
                      </div> <!- -  end page-gallery-event-grid-slider-item - ->
    
                    </div>

                  </div>
                  <div class="col-md-5">
                    
                    <div id="page-gallery-event-grid-slider-02" class="page-gallery-event-grid-slider sgpool-slick-slider">
                      
                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                      <img src="" data-image-desktop="images_cms/gallery/gallery-event-grid-03.jpg"
                            data-image-tablet="images_cms/gallery/gallery-event-grid-03-tablet.jpg"
                            data-image-mobile="images_cms/gallery/gallery-event-grid-03-mobile.jpg">
                    </div>
                      </div> <!- -  end page-gallery-event-grid-slider-item - ->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-grid-03.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-grid-03-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-grid-03-mobile.jpg">
                        </div>
                      </div> <!- -  end page-gallery-event-grid-slider-item - ->
    
                    </div>
                    
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </article> -->
      
      <!-- <div class="scroll-target" data-value="concert"></div>
      <article id="page-gallery-event-slider-container">
        <div class="container-fluid">
          
          <div class="row">
            <div class="col-md-12">
              
              <div id="page-gallery-event-slider-header">
                <h6>05 Jan 2018</h6>
                <h2>Concert With A Heart & Community Marketplace</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla consequat ullamcorper. Phasellus in ante blandit, tempus tellus et, rutrum nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

              </div>

              <div id="page-gallery-event-slider" class="page-gallery-event-slider sgpool-slick-slider">
                
                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-concert-slider-01.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-concert-slider-01-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-concert-slider-01-mobile.jpg">
                  </div>
                </div> <!- - end page-gallery-event-slider-item - ->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-concert-slider-02.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-concert-slider-02-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-concert-slider-02-mobile.jpg">
                  </div>
                </div> <!- - end page-gallery-event-slider-item - ->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-concert-slider-03.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-concert-slider-03-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-concert-slider-03-mobile.jpg">
                  </div>
                </div> <!- - end page-gallery-event-slider-item - ->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-concert-slider-04.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-concert-slider-04-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-concert-slider-04-mobile.jpg">
                  </div>
                </div> <!- - end page-gallery-event-slider-item - ->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-concert-slider-05.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-concert-slider-05-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-concert-slider-05-mobile.jpg">
                  </div>
                </div> <!- - end page-gallery-event-slider-item - ->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-concert-slider-06.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-concert-slider-06-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-concert-slider-06-mobile.jpg">
                  </div>
                </div> <!- - end page-gallery-event-slider-item - ->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-concert-slider-07.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-concert-slider-07-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-concert-slider-07-mobile.jpg">
                  </div>
                </div> <!- - end page-gallery-event-slider-item - ->


              </div>

            </div>
          </div>

        </div>
      </article> -->

      <div class="scroll-target" data-value="chingay"></div>
      <article id="page-gallery-event-slider-container">
        <div class="container-fluid">
          
          <div class="row">
            <div class="col-md-12">
              
              <div id="page-gallery-event-slider-header">
                <h6>23-24 Feb 2018 | F1 Pit Building</h6>
                <h2>Chingay 2018</h2>

                <p>Asia's largest street performance, Chingay is an annual event which filled the parade route with dazzling displays of light, sound, costumes and performances.</p>
                <p>Singapore Pools is a Principal Founding Sponsor of the Chingay Parade since 1995.</p>
                <p>Visit <a href="https://www.chingay.org.sg" target="_blank">https://www.chingay.org.sg</a> for more details</p>

              </div>

              <div id="page-gallery-event-slider" class="page-gallery-event-slider chingay-slider sgpool-slick-slider">
                
                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-01.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-01-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-01-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-02.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-02-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-02-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-03.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-03-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-03-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-04.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-04-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-04-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-05.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-05-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-05-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-06.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-06-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-06-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-07.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-07-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-07-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-08.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-08-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-08-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-09.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-09-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-09-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-10.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-10-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-10-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-11.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-11-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-11-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-12.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-12-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-12-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-13.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-13-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-13-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

                <div class="page-gallery-event-slider-item">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/gallery/gallery-event-chingay-slider-14.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-chingay-slider-14-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-chingay-slider-14-mobile.jpg">
                  </div>
                </div> <!-- end page-gallery-event-slider-item -->

              </div>

            </div>
          </div>

        </div>
      </article>

      <div class="scroll-target" data-value="tote"></div>
      <article id="page-gallery-event-grid-container">
        <div class="container-fluid">                  
              
          <div id="page-gallery-event-grid-header">

            <div class="row">
              <div class="col-md-12">
                <h6>10 Feb 2018 | Gardens by the Bay (The Meadow)</h6>
                <h2>A GOOD DAY OUT by Tote Board</h2>

                <p>Graced by Guest of Honour Emeritus Senior Minister Goh Chok Tong, 'A Good Day Out' was a success with performances by The Sam Willows & Joanna Dong, and many other fun-filled activities. It was a milestone event to commemorate Tote Board's 30 Years of Giving to the Community.</p>

              </div>
            </div>

          </div>

          <div id="page-gallery-event-grid">

            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                  
                <div id="page-gallery-event-grid-01" class="row">
                  <div class="col-md-12">
                    
                    <div class="manic-image-container">
                      <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-01.jpg"
                            data-image-tablet="images_cms/gallery/gallery-event-tote-grid-01-tablet.jpg"
                            data-image-mobile="images_cms/gallery/gallery-event-tote-grid-01-mobile.jpg">
                    </div>
                  </div>
                </div>                
                <div id="page-gallery-event-grid-02" class="row">
                  <div class="col-md-7">

                    <div id="page-gallery-event-grid-slider" class="page-gallery-event-grid-slider sgpool-slick-slider">
                      
                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-02.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-02-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-02-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-03.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-03-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-03-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-04.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-04-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-04-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-05.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-05-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-05-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-06.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-06-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-06-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-07.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-07-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-07-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-08.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-08-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-08-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-09.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-09-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-09-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-10.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-10-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-10-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->
    
                    </div>

                  </div>
                  <div class="col-md-5">
                    
                    <div id="page-gallery-event-grid-slider-02" class="page-gallery-event-grid-slider sgpool-slick-slider">
                      
                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-11.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-11-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-11-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-12.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-12-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-12-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-13.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-13-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-13-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-14.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-14-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-14-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-15.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-15-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-15-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-16.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-16-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-16-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-17.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-17-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-17-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-tote-grid-18.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-tote-grid-18-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-tote-grid-18-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->
    
                    </div>
                    
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </article>      

      <div class="scroll-target" data-value="football"></div>
      <article id="page-gallery-event-grid-container">
        <div class="container-fluid">                  
              
          <div id="page-gallery-event-grid-header">

            <div class="row">
              <div class="col-md-12">
                <h6>25 Jan 2018 | Staff Event</h6>
                <h2>Singapore Pools' 50th Anniversary Kick-off</h2>

                <p>Officially kick-off the 50th anniversary celebration over a cosy staff event. We were surprised by the collections of SWEEP tickets and red packets, presented by the group of avid collectors from North-east collectors club. Our staff were given a sneak preview opportunity to make the limited edition pressed penny before it was released to the public.</p>
              </div>
            </div>

          </div>

          <div id="page-gallery-event-grid">

            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                  
                <div id="page-gallery-event-grid-01" class="row">
                  <div class="col-md-12">
                    
                    <div class="manic-image-container">
                      <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-01.jpg"
                            data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-01-tablet.jpg"
                            data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-01-mobile.jpg">
                    </div>
                  </div>
                </div>                
                <div id="page-gallery-event-grid-02" class="row">
                  <div class="col-md-7">

                    <div id="page-gallery-event-grid-slider" class="page-gallery-event-grid-slider sgpool-slick-slider">
                      
                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-02.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-02-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-02-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-03.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-03-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-03-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-04.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-04-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-04-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-05.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-05-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-05-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-06.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-06-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-06-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-07.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-07-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-07-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-08.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-08-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-08-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-09.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-09-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-09-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-10.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-10-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-10-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-11.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-11-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-11-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->
    
                    </div>

                  </div>
                  <div class="col-md-5">
                    
                    <div id="page-gallery-event-grid-slider-02" class="page-gallery-event-grid-slider sgpool-slick-slider">
                      
                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-12.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-12-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-12-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-13.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-13-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-13-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-14.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-14-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-14-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-15.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-15-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-15-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-16.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-16-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-16-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-17.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-17-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-17-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-18.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-18-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-18-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-19.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-19-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-19-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-20.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-20-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-20-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-21.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-21-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-21-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-22.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-22-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-22-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->

                      <div class="page-gallery-event-grid-slider-item">
                        <div class="manic-image-container">
                          <img src="" data-image-desktop="images_cms/gallery/gallery-event-kick-off-grid-23.jpg"
                                data-image-tablet="images_cms/gallery/gallery-event-kick-off-grid-23-tablet.jpg"
                                data-image-mobile="images_cms/gallery/gallery-event-kick-off-grid-23-mobile.jpg">
                        </div>
                      </div> <!--  end page-gallery-event-grid-slider-item -->
    
                    </div>
                    
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </article>

    </div> <!-- #page-wrapper-content -->
  </div> <!-- #page-wrapper -->

  <?php include "includes/footer_desktop.php"; ?>
  <?php include "includes/footer_mobile.php"; ?>

  <?php include "includes/script_gallery.php" ?>

</body>
</html>
<?php
// saving captured output to file
file_put_contents('gallery.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>