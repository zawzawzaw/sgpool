<?php 
ob_start();
?>
<?php
  global $current_page;
  $current_page = "page-contest";
  $page_title = "Contest";
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
                <img src="" data-image-desktop="images_cms/contest/contest-banner-01.jpg">
              </div>
            </div>

            <div id="page-default-banner-image-mobile" class="short-banner visible-sm visible-xs">
              <div class="manic-image-container">
                <img src="" data-image-tablet="images_cms/contest/contest-banner-01-tablet.jpg"
                            data-image-mobile="images_cms/contest/contest-banner-01-mobile.jpg">
              </div>
            </div>

            <div id="page-default-banner-caption-container" class="short-banner-version">
              <div class="container-fluid">
                <div class="row">                  

                  <div class="col-md-12">

                    <div id="page-default-banner-copy" class="contest-version">
                      <h2>Snap & Win!</h2>
                      <h2>Our History, Your Story!</h2>

                      <div class="cta-container">
                        <a href="#form" id="join-now" class="square-cta">Join Now</a>  
                      </div>
                      
                    </div> <!-- page-default-banner-logo -->

                  </div>
                </div>
              </div>
            </div> <!-- page-default-banner-logo-container -->

          </div>
        </div>

      </article>
      
      <article id="page-contest-our-moments">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 v-align-col custom-pull-push-col">
              <div class="manic-image-container">
                <img src="" data-image-desktop="images_cms/contest/contest-our-moment.jpg"
                            data-image-tablet="images_cms/contest/contest-our-moment-tablet.jpg"
                            data-image-mobile="images_cms/contest/contest-our-moment-mobile.jpg">
              </div>
            </div>
            <div class="col-md-4 col-md-offset-1 v-align-col">
              <div class="text-container">
                <p>Do you know which are the iconic infrastructures, events, and local charities that Singapore Pools supported over our 50-year journey for community benefit? You can learn more about our contributions in Our Moments.</p>
                <p>Perhaps, you may remember the special moments of your younger days visiting the zoo, singing your hearts out at the National Stadium during our National Day Parade, or the dazzling lights at the River Hongbao?</p>
                <p>And, the time you made lasting friendships through the Community Centres and the fundraising events such as the Community Chest Heartstrings Walk? In every turn, we are glad to be part of your story. </p>
              </div>
              <div class="cta-container">
                <a href="our-moments.html" class="square-cta">Visit our moments</a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article id="page-contest-gold-class">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="text-container">
                <h2>Send in your photos now!</h2>
                <p>As we celebrate our Golden Jubilee of community benefit, we are giving 50 lucky winners a pair of Golden Village Gold Class Movie Tickets and a set of our limited edition heritage coasters!</p>
              </div>
            </div>
            <!-- <div class="col-md-4 col-md-push-1 v-align-col">
              <div class="text-container">
                <p>As we celebrate our Golden Jubilee of community benefit, we are giving 50 lucky winners a pair of Golden Village Gold Class Movie Tickets and a set of our limited edition heritage coasters!</p>
              </div>
            </div> -->
            <!-- <div class="col-md-4 col-md-push-3 v-align-col">
              <div class="manic-image-container has-show-all">
                <img src="" data-image-desktop="images_cms/contest/contest-movie-voucher.png"
                            data-image-tablet="images_cms/contest/contest-movie-voucher-tablet.png"
                            data-image-mobile="images_cms/contest/contest-movie-voucher-mobile.png">
              </div>
            </div> -->
          </div>
        </div>
      </article>
      <article id="page-contest-how-to-participate">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5 col-md-offset-1 no-padding v-align-col">
              <!-- <div class="manic-image-container has-show-all">
                <img src="" data-image-desktop="images_cms/contest/contest-participate.png"
                                data-image-tablet="images_cms/contest/contest-participate.png"
                                data-image-mobile="images_cms/contest/contest-participate.png">
              </div> -->
              <img src="images_cms/contest/contest-participate.png" class="img-responsive" alt="">
            </div>
            <div class="col-md-4 col-md-offset-1 no-padding v-align-col">
              <div class="text-container">
                <h2>How To Participate?</h2>
                <div class="step">
                  <h6>step 1</h6>
                  <p>Submit a #SGPools50Photo of you and your family/friends taken at any of the infrastructures, events, or local charities activities that we supported across our 50-year journey.</p>
                </div>
                <div class="step">
                  <h6>step 2</h6>
                  <p>Share with us when the photo was taken and why you choose to submit the photo. Stand a higher chance to win when the Singapore Pools’ identity is more visible in your photo!</p>
                </div>
                <div class="notes">
                  <p>The first 50 valid entries* will receive our limited edition heritage coasters set. All entries will be reviewed by Singapore Pools before publishing below.</p>
                </div>
                <div class="contest-details">
                  <p><strong>Contest details</strong></p>
                  <ul>
                    <li>
                      <p>This contest is open only to residents of Singapore.</p>
                    </li>
                    <li>
                      <p>Only entries submitted through the form below will be accepted.</p>
                    </li>
                    <li>
                      <p>Each person is allowed only ONE entry.</p>
                    </li>
                    <li>
                      <p>Each entry will be reviewed by Singapore Pools to determine if it’s a valid entry. Only valid entry will be published.</p>
                    </li>
                    <li>
                      <p>Winners will be notified by email.</p>
                    </li>
                    <li>
                      <p>All winners must collect their prizes within a month of notification.</p>
                    </li>
                    <li>
                      <p>Only entries submitted by 23 May 2018, 11.59pm, will be considered for the draw.</p>
                    </li>
                  </ul>
                </div>
                <div class="terms">
                  <p>*A valid entry is defined by an entry that must not be defamatory, obscene, indecent, hateful, discriminatory or inflammatory, infringe any person’s intellectual property rights or rights of confidence, impinge upon any person’s privacy, constitute incitement to commit a crime or gamble, or be misleading, deceptive, sexually explicit, threatening, abusive, harassing or menacing. By agreeing to participate in this contest, you will hereby grant Singapore Pools a perpetual, full and unrestricted license to use all content in your submitted entry in any way and Singapore Pools may use or amend the content in the entry in any manner we deem fit, including publishing your entry on the our websites, press and/or any other media.</p>

                  <p>Terms and conditions apply. <a href="#" id="terms-and-conditions" class="open-popup terms">Click here</a> to read the full terms and conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </article>
      <article id="page-contest-other-entries" class="flex-center-vertial">
        <div class="cta-container">
          <a href="entries.php" class="square-cta">See other entires</a>
        </div>
      </article>
      <div class="scroll-target" data-value="form"></div>
      <article id="page-contest-join-contest-form">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <h2>Join the contest and share your story with us.</h2>
            </div>
            <div class="col-md-6 col-md-push-3">              
              <div id="message-container"></div>
              <form id="contest-form" method="post" action="savecontest.php">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" name="name" placeholder="As stated in NRIC">
                </div>
                <div class="form-group">
                  <label for="name">NRIC/Passport Number </label>
                  <input type="text" name="nric_passport" id="nric" placeholder="">
                </div>
                <div class="form-group">
                  <label for="name">Mobile number</label>
                  <input type="text" name="mobile" placeholder="">
                </div>
                <div class="form-group">
                  <label for="name">Email Address</label>
                  <input type="text" name="email" id="email" placeholder="">
                </div>
                <div class="form-group">
                  <label for="name">Attach your photo</label>
                  <input type="text" name="uploaded_file_path" id="uploaded_file_path">
                  <span class="upload-label">Choose a file to upload</span>
                  <input id="file_upload" type="file" name="file_upload" />                  
                </div>
                <div class="form-group">
                  <label for="when_photo_taken">When was this photo taken</label>
                  <!-- <div class="manic-dropdown"> -->
                    <div class="dropdown">
                      <select name="when_photo_taken" id="when_photo_taken" class="styled-select">
                        <option value="">Year</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                      </select>
                    </div>
                  <!-- </div> -->
                </div>
                <div class="form-group">
                  <label for="name">Share with us your thoughts <br class="hidden-xs hidden-sm">on the submitted photo</label>
                  <div class="textbox-container">
                    <textarea name="share_your_thoughts" id="share_your_thoughts" cols="30" rows="10" maxlength='500'></textarea>
                    <span id="number_of_char">500 characters remaining</span>
                  </div>
                </div>
                <div class="form-group">
                  <!-- <input type="checkbox" name="terms_and_conditions">
                  <label for="terms_and_conditions">By clicking Submit, I have read and agree to the Terms & Conditions of the contest.</label> -->

                  <label class="fancy-checkbox">
                    <input type="checkbox" name="terms_and_conditions" />
                    <div><span>I have read and agree to the contest’s <a href="#terms" id="open-terms-popup">Terms and Conditions</a> and <a href="http://www.singaporepools.com.sg/en/rules/Pages/website-tnc.html" target="_blank">Singapore Pools’ General Website Terms and Conditions</a>, and consent to Singapore Pools and their service providers collecting, using and/or disclosing my personal data for the purpose of contacting me on the above contest via any form of communication, including emails and using my Singapore telephone numbers regardless of any registration of the same with the Singapore Do Not Call Registry.</span></div>
                  </label>
                </div>
                <div class="form-group">
                  <input type="submit" name="submit" class="square-cta" value="Submit">
                </div>
              </form>
            </div>
          </div>
        </div>        
      </article>

    </div> <!-- #page-wrapper-content -->
  </div> <!-- #page-wrapper -->

  <div id="pop-up">
    <div id="pop-up-content" class="terms-and-condition-version">
      <a href="#" class="close-popup"></a>
      <p><strong>Terms and Conditions of the “Snap & Win! Our History, Your Story!” contest:</strong></p>
      <ol>
        <li>The “Snap & Win! Our History, Your Story!” contest (the “Contest”) is organised by Singapore Pools (Pte) Ltd (the “Organiser”).</li>
        <li>Your participation in the Contest shall be deemed to be your acceptance of the terms and conditions herein (the “Terms”).</li>
        <li>The Contest is only open to residents of Singapore.</li>
        <li>The qualifying period for participating in the Contest is 2nd May to 31st August 2018 (both dates inclusive).</li>
        <li>By agreeing to participate in the Contest, participants to the Contest (the “Participant(s)”) hereby:
          <ol>
            <li>Agree and consent under the Personal Data Protection Act (Cap 26 of 2012) to the Organiser and its authorised service providers collecting, using and/or disclosing the Participant(s)’ personal data including name and answer in the contest entry (the “Entry(s)”) for purposes indicated in the Singapore Pools’ General Website <a href="http://www.singaporepools.com.sg/en/rules/Pages/website-tnc.html" target="_blank">Terms and Conditions</a>,  and for the Organiser’s publicity and/or advertising campaigns connected to the Contest. Such use and disclosure will be without payment or compensation; the failure by any Participant(s) to comply with this clause shall result in his/her disqualification in the Contest.</li>
            <li>Grants to the Organiser a perpetual, full and unrestricted license to use all content in the Entry(s) submitted by the Participant(s) in any way and the Organiser may use or amend the content in the Entry(s) in any manner it deems fit, including publishing the Entry(s) on the Organiser’s websites, press and/or any other media.</li>
          </ol>
        </li>
        <li>To qualify for the Contest:
          <ol>
            <li>Participant(s) must ensure that all details and particulars submitted are true, accurate and complete.  Any incorrect or incomplete information found in the entry will result in the disqualification of the entry.</li>
            <li>The Entry(s) submitted to the Contest must fulfil the Contest’s requirement and must not be defamatory, obscene, indecent, hateful, discriminatory or inflammatory; the Answer(s) must not infringe any person’s intellectual property rights or rights of confidence, impinge upon any person’s privacy, constitute incitement to commit a crime or gamble; or be misleading, deceptive, sexually explicit, threatening, abusive, harassing or menacing.</li>
          </ol>
        </li>
        <li>The Entry(s) that failed to meet clause 6.2 will be disqualification from the Contest. All the Entry(s) will be reviewed by the Organiser before published.</li>
        <li>The Organiser shall not be responsible for lost, late, incomplete, misdirected, delayed, or undelivered entries, including without limitation entries not timely received due to internet failures and disruptions, and ISP problems. Incomplete information may result in disqualification of entry. Multiple entries submitted by the same individual will be considered as one entry.</li>
        <li>The Organiser reserves the right to disclose and publish the name and such other particulars of any Participant(s)/ winning participant(s) (the “Winner(s)”) in such mode and manner the Organiser may in her sole discretion deem appropriate for publicity purposes and the Winner(s) agrees to the disclosure of his or her personal particulars, the use of his or her name in connection with the Contest and to cooperate with and participate in the activities organised by the Organiser for this purpose without additional compensation and/or notification.</li>
        <li>The Organiser reserves the right at any time in its absolute discretion to:
          <ol>
            <li>Cancel or modify the Contest;</li>
            <li>Substitute, withdraw or cancel any prize without prior notice and without having to disclose any reason therefore and without any payment or compensation whatsoever;</li>
            <li>Not to award any prize, or to award one or more but not all of the prizes; or</li>
            <li>Alter these Terms at any time and in its sole discretion.</li>
          </ol>      
        </li>
        <li>The 50 Contest Winner(s) will be selected through a computerised balloting system. The Winner(s) will be announced in http://sgpools50.com/contest and Winner(s) will be contacted on the prize collection details by 6th June 2018.</li>
        <li>The decision of the Organiser shall be final, conclusive and binding on all Participant(s) and Winner(s), and no correspondence will be entertained. The Organiser reserves the right to replace any Winner(s) subsequently found to be disqualified or any reason.</li>
        <li>If you become a Winner(s) of the Contest, you hereby agree and consent to, the Organiser and its authorised service providers collecting, using, disclosing and/or processing your personal data including your name and NRIC number for the purpose indicated in the Privacy Policy, and further agree that such collection, use, disclosure and/or processing will be without payment or compensation.</li>
        <li>The Prize is non-transferable and may not be exchanged for cash.</li>
        <li>Prizes not claimed will be forfeited and disposed of by the Organiser in its sole and absolute discretion. </li>
        <li>By entering the Contest, the Participant(s) is to indemnify and hold harmless the Organiser, its legal representatives, affiliates, subsidiaries, agencies and their respective officers, directors, employees and agents from any damages whatsoever suffered or sustained in connection to the Contest or the acceptance and/or usage of the Prize. </li>
        <li>In the event of any inconsistency between these Terms and any brochures, marketing or promotional materials relating to the Contest, these Terms shall prevail.</li>
        <li>The Terms and any matters relating hereto shall be governed by, and construed in accordance with Singapore law and shall be subject to the non-exclusive jurisdiction of the courts of Singapore.</li>
        <li>A person who is not a party to these Terms may not enforce any of them under the Contracts (Rights of Third Parties) Act (Chapter 53B) and notwithstanding any terms herein, the consent of any third party is not required for any variation of the Terms of the Contest (including any release or compromise of any liability) or termination of the Contest.</li>
      </ol>
    </div>
  </div>

  <?php include "includes/footer_desktop.php"; ?>
  <?php include "includes/footer_mobile.php"; ?>

  <?php include "includes/script_contest.php" ?>

</body>
</html>
<?php
// saving captured output to file
file_put_contents('contest.html', ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>