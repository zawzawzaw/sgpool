goog.provide('manic.page.Page');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('goog.userAgent');
goog.require('goog.userAgent.product');

goog.require('manic');
goog.require('manic.ui.FormCheck');
goog.require('manic.ui.Dropdown');
goog.require('manic.ui.ImageContainer');
goog.require('manic.ui.VideoContainer');
goog.require('manic.ui.AnimatedSVG');
goog.require('manic.ui.ExpandContainer');


/**
 * The Page constructor
 * @param {object} options The object extendable like jquery plugins
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.page.Page = function(options) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.page.Page.DEFAULT, options);

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.body = $('body');
  this.html = $('html');
  this.document = $(document);
  
  this.window = $(window);
  this.window_hash = "";

  this.window_hash_01 = "";
  this.window_hash_02 = "";
  this.window_hash_03 = "";

  this.window_width = 100;
  this.window_height = 100;

  this.document_height = 100;

  this.prev_device_width = 50;
  this.prev_device_height = 50;

  this.device_width = 100;
  this.device_height = 100;


  /**
   * @type {MobileDetect}
   */
  this.mobile_detect = null;


  /**
   * @type {Array.<jQuery>}
   */
  this.scrolltarget_array = [];
  this.scrolltarget_name_array = [];

  
  

  
  /**
   * @type {jQuery}
   */
  this.preloader_element = $('#page-preloader');


  /**
   * @type {Array.<manic.ui.Dropdown>}
   */
  this.dropdown_array = [];

  /**
   * @type {Array.<manic.ui.FormCheck>}
   */
  this.form_check_array = [];

  /**
   * @type {Array.<manic.ui.ImageContainer>}
   */
  this.manic_image_array = [];


  /**
   * @type {Array.<manic.ui.ExpandContainer>}
   */
  this.expand_container_array = [];


  this.previous_scroll_position = 0;




  this.page_wrapper = $('#page-wrapper');

  this.mobile_header_spacer_element = $('#mobile-header-spacer');
  this.mobile_header_element = $('#mobile-header');
  this.desktop_header_spacer_element = $('#desktop-header-spacer');
  this.desktop_header_element = $('#desktop-header');



  this.controller = null;





  //     ____ _   _ _____ ____ _  __
  //    / ___| | | | ____/ ___| |/ /
  //   | |   | |_| |  _|| |   | ' /
  //   | |___|  _  | |__| |___| . \
  //    \____|_| |_|_____\____|_|\_\
  //

  this.check_browser();
  this.check_browser_size();    // before check_device

  this.check_actual_device();
  this.check_device();



  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  TweenMax.delayedCall(0.4,this.init,[],this);

  /*
  if (this.is_tablet == true) {
    TweenMax.delayedCall(0.4,this.init_tablet,[],this);
  } else if (this.is_mobile == true) {
    TweenMax.delayedCall(0.4,this.init_mobile,[],this);
  } else {
    TweenMax.delayedCall(0.4,this.init_desktop,[],this);
  }
  */

};
goog.inherits(manic.page.Page, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Page
 * @const {object}
 */
manic.page.Page.DEFAULT = {
  'on_init_complete': function(){}
};



//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

manic.page.Page.prototype.init = function(){



  this.controller = new ScrollMagic.Controller(); // needed by some components
  this.controller.scrollTo(this.controller_scroll_to.bind(this));

  this.create_image_container();
  this.create_video_container();
  this.create_animated_svg();

  this.create_expand_container();
  this.create_dropdown();
  this.create_form_check();
  
  this.create_scrolltarget();
  this.create_scroll_down_cta();

  this.window.resize(this.on_window_resize.bind(this));
  this.window.focus(this.on_window_resize.bind(this));
  this.on_window_resize(null);
  this.hide_preloader();

  this.window.on('hashchange', this.on_window_hash_change.bind(this));
  this.on_window_hash_change(null);

  this.update_page_layout();
  this.options['on_init_complete']();
  

  // console.log('manic.page.Page: init');
};

manic.page.Page.prototype.create_scrolltarget = function() {
  /**
   * @type {jQuery}
   */
  var scroll_target = null;

  /**
   * @type {String}
   */
  var scroll_target_str = "";
  var arr = $('.scroll-target');

  for (var i = 0, l = arr.length; i < l; i++) {
    scroll_target = $(arr[i]);
    scroll_target_str = scroll_target.attr('data-value');

    this.scrolltarget_name_array[i] = scroll_target_str;
    this.scrolltarget_array[i] = scroll_target;
  }
};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

manic.page.Page.prototype.hide_preloader = function() {

  //TweenMax.to(this.preloader_element, 0.2, {autoAlpha:0, delay: 2, onComplete: this.on_hide_preloader_complete, onCompleteScope: this});
  /// TweenMax.to(this.preloader_element, 0.6, {autoAlpha:0, delay: 0.5, ease:Linear.easeNone});
  
  TweenMax.to(this.preloader_element, 0.2, {autoAlpha:0, delay: 0.1, ease:Linear.easeNone});
};



/**
 * scroll_to_target description
 * @param  {String} str_param
 * @param  {String=} str_param_2
 * @param  {String=} str_param_3
 */
manic.page.Page.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {



  /**
   * @type {jQuery}
   */
  var scroll_target = null;

  /**
   * @type {String}
   */
  var scroll_target_str = "";


  for (var i = 0, l = this.scrolltarget_name_array.length; i < l; i++) {
    scroll_target_str = this.scrolltarget_name_array[i];
    scroll_target = this.scrolltarget_array[i];

    if (str_param == scroll_target_str) {

      // console.log('manic.page.Page: scroll_to_target: ');
      console.log(scroll_target);
      this.controller.scrollTo(scroll_target[0]);
    }
  }


};

/**
 * @param  {number} num_param
 */
manic.page.Page.prototype.scroll_to = function(num_param) {
  var target_y = num_param;
  var current_scroll = this.window.scrollTop();
  // var target_duration = Math.abs( (target_y - current_scroll) / 800 );
  var target_duration = Math.abs( (target_y - current_scroll) / 1800 );
  
  TweenMax.to(this.window, target_duration, {scrollTo:{y:target_y,autoKill: true}, ease:Quad.easeInOut});
};








//     ____ ____  _____    _  _____ _____ 
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|  
//   | |___|  _ <| |___ / ___ \| | | |___ 
//    \____|_| \_\_____/_/   \_\_| |_____|
//                                        


/*
manic.page.Page.prototype.create_hammer = function(){
  // this.hammertime = new Hammer(myElement, myOptions);
};
*/

manic.page.Page.prototype.create_image_container = function() {

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


manic.page.Page.prototype.create_video_container = function(){

  var arr = $('.manic-video-container').not('.not-default-version');
  var video_container = null;
  var item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    video_container = new manic.ui.VideoContainer({}, item);
  }
  
};

manic.page.Page.prototype.create_animated_svg = function() {
  var arr = $('.manic-animated-svg');
  var item = null;

  /**
   * @type {manic.ui.AnimatedSVG}
   */
  var animated_svg = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    animated_svg = new manic.ui.AnimatedSVG({}, item);
  }
  
};


