<?php
  // ob_start();
  global $current_page;
  $current_page = "page-entries";
  $page_title = "Entries";

  $db = parse_ini_file("database.ini");

  $servername = $db['host'];
  $username = $db['user'];
  $password = $db['pass'];
  $dbname = $db['name'];
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

  <div id="body-wrap">

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

        <article id="page-default-banner-section" class="short-banner-version">

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
                  <img src="" data-image-desktop="images_cms/entries/entries-banner-01.jpg">
                </div>
              </div>

              <div id="page-default-banner-image-mobile" class="short-banner visible-sm visible-xs">
                <div class="manic-image-container">
                  <img src="" data-image-tablet="images_cms/entries/entries-banner-01-tablet.jpg"
                              data-image-mobile="images_cms/entries/entries-banner-01-mobile.jpg">
                </div>
              </div>

              <div id="page-default-banner-caption-container" class="short-banner-version">
                <div class="container-fluid">
                  <div class="row">                  

                    <div class="col-md-12">

                      <div id="page-default-banner-copy" class="entries-version">
                        <h2>Snap & Win!</h2>
                        <h2>Our History, Your Story!</h2>
                        <p>See other people’s stories with the iconic infrastructures that Singapore Pools supported in 50 years below and share your own story with us today!</p>

                        <div class="cta-container">
                          <a href="contest.html#form" id="join-now" class="square-cta">Join Now</a>
                        </div>
                        
                      </div> <!-- page-default-banner-logo -->

                    </div>
                  </div>
                </div>
              </div> <!-- page-default-banner-logo-container -->

            </div>
          </div>

        </article>

        <article id="page-entries-all-entries">
          <div class="container-fluid">
            <div class="row">
              <?php
              try {
                  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
                  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                  $stmt = $conn->prepare("SELECT * FROM contest WHERE approved = 1"); 
                  $stmt->execute();

                  // set the resulting array to associative
                  $result = $stmt->setFetchMode(PDO::FETCH_OBJ); 

                  $result = $stmt->fetchAll();
                  $i = 0;

                  foreach ($result as $key => $value):
                    $uploaded_image = explode("uploads/", $value->uploaded_file_path);
                    if(is_array($uploaded_image)) {
                      $image_file_name = (isset($uploaded_image[1])) ? $uploaded_image[1] : "";
                    }
              ?>
                  <div class="col-md-3">
                    <a href="#" class="entry open-popup" data-entry-index="<?php echo $i; ?>">
                      <div class="manic-image-container">
                        <img src="" data-image-desktop="uploads/<?php echo $image_file_name; ?>"
                                    data-image-tablet="uploads/<?php echo $image_file_name; ?>"
                                    data-image-mobile="uploads/<?php echo $image_file_name; ?>">
                      </div>
                      <div class="text-container">
                        <p><strong><?php echo $value->name; ?></strong></p>
                        <p><strong><?php echo $value->when_photo_taken; ?></strong></p>
                      </div>
                    </a>
                  </div>
              <?php    
                  $i++;
                  endforeach;                
              }
              catch(PDOException $e) {
                  echo "Error: " . $e->getMessage();
              }
              $conn = null;
              ?>
              <!-- <div class="col-md-3">
                <a href="#" class="entry open-popup" data-entry-index="0">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/entries/entry-01.jpg"
                                data-image-tablet="images_cms/entries/entry-01.jpg"
                                data-image-mobile="images_cms/entries/entry-01.jpg">
                  </div>
                  <div class="text-container">
                    <p><strong>Benjamin Tan</strong></p>
                    <p><strong>2013</strong></p>
                  </div>
                </a>
              </div>
              <div class="col-md-3">
                <a href="#" class="entry open-popup" data-entry-index="1">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/entries/entry-02.jpg"
                                data-image-tablet="images_cms/entries/entry-02.jpg"
                                data-image-mobile="images_cms/entries/entry-02.jpg">
                  </div>
                  <div class="text-container">
                    <p><strong>Benjamin Tan</strong></p>
                    <p><strong>2013</strong></p>
                  </div>
                </a>
              </div>
              <div class="col-md-3">
                <a href="#" class="entry open-popup" data-entry-index="2">
                  <div class="manic-image-container">
                    <img src="" data-image-desktop="images_cms/entries/entry-03.jpg"
                                data-image-tablet="images_cms/entries/entry-03.jpg"
                                data-image-mobile="images_cms/entries/entry-03.jpg">
                  </div>
                  <div class="text-container">
                    <p><strong>Benjamin Tan</strong></p>
                    <p><strong>2013</strong></p>
                  </div>
                </a>
              </div> -->            
            </div>
          </div>
        </article>

      </div> <!-- #page-wrapper-content -->
    </div> <!-- #page-wrapper -->

    <div id="pop-up">
      <div id="pop-up-content" class="entries-version">
        <a href="#" class="close-popup"></a>
        <div class="container-fluid">          
          <div class="row">
            <div class="col-md-8">
              <div id="pop-up-slider" class="sgpool-slick-slider">
                <?php
                    foreach ($result as $key => $value):
                      $uploaded_image = explode("uploads/", $value->uploaded_file_path);
                      if(is_array($uploaded_image)) {
                        $image_file_name = (isset($uploaded_image[1])) ? $uploaded_image[1] : "";
                      }
                ?>
                  <div class="pop-up-slider-item" data-name="<?php echo $value->name; ?>" data-when="<?php echo $value->when_photo_taken; ?>" data-thoughts="<?php echo $value->share_your_thoughts; ?>">
                    <div class="image-container">
                      <img src="uploads/<?php echo $image_file_name; ?>" class="object-fit_cover" alt="">
                    </div>
                  </div>
                <?php endforeach; ?>              
              </div>            
            </div>
            <div class="col-md-4">            
              <div class="text-container">
                <p><strong class="name">Jeremy Lim</strong></p>
                <p><strong class="when">2017</strong></p>
                <p class="thoughts">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis purus id purus faucibus porta. Pellentesque sit amet arcu non libero blandit iaculis in vel velit. Vivamus finibus pharetra leo, a sodales massa. Integer rutrum mi vitae nisi sagittis consectetur. In hac habitasse platea dictumst. Fusce ex velit, tempor et.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php include "includes/footer_desktop.php"; ?>
    <?php include "includes/footer_mobile.php"; ?>

    <?php include "includes/script_entries.php" ?>

  </div>

</body>
</html>
<?php
// saving captured output to file
// file_put_contents('entries.html', ob_get_contents());
// end buffering and displaying page
// ob_end_flush();
?>