goog.provide('sgpool.page.Default');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.page.Page');

goog.require('manic.ui.BoxItem');
goog.require('manic.ui.Dropdown');





goog.require('sgpool.component.HeaderDesktop');
goog.require('sgpool.component.HeaderMobile');


/**
 * The Default Page constructor
 * @inheritDoc
 * @constructor
 * @extends {manic.page.Page}
 */
sgpool.page.Default = function(options, element) {

  manic.page.Page.call(this, options);
  this.options = $.extend(this.options, sgpool.page.Default.DEFAULT, options);


  /*
  if ($('body').hasClass('chinese-version')) {
    manic.SITE_LANGUAGE = 'cn';
  }
  if ($('body').hasClass('bahasa-version')) {
    manic.SITE_LANGUAGE = 'in';
  }
  */
  

  //   __     ___    ____
  //   \ \   / / \  |  _ \
  //    \ \ / / _ \ | |_) |
  //     \ V / ___ \|  _ <
  //      \_/_/   \_\_| \_\
  //

  /**
   * @type {Array.<manic.ui.Dropdown>}
   */
  this.dropdown_array = [];

  /**
   * @type {Array.<manic.ui.Dropdown>}
   */
  this.dropdown_dictionary = [];


  /**
   * @type {sgpool.component.HeaderDesktop}
   */
  this.header_desktop = null;

  /**
    * @type {sgpool.component.HeaderMobile}
    */
  this.header_mobile = null;

  this.page_wrapper = $('#page-wrapper');
  this.page_wrapper_content = $('#page-wrapper-content');

  // min height variables
  this.is_page_min_height = false;
  if( this.body.hasClass('min-height-version') == true ){
    this.is_page_min_height = true;
  }

  this.is_page_min_height_mobile = false;
  if( this.body.hasClass('min-height-mobile-version') == true ){
    this.is_page_min_height_mobile = true;
  }

  $(window).on('scroll', function (event) {
      var scroll = $(window).scrollTop();
      // Do something

      if(scroll > 0) {
        $("#header-desktop").addClass("bg-version")
        $("#header-mobile").addClass("bg-version")
      } else {
        $("#header-desktop").removeClass("bg-version")
        $("#header-mobile").removeClass("bg-version")
      }
  });

  $(document).on('touchmove',function(e){
      touchEvent = e.originalEvent.touches[0]; //this is your usual jQuery event, with its properties such as pageX and pageY properties

      // console.log(touchEvent)
  });

  var validator = null;

  // console.log('sgpool.page.Default: init');
};
goog.inherits(sgpool.page.Default, manic.page.Page);


/**
 * like jQuery options
 * @const {object}
 */
sgpool.page.Default.DEFAULT = {
};


//    ___ _   _ ___ _____
//   |_ _| \ | |_ _|_   _|
//    | ||  \| || |  | |
//    | || |\  || |  | |
//   |___|_| \_|___| |_|
//

sgpool.page.Default.prototype.init = function() {
  sgpool.page.Default.superClass_.init.call(this);

  this.create_banner_slider();

  this.create_event_slider();
  this.create_event_box_slider();

  this.create_header_desktop();

  this.create_dropdown();
  
  this.create_header_mobile();

  this.expandable_text();

  this.textarea_count();

  this.upload_file();

  this.contest_form_validate();

  this.pop_up();
  // 
  // 


  /*
  if ($('#desktop-header').length != 0) {
    this.desktop_header = new rippledot.component.DesktopHeader({}, $('#desktop-header'));
  }
  if ($('#desktop-sidebar').length != 0) {
    this.desktop_sidebar = new rippledot.component.DesktopSidebar({}, $('#desktop-sidebar'));
  }

  if ($('#desktop-aside').length != 0) {
    this.desktop_aside = new rippledot.component.DesktopAside({}, $('#desktop-aside'));
  }


  if ($('#mobile-header').length != 0 && $('#mobile-header-expand-container').length != 0){
    this.mobile_header = new rippledot.component.MobileHeader({}, $('#mobile-header'));

    this.mobile_header.update_layout();

    goog.events.listen(this.mobile_header, rippledot.component.MobileHeader.ON_CLOSE_MENU, function(event){

      this.update_page_layout();
      
    }.bind(this));

    

    
    

  }
  

  this.create_box_item();
  */


  // console.log('sgpool.page.Default: init');

};