manic.page.Page.prototype.create_expand_container = function(){
  var arr = $('.manic-expand-container');
  var item = null;

  /**
   * @type {manic.ui.ExpandContainer}
   */
  var expand_container = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    expand_container = new manic.ui.ExpandContainer({}, item);
    goog.events.listen(expand_container, manic.ui.ExpandContainer.ON_EXPAND, this.on_expand_container_expand.bind(this));

    this.expand_container_array[this.expand_container_array.length] = expand_container;
  }

  
};

manic.page.Page.prototype.create_dropdown = function() {
  var arr = $('.manic-dropdown');
  var item = null;
  var item_id = "";

  /**
   * @type {manic.ui.Dropdown}
   */
  var dropdown = null;

  for (var i = 0, l = arr.length ; i < l; i++) {
    item = $(arr[i]);
    item_id = '' + item.find('select').attr('id');

    dropdown = new manic.ui.Dropdown({}, item);
    this.dropdown_array[this.dropdown_array.length] = dropdown;

  }
};



manic.page.Page.prototype.create_form_check = function() {
  var arr = $('.simple-form-check');
  var form_check = null;
  var item = null;
  var item_id = '';

  for (var i = 0, l = arr.length ; i < l; i++) {
    item = $(arr[i]);
    item_id = item.attr('id');

    form_check = new manic.ui.FormCheck({
      'alert_on_error': false,
      'error_class': 'has-error',
      'parent_classes': ['form-group']
    }, item);

    //goog.events.listen(form_check, manic.ui.FormCheck.ON_ERROR, this.on_form_check_error.bind(this));

    this.form_check_array[this.form_check_array.length] = form_check;
  }
};

