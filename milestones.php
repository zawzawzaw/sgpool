<?php 
ob_start();
?>
<?php
  global $current_page;
  $current_page = "page-milestones";
  $page_title = "Milestones";

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

  <div id="page-wrapper">
    <div id="page-wrapper-content">   
        
        <div id="page-milestones-indicators-container">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-1">
                <div id="start-sticky-trigger"></div>
                
                <div class="wrap">
                  <div id="page-milestones-indicators" class="page-indicators">
                    <ul id="page-milestones-indicators-ul">
                        <li id="content-group-indicator-1" class="content-gorup-indicator">
                          <a href="#1968" class="indicator-links">1960s</a>
                          <ul>
                            <li><a href="#1968">1968</a></li>
                            <li><a href="#1969">1969</a></li>
                          </ul>
                          <ul id="decades" class="visible-xs visible-sm">
                            <li><a href="#1970s">1970s</a></li>
                            <li><a href="#1980s">1980s</a></li>
                            <li><a href="#1990s">1990s</a></li>
                            <li><a href="#2000s">2000s</a></li>
                            <li><a href="#2010s">2010s</a></li>
                          </ul>
                        </li>
                        <li id="content-group-indicator-2" class="content-gorup-indicator">
                          <a href="#1972" class="indicator-links">1970s</a>
                          <ul>
                            <li><a href="#1972">1972</a></li>
                            <li><a href="#1973">1973</a></li>
                          </ul>
                          <ul id="decades" class="visible-xs visible-sm">
                            <li><a href="#1960s">1960s</a></li>
                            <li><a href="#1980s">1980s</a></li>
                            <li><a href="#1990s">1990s</a></li>
                            <li><a href="#2000s">2000s</a></li>
                            <li><a href="#2010s">2010s</a></li>
                          </ul>
                        </li>
                        <li id="content-group-indicator-3" class="content-gorup-indicator">
                          <a href="#1980" class="indicator-links">1980s</a>
                          <ul>
                            <li><a href="#1980">1980</a></li>
                            <li><a href="#1986">1986</a></li>
                            <li><a href="#1988">1988</a></li>
                            <li><a href="#1989">1989</a></li>
                          </ul>
                          <ul id="decades" class="visible-xs visible-sm">
                            <li><a href="#1960s">1960s</a></li>
                            <li><a href="#1970s">1970s</a></li>
                            <li><a href="#1990s">1990s</a></li>
                            <li><a href="#2000s">2000s</a></li>
                            <li><a href="#2010s">2010s</a></li>
                          </ul>
                        </li>
                        <li id="content-group-indicator-4" class="content-gorup-indicator">
                          <a href="#1991" class="indicator-links">1990s</a>
                          <ul>
                            <li><a href="#1991">1991</a></li>
                            <li><a href="#1993">1993</a></li>
                            <li><a href="#1996">1996</a></li>
                            <li><a href="#1999">1999</a></li>
                          </ul>
                          <ul id="decades" class="visible-xs visible-sm">
                            <li><a href="#1960s">1960s</a></li>
                            <li><a href="#1970s">1970s</a></li>
                            <li><a href="#1980s">1980s</a></li>
                            <li><a href="#2000s">2000s</a></li>
                            <li><a href="#2010s">2010s</a></li>
                          </ul>
                        </li>
                        <li id="content-group-indicator-5" class="content-gorup-indicator">
                          <a href="#2000" class="indicator-links">2000s</a>
                          <ul>
                            <li><a href="#2000">2000</a></li>
                            <li><a href="#2002">2002</a></li>
                            <li><a href="#2003">2003</a></li>
                            <li><a href="#2004">2004</a></li>
                            <li><a href="#2005">2005</a></li>
                            <li><a href="#2007">2007</a></li>
                            <li><a href="#2008">2008</a></li>
                          </ul>
                          <ul id="decades" class="visible-xs visible-sm">
                            <li><a href="#1960s">1960s</a></li>
                            <li><a href="#1970s">1970s</a></li>
                            <li><a href="#1980s">1980s</a></li>
                            <li><a href="#1990s">1990s</a></li>
                            <li><a href="#2010s">2010s</a></li>
                          </ul>
                        </li>
                        <li id="content-group-indicator-6" class="content-gorup-indicator">
                          <a href="#2010" class="indicator-links">2010s</a>
                          <ul>
                            <li><a href="#2010">2010</a></li>
                            <li><a href="#2012">2012</a></li>
                            <li><a href="#2013">2013</a></li>
                            <li><a href="#2015">2015</a></li>
                            <li><a href="#2016">2016</a></li>
                            <li><a href="#2017">2017</a></li>
                          </ul>
                          <ul id="decades" class="visible-xs visible-sm">
                            <li><a href="#1960s">1960s</a></li>
                            <li><a href="#1970s">1970s</a></li>
                            <li><a href="#1980s">1980s</a></li>
                            <li><a href="#1990s">1990s</a></li>
                            <li><a href="#2000s">2000s</a></li>
                          </ul>
                        </li>
                      </ul>  
                  </div>
                </div>
              </div>     
            </div>
          </div>        
        </div>

        <article id="page-milestones-container"> 

          <div id="page-milestones-seperator-line-container">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-1 col-md-push-1">
                  <div id="page-milestones-seperator-line"></div>
                </div>
              </div>
            </div>
          </div>        

          <div class="container-fluid">
            
            <!-- <div class="row">               -->

              <!-- <div class="col-md-1"></div> -->
              
              <!-- <div class="col-md-11">                 -->                

                <div id="page-milestones-content" class="row">                                  
                                    
                  <div id="content-group-1" class="page-content-group">
                    <div class="col-md-4 col-md-offset-2">
                      <div id="trigger-content-group-1" class="scroll-target" data-value="1960s"></div>
                      <div id="item-1" class="floating-item"> 
                        <div class="scroll-target" data-value="1968"></div>
                        <div class="text-container">
                          <h2>1968</h2>
                          <p>Singapore Pools was founded on 23 May 1968.</p>
                        </div>                                         
                        <div class="manic-image-container full-col-width-version">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-1968.jpg"
                            data-image-tablet="images_cms/milestones/year-1968-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-1968-mobile.jpg" alt="">
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 col-md-offset-1">                      
                      <div id="item-2" class="floating-item">
                        <div class="scroll-target" data-value="1969"></div>
                        <div class="text-container">              
                          <h2>1969</h2>
                          <p>Introduced the Singapore Sweep on 28 February 1968 with $400,000 as the first prize.</p>
                        </div>
                        <div class="manic-image-container full-col-width-version">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-1969.jpg"
                            data-image-tablet="images_cms/milestones/year-1969-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-1969-mobile.jpg" alt="">
                        </div>
                      </div>
                    </div>
                  </div> <!-- end content-group-1 -->
                  
                  <div id="content-group-2" class="page-content-group">
                    <div class="col-md-4 col-md-offset-3">
                      <div id="trigger-content-group-2" class="scroll-target" data-value="1970s"></div>
                      <div id="item-3" class="floating-item">                  
                        <div class="scroll-target" data-value="1972"></div>
                        <div class="text-container">
                          <h2 id="test">1972</h2>
                          <p>Moved from first office in Percival Road to Colombo Court.</p>
                        </div>
                        <div class="manic-image-container full-col-width-version">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-1972.jpg"
                            data-image-tablet="images_cms/milestones/year-1972-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-1972-mobile.jpg" alt="">
                        </div>
                      </div>
                    </div>

                    <div class="col-md-11 col-md-offset-1">
                      <div id="item-4" class="floating-item longest-height-version">        
                        <div class="scroll-target" data-value="1973"></div>
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-1973.jpg"
                            data-image-tablet="images_cms/milestones/year-1973-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-1973-mobile.jpg" alt="">
                        </div>
                        <div class="text-container absolute-version">
                          <h2 id="test2">1973</h2>
                          <p>Singapore Pools contributed $14.5 million to the development of the National Stadium.</p>
                        </div>
                      </div>
                    </div>
                  </div> <!-- end content-group-2 -->
                  
                  <div id="content-group-3" class="page-content-group">
                    <div class="col-md-4 col-md-offset-2">
                      <div id="trigger-content-group-3" class="scroll-target" data-value="1980s"></div>
                      <div id="item-5" class="floating-item">
                        <div class="scroll-target" data-value="1980"></div>
                        <div class="text-container">
                          <h2>1980</h2>
                          <p>Became a subsidiary of Temasek Holdings on 1 October 1980.</p>                        
                        </div>                  
                      </div>
                      <div id="item-6" class="floating-item">     
                        <div class="scroll-target" data-value="1986"></div>
                        <div class="text-container">
                          <h2>1986</h2>
                          <p>Introduced 4-Digit (4D) lottery.</p>
                        </div>     
                        <div class="text-container">
                          <p>Set up a computerised gaming system integrated to network of retail outlets.</p>
                          
                        </div>        
                        <div class="manic-image-container full-col-width-version">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-1986.jpg"
                            data-image-tablet="images_cms/milestones/year-1986-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-1986-mobile.jpg" alt="">
                        </div>
                      </div>
                      <!-- <div id="item-7" class="floating-item long-verison">
                        <div class="text-container">
                          <p>Introduced 4-Digit (4D) lottery.</p>
                        </div>
                        <div class="manic-image-container full-col-width-version-2">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-1986-02.jpg"
                            data-image-tablet="images_cms/milestones/year-1986-02-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-1986-02-mobile.jpg" alt="">
                        </div>
                      </div> -->
                    </div>

                    <div class="col-md-5 col-md-offset-1">
                      <div id="item-8" class="floating-item">
                        <div class="scroll-target" data-value="1988"></div>
                        <div class="text-container">
                          <h2>1988</h2>
                          <p>Moved office from Colombo Court to International Plaza.</p>
                        </div>                                        
                      </div>                      
                      <div id="item-9" class="floating-item long-height-version">
                        <div class="scroll-target" data-value="1989"></div>
                        <div class="text-container">
                          <h2>1989</h2>
                          <p>Singapore Pools sponsored $45 million to the development of the Singapore Indoor Stadium.</p>
                        </div>                
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-1989.jpg"
                            data-image-tablet="images_cms/milestones/year-1989-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-1989-mobile.jpg" alt="">
                        </div>
                      </div>                      
                    </div>
                  </div> <!-- end content-group-3 -->

                  <div id="content-group-4" class="page-content-group">
                    <div class="col-md-11 col-md-offset-1">
                      <div id="trigger-content-group-4" class="scroll-target" data-value="1990s"></div>
                      <div id="item-10" class="floating-item longest-height-version">
                        <div class="scroll-target" data-value="1991"></div>
                        <div class="text-container absolute-version">
                          <h2>1991</h2>
                          <p>Became a principal sponsor of the National Day Parade and has been one of the key sponsors since.</p>
                        </div>            
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-1991.jpg"
                            data-image-tablet="images_cms/milestones/year-1991-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-1991-mobile.jpg" alt="">
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 col-md-offset-2">
                      <div id="item-11" class="floating-item">
                        <div class="scroll-target" data-value="1993"></div>
                        <div class="text-container">
                          <h2>1993</h2>
                          <p>4D Sweep, a 4D game based on the Singapore Sweep draw results was launched on 7 April 1993.</p>
                        </div>             
                        <div class="manic-image-container full-col-width-version">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-1993.jpg"
                            data-image-tablet="images_cms/milestones/year-1993-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-1993-mobile.jpg" alt="">
                        </div>
                      </div>                      
                    </div>
                    
                    <div class="col-md-4 col-md-offset-1">
                      <div id="item-12" class="floating-item">
                        <div class="scroll-target" data-value="1996"></div> 
                        <div class="text-container">                             
                          <h2>1996</h2>
                          <p>Introduced mission statement – “Towards Community Purpose and Benefit” on 17 July 1996. All gaming products’ logos were revamped.</p>
                        </div>
                      </div>
                      <div id="item-13" class="floating-item">
                        <div class="scroll-target" data-value="1999"></div> 
                        <div class="text-container">                             
                          <h2>1999</h2>
                          <p>Singapore Pools became a member of World Lottery Association on 11 August 1999.</p>                          
                        </div>
                        <div class="text-container">                                        
                          <p>Launched SCORE, a football betting game - in support of the local professional football development.</p>
                        </div>
                      </div>
                      <!-- <div id="item-14" class="floating-item">                          
                        <div class="text-container">                                        
                          <p>Launched SCORE, a football betting game - in support of the local professional football development.</p>
                        </div>
                      </div> -->
                    </div>                    
                  </div> <!-- end content-group-4 -->

                  <div id="content-group-5" class="page-content-group">
                    <div class="col-md-6 col-md-offset-3">
                      <div id="trigger-content-group-5" class="scroll-target" data-value="2000s"></div>
                      <div id="item-15" class="floating-item">
                        <div id="trigger-content-5" class="scroll-target" data-value="2000"></div> 
                        <div class="text-container">        
                          <h2>2000</h2>                          
                          <p>Singapore Turf Club ran 4D games every Wednesday evenings; Singapore Pools renamed 4D-Sweep draw to 4D draw.</p>
                        </div>
                      </div>
                      <div id="item-16" class="floating-item long-height-version">                                         
                        <div class="text-container">
                          <p>First TOTO Hongbao draw was conducted on 11 February 2000 with a jackpot prize of $10 million.</p>
                        </div>
                        <div class="manic-image-container full-col-width-version">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-2000.jpg"
                            data-image-tablet="images_cms/milestones/year-2000-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-2000-mobile.jpg" alt="">
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 col-md-offset-2">
                      <div id="item-17" class="floating-item">
                      <div id="trigger-content-6" class="scroll-target" data-value="2002"></div>                         
                        <div class="text-container">
                          <h2>2002</h2>
                          <p>Launched STRIKE!, an international football betting game.</p>                          
                        </div>
                      </div>
                      <div id="item-18" class="floating-item long-height-version">                        
                        <div class="text-container">
                          <p>Pledged all net proceeds from the Singapore Sweep towards the development of the Esplanade – Theatres on the Bay.</p>
                        </div>
                        <div class="manic-image-container full-col-width-version-2">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-2002.jpg"
                            data-image-tablet="images_cms/milestones/year-2002-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-2002-mobile.jpg" alt="">
                        </div>
                        <span class="small-caption">Photo courtesy of The Esplanade – Theatres on the Bay</span>
                      </div>                      
                    </div>
                    <div class="col-md-5 col-md-offset-1">
                      <div id="item-19" class="strike floating-item long-height-version">
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-2002-02.jpg"
                            data-image-tablet="images_cms/milestones/year-2002-02-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-2002-02-mobile.jpg" alt="">
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12"></div>

                    <div class="col-md-3 col-md-offset-2">
                      <div id="item-20" class="floating-item">
                        <div class="scroll-target" data-value="2003"></div> 
                        <div class="text-container">
                          <h2>2003</h2>
                          <p>iShine, a staff community programme that promotes 'I Serve from the Heart and In Nurturing Everyone' was initiated to support the community at large.</p>
                        </div>
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-2003.jpg"
                            data-image-tablet="images_cms/milestones/year-2003-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-2003-mobile.jpg" alt="">
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div id="item-22" class="floating-item">
                        <div class="scroll-target" data-value="2004"></div> 
                        <div class="text-container">
                          <h2>2004</h2>
                          <p>Joined Singapore Totalisator Board with Singapore Pools managing 4D, TOTO, Singapore Sweep and football betting.</p>
                        </div>                        
                      </div>
                      <div id="item-21" class="floating-item">
                        <div class="scroll-target" data-value="2005"></div> 
                        <div class="text-container">
                          <h2>2005</h2>
                          <p>A new telephone betting service (Singapore Pools Account) was set up on 13 August 2005.</p>
                        </div>                        
                      </div>
                    </div>
                    <div class="col-md-3 col-md-offset-1">
                      
                      <div id="item-23" class="floating-item">
                        <div class="scroll-target" data-value="2007"></div> 
                        <div class="text-container">
                          <h2>2007</h2>
                          <p>Started the annual Responsible Gaming Programme - aimed to educate and create a responsible gaming environment for customers.</p>
                        </div>                        
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-2007.jpg"
                            data-image-tablet="images_cms/milestones/year-2007-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-2007-mobile.jpg" alt="">
                        </div>                 
                      </div>
                    </div>
                    <div class="col-md-6 col-md-offset-2">
                      <div id="item-24" class="floating-item long-height-version">
                        <div class="scroll-target" data-value="2008"></div> 
                        <div class="text-container">
                          <h2>2008</h2>
                          <p>Launched sports betting on Formula One (F1) races on 4 March 2008.</p>
                        </div>
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-2008.jpg"
                            data-image-tablet="images_cms/milestones/year-2008-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-2008-mobile.jpg" alt="">                          
                        </div>
                      </div>
                    </div>   
                  </div> <!-- end content-group-5 -->

                  <div class="col-md-12"></div>

                  <div id="content-group-6" class="page-content-group">
                    <div class="col-md-3 col-md-offset-2">
                      <div id="trigger-content-group-6" class="scroll-target" data-value="2010s"></div>
                      <div id="item-25" class="floating-item">
                        <div class="scroll-target" data-value="2010"></div> 
                        <div class="text-container">                                    
                          <h2>2010</h2>
                          <p>Introduced the Responsible Gaming Ambassador Programme and the Winners Wealth Management Programme to promote responsible gaming and educate winners about wealth management.</p>
                        </div>
                      </div>
                      <div id="item-26" class="floating-item">
                        <div class="text-container">
                          <p>Opened premium ‘live’ sports entertainment venues, LiveWire, at Marina Bay Sands and Resorts World Sentosa. </p>
                        </div>
                        <div class="manic-image-container visible-xs visible-sm">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-2010.jpg"
                            data-image-tablet="images_cms/milestones/year-2010-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-2010-mobile.jpg" alt="">   
                        </div>
                      </div>
                      <div id="item-27" class="floating-item">
                        <div class="scroll-target" data-value="2012"></div>
                        <div class="text-container">
                          <h2>2012</h2>
                          <p>Achieved Level 4 of the World Lottery Association’s Responsible Gaming Workframe, the highest global standard of responsible gaming.</p>
                        </div>
                        <div class="text-container">
                          <p>Kicked off the Football With A Heart (FWAH) fundraising event and raised $350,000 for nine beneficiaries.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7">
                      <div id="item-28" class="floating-item hidden-xs hidden-sm">
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-2010.jpg"
                            data-image-tablet="images_cms/milestones/year-2010-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-2010-mobile.jpg" alt="">   
                        </div>
                      </div>
                    </div>

                    <div class="col-md-11 col-md-offset-1">
                      <div id="item-29" class="floating-item longest-height-version">     
                        <div class="scroll-target" data-value="2013"></div>
                        <div class="text-container absolute-version">
                          <h2>2013</h2>
                          <p>Opened its 12-storey building at Middle Road. The building won the Building and Construction Authority’s Green Mark GoldPLus Award.</p>
                        </div>
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-2013.jpg"
                            data-image-tablet="images_cms/milestones/year-2013-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-2013-mobile.jpg" alt="">      
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 col-md-offset-2">
                      <div id="item-30" class="hidden-sm hidden-xs floating-item long-height-version">
                        <div class="scroll-target" data-value="2015"></div>
                        <div class="manic-image-container full-col-width-version-2 has-show-all">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-2015.jpg"
                            data-image-tablet="images_cms/milestones/year-2015-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-2015-mobile.jpg" alt="">      
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 col-md-offset-1">
                      <div id="item-31" class="floating-item long-height-version">
                        <div class="text-container">
                          <h2>2015</h2>
                          <p>Achieved re-certification of Level 4 of the World Lottery Association Responsible Gaming Framework.</p>                    
                        </div>
                        <!-- <div class="manic-image-container full-col-width-version-2">                          
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-2015-02.jpg"
                            data-image-tablet="images_cms/milestones/year-2015-02-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-2015-02-mobile.jpg" alt="">      
                        </div> -->
                      </div>
                    </div>

                    <div class="col-md-4 col-md-offset-1">
                      <div id="item-32" class="floating-item">
                        <div class="scroll-target" data-value="2016"></div>
                        <div class="text-container">
                          <h2>2016</h2>
                          <p>An enhanced Singapore Pools Account service was introduced to allow customers to place bets online.</p>
                        </div>
                        <!-- <div class="manic-image-container full-col-width-version">
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-2016.jpg"
                            data-image-tablet="images_cms/milestones/year-2016-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-2016-mobile.jpg" alt="">      
                        </div> -->
                      </div>
                    </div>

                    <div class="col-md-4 col-md-offset-1">
                      <div id="item-33" class="floating-item long-height-version">
                        <div class="scroll-target" data-value="2017"></div>
                        <div class="text-container">
                          <h2>2017</h2>
                          <p>Stay dedicated in its decade-long resource sharing commitment to create shared values with the community by providing rent-free units to social enterprises and availing its retail networks for charity.</p>                    
                        </div>
                        <div class="manic-image-container full-col-width-version-2">                          
                          <img src="" 
                            data-image-desktop="images_cms/milestones/year-2017.jpg"
                            data-image-tablet="images_cms/milestones/year-2017-tablet.jpg"
                            data-image-mobile="images_cms/milestones/year-2017-mobile.jpg" alt="">      
                        </div>
                      </div>
                    </div>
                  </div><!-- end content-group-6 -->                              

                </div> <!-- end page-milestones-content -->

              <!-- </div> -->

              <div id="end-sticky-trigger" class="col-md-12"></div>    

            <!-- </div> --> <!-- end row -->

          </div>

        </article> <!-- end page-milestones-content-container -->            

      </div> <!-- #page-wrapper-content -->
  </div> <!-- #page-wrapper -->

  <?php include "includes/footer_desktop.php"; ?>
  <?php include "includes/footer_mobile.php"; ?>

  <?php include "includes/script_milestones.php" ?>

</body>
</html>
<?php
// saving captured output to file
file_put_contents('milestones.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>