//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//

sgpool.page.Default.prototype.create_banner_slider = function(){

  
  
  if ($('#page-default-banner-slider').length != 0) {
    $("#page-default-banner-slider").slick({
      'speed': 350,
      'dots': true,
      'arrows': false,
      'infinite': false,
      'slidesToShow': 1,
      'slidesToScroll': 1,
      'pauseOnHover': false,
      'autoplay': true,
      'autoplaySpeed': 4000
    });

    $('#page-default-banner-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('#page-default-banner-copy-container-mobile').hide();
    });

    $('#page-default-banner-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      
      var banner_copy = $(slick.$slides[currentSlide]).find('#page-default-banner-copy').html();

      $('#page-default-banner-copy-container-mobile').find("#page-default-banner-copy").html(banner_copy);
      
      $('#page-default-banner-copy-container-mobile').fadeIn();
    });
  }
  

};

sgpool.page.Default.prototype.create_event_slider = function(){

  
  
  if ($('#page-home-event-slider').length != 0) {
    $("#page-home-event-slider").slick({
      'speed': 350,
      'dots': false,
      'arrows': true,
      'infinite': true,
      'slidesToShow': 3,
      'slidesToScroll': 1,
      'pauseOnHover': true,
      'autoplay': false,
      'autoplaySpeed': 4000,
      'focusOnSelect': true,
      'centerMode': true,
      'centerPadding': '0px',
      'asNavFor': '#page-home-event-box-slider',
      'responsive': [
        {
          'breakpoint': 1024,
          'settings': {
            'slidesToShow': 1,
            'slidesToScroll': 1            
          }
        }
      ]
    });
  }
  

};

sgpool.page.Default.prototype.create_event_box_slider = function(){

  
  
  if ($('#page-home-event-box-slider').length != 0) {
    $("#page-home-event-box-slider").slick({
      'speed': 350,
      'dots': false,
      'arrows': false,
      'infinite': true,
      'slidesToShow': 3,
      'slidesToScroll': 1,
      'pauseOnHover': true,
      'autoplay': false,
      'autoplaySpeed': 4000,
      'centerMode': true,
      'centerPadding': '0px',      
      'asNavFor': '#page-home-event-slider',
      'responsive': [
        {
          'breakpoint': 1024,
          'settings': {
            'slidesToShow': 1,
            'slidesToScroll': 1            
          }
        }
      ]
    });  

    $("#page-home-event-box-slider").slick('slickGoTo', 2);

    $('.page-home-event-box-slider-item').click(function() {      

      if(!$(this).hasClass("slick-current")) {
        $("#page-home-event-box-slider").slick('slickGoTo', $(this).data("slick-index")); 
      } else {

        if(manic.IS_MOBILE == true) {
          // console.log($(this).data('url'));
          window.location.href = $(this).data('mobile-url');
        } else {
          window.location.href = $(this).data('desktop-url');
        }
        
      }
    
    });
  }
  

};

sgpool.page.Default.prototype.create_header_desktop = function(){

  
  
  if ($('#header-desktop').length != 0) {
    this.header_desktop = new sgpool.component.HeaderDesktop({}, $('#header-desktop'));
  }
  

};

sgpool.page.Default.prototype.create_header_mobile = function(){

  if ($('#header-mobile').length != 0 && $('#header-mobile-expand').length != 0) {

    this.header_mobile = new sgpool.component.HeaderMobile({}, $('#header-mobile'));

    goog.events.listen(this.header_mobile, sgpool.component.HeaderMobile.ON_CLOSE_MENU, function(event){

      this.update_page_layout();

    }.bind(this));
        
  }

  

};

sgpool.page.Default.prototype.create_image_container = function() {

  // console.log('create_image_container');
  
  // var arr = $('.manic-image-container').not('.not-default-version').not('.instantiated-version');
  var arr = $('.manic-image-container').not('.manic-image-container.not-default-version').not('.manic-image-container.instantiated-version');
  var image_container = null;
  var item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);

    item.addClass('instantiated-version');
    
    image_container = new manic.ui.ImageContainer({
      'has_window_resize': false                                // updated manually by 'update_page_layout'
    }, item);
    //this.manic_image_array[i] = image_container;
    this.manic_image_array[this.manic_image_array.length] = image_container;
  }
};