manic.page.Page.prototype.create_scroll_down_cta = function(){
  $('.scroll-down-cta').click(function(event){
    event.preventDefault();
    this.scroll_to_after_the_fold();
  }.bind(this));
  
};













/*
manic.page.Page.prototype.public_method_05 = function() {};
manic.page.Page.prototype.public_method_06 = function() {};
*/

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

  


/**
 * event handler
 * @param  {object} event
 */
manic.page.Page.prototype.on_window_resize = function(event) {
  
  var previous_is_mobile = manic.IS_MOBILE;

  this.check_browser_size();
  this.check_device();
  

  // if switching from desktop to mobile or vice versa
  
  if (previous_is_mobile != manic.IS_MOBILE) {
    this.update_page_layout();
    return;
  }
  


  // to prevent iOS resize when removing the address bar on scroll (default safari animation)
  
  this.device_width = window.screen.width;
  this.device_height = window.screen.height;

  this.document_height = this.document.height();
  
  if (manic.IS_ACTUAL_MOBILE == true) {

    // if the mobile device has not yet changed aspect ratio
    if(this.prev_device_width != this.device_width && this.prev_device_height != this.device_height) {
      this.update_page_layout();

    } else {
      // do nothing
      
    }

  } else {

    // desktop, just update
    this.update_page_layout();
  }


  this.prev_device_width = this.device_width;
  this.prev_device_height = this.device_height;


};





/**
 * event handler
 * @param  {goog.events.Event} event
 */
manic.page.Page.prototype.on_expand_container_expand = function(event) {
  //console.log('has expanded');
  //console.log(event);

  /**
   * @type {manic.ui.ExpandContainer}
   */
  var expand_container = event.currentTarget;



  /**
   * @type {manic.ui.ExpandContainer}
   */
  var expand_container_02 = null;


  


  if (manic.IS_MOBILE == true) {

    if (expand_container.scroll_value != 'none'){
      this.util_scroll_to(expand_container.scroll_value);

    }
  } else {

    // console.log('expand_container.group_value: ' + expand_container.group_value);

    if(expand_container.group_value != 'none') {

      // collapse all other from the same group

      for (var i = 0, l=this.expand_container_array.length; i < l; i++) {

        expand_container_02 = this.expand_container_array[i];

        // console.log(expand_container_02.group_value);

        if(expand_container_02.group_value == expand_container.group_value && expand_container_02 !== expand_container){
          expand_container_02.collapse();
        }

      } // for

    }
    

  }

};
















//    _   _ ____  ____    _  _____ _____   _        _ __   _____  _   _ _____
//   | | | |  _ \|  _ \  / \|_   _| ____| | |      / \\ \ / / _ \| | | |_   _|
//   | | | | |_) | | | |/ _ \ | | |  _|   | |     / _ \\ V / | | | | | | | |
//   | |_| |  __/| |_| / ___ \| | | |___  | |___ / ___ \| || |_| | |_| | | |
//    \___/|_|   |____/_/   \_\_| |_____| |_____/_/   \_\_| \___/ \___/  |_|
//





