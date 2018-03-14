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

      <div id="page-events-calender-container" class="hidden-xs hidden-sm">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2">
              <div id="start-events-sidebar-sticky-trigger"></div>

              <div id="page-events-calender-slider" class="sgpool-slick-slider vertical-version">
                <div class="page-events-calender-slider-item pass-event">
                  <h6>Feb</h6>
                  <h1>10</h1>
                  <span>Exhibition: 50 Years for Community Benefit @ A Good Day Out</span>
                </div>
                <div class="page-events-calender-slider-item pass-event">
                  <h6>Feb</h6>
                  <h1>23 – 24</h1>
                  <span>Chingay 2018</span>
                </div>

                <div class="page-events-calender-slider-item future-event">
                  <h6>May</h6>
                  <h1>05 – 06</h1>
                  <span>Football With A Heart 2018 Tournament</span>
                </div>
                <div class="page-events-calender-slider-item future-event">
                  <h6>May</h6>
                  <h1>05 – 06</h1>
                  <span>Concert With A Heart & Community Marketplace</span>
                </div>
                <div class="page-events-calender-slider-item future-event">
                  <h6>May</h6>
                  <h1>21</h1>
                  <span>Singapore Pools 50th Anniversary Celebratory Dinner</span>
                </div>                
              </div> <!-- end page-events-calender -->

            </div>
          </div> <!-- end row -->
        </div>    
      </div> <!-- page-events-calender-container -->

      <article id="page-events-content-container" class="hidden-xs hidden-sm"> 

          <div id="page-events-seperator-line-container">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-1 col-md-push-2">
                  <div id="page-events-seperator-line"></div>
                </div>
              </div>
            </div>
          </div>        

          <div class="container-fluid">                    

            <div id="page-events-content">    

              <div class="row">

                <div id="page-events-slider-section">                  

                  <div class="col-md-5 col-md-offset-3 no-left-padding add-right-padding-with-scroll">
                    
                    <div id="page-events-slider-container">
                      <div id="start-events-map-sticky-trigger"></div>
                      <div id="page-events-slider" class="">                                        

                        <!-- 
                            __________________  ___   _____
                           /  _/_  __/ ____/  |/  /  |__  /
                           / /  / / / __/ / /|_/ /    /_ <
                         _/ /  / / / /___/ /  / /   ___/ /
                        /___/ /_/ /_____/_/  /_/   /____/

                        -->

                        <div class="page-events-slider-item" data-month="1" data-geo-lat="1.2815683" data-geo-lng="103.86361320000003" data-image-desktop="images_cms/events/events-slider-03v2.jpg">
                          <div class="page-default-event-box events-version">
                            <div class="tag-container"><h6>Public</h6></div>                    
                            <div class="text-container">
                              <h3>Exhibition: 50 Years for Community Benefit @ A Good Day Out</h3>
                              <p>This exhibition will take you down memory lane on our 50 years of contributions for community benefit – from countering illegal gambling to making possible many of the good we see today.</p>
                              <p>You can also catch the heartwarming performances from our beneficiaries, play exciting games, and eat to your heart’s delight with food served by social enterprises.</p>
                              <!-- <p>Admission is free.</p> -->
                            </div>
                            <div class="manic-image-container" data-vertical-align="top">
                              <img src="" class="img-responsive" 
                                data-image-desktop="images_cms/events/events-slider-03.jpg" alt="">
                            </div>
                            <div class="text-container full-width-version">
                              <div class="row">
                                <div class="col-md-6">
                                  <p><strong>Venue</strong></p>
                                  <p>Gardens by the Bay</p>
                                </div>
                                <div class="col-md-6">
                                  <p><strong>Admission</strong></p>
                                  <p>Free</p>
                                </div>                              
                              </div>                                                      
                            </div>
                          </div> <!-- end page-default-event-box -->
                        </div> <!-- end page-events-slider-item -->
                        
                        <!--  
                            __________________  ___   __ __
                           /  _/_  __/ ____/  |/  /  / // /
                           / /  / / / __/ / /|_/ /  / // /_
                         _/ /  / / / /___/ /  / /  /__  __/
                        /___/ /_/ /_____/_/  /_/     /_/

                        -->

                        <div class="page-events-slider-item" data-month="1" data-geo-lat="1.2912445" data-geo-lng="103.86392780000006" data-image-desktop="images_cms/events/events-slider-04.jpg">
                          <div class="page-default-event-box events-version">
                            <div class="tag-container"><h6>Public</h6></div>                    
                            <div class="text-container">
                              <h3>Chingay 2018</h3>
                              <p>Immerse in the dazzling displays of light, sound, costumes and performances at Asia's largest street performance.</p>
                              <p>Catch Singapore Pools' float making its way from the main parade site to the heartlands - sharing the celebration and promoting multi-culturalism and community cohesiveness, with all fellow Singaporeans.</p>
                              <p>Singapore Pools is a Principal Founding Sponsor of the Chingay Parade since 1995. <a href="https://www.chingay.org.sg" target="_blank">https://www.chingay.org.sg</a></p>
                            </div>
                            <div class="manic-image-container">
                              <img src="" class="img-responsive" 
                                data-image-desktop="images_cms/events/events-slider-04.jpg" alt="">
                            </div>
                            <div class="text-container full-width-version">
                              <div class="row">
                                <div class="col-md-6">
                                  <p><strong>Venue</strong></p>
                                  <p>F1 Pit Building (ticket required) and Heartland Towns</p>
                                </div>                           
                              </div>                                                      
                            </div>
                          </div> <!-- end page-default-event-box -->
                        </div> <!-- end page-events-slider-item -->
                        
                        <!-- 
                            __________________  ___   ______
                           /  _/_  __/ ____/  |/  /  / ____/
                           / /  / / / __/ / /|_/ /  /___ \
                         _/ /  / / / /___/ /  / /  ____/ /
                        /___/ /_/ /_____/_/  /_/  /_____/

                        -->

                        <div class="page-events-slider-item" data-month="4" data-geo-lat="1.3529944" data-geo-lng="103.94039739999994" data-image-desktop="images_cms/events/events-slider-05.jpg">
                          <div class="page-default-event-box events-version">
                            <div class="tag-container"><h6>Public</h6></div>                    
                            <div class="text-container">
                              <h3>Football With A Heart 2018 Tournament</h3>
                              <p>Swing by to watch our meaningful Football With A Heart (FWAH) charity fundraising tournament. </p>
                              <p>Catch the Celebrity Teams in action. Check out our corporate donors and lend your support to your favourite organisation in our friendly five-a-side football tournament.</p>
                              <p>The event is fully funded by organising partners and supported by venue partner. All proceeds from the event go towards designated charities.</p>
                              <!-- <p>Admission is free.</p> -->
                            </div>
                            <div class="manic-image-container">
                              <img src="" class="img-responsive" 
                                data-image-desktop="images_cms/events/events-slider-05.jpg" alt="">
                            </div>
                            <div class="text-container full-width-version">
                              <div class="row">
                                <div class="col-md-6">
                                  <p><strong>Venue</strong></p>
                                  <p>Tampines Hub</p>
                                </div>
                                <div class="col-md-6">
                                  <p><strong>Admission</strong></p>
                                  <p>Free</p>
                                </div>                           
                              </div>                                                      
                            </div>
                          </div> <!-- end page-default-event-box -->
                        </div> <!-- end page-events-slider-item -->

                        <!-- 
                            __________________  ___   _____
                           /  _/_  __/ ____/  |/  /  / ___/
                           / /  / / / __/ / /|_/ /  / __ \
                         _/ /  / / / /___/ /  / /  / /_/ /
                        /___/ /_/ /_____/_/  /_/   \____/

                        -->

                        <div class="page-events-slider-item" data-month="4" data-geo-lat="1.3529944" data-geo-lng="103.94039739999994" data-image-desktop="images_cms/events/events-slider-06v2.jpg">
                          <div class="page-default-event-box events-version">
                            <div class="tag-container"><h6>Public</h6></div>                    
                            <div class="text-container">
                              <h3>Concert With A Heart & Community Marketplace</h3>
                              <p>Sing-a-long our live concert and cheer for the heartwarming performances by our beneficiaries.</p>
                              <p>Visit our Community Marketplace to learn about our beneficiaries’ impactful programmes, play exciting games, eat your's heart out, and shop for gifts handmade by our beneficiaries.</p>
                              <p>You can also take a walk down memory lane and learn about our 50 years of contributions for community benefit – from countering illegal gambling to making possible many of the good we see today.</p>
                              <p>The event is fully funded by organising partners and supported by venue partner.</p>
                              <p>Admission is free.</p>
                            </div>
                            <div class="manic-image-container">
                              <img src="" class="img-responsive" 
                                data-image-desktop="images_cms/events/events-slider-06.jpg" data-image-tablet="images_cms/events/events-slider-06-tablet.jpg" alt="">
                            </div>
                            <div class="text-container full-width-version">
                              <div class="row">
                                <div class="col-md-6">
                                  <p><strong>Venue</strong></p>
                                  <p>Tampines Hub</p>
                                </div>
                                <div class="col-md-6">
                                  <p><strong>Admission</strong></p>
                                  <p>Free</p>
                                </div>                           
                              </div>                                                      
                            </div>
                          </div> <!-- end page-default-event-box -->
                        </div> <!-- end page-events-slider-item -->
                        
                        <!-- 
                            __________________  ___   _____
                           /  _/_  __/ ____/  |/  /  /__  /
                           / /  / / / __/ / /|_/ /     / /
                         _/ /  / / / /___/ /  / /     / /
                        /___/ /_/ /_____/_/  /_/     /_/

                        -->

                        <div class="page-events-slider-item" data-month="4" data-geo-lat="1.3745733" data-geo-lng="103.716078" data-image-desktop="images_cms/events/events-slider-07v2.jpg">
                          <div class="page-default-event-box events-version">
                            <div class="tag-container"><h6>Corporate</h6></div>                    
                            <div class="text-container">
                              <h3>Singapore Pools 50th Anniversary Celebratory Dinner</h3>
                              <p>May 2018 marks Singapore Pools’ golden jubilee. Coming together with our corporate partners, vendors, beneficiaries, staff, internal stakeholders, and media, this event celebrates our 50 years for community benefit.</p>
                            </div>
                            <div class="manic-image-container">
                              <img src="" class="img-responsive" 
                                data-image-desktop="images_cms/events/events-slider-07.jpg" data-image-tablet="images_cms/events/events-slider-07-tablet.jpg" alt="">
                            </div>                      
                            <div class="text-container full-width-version">
                              <div class="row">
                                <div class="col-md-6">
                                  <p><strong>Venue</strong></p>
                                  <p>Private Event (by invitation only)</p>
                                </div>                           
                              </div>                                                      
                            </div>
                          </div> <!-- end page-default-event-box -->
                        </div> <!-- end page-events-slider-item -->

                      </div> <!-- end page-events-slider -->

                      <div id="page-events-slider-map"></div>
                      <div id="end-events-map-sticky-trigger"></div>
                    </div>

                  </div> <!-- end col-md-4 -->

                  <div class="col-md-4 no-left-padding">  
                                        
                    <div id="page-events-long-image">
                      <div class="manic-image-container">
                        <img src="" class="img-responsive" alt="">
                      </div>
                    </div>

                  </div> <!-- end col-md-4 -->

                  <div class="col-md-10 col-md-offset-2">
                    <div id="page-events-slider-seperator-line"></div>
                  </div>

                </div> <!-- end page-events-slider-section -->

              </div>
              
              <div class="row">

                <div id="page-events-upcoming-section" class="hidden-sm hidden-xs">
                
                  <div id="page-events-upcoming-section-title">
                    <div class="col-md-8 col-md-offset-3 no-left-padding">                  
                      <h2>Upcoming Events <!-- in <br class="hidden-xs hidden-sm"> Feburary & March --></h2>                  
                    </div>
                  </div> <!-- end page-events-upcoming-section-title -->

                  <div id="page-events-upcoming-section-content">

                    <div id="all-upcoming-events">
                      
                      <!-- 
                         __  ______  __________  __  ________   ________   _______    _________   _____________
                        / / / / __ \/ ____/ __ \/  |/  /  _/ | / / ____/  / ____/ |  / / ____/ | / /_  __/ ___/
                       / / / / /_/ / /   / / / / /|_/ // //  |/ / / __   / __/  | | / / __/ /  |/ / / /  \__ \
                      / /_/ / ____/ /___/ /_/ / /  / // // /|  / /_/ /  / /___  | |/ / /___/ /|  / / /  ___/ /
                      \____/_/    \____/\____/_/  /_/___/_/ |_/\____/  /_____/  |___/_____/_/ |_/ /_/  /____/

                      -->

                      <div class="upcoming-event" data-upcoming-month="0">
                        <div class="tag-container"><h6>Corporate</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" 
                            data-image-desktop="images_cms/events/upcoming-events-01.jpg" alt="">
                        </div>
                        <div class="text-container">
                          <h6>Singapore Pools’ 50 Years Journey</h6>
                          <h3>Corporate Tour</h3>
                          <p>Hear the nostalgic stories of how we started our journey in 1968...</p>
                        </div>
                      </div>

                      <div class="upcoming-event" data-upcoming-month="1">
                        <div class="tag-container"><h6>Public</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" 
                            data-image-desktop="images_cms/events/upcoming-events-02.jpg" alt="">
                        </div>
                        <div class="text-container">
                          <h6>50TH ANNIVERSARY LIMITED EDITION PENNIES</h6>
                          <h3>Roving Tour</h3>
                          <p>Look out for our 50th Anniversary limited edition pennies at our branches</p>
                        </div>
                      </div>

                      <div class="upcoming-event" data-upcoming-month="1">
                        <div class="tag-container"><h6>Public</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" 
                            data-image-desktop="images_cms/events/upcoming-events-03.jpg" alt="">
                        </div>
                        <div class="text-container">
                          <h6>EXHIBITION: 50 YEARS FOR COMMUNITY BENEFIT</h6>
                          <h3>A Good Day Out</h3>
                          <p>This exhibition will take you down memory lane on our 50 years of contributions...</p>
                        </div>
                      </div>

                      <div class="upcoming-event" data-upcoming-month="1">
                        <div class="tag-container"><h6>Public</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" 
                            data-image-desktop="images_cms/events/upcoming-events-04.jpg" alt="">
                        </div>
                        <div class="text-container">
                          <h6>SINGAPORE POOLS’ FLOAT</h6>
                          <h3>Chingay 2018</h3>
                          <p>Catch Singapore Pools' float making its way from the main parade site to the heartlands...</p>
                        </div>
                      </div>

                      <div class="upcoming-event" data-upcoming-month="4">
                        <div class="tag-container"><h6>Public</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" 
                            data-image-desktop="images_cms/events/upcoming-events-05.jpg" alt="">
                        </div>
                        <div class="text-container">
                          <h6>FUNDRAISING TOURNAMENT</h6>
                          <h3>Football With A Heart 2018</h3>
                          <p>Catch the Celebrity Teams competition in action...</p>
                        </div>
                      </div>

                      <div class="upcoming-event" data-upcoming-month="4">
                        <div class="tag-container"><h6>Public</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" 
                            data-image-desktop="images_cms/events/upcoming-events-06.jpg" alt="">
                        </div>
                        <div class="text-container">
                          <h6>COMMUNITY EVENTS</h6>
                          <h3>Concert With A Heart & Community Marketplace</h3>
                          <p>Sing-a-long our live concert and cheer for the heartwarming performances by beneficiaries...</p>
                        </div>
                      </div>

                      <div class="upcoming-event" data-upcoming-month="4">
                        <div class="tag-container"><h6>Corporate</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" 
                            data-image-desktop="images_cms/events/upcoming-events-07.jpg" alt="">
                        </div>
                        <div class="text-container">
                          <h6>PRIVATE EVENT</h6>
                          <h3>50th Anniversary Celebratory Dinner</h3>
                          <p>Celebrating with our corporate partners, vendors, beneficiaries, staff, internal stakeholders, and media...</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 col-md-offset-3 no-left-padding">                      

                      <div class="page-default-event-box margin-20-right upcoming-events-version first-upcoming-event">
                        <div class="tag-container"><h6>Corporate</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" alt="">
                        </div>
                        <div class="text-container">
                          <h6>Singapore Pools’ 50 Years Journey</h6>
                          <h3>Corporate Tour</h3>
                          <p>Hear the nostalgic stories of how we started our journey in 1968...</p>
                        </div>
                      </div>


                    </div> <!-- end col-md-4 -->

                    <div class="col-md-4">

                      <div class="page-default-event-box margin-20-left upcoming-events-version second-upcoming-event">
                        <div class="tag-container"><h6>Public</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" alt="">
                        </div>
                        <div class="text-container">
                          <h3>Roving Tour (North Outlets)</h3>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                        </div>
                      </div>

                    </div> <!-- end col-md-4 -->

                  </div> <!-- end page-events-upcoming-section-content -->

                </div> <!-- end page-event-upcoming-section -->

                <div id="end-events-sidebar-sticky-trigger" class="col-md-12"></div>

              </div> <!-- end content-group-2 -->                                      
            </div> <!-- end page-events-content -->

          </div> <!-- end container-fluid -->

      </article> <!-- end page-events-content-container -->

      <!-- 
          __  _______  ____  ______    ______
         /  |/  / __ \/ __ )/  _/ /   / ____/
        / /|_/ / / / / __  |/ // /   / __/
       / /  / / /_/ / /_/ // // /___/ /___
      /_/  /_/\____/_____/___/_____/_____/

      -->

      <article id="page-events-content-container-mobile" class="visible-xs visible-sm">
        
        <div class="container-fluid reduce-padding-mobile">
          
          <div class="row">
            
            <!-- 
                __________________  ___   ___
               /  _/_  __/ ____/  |/  /  <  /
               / /  / / / __/ / /|_/ /   / /
             _/ /  / / / /___/ /  / /   / /
            /___/ /_/ /_____/_/  /_/   /_/
            
            -->
            <div class="col-md-12 no-padding-mobile">

              <div class="page-events-item-mobile">
                <a href="events-corporate-tour.html" class="overlay-container">
                  <div class="date-title-container">
                    <div class="date-container">
                      <div class="center-date">
                        <h6>Jan</h6>
                        <h6>Dec</h6>
                        <h1>01 – 31</h1>
                      </div>
                    </div>                    
                    <div class="title-container">
                      <h3>Corporate Tour: Singapore Pools’ 50-Year Journey</h3>                         
                    </div>
                  </div>
                </a>        
                <div class="manic-image-container">
                  <img src="" class="img-responsive"
                    data-image-tablet="images_cms/events/event-01-tablet.jpg"
                    data-image-mobile="images_cms/events/event-01-mobile.jpg" alt="">
                </div>                              
              </div> <!-- end page-events-slider-item -->

            </div>
            
            <!-- 
                __________________  ___   ___
               /  _/_  __/ ____/  |/  /  |__ \
               / /  / / / __/ / /|_/ /   __/ /
             _/ /  / / / /___/ /  / /   / __/
            /___/ /_/ /_____/_/  /_/   /____/

            -->

            <div class="col-md-12 no-padding-mobile">

              <div class="page-events-item-mobile">
                <a href="events-roving-tour.html" class="overlay-container">
                  <div class="date-title-container">
                    <div class="date-container">
                      <div class="center-date">
                        <h6>Feb</h6>
                        <h6>Dec</h6>
                        <h1>01 – 31</h1>
                      </div>
                    </div>                    
                    <div class="title-container">
                      <h3>Roving Tour: 50th Anniversary Limited Edition Pennies</h3>                         
                    </div>
                  </div>
                </a>        
                <div class="manic-image-container">
                  <img src="" class="img-responsive"
                    data-image-tablet="images_cms/events/event-02-tablet.jpg"
                    data-image-mobile="images_cms/events/event-02-mobile.jpg" alt="">
                </div>                              
              </div> <!-- end page-events-slider-item -->

            </div>

            <!-- 
                __________________  ___   _____
               /  _/_  __/ ____/  |/  /  |__  /
               / /  / / / __/ / /|_/ /    /_ <
             _/ /  / / / /___/ /  / /   ___/ /
            /___/ /_/ /_____/_/  /_/   /____/

            -->

            <div class="col-md-12 no-padding-mobile">

              <div class="page-events-item-mobile">
                <a href="events-a-good-day-out.html" class="overlay-container">
                  <div class="date-title-container">
                    <div class="date-container">
                      <div class="center-date">
                        <h6>Feb</h6>
                        <h1>10</h1>
                      </div>
                    </div>                    
                    <div class="title-container">
                      <h3>Exhibition: 50 Years for Community Benefit @ A Good Day Out</h3>                         
                    </div>
                  </div>
                </a>        
                <div class="manic-image-container">
                  <img src="" class="img-responsive"
                    data-image-tablet="images_cms/events/event-03-tablet.jpg"
                    data-image-mobile="images_cms/events/event-03-mobile.jpg" alt="">
                </div>                              
              </div> <!-- end page-events-slider-item -->

            </div>
            
            <!-- 
                __________________  ___   __ __
               /  _/_  __/ ____/  |/  /  / // /
               / /  / / / __/ / /|_/ /  / // /_
             _/ /  / / / /___/ /  / /  /__  __/
            /___/ /_/ /_____/_/  /_/     /_/

            -->

            <div class="col-md-12 no-padding-mobile">

              <div class="page-events-item-mobile">
                <a href="events-chingay.html" class="overlay-container">
                  <div class="date-title-container">
                    <div class="date-container">
                      <div class="center-date">
                        <h6>Feb</h6>
                        <h1>23 – 24</h1>
                      </div>
                    </div>                    
                    <div class="title-container">
                      <h3>Chingay 2018</h3>                         
                    </div>
                  </div>
                </a>        
                <div class="manic-image-container">
                  <img src="" class="img-responsive"
                    data-image-tablet="images_cms/events/event-04-tablet.jpg"
                    data-image-mobile="images_cms/events/event-04-mobile.jpg" alt="">
                </div>                              
              </div> <!-- end page-events-slider-item -->

            </div>
            
            <!-- 
                __________________  ___   ______
               /  _/_  __/ ____/  |/  /  / ____/
               / /  / / / __/ / /|_/ /  /___ \
             _/ /  / / / /___/ /  / /  ____/ /
            /___/ /_/ /_____/_/  /_/  /_____/

            -->

            <div class="col-md-12 no-padding-mobile">

              <div class="page-events-item-mobile">
                <a href="events-football-tournament.html" class="overlay-container">
                  <div class="date-title-container">
                    <div class="date-container">
                      <div class="center-date">
                        <h6>May</h6>
                        <h1>05 – 06</h1>
                      </div>
                    </div>                    
                    <div class="title-container">
                      <h3>Football With A Heart 2018 Tournament</h3>                         
                    </div>
                  </div>
                </a>        
                <div class="manic-image-container">
                  <img src="" class="img-responsive"
                    data-image-tablet="images_cms/events/event-05-tablet.jpg"
                    data-image-mobile="images_cms/events/event-05-mobile.jpg" alt="">
                </div>                              
              </div> <!-- end page-events-slider-item -->

            </div>
            
            <!--  
                __________________  ___   _____
               /  _/_  __/ ____/  |/  /  / ___/
               / /  / / / __/ / /|_/ /  / __ \
             _/ /  / / / /___/ /  / /  / /_/ /
            /___/ /_/ /_____/_/  /_/   \____/

            -->

            <div class="col-md-12 no-padding-mobile">

              <div class="page-events-item-mobile">
                <a href="events-community-marketplace.html" class="overlay-container">
                  <div class="date-title-container">
                    <div class="date-container">
                      <div class="center-date">
                        <h6>May</h6>
                        <h1>05 – 06</h1>
                      </div>
                    </div>                    
                    <div class="title-container">
                      <h3>Concert With A Heart & Community Marketplace</h3>                         
                    </div>
                  </div>
                </a>        
                <div class="manic-image-container">
                  <img src="" class="img-responsive"
                    data-image-tablet="images_cms/events/event-06-tablet.jpg"
                    data-image-mobile="images_cms/events/event-06-mobile.jpg" alt="">
                </div>                              
              </div> <!-- end page-events-slider-item -->

            </div>
            
            <!-- 
                __________________  ___   _____
               /  _/_  __/ ____/  |/  /  /__  /
               / /  / / / __/ / /|_/ /     / /
             _/ /  / / / /___/ /  / /     / /
            /___/ /_/ /_____/_/  /_/     /_/

            -->

            <div class="col-md-12 no-padding-mobile">

              <div class="page-events-item-mobile">
                <a href="events-celebratory-dinner.html" class="overlay-container">
                  <div class="date-title-container">
                    <div class="date-container">
                      <div class="center-date">
                        <h6>May</h6>                    
                        <h1>21</h1>
                      </div>
                    </div>                    
                    <div class="title-container">
                      <h3>Singapore Pools 50th Anniversary Celebratory Dinner</h3>                         
                    </div>
                  </div>
                </a>        
                <div class="manic-image-container">
                  <img src="" class="img-responsive"
                    data-image-tablet="images_cms/events/event-07-tablet.jpg"
                    data-image-mobile="images_cms/events/event-07-mobile.jpg" alt="">
                </div>                              
              </div> <!-- end page-events-slider-item -->

            </div>
        
          </div> <!-- end row -->

        </div>

      </article> <!-- end page-events-content-container-mobile -->

    </div> <!-- #page-wrapper-content -->
  </div> <!-- #page-wrapper -->

  <?php include "includes/footer_desktop.php"; ?>
  <?php include "includes/footer_mobile.php"; ?>

  <?php include "includes/script_events.php" ?>

</body>
</html>
<?php
// saving captured output to file
file_put_contents('events.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>