sgpool.page.Default.prototype.create_dropdown = function() {
  var arr = $('.manic-dropdown').not('.manic-dropdown-instanciated');
  var item = null;
  var item_id = "";

  /**
   * @type {manic.ui.Dropdown}
   */
  var dropdown = null;

  for (var i = 0, l = arr.length ; i < l; i++) {
    item = $(arr[i]);
    item.addClass('manic-dropdown-instanciated');

    item_id = '' + item.find('select').attr('id');

    dropdown = new manic.ui.Dropdown({}, item);
    this.dropdown_array[this.dropdown_array.length] = dropdown;

    this.dropdown_dictionary[item_id] = dropdown;
  }
};

sgpool.page.Default.prototype.expandable_text = function() {
  var minimized_elements = $('.minimize-text');
    
  minimized_elements.each(function(){
      // var t = $(this).text();                          // this is just TEXT !!!!!
      var t = $(this).html();
      var maxLength = $(this).data('length');

      if(manic.IS_TABLET_LANDSCAPE == true) {
        maxLength = $(this).data('tablet-length');
      }

      if(manic.IS_TABLET_PORTRAIT == true) {
        maxLength = $(this).data('mobile-length');
      }

      if(manic.IS_MOBILE == true) {
        maxLength = $(this).data('mobile-length');
      }

      if(t.length < maxLength) return;
      if(maxLength < 0) return;

      // http://stackoverflow.com/questions/18087416/split-string-in-half-by-word
      // var middle = length;
      // var before = t.lastIndexOf(' ', middle);
      // var after = t.indexOf(' ', middle + 1);

      // if (middle - before < after - middle) {
      //     middle = before;
      // } else {
      //     middle = after;
      // }

      // var s1 = t.substr(0, middle);
      // var s2 = t.substr(middle + 1);

      //trim the string to the maximum length
      var trimmedString = t.substr(0, maxLength);

      //re-trim if we are in the middle of a word
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))

      if (t.length > maxLength)
        $(this).html(trimmedString+'...');
      else
        $(this).html(t);
            
  });

}

sgpool.page.Default.prototype.contest_form_validate = function(){

  var emails = [];
  var nrics = [];

  function isInArray(value, array) {
    return array.indexOf(value) > -1;
  }

  var $form = $("#contest-form");

  if($form.length > 0) {
    validator = $form.validate({
      ignore: [], //validate for hidden field
      rules: {
        name: "required",
        nric_passport: {
          required: true,
          nricalreadyexist: true
        },
        mobile: {
          required: true,
          mobilecheck: true
        },                   
        email: {
          required: true,
          email: true
        },      
        uploaded_file_path: {
          required: true,
          uploaderror: true
        },
        when_photo_taken: "required",
        share_your_thoughts: "required",      
        terms_and_conditions: "required"          
      },
      messages: {
        nric_passport: {
          nricalreadyexist: "This number has already submitted an entry."
        },
        Email: {
          email: "Invalid email."
        },
        terms_and_conditions: {
          required: "Please check the box and confirm that you have read and agreed to the Terms and Conditions of this contest before submitting."
        }     
      },
      errorPlacement: function(error, element) {      
        error.insertAfter(element);
      },
      submitHandler: function(form) {
        // var nric = $("#nric").val();
        // var email = $("#email").val();

        // if(isInArray(nric, nrics)) {
        //   alert("This nric has already been used to register.")
        // } else if(isInArray(email, emails)) {
        //   alert("This email has already been used to register.")
        // } else {        
          $('input[type="submit"]').prop('disabled', true);
          $('#file_upload').uploadifive('upload');      
        // }    
      }            
    });

    $.validator.addMethod("nricalreadyexist", function(value, element) {
       return nrics.indexOf(value) == -1;
     }, "This number has already submitted an entry.");

    $.validator.addMethod("emailalreadyexist", function(value, element) {
       return emails.indexOf(value) == -1;
     }, "This email has already been used to register.");

    $.validator.addMethod("mobilecheck", function(value, element, regexp) {
      return /^\+?\d+$/.test(value); 
    }, "Please enter a valid mobile number. ");

    $.validator.addMethod("uploaderror", function(value, element, regexp) {
      if($(".uploadifive-queue-item").hasClass('error')) {
        return false;   
      } else {
        return true;
      }
      
    }, "File too large. Please upload a jpg lesser than 2mb.");

    $.get("get_registered_email.php", function(data){
      var data = JSON.parse(data);

      $.each(data, function(i, v){
        emails.push(v);
      });

      console.log(emails)

    });  

    $.get("get_registered_nric.php", function(data){
      var data = JSON.parse(data);

      $.each(data, function(i, v){
        nrics.push(v);
      });

      console.log(nrics)

    });  

    $("#when_photo_taken").on("change", function(){
      $(this).blur();
    });
  }

}