manic.page.Page.prototype.update_page_layout = function(){

  if (manic.IS_MOBILE_HEADER == true) {
    this.body.addClass('is-mobile-header');
    // this.show_mobile_header();
    
  } else {
    this.body.removeClass('is-mobile-header');
    // this.show_desktop_header();
  }


  
  

  this.update_manic_image_containers();
  


};

manic.page.Page.prototype.update_manic_image_containers = function(){
  /**
   * @type {manic.ui.ImageContainer}
   */
  var item = null;

  for (var i = 0, l=this.manic_image_array.length; i < l; i++) {
    item = this.manic_image_array[i];
    item.update_layout();
  }
};


//    ____  ____   _____        ______  _____ ____
//   | __ )|  _ \ / _ \ \      / / ___|| ____|  _ \
//   |  _ \| |_) | | | \ \ /\ / /\___ \|  _| | |_) |
//   | |_) |  _ <| |_| |\ V  V /  ___) | |___|  _ <
//   |____/|_| \_\\___/  \_/\_/  |____/|_____|_| \_\
//


manic.page.Page.prototype.check_browser = function() {
  if(goog.userAgent.WINDOWS) { this.body.addClass('is-windows'); }
  if(goog.userAgent.MAC) { this.body.addClass('is-mac'); }

  if(goog.userAgent.IPHONE) { this.body.addClass('is-iphone'); }
  if(goog.userAgent.IPAD) { this.body.addClass('is-ipad'); }

  if (goog.userAgent.product.FIREFOX) { this.body.addClass('is-firefox'); }
  if (goog.userAgent.product.CHROME) { this.body.addClass('is-chrome'); }
  if (goog.userAgent.product.SAFARI) { this.body.addClass('is-safari'); }
  if (goog.userAgent.product.IE) { this.body.addClass('is-ie'); }

  
};

manic.page.Page.prototype.check_browser_size = function(){
  this.window_width = this.window.width();
  this.window_height = this.window.height();
};

manic.page.Page.prototype.check_actual_device = function() {

  this.mobile_detect = new MobileDetect(window.navigator.userAgent);

  manic.IS_ACTUAL_MOBILE = this.mobile_detect.mobile() != null;
  manic.IS_ACTUAL_TABLET = this.mobile_detect.tablet() != null;

  if(manic.IS_ACTUAL_MOBILE == true){
    this.html.addClass('is-actual-mobile');
  }

  if(manic.IS_ACTUAL_TABLET == true){
    this.html.addClass('is-actual-tablet');
  }

};

manic.page.Page.prototype.check_device = function() {

  // console.log('manic.page.Page: check_device');

  manic.IS_MOBILE       = this.window_width <= 992;
  
  if (manic.IS_ACTUAL_TABLET == true) {
    if(this.window_width > this.window_height) {
      manic.IS_TABLET_PORTRAIT = false;
      manic.IS_TABLET_LANDSCAPE = true;
    } else {
      manic.IS_TABLET_PORTRAIT = true;
      manic.IS_TABLET_LANDSCAPE = false;
    }
  } else {
    manic.IS_TABLET_PORTRAIT = false;
    manic.IS_TABLET_LANDSCAPE = false;
  }


  


  if( manic.IS_MOBILE == true){
    this.body.addClass('is-mobile');
  } else {
    this.body.removeClass('is-mobile');
  }


  
  if (manic.IS_ACTUAL_TABLET == true) {
    this.body.addClass('is-tablet');

    if (manic.IS_TABLET_PORTRAIT == true) {
      this.body.removeClass('is-tablet-landscape');
      this.body.addClass('is-tablet-portrait');
    } else {
      this.body.addClass('is-tablet-landscape');
      this.body.removeClass('is-tablet-portrait');
    }

  } else {

    this.body.removeClass('is-tablet');
    this.body.removeClass('is-tablet-landscape');
    this.body.removeClass('is-tablet-portrait');

  }


  if (manic.IS_ACTUAL_MOBILE == true || this.window_width < 992) {
    manic.IS_MOBILE_HEADER = true;
  } else {
    manic.IS_MOBILE_HEADER = false;
  }



};






















