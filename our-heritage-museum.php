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
      <div id="museum-wrapper">
        <div class="museum__nav">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-2 museum__nav__list">
                    <div class="row"><a href="#lottery_draws">Lottery Draws</a></div>
                  </div>
                  <div class="col-md-2 museum__nav__list">
                    <div class="row"><a href="#retail_outlets">Retail Outlets</a></div>
                  </div>
                  <div class="col-md-2 museum__nav__list">
                    <div class="row"><a href="#bet_slips">Bet Slips</a></div>
                  </div>
                  <div class="col-md-2 museum__nav__list">
                    <div class="row"><a href="#posters">Posters</a></div>
                  </div>
                  <div class="col-md-2 museum__nav__list">
                    <div class="row"><a href="#first_sweep_tickets">Sweep Tickets</a></div>
                  </div>
                  <div class="col-md-2 museum__nav__list">
                    <div class="row"><a href="#sg_pools_logo">Logos</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 museum__series" data-portion="#lottery_draws">
              <div class="anchor" id="lottery_draws"></div>
              <h1>Lottery Draws</h1>
              <div class="main-carousel" id="museum__stream1">
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s101.jpg&quot;)"></div>
                  <div class="mask mask--blue"></div>
                  <div class="content">
                    <p>Lottery draws were once conducted in public. In present draws, only people above 18 year old can witness the draw at Singapore Pools Building.</p>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s101.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s102.jpg"/>
                </div>
              </div>
            </div>
            <div class="col-md-12 museum__series" data-portion="#retail_outlets">
              <div class="anchor" id="retail_outlets"></div>
              <h1>Retail Outlets</h1>
              <div class="main-carousel" id="museum__stream2">
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s200.jpg&quot;)"></div>
                  <div class="mask mask--blue"></div>
                  <div class="content">
                    <p>Progressed from a humid small booth to a brick and mortar retail outlet. In the past, more attractive TOTO sale booths were positioned near crowded area like the CBD.</p>
                  </div>
                </div>
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s201.jpg&quot;)"></div>
                  <div class="mask mask--gold"></div>
                  <div class="content">
                    <h3>Ticket Booth in 1970s</h3>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s201.jpg"/>
                </div>
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s202.jpg&quot;)"></div>
                  <div class="mask mask--gold"></div>
                  <div class="content">
                    <h3>Ticket Booth in 2000s</h3>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s202.jpg"/>
                </div>
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s203.jpg&quot;)"></div>
                  <div class="mask mask--gold"></div>
                  <div class="content">
                    <h3>Ticket Booth in 2010s</h3>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s203.jpg"/>
                </div>
              </div>
            </div>
            <div class="col-md-12 museum__series" data-portion="#bet_slips">
              <div class="anchor" id="bet_slips"></div>
              <h1>Bet Slips</h1>
              <div class="main-carousel" id="museum__stream3">
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s303.jpg&quot;)"></div>
                  <div class="mask mask--blue"></div>
                  <div class="content">
                    <p>Evolved from a manual operation of checking the winning tickets, the betting slips morph from the carbon copy ticket to a digitized printed ticket. Under the manual system, our  sorters and verifiers labored into the wee hours to check and tally tens of thousands of TOTO coupons.</p>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s301.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s302.jpg"/>
                </div>
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s303.jpg&quot;)"></div>
                  <div class="mask mask--gold"></div>
                  <div class="content">
                    <h3>Bet Tickets in 1970s</h3>
                  </div>
                </div>
                <div class="carousel-cell"><img class="narrow" src="images_cms/museum/s303.jpg"/>
                </div>
                <div class="carousel-cell"><img class="narrow" src="images_cms/museum/s304.jpg"/>
                </div>
                <div class="carousel-cell"><img class="narrow" src="images_cms/museum/s305.jpg"/>
                </div>
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s306.jpg&quot;)"></div>
                  <div class="mask mask--gold"></div>
                  <div class="content">
                    <h3>Bet Tickets in 2010s</h3>
                  </div>
                </div>
                <div class="carousel-cell"><img class="narrow" src="images_cms/museum/s306.jpg"/>
                </div>
                <div class="carousel-cell"><img class="narrow" src="images_cms/museum/s307.jpg"/>
                </div>
                <div class="carousel-cell"><img class="narrow" src="images_cms/museum/s308.jpg"/>
                </div>
                <div class="carousel-cell"><img class="narrow" src="images_cms/museum/s309.jpg"/>
                </div>
              </div>
            </div>
            <div class="col-md-12 museum__series" data-portion="#posters">
              <div class="anchor" id="posters"></div>
              <h1>Posters</h1>
              <div class="main-carousel" id="museum__stream4">
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s401.jpg&quot;)"></div>
                  <div class="mask mask--blue"></div>
                  <div class="content">
                    <p>Our prizes evolves through the years with influences from the social and economic changes. Be amazed by the worthy extra prizes -such as electrical appliances and airplane tickets to existing destinations, given out for TOTO draws, in conjunction with the various festivities in the 70s and 80s.</p>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s401.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s402.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s403.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s404.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s405.jpg"/>
                </div>
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s406.jpg&quot;)"></div>
                  <div class="mask mask--blue"></div>
                  <div class="content">
                    <p>The tonality and design of the marketing posters showcases how mindful we are to ensure that products are communicated in a manner that will not promote excessive or irresponsible play.</p>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s406.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s407.jpg"/>
                </div>
              </div>
            </div>
            <div class="col-md-12 museum__series" data-portion="#first_sweep_tickets">
              <div class="anchor" id="first_sweep_tickets"></div>
              <h1>First Sweep Tickets</h1>
              <div class="main-carousel" id="museum__stream5">
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s501.jpg&quot;)"></div>
                  <div class="mask mask--blue"></div>
                  <div class="content">
                    <p>The very first Sweep game by Singapore Pools raised $14.5 million of funds from 1968 to 1976 for the construction of the first National Station.</p>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s501.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s502.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s503.jpg"/>
                </div>
              </div>
            </div>
            <div class="col-md-12 museum__series" data-portion="#first_sweep_tickets">
              <div class="anchor" id="charity_sweep_tickets"></div>
              <h1>Charity Sweep Tickets</h1>
              <div class="main-carousel" id="museum__stream6">
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s601.jpg&quot;)"></div>
                  <div class="mask mask--blue"></div>
                  <div class="content">
                    <p>Singapore Pools assisted various charity organization with their Charity Sweep. For instance, Community Chest had their first Charity Sweep in 1988 which raised some $2 million. </p>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s601.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s602.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s603.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s604.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s605.jpg"/>
                </div>
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s606.jpg&quot;)"></div>
                  <div class="mask mask--blue"></div>
                  <div class="content">
                    <p>Other charities like National Crime Prevention Council and Singapore Indian Association also has their donation Draw too.</p>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s606.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s607.jpg"/>
                </div>
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s608.jpg&quot;)"></div>
                  <div class="mask mask--blue"></div>
                  <div class="content">
                    <p>Over the years, the initiative has morphed to availing our retail network to sell their charity donation ticket. We have achieved the S$1 million mark in the programme.</p>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s608.jpg"/>
                </div>
              </div>
            </div>
            <div class="col-md-12 museum__series" data-portion="#first_sweep_tickets">
              <div class="anchor" id="sweep_tickets"></div>
              <h1>Sweep Tickets</h1>
              <div class="main-carousel" id="museum__stream7">
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s700.jpg&quot;)"></div>
                  <div class="mask mask--blue"></div>
                  <div class="content">
                    <p>SWEEP ticket designs have appeared in different themes which reflects Singaporean’s way of life. From the one-tone design to the pretty pastel-coloured designs, the tickets make attractive collector’s keepsakes.</p>
                  </div>
                </div>
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s700.jpg&quot;)"></div>
                  <div class="mask mask--gold"></div>
                  <div class="content">
                    <h3>The Orchid Series</h3>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s701.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s702.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s703.jpg"/>
                </div>
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s704.jpg&quot;)"></div>
                  <div class="mask mask--gold"></div>
                  <div class="content">
                    <h3>The Fish Series</h3>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s704.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s705.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s706.jpg"/>
                </div>
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s707.jpg&quot;)"></div>
                  <div class="mask mask--gold"></div>
                  <div class="content">
                    <h3>The Bird Series</h3>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s707.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s708.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s709.jpg"/>
                </div>
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s710.jpg&quot;)"></div>
                  <div class="mask mask--gold"></div>
                  <div class="content">
                    <h3>The Athletes Series</h3>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s710.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s711.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s712.jpg"/>
                </div>
                <div class="carousel-cell text-card">
                  <div class="mask" style="background-image:url(&quot;images_cms/museum/s713.jpg&quot;)"></div>
                  <div class="mask mask--gold"></div>
                  <div class="content">
                    <h3>Contributions to Singapore Series</h3>
                  </div>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s713.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s714.jpg"/>
                </div>
                <div class="carousel-cell"><img src="images_cms/museum/s715.jpg"/>
                </div>
              </div>
            </div>
            <div class="col-md-12 museum__series" data-portion="#sg_pools_logo">
              <div class="anchor" id="sg_pools_logo"></div>
              <div class="logoArea">
                <h1>Singapore Pools Logos</h1>
                <p>Singapore Pools’ brand evolved through the times to reflect the strong commitment as a company who exist for community benefit, and being a responsible gaming operator.</p>
                <div class="logos"><img src="images_cms/museum/logo1.jpg"><img src="images_cms/museum/logo2.jpg"><img src="images_cms/museum/logo3.png"></div>
                <div id="anchor_end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="heritage-wrapper">
        <link rel="stylesheet" href="sgpool_assets/css/our-heritage.css">
        <div class="container-fluid">
          <div class="row">
            <h1>See Others</h1>
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

  <?php include "includes/script_museum_inside.php" ?>

</body>
</html>
<?php
// saving captured output to file
file_put_contents('our-heritage-museum.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>