sgpool.page.Default.prototype.textarea_count = function(){

  $("textarea").keyup(function(){
    max = this.getAttribute("maxlength");
    var len = $(this).val().length;
    if (len >= max) {
      $('#number_of_char').text('0 character remaining');
    } else {
      var char = max - len;
      $('#number_of_char').text(char + ' characters remaining');
    }
  });

}

sgpool.page.Default.prototype.pop_up = function(){

  var hash = window.location.hash;

  if(hash=="#terms") {
    $("#pop-up").fadeIn();      
    $("#body-wrap").addClass('disabled');
  }    

  $("#open-terms-popup").click(function(e){
    // e.preventDefault();
    $("#pop-up").fadeIn();      
    $("#body-wrap").addClass('disabled');
  });
  
  if($('#pop-up-content').length > 0) {
    $('.open-popup').click(function(e) { 
      e.preventDefault();

      $("#pop-up").fadeIn();      
      $("#body-wrap").addClass('disabled');
      
      if($("#pop-up-slider").length > 0) {
        $('#pop-up-slider').get(0).slick.setPosition();

        $('#pop-up-slider').slick('slickGoTo', $(this).data('entry-index'));        
      }
    });   

    $(".close-popup").click(function(e){
      e.preventDefault();
      $("#pop-up").fadeOut();
      $("#body-wrap").removeClass('disabled')
    });

    $(document).on('click touchstart', function(event) {

      //if you click on anything except the modal itself or the "open modal" link, close the modal
      if (!$(event.target).closest("#open-terms-popup,#pop-up-content,.open-popup").length) {
        $("body").find("#pop-up").fadeOut();
        $("body").removeClass('disabled')
      }
    });
  }

  if($("#pop-up-slider").length > 0) {
    $("#pop-up-slider").slick({
      'speed': 350,
      'dots': false,
      'arrows': true,
      'infinite': true,
      'slidesToShow': 1,
      'slidesToScroll': 1,
      'autoplay': false
    });

    $("#pop-up-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var name = $(slick.$slides[nextSlide]).data("name");
      var when = $(slick.$slides[nextSlide]).data("when");
      var thoughts = $(slick.$slides[nextSlide]).data("thoughts");

      $("#pop-up-content").find(".name").text(name);
      $("#pop-up-content").find(".when").text(when);
      $("#pop-up-content").find(".thoughts").text(thoughts);
    });
  }
  
}