//    ____   ____ ____   ___  _     _     
//   / ___| / ___|  _ \ / _ \| |   | |    
//   \___ \| |   | |_) | | | | |   | |    
//    ___) | |___|  _ <| |_| | |___| |___ 
//   |____/ \____|_| \_\\___/|_____|_____|
//                                        


/**
 * @param  {object} target
 */
manic.page.Page.prototype.controller_scroll_to = function(target) {
  TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target, // scroll position of the target along y axis
      autoKill : true // allows user to kill scroll action smoothly
    },
    ease : Sine.easeInOut
    //ease : Cubic.easeInOut
  });
};

/**
 * @param  {String} str_param
 */
manic.page.Page.prototype.util_scroll_to = function(str_param){

  if(goog.isDefAndNotNull(str_param) == true){
    TweenMax.killDelayedCallsTo(this.scroll_to_target);
    TweenMax.delayedCall(0.6, this.scroll_to_target, [str_param], this);
    //this.scroll_to_target(value);
    
  } else {
    // console.log('Element needs a [data-value] param');
  }

};


manic.page.Page.prototype.scroll_to_after_the_fold = function(){

  // var target_y = this.window_height - $('#desktop-header .bottom-header').height();
  
  var target_y = 0;

  if(manic.IS_MOBILE_HEADER == true) {
    target_y = this.window_height - this.mobile_header_element.height();
  } else {
    target_y = this.window_height - this.desktop_header_element.height();
  }

  TweenMax.to(this.window, 0.5, {
    scrollTo:{y:target_y,autoKill: true},
    ease:Quad.easeInOut
  });
};




//    _   _    _    ____  _   _
//   | | | |  / \  / ___|| | | |
//   | |_| | / _ \ \___ \| |_| |
//   |  _  |/ ___ \ ___) |  _  |
//   |_| |_/_/   \_\____/|_| |_|
//



/**
 * event handler
 * @param  {object} event
 */
manic.page.Page.prototype.on_window_hash_change = function(event) {

  // console.log('manic.page.Page: on_window_hash_change');

  this.window_hash = window.location.hash.replace('#', '');
  var str_array = [];

  this.window_hash_01 = "";
  this.window_hash_02 = "";
  this.window_hash_03 = "";

  if (this.window_hash != '') {

    str_array = this.window_hash.split('/');

    // console.log('str_array: ');
    // console.log(str_array);

    if(str_array.length == 1){

      this.window_hash_01 = "" + str_array[0];
      this.scroll_to_target(this.window_hash_01);

    } else if(str_array.length == 2){

      this.window_hash_01 = "" + str_array[0];
      this.window_hash_02 = "" + str_array[1];

      this.scroll_to_target(this.window_hash_01, this.window_hash_02);

    } else if(str_array.length == 3){

      this.window_hash_01 = "" + str_array[0];
      this.window_hash_02 = "" + str_array[1];
      this.window_hash_03 = "" + str_array[2];

      this.scroll_to_target(this.window_hash_01, this.window_hash_02, this.window_hash_03);

    } else {
      // console.log('manic.page.Page: there is too many slashes in the hash url...');

      this.window_hash_01 = "" + str_array[0];
      this.window_hash_02 = "" + str_array[1];
      this.window_hash_03 = "" + str_array[2];

      this.scroll_to_target(this.window_hash_01, this.window_hash_02, this.window_hash_03);
    }

  } else {
    this.on_scroll_to_no_target();
  }

};


manic.page.Page.prototype.on_scroll_to_no_target = function(){
  // console.log('on_scroll_to_no_target');
  // this.scroll_to(0);
};

/*
manic.page.Page.prototype.initial_window_hash = function(){
  this.window_hash = window.location.hash.replace('#', '');
  if(this.window_hash != ''){
    this.scroll_to_target(this.window_hash);
  }
};
*/


goog.exportSymbol('manic.page.Page', manic.page.Page);