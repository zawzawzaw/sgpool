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
                  <span>A GOOD DAY OUT by Tote Board</span>
                </div>
                <div class="page-events-calender-slider-item pass-event">
                  <h6>Feb</h6>
                  <h1>23 – 24</h1>
                  <span>Chingay 2018</span>
                </div>

                <div class="page-events-calender-slider-item future-event">
                  <h6>May</h6>
                  <h1>05 – 06</h1>
                  <span>Football With A Heart 2018</span>
                </div>
                <div class="page-events-calender-slider-item future-event">
                  <h6>May</h6>
                  <h1>05 – 06</h1>
                  <span>Concert With A Heart 2018</span>
                </div>
                <div class="page-events-calender-slider-item future-event">
                  <h6>May</h6>
                  <h1>21</h1>
                  <span>Singapore Pools 50th Anniversary Dinner</span>
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
                <div class="col-md-10 col-md-push-2">
                  <div id="page-events-seperator-line"></div>
                  <div id="page-events-completed">
                    <div class="text-container">
                      <h2>Football With A Heart 2018</h2>
                      <p>Visit the Gallery for the event photos!</p>
                      <a href="#" class="square-cta">Click Here!</a>
                    </div>
                  </div>
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

                        <div class="page-events-slider-item" data-month="1" data-geo-lat="1.2815683" data-geo-lng="103.86361320000003" data-image-desktop="images_cms/events/events-slider-03v3.jpg" data-expired="1" data-expired-title="A GOOD DAY OUT by Tote Board" data-expired-link="gallery.html#tote">
                          <div class="page-default-event-box events-version">
                            <!-- <div class="tag-container"><h6>Public</h6></div>                     -->
                            <div class="text-container">
                              <h3>A GOOD DAY OUT by Tote Board</h3>
                              <p>Catch the heartwarming performance from beneficiaries who benefitted from the Tote Board Group’s giving at A Good Day Out at Gardens By The Bay.</p>

                              <p>You can walk down the memory lane on our 50 years of contributions for community benefit – from countering illegal gambling to making possible many of the good we see today – at the Tapestry of Hope exhibition area.</p>

                              <p>Visit <a href="http://www.toteboard.gov.sg/tote-board-30">http://www.toteboard.gov.sg/tote-board-30</a> for more details.</p>
                              <!-- <p>Admission is free.</p> -->
                            </div>
                            <!-- <div class="manic-image-container" data-vertical-align="top">
                              <img src="" class="img-responsive" 
                                data-image-desktop="images_cms/events/events-slider-03.jpg" alt="">
                            </div> -->
                            <div class="text-container full-width-version">
                              <div class="row">
                                <div class="col-md-6">
                                  <p><strong>Venue</strong></p>
                                  <p>Gardens by the Bay (The Meadow)</p>
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

                        <div class="page-events-slider-item" data-month="1" data-geo-lat="1.2912445" data-geo-lng="103.86392780000006" data-image-desktop="images_cms/events/events-slider-04v3.jpg" data-expired="1" data-expired-title="Chingay 2018" data-expired-link="gallery.html#chingay">
                          <div class="page-default-event-box events-version">
                            <!-- <div class="tag-container"><h6>Public</h6></div>                     -->
                            <div class="text-container">
                              <h3>Chingay 2018</h3>
                              <p>Immerse in the dazzling displays of light, sound, costumes and performances at Asia’s largest street performance.</p>
                              <p>Catch Singapore Pools’ float as one of the parade’s finale float. The floats will also be visiting heartlands, to share the celebration and promoting multi-culturalism and community cohesiveness, with all fellow Singaporeans.</p>
                              <p>Singapore Pools is a Principal Founding Sponsor of the Chingay Parade since 1995.</p>
                              <p>Visit <a href="https://www.chingay.org.sg">https://www.chingay.org.sg</a> for more details.</p>
                            </div>
                            <!-- <div class="manic-image-container">
                              <img src="" class="img-responsive" 
                                data-image-desktop="images_cms/events/events-slider-04.jpg" alt="">
                            </div> -->
                            <div class="text-container full-width-version">
                              <div class="row">
                                <div class="col-md-6">
                                  <p><strong>Venue</strong></p>
                                  <p>F1 Pit Building</p>
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
                            __________________  ___   ______
                           /  _/_  __/ ____/  |/  /  / ____/
                           / /  / / / __/ / /|_/ /  /___ \
                         _/ /  / / / /___/ /  / /  ____/ /
                        /___/ /_/ /_____/_/  /_/  /_____/

                        -->

                        <div class="page-events-slider-item" data-month="4" data-geo-lat="1.3529944" data-geo-lng="103.94039739999994" data-image-desktop="images_cms/events/events-slider-05v3.jpg" data-expired="0" data-expired-title="Football With A Heart 2018" data-expired-link="gallery.html#football">
                          <div class="page-default-event-box events-version">
                            <!-- <div class="tag-container"><h6>Public</h6></div>                     -->
                            <div class="text-container">
                              <h3>Football With A Heart 2018</h3>
                              <p>Swing by to be present at Singapore’s largest football charity fundraiser, Football With A Heart (FWAH)!</p>
                              <p>Over the past few edition, we have raised more than S2.2 million in aid of many beneficiaries with organisations from different industry coming together for a good cause.</p>
                              <p>In its fifth edition, FWAH will welcome about 900 footballers from various corporations for a friendly five-a-side football tournament. Catch our Parliamentarian Team and Team Public Service in action as they pit against each other at the celebrity matches. Be there to cheer for them!</p>
                              <p>The event is fully funded by organising partners and supported by venue partner, Our Tampines Hub. All proceeds from the event go to designated charities.</p>
                              <!-- <p>Admission is free.</p> -->
                            </div>
                            <!-- <div class="manic-image-container">
                              <img src="" class="img-responsive" 
                                data-image-desktop="images_cms/events/events-slider-05.jpg" alt="">
                            </div> -->
                            <div class="text-container full-width-version">
                              <div class="row">
                                <div class="col-md-6">
                                  <p><strong>Venue</strong></p>
                                  <p>Our Tampines Hub (Town Square)</p>
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

                        <div class="page-events-slider-item" data-month="4" data-geo-lat="1.3529944" data-geo-lng="103.94039739999994" data-image-desktop="images_cms/events/events-slider-06v3.jpg" data-expired="0" data-expired-title="Concert With A Heart 2018" data-expired-link="gallery.html#concert" data-image-caption="1">
                          <div class="page-default-event-box events-version">
                            <!-- <div class="tag-container"><h6>Public</h6></div>                     -->
                            <div class="text-container">
                              <h3>Concert With A Heart 2018</h3>
                              <p>In conjunction with Football With A Heart, you may indulge yourself in the community concert at the Festive Plaza.</p>
                              <p>Concert With A Heart gathers some of our local artistes and performing talents with disabilities for two days of singing and dancing.</p>
                              <p>Sharing more details soon!</p>
                            </div>
                            <!-- <div class="manic-image-container">
                              <img src="" class="img-responsive" 
                                data-image-desktop="images_cms/events/events-slider-06.jpg" data-image-tablet="images_cms/events/events-slider-06-tablet.jpg" alt="">
                            </div> -->
                            <div class="text-container full-width-version">
                              <div class="row">
                                <div class="col-md-6">
                                  <p><strong>Venue</strong></p>
                                  <p>Our Tampines Hub (Festive Plaza)</p>
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

                        <div class="page-events-slider-item" data-month="4" data-geo-lat="1.3013422" data-geo-lng="103.8514418" data-image-desktop="images_cms/events/events-slider-07v3.jpg" data-expired="0" data-expired-title="Singapore Pools 50th Anniversary Dinner" data-expired-link="gallery.html#dinner" data-image-caption="0">
                          <div class="page-default-event-box events-version">
                            <!-- <div class="tag-container"><h6>Corporate</h6></div>                     -->
                            <div class="text-container">
                              <h3>Singapore Pools 50th Anniversary Dinner</h3>
                              <p>May 2018 marks Singapore Pools’ golden jubilee. An intimate dinner event to commemorate the celebration with our various stakeholders. Coming together to celebrate our 50 years for community benefit.</p>
                              <p><strong>By Invitation Only</strong></p>
                            </div>
                            <!-- <div class="manic-image-container">
                              <img src="" class="img-responsive" 
                                data-image-desktop="images_cms/events/events-slider-07.jpg" data-image-tablet="images_cms/events/events-slider-07-tablet.jpg" alt="">
                            </div>                       -->
                            <!-- <div class="text-container full-width-version">
                              <div class="row">
                                <div class="col-md-6">
                                  <p><strong>Venue</strong></p>
                                  <p>Private Event (by invitation only)</p>
                                </div>                           
                              </div>                                                      
                            </div> -->
                          </div> <!-- end page-default-event-box -->
                        </div> <!-- end page-events-slider-item -->

                      </div> <!-- end page-events-slider -->

                      <div id="page-events-slider-map"></div>
                      <div id="end-events-map-sticky-trigger"></div>
                    </div>

                  </div> <!-- end col-md-4 -->

                  <div class="col-md-4 no-left-padding no-left-padding-tablet">
                                        
                    <div id="page-events-long-image">
                      <div class="manic-image-container">
                        <img src="" class="img-responsive" alt="">
                      </div>
                      <div class="image-caption">
                        <div class="image-caption-1"><h6>Jack & Rai</h6></div>
                        <div class="image-caption-2"><h6>Nathan Hartono</h6></div>
                        <div class="image-caption-3"><h6>Patricia Mok</h6></div>
                        <div class="image-caption-4"><p>FLY Entertainment Artiste <br>Photo by Joel Low photography</p></div>
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

                      <!-- <div class="upcoming-event" data-upcoming-month="0">
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
                      </div> -->

                      <div class="upcoming-event" data-upcoming-month="1">
                        <div class="tag-container"><h6>Public</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" 
                            data-image-desktop="images_cms/events/upcoming-events-03v2.jpg" alt="">
                        </div>
                        <div class="text-container">
                          <!-- <h6>EXHIBITION: 50 YEARS FOR COMMUNITY BENEFIT</h6> -->
                          <h3>A GOOD DAY OUT by <br class="hidden-xs hidden-sm"> Tote Board</h3>
                          <p>Catch the heartwarming performance from beneficiaries who benefitted from the Tote Board Group...</p>
                        </div>
                      </div>

                      <div class="upcoming-event" data-upcoming-month="1">
                        <div class="tag-container"><h6>Public</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" 
                            data-image-desktop="images_cms/events/upcoming-events-04v2.jpg" alt="">
                        </div>
                        <div class="text-container">
                          <!-- <h6>SINGAPORE POOLS’ FLOAT</h6> -->
                          <h3>Chingay 2018</h3>
                          <p>Immerse in the dazzling displays of light, sound, costumes and performances at Asia’s largest street performance...</p>
                        </div>
                      </div>

                      <div class="upcoming-event" data-upcoming-month="4">
                        <div class="tag-container"><h6>Public</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" 
                            data-image-desktop="images_cms/events/upcoming-events-05v2.jpg" alt="">
                        </div>
                        <div class="text-container">
                          <!-- <h6>FUNDRAISING TOURNAMENT</h6> -->
                          <h3>Football With A Heart 2018</h3>
                          <p>Swing by to be present at Singapore’s largest football charity fundraiser, Football With A Heart (FWAH)!</p>
                        </div>
                      </div>

                      <div class="upcoming-event" data-upcoming-month="4">
                        <div class="tag-container"><h6>Public</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" 
                            data-image-desktop="images_cms/events/upcoming-events-06v2.jpg" alt="">
                        </div>
                        <div class="text-container">
                          <!-- <h6>COMMUNITY EVENTS</h6> -->
                          <h3>Concert With A Heart 2018</h3>
                          <p>In conjunction with Football With A Heart, you may indulge yourself in the community concert at the Festive Plaza.</p>
                        </div>
                      </div>

                      <div class="upcoming-event" data-upcoming-month="4">
                        <div class="tag-container"><h6>Corporate</h6></div>
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" 
                            data-image-desktop="images_cms/events/upcoming-events-07v2.jpg" alt="">
                        </div>
                        <div class="text-container">
                          <!-- <h6>PRIVATE EVENT</h6> -->
                          <h3>Singapore Pools 50th Anniversary Dinner</h3>
                          <p>May 2018 marks Singapore Pools’ golden jubilee. An intimate dinner event to commemorate the celebration...</p>
                        </div>
                      </div>
                    </div>

                    <!-- this section will get updated by JS depends on current month -->
                    <div class="col-md-4 col-md-offset-3 no-left-padding">                      

                      <div class="page-default-event-box margin-20-right upcoming-events-version first-upcoming-event">
                        <!-- <div class="tag-container"><h6>Corporate</h6></div> -->
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
                    <!-- this section will get updated by JS depends on current month -->
                    
                    <!-- this section will get updated by JS depends on current month -->
                    <div class="col-md-4">

                      <div class="page-default-event-box margin-20-left upcoming-events-version second-upcoming-event">
                        <!-- <div class="tag-container"><h6>Public</h6></div> -->
                        <div class="manic-image-container">
                          <img src="" class="img-responsive" alt="">
                        </div>
                        <div class="text-container">
                          <h3>Roving Tour (North Outlets)</h3>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                        </div>
                      </div>

                    </div> <!-- end col-md-4 -->
                    <!-- this section will get updated by JS depends on current month -->

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
            <!-- <div class="col-md-12 no-padding-mobile">

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
              </div> <!- - end page-events-slider-item - ->

            </div> -->
            
            <!-- 
                __________________  ___   ___
               /  _/_  __/ ____/  |/  /  |__ \
               / /  / / / __/ / /|_/ /   __/ /
             _/ /  / / / /___/ /  / /   / __/
            /___/ /_/ /_____/_/  /_/   /____/

            -->

            <!-- <div class="col-md-12 no-padding-mobile">

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
              </div> <!- - end page-events-slider-item - ->

            </div> -->            
            
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
                      <h3>Football With A Heart 2018</h3>                         
                    </div>
                  </div>
                </a>        
                <div class="manic-image-container">
                  <img src="" class="img-responsive"
                    data-image-tablet="images_cms/events/event-05-tabletv2.jpg"
                    data-image-mobile="images_cms/events/event-05-mobilev2.jpg" alt="">
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
                <a href="events-concert.html" class="overlay-container">
                  <div class="date-title-container">
                    <div class="date-container">
                      <div class="center-date">
                        <h6>May</h6>
                        <h1>05 – 06</h1>
                      </div>
                    </div>                    
                    <div class="title-container">
                      <h3>Concert With A Heart 2018</h3>                         
                    </div>
                  </div>
                </a>        
                <div class="manic-image-container">
                  <img src="" class="img-responsive"
                    data-image-tablet="images_cms/events/event-06-tabletv2.jpg"
                    data-image-mobile="images_cms/events/event-06-mobilev2.jpg" alt="">
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
                      <h3>Singapore Pools 50th Anniversary Dinner</h3>                         
                    </div>
                  </div>
                </a>        
                <div class="manic-image-container">
                  <img src="" class="img-responsive"
                    data-image-tablet="images_cms/events/event-07-tabletv2.jpg"
                    data-image-mobile="images_cms/events/event-07-mobilev2.jpg" alt="">
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

              <div class="page-events-item-mobile completed">
                <div class="completed-text-container">
                  <h2>A GOOD DAY OUT by Tote Board</h2>
                  <p>Visit the Gallery for the event photos!</p>
                  <a href="gallery.html#tote" class="square-cta">Click Here!</a>
                </div>
                <a href="events-a-good-day-out.html" class="overlay-container">
                  <div class="date-title-container">
                    <div class="date-container">
                      <div class="center-date">
                        <h6>Feb</h6>
                        <h1>10</h1>
                      </div>
                    </div>                    
                    <div class="title-container">
                      <h3>A GOOD DAY OUT by Tote Board</h3>                         
                    </div>
                  </div>
                </a>        
                <div class="manic-image-container">
                  <img src="" class="img-responsive"
                    data-image-tablet="images_cms/events/event-03-tabletv2.jpg"
                    data-image-mobile="images_cms/events/event-03-mobilev2.jpg" alt="">
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

              <div class="page-events-item-mobile completed">
                <div class="completed-text-container">
                  <h2>Chingay 2018</h2>
                  <p>Visit the Gallery for the event photos!</p>
                  <a href="gallery.html#chingay" class="square-cta">Click Here!</a>
                </div>
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
                    data-image-tablet="images_cms/events/event-04-tabletv2.jpg"
                    data-image-mobile="images_cms/events/event-04-mobilev2.jpg" alt="">
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