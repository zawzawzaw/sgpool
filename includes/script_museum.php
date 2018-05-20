  <!-- INSERT GOOGLE ANALYTICS HERE -->


  <!-- INSERT FONTS HERE -->
  <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6413692/6021192/css/fonts.css" />

  <!-- <link href="https://fonts.googleapis.com/css?family=Barlow:400,500,600,700" rel="stylesheet"> -->

  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600" rel="stylesheet">

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
    <link rel="stylesheet" type="text/css" href="sgpool_assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="sgpool_assets/css/our-heritage.css">

    <!-- INSERT JS HERE -->
    <script type="text/javascript" src="sgpool_assets/js/manic-polyfill.js"></script>
    <script type="text/javascript" src="sgpool_assets/libs/jquery-other/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="sgpool_assets/js/minified/our-heritage.js"></script>
    <script type="text/javascript" src="sgpool_assets/libs/misc-js/mobile-detect.js"></script>
    <script type="text/javascript" src="sgpool_assets/libs/misc-js/preloadjs-0.4.0.min.js"></script>
    <script type="text/javascript" src="sgpool_assets/libs/gsap/src/minified/TweenMax.min.js"></script>
    <script type="text/javascript" src="sgpool_assets/libs/gsap/src/minified/jquery.gsap.min.js"></script>
    <script type="text/javascript" src="sgpool_assets/libs/gsap/src/minified/easing/EasePack.min.js"></script>
    <script type="text/javascript" src="sgpool_assets/libs/gsap/src/minified/plugins/ScrollToPlugin.min.js"></script>
    <script type="text/javascript" src="sgpool_assets/libs/scrollmagic/scrollmagic/minified/ScrollMagic.min.js"></script>
    <script type="text/javascript" src="sgpool_assets/libs/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js"></script>
    <script type="text/javascript" src="sgpool_assets/libs/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js"></script>
    <!-- <script type="text/javascript" src="sgpool_assets/libs/slick-carousel/slick/slick.min.js"></script> -->
    <!-- <script type="text/javascript" src="sgpool_assets/libs/isotope/isotope.pkgd.min.js"></script> -->
    
    <!-- Google Closure -->
    <script type="text/javascript" src="sgpool_assets/libs/google-closure/closure-library/closure/goog/base.js"></script>
    <script type="text/javascript" src="sgpool_assets/js/google-closure-dependency-list.js"></script>
    <script type="text/javascript">
      goog.require('sgpool.page.Default');
    </script>

    <script type="text/javascript" src="sgpool_assets/js/minified/head.load.min.js"></script>

    <script type="text/javascript">

      jQuery(document).ready(function($) {
        page = new sgpool.page.Default({});
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

    <!-- <script type="text/javascript" src="sgpool_assets/js/minified/head.load.min.js"></script>
    <script type="text/javascript">

      var PAGE_LIBRARY        = "sgpool_assets/js/minified/libraries-museum.min.js";
      var PAGE_JS             = "sgpool_assets/js/minified/page-museum.min.js";
      var PAGE_CSS            = "sgpool_assets/css/style.css";
      
      window.head_js = head;
      
      window.head_js.load(PAGE_CSS);
      window.head_js.load(PAGE_LIBRARY, function() {
        window.head_js.load(PAGE_JS, function() {
          window.page = new sgpool.page.Museum({});
        });
      });
    </script> -->

  <?php endif; ?>
