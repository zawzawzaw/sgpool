goog.provide('sgpool.page.Home');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.HoverItem');
goog.require('manic.ui.AnimatedSVG');

goog.require('sgpool.page.Default')


/**
 * The Home constructor
 * @inheritDoc
 * @constructor
 * @extends {sgpool.page.Default}
 */
sgpool.page.Home = function(options, element) {

  sgpool.page.Default.call(this, options, element);
  this.options = $.extend(this.options, sgpool.page.Home.DEFAULT, options);


  this.home_box_item = $(".home-box-item:not('.no-link-version')");

  this.home_box_item.click(this.on_home_box_item_click.bind(this));

  window.scrollTo(0, 0);


  // if( manic.IS_MOBILE == false){
  //   var wow = new WOW();
  //   wow.init();
  // }

  // window.addEventListener('scroll', function(e) {
  //   if( $(window).scrollTop() <= 50) {
  //       $('.wow').removeClass('animated');
  //       $('.wow').removeAttr('style');
  //       new WOW().init();
  //   }
  // });

  // console.log('sgpool.page.Home: init');
};
goog.inherits(sgpool.page.Home, sgpool.page.Default);


/**
 * like jQuery options
 * @const {object}
 */
sgpool.page.Home.DEFAULT = {
};

/**
 * Home Event Constant
 * @const
 * @type {string}
 */
sgpool.page.Home.EVENT_01 = '';


//    ___ _   _ ___ _____
//   |_ _| \ | |_ _|_   _|
//    | ||  \| || |  | |
//    | || |\  || |  | |
//   |___|_| \_|___| |_|
//


/**
 * @override
 * @inheritDoc
 */
sgpool.page.Home.prototype.init = function() {
  sgpool.page.Home.superClass_.init.call(this);

  this.is_home_box_items_container_mobile_open = true;
  this.home_box_items_container_mobile_toggle = $('#home-box-items-container-mobile-toggle');
  this.home_box_items_container_mobile = $('#home-box-items-container-mobile');

  this.create_home_box_slider();
  this.create_social_media_masonry();

  this.home_box_items_container_mobile_toggle.click(this.create_dropdown_toggle_mobile.bind(this));
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//









sgpool.page.Home.prototype.create_home_box_slider = function() {
  $("#home-box-slider, #home-box-slider-02").slick({
    'speed': 350,
    'dots': false,
    'arrows': true,
    'infinite': false,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'pauseOnHover': false,
    'autoplay': false,
    'autoplaySpeed': 4000
  });
};
sgpool.page.Home.prototype.create_social_media_masonry = function() {
  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
};
sgpool.page.Home.prototype.create_dropdown_toggle_mobile = function(e) {
  e.preventDefault();


  
  if(this.is_home_box_items_container_mobile_open == false) {
    this.is_home_box_items_container_mobile_open = true;
    this.home_box_items_container_mobile.slideDown(300, function(){
      this.update_manic_image_containers();      
    }.bind(this));
    $(e.currentTarget).find(".dropdown-arrow-icon").removeClass("down-icon").addClass("up-icon");
  } else {    
    this.is_home_box_items_container_mobile_open = false;
    this.home_box_items_container_mobile.slideUp(300);
    // console.log('close');
    $(e.currentTarget).find(".dropdown-arrow-icon").removeClass("up-icon").addClass("down-icon");
  }

};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//



//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
sgpool.page.Home.prototype.on_home_box_item_click = function(event) {
  event.preventDefault();

  window.location.href = $(event.currentTarget).find(".plus-icon").attr("href");
};

/**
 * @param {object} event
 */
sgpool.page.Home.prototype.on_event_handler_02 = function(event) {
};



sgpool.page.Home.prototype.sample_method_calls = function() {

  // sample override
  sgpool.page.Home.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(sgpool.page.Home.EVENT_01));
};



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
sgpool.page.Home.prototype.update_page_layout = function() {

  sgpool.page.Home.superClass_.update_page_layout.call(this);

  /*
  if (manic.IS_MOBILE == true){

    this.banner_image.css({
      'height': this.window_height + 'px'
    });

  } else {

    this.banner_image.css({
      'height': ''
    });

  }
  */

}


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
sgpool.page.Home.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  sgpool.page.Home.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);
  

  
}

/**
 * @override
 * @inheritDoc
 */
sgpool.page.Home.prototype.on_scroll_to_no_target = function() {
  sgpool.page.Home.superClass_.on_scroll_to_no_target.call(this);

  
}



goog.exportSymbol('sgpool.page.Home', sgpool.page.Home);