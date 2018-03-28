<?php 
  global $current_page;
?>

<!--
   __  __  ___  ____ ___ _     _____   _   _ _____    _    ____  _____ ____
  |  \/  |/ _ \| __ )_ _| |   | ____| | | | | ____|  / \  |  _ \| ____|  _ \
  | |\/| | | | |  _ \| || |   |  _|   | |_| |  _|   / _ \ | | | |  _| | |_) |
  | |  | | |_| | |_) | || |___| |___  |  _  | |___ / ___ \| |_| | |___|  _ <
  |_|  |_|\___/|____/___|_____|_____| |_| |_|_____/_/   \_\____/|_____|_| \_\

-->

<header id="header-mobile" class="<?php if($current_page) echo 'permanent-bg'; ?> hidden-lg visible-md visible-sm visible-xs">
  <div class="white-bg"></div>

  <div id="header-mobile-content-container">
    <div id="header-mobile-logo-container">
      <a id="header-mobile-logo" href="index.html" title=""></a>
    </div>

    <div id="header-mobile-menu-opener-container">
      <a id="header-mobile-menu-opener" href="javascript:void(0);">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  </div>

</header> <!-- header-mobile -->

<div id="header-mobile-expand">  
  <div id="header-mobile-nav-container">
    <nav>
      <ul>        
        <li><a href="#">Our Moments</a></li>
        <li><a href="#">Our Heritage</a></li>        
        <li><a href="events.html">Events</a></li>
        <li><a href="gallery.html">Gallery</a></li>
      </ul>
    </nav>
  </div>

  <div class="header-mobile-footer-container">
    
  </div>
</div> <!-- header-mobile-expand -->
