  <!-- INSERT GOOGLE ANALYTICS HERE -->


  <!-- INSERT FONTS HERE -->

  <!-- https://www.myfonts.com/fonts/fontfont/clan-pro/ -->
  <!-- Clan Pro: News, Medium, Black, Bold -->
<!--   <script type="text/javascript">
    (function() {
      var path = '//easy.myfonts.net/v2/js?sid=161560(font-family=FF+Clan+Pro+News)&sid=162099(font-family=FF+Clan+Pro+Medium)&sid=162164(font-family=FF+Clan+Pro+Black)&sid=162165(font-family=FF+Clan+Pro+Bold)&key=2giL8NLLQV',
        protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
        trial = document.createElement('script');
      trial.type = 'text/javascript';
      trial.async = true;
      trial.src = protocol + path;
      var head = document.getElementsByTagName("head")[0];
      head.appendChild(trial);
    })();
  </script>
  <style type="text/css">
    #mfPreviewBar{
      display: none;
    }
  </style> -->
  <link href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,700" rel="stylesheet">

  <?php $is_debug = true; ?>

  <?php if ($is_debug == true): ?>

    <!--
       ____  _______     _______ _     ___  ____  __  __ _____ _   _ _____   __  __  ___  ____  _____
      |  _ \| ____\ \   / / ____| |   / _ \|  _ \|  \/  | ____| \ | |_   _| |  \/  |/ _ \|  _ \| ____|
      | | | |  _|  \ \ / /|  _| | |  | | | | |_) | |\/| |  _| |  \| | | |   | |\/| | | | | | | |  _|
      | |_| | |___  \ V / | |___| |__| |_| |  __/| |  | | |___| |\  | | |   | |  | | |_| | |_| | |___
      |____/|_____|  \_/  |_____|_____\___/|_|   |_|  |_|_____|_| \_| |_|   |_|  |_|\___/|____/|_____|

    -->


    <!-- INSERT CSS HERE -->
    <link rel="stylesheet" type="text/css" href="kafnu_assets/css/style.css">

    <!-- INSERT JS HERE -->
    <script type="text/javascript" src="kafnu_assets/js/manic-polyfill.js"></script>
    <script type="text/javascript" src="kafnu_assets/libs/jquery-other/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="kafnu_assets/libs/jquery-other/jquery.mousewheel.min.js"></script>
    <script type="text/javascript" src="kafnu_assets/libs/misc-js/mobile-detect.js"></script>
    <script type="text/javascript" src="kafnu_assets/libs/misc-js/preloadjs-0.4.0.min.js"></script>
    <script type="text/javascript" src="kafnu_assets/libs/gsap/src/minified/TweenMax.min.js"></script>
    <script type="text/javascript" src="kafnu_assets/libs/gsap/src/minified/jquery.gsap.min.js"></script>
    <script type="text/javascript" src="kafnu_assets/libs/gsap/src/minified/easing/EasePack.min.js"></script>
    <script type="text/javascript" src="kafnu_assets/libs/gsap/src/minified/plugins/ScrollToPlugin.min.js"></script>
    <script type="text/javascript" src="kafnu_assets/libs/scrollmagic/scrollmagic/minified/ScrollMagic.min.js"></script>
    <script type="text/javascript" src="kafnu_assets/libs/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js"></script>
    <script type="text/javascript" src="kafnu_assets/libs/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js"></script>
    <script type="text/javascript" src="kafnu_assets/libs/slick-carousel/slick/slick.min.js"></script>
    
    <!-- Google Closure -->
    <script type="text/javascript" src="kafnu_assets/libs/google-closure/closure-library/closure/goog/base.js"></script>
    <script type="text/javascript" src="kafnu_assets/js/google-closure-dependency-list.js"></script>
    <script type="text/javascript">
      goog.require('kafnu.page.Default');
    </script>
    <script type="text/javascript">
      jQuery(document).ready(function($) {
        page = new kafnu.page.Default({});    
      });
    </script>

  <?php else: ?>

    <!--
        ___  ____ _____ ___ __  __ ___ __________ ____    __  __  ___  ____  _____
       / _ \|  _ \_   _|_ _|  \/  |_ _|__  / ____|  _ \  |  \/  |/ _ \|  _ \| ____|
      | | | | |_) || |  | || |\/| || |  / /|  _| | | | | | |\/| | | | | | | |  _|
      | |_| |  __/ | |  | || |  | || | / /_| |___| |_| | | |  | | |_| | |_| | |___
       \___/|_|    |_| |___|_|  |_|___/____|_____|____/  |_|  |_|\___/|____/|_____|

    -->

    <script type="text/javascript" src="kafnu_assets/js/minified/head.load.min.js"></script>
    <script type="text/javascript">

      var PAGE_LIBRARY        = "kafnu_assets/js/minified/libraries-default.min.js";
      var PAGE_JS             = "kafnu_assets/js/minified/page-default.min.js";
      var PAGE_CSS            = "kafnu_assets/css/style.css";
      
      window.head_js = head;
      
      window.head_js.load(PAGE_CSS);
      window.head_js.load(PAGE_LIBRARY, function() {
        window.head_js.load(PAGE_JS, function() {
          window.page = new kafnu.page.Default({});
        });
      });
    </script>

  <?php endif; ?>