sgpool.page.Default.prototype.upload_file = function(){

  var contestForm = $("#contest-form");

  if($('#file_upload').length > 0) {
    $('#file_upload').uploadifive({
      'auto'         : false,
      'buttonClass'  : 'customUploadBtn',
      'fileType'     : 'image/jpg',
      'fileSizeLimit' : 2000,
      'buttonText'   : '',
      'truncateLength' : 22,
      // 'uploadLimit'  : 1,
      'multi'        : false,
      'queueSizeLimit' : 1,
      'uploadScript' : 'uploadifive.php',
      'onUploadComplete' : function(file, data) {
        $("#uploaded_file_path").val(data);
        console.log('upload completed and ajaxing...');

        $.ajax({
            type: contestForm.attr('method'),
            url: contestForm.attr('action'),
            data: contestForm.serialize(),
            success: function (data) {
                console.log('Submission was successful.');
                console.log(data);

                $('#message-container').append('<p class="message">Thank you for sending us your entry! You will receive a confirmation email regarding your submission shortly.</p><p class="message">We will review your entry and all winners will be contacted regarding their prize collection by 6th June 2018.</p><a href="entries.php" class="square-cta see-more-entries">See other entries</a>');
                TweenLite.to(window, 0.8, {scrollTo:"div[data-value='form']"});

                contestForm.hide();

            },
            error: function (data) {
                console.log('An error occurred.');
                console.log(data);
            },
        });

      },
      'onSelect' : function(queue) {
        $("#uploaded_file_path").val('file_uploaded');
        $(".upload-label").text('');
        // if(!$("#uploaded_file_path").hasClass('error')) {
          $("#uploaded_file_path").blur();
        // }
      },
      'onCancel'     : function() {
        $("#uploaded_file_path").val('');
        $(".uploadifive-queue-item").remove();
        $(".upload-label").text('Choose a file to upload');
        $("#uploaded_file_path").blur();
      },
      // 'onError'      : function(errorType) {
      //     if(errorType=="FILE_SIZE_LIMIT_EXCEEDED") {
      //       errors = { uploaded_file_path: "This file is too big. Please upload an image lesser than 2mb." };
      //       validator.showErrors(errors);
      //     }
      // }
    });
  }
  

}


//    _        _ __   _____  _   _ _____
//   | |      / \\ \ / / _ \| | | |_   _|
//   | |     / _ \\ V / | | | | | | | |
//   | |___ / ___ \| || |_| | |_| | | |
//   |_____/_/   \_\_| \___/ \___/  |_|
//


/**
 * @override
 * @inheritDoc
 */
sgpool.page.Default.prototype.update_page_layout = function(){
  sgpool.page.Default.superClass_.update_page_layout.call(this);

  if (manic.IS_ACTUAL_MOBILE == true) {
    this.body.addClass('actual-mobile-version');
  } else {
    this.body.removeClass('actual-mobile-version');
  }

  if (this.is_page_min_height == true && manic.IS_MOBILE == false) {
    var target_height = this.page_wrapper.height() - this.desktop_footer_element.outerHeight();

    this.page_wrapper_content.css({
      'min-height': target_height + 'px'
    });
  }


  if (this.is_page_min_height_mobile == true && manic.IS_MOBILE == true) {
    var target_height = this.page_wrapper.height() - this.mobile_header_element.outerHeight();

    // console.log(target_height);

    this.page_wrapper_content.css({
      'min-height': target_height + 'px'
    });
  }

  
  /*
  if (manic.IS_MOBILE_HEADER == false) {

  } else {

  }
  */
 

  


  /*

  // update mobile header min height
  // if (manic.IS_MOBILE && goog.isDefAndNotNull(this.mobile_header)) {
  if (manic.IS_ACTUAL_MOBILE && goog.isDefAndNotNull(this.mobile_header)) {
    this.mobile_header.update_layout();
  }





  // update min height
  if (this.is_page_min_height == true && manic.IS_MOBILE == false) {

   var target_height = this.window_height - this.desktop_footer_element.outerHeight();

    this.min_height_target.css({
      'min-height': target_height + 'px'
    });
  }

  if (this.is_page_min_height_mobile == true && manic.IS_MOBILE == true) {

    // var target_height = this.window_height - this.mobile_header_element.outerHeight();
    var target_height = this.window_height;

    this.min_height_target_mobile.css({
      'min-height': target_height + 'px'
    });
  }



  */




};




//    _   _    _    ____  _   _ _____  _    ____ ____
//   | | | |  / \  / ___|| | | |_   _|/ \  / ___/ ___|
//   | |_| | / _ \ \___ \| |_| | | | / _ \| |  _\___ \
//   |  _  |/ ___ \ ___) |  _  | | |/ ___ \ |_| |___) |
//   |_| |_/_/   \_\____/|_| |_| |_/_/   \_\____|____/
//


/**
 * @override
 * @inheritDoc
 */
sgpool.page.Default.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  sgpool.page.Default.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);
  

  
}

/**
 * @override
 * @inheritDoc
 */
sgpool.page.Default.prototype.on_scroll_to_no_target = function() {
  sgpool.page.Default.superClass_.on_scroll_to_no_target.call(this);

  
}




goog.exportSymbol('sgpool.page.Default', sgpool.page.Default);