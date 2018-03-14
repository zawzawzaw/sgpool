// possible upgrades:
// 1. use Tweenmax(x,y,scale) instead (might make it faster?)

goog.provide('manic.ui.ImageContainer');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The ImageContainer constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.ImageContainer = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.ImageContainer.DEFAULT, options);
  this.element = element;

  this.element.data('manic.ui.ImageContainer', this);

  this.container_width = 0;
  this.container_height = 0;
  this.container_aspect_ratio = -1;

  this.image_element = this.element.find('img');


  this.data_image = "";
  this.data_image_desktop = "";
  this.data_image_mobile = "";
  this.data_image_tablet = "";
  
  if (goog.isDefAndNotNull(this.image_element.attr('data-image'))) {
    this.data_image = this.image_element.attr('data-image')
  }
  if (goog.isDefAndNotNull(this.image_element.attr('data-image-desktop'))) {
    this.data_image_desktop = this.image_element.attr('data-image-desktop')
  }
  if (goog.isDefAndNotNull(this.image_element.attr('data-image-mobile'))) {
    this.data_image_mobile = this.image_element.attr('data-image-mobile')
  }
  
  // used once in the home page... // ?
  if (goog.isDefAndNotNull(this.image_element.attr('data-image-tablet'))) {
    this.data_image_tablet = this.image_element.attr('data-image-tablet')
  }
  


  this.current_image = this.image_element.attr('src');

  var load_array = [];

  if(this.current_image != ""){
    load_array = [this.current_image];
  }


  //console.log('bbb: ' + this.options['image_src']);


  // not used anymore?
  if (this.options['image_src'] != '') {
    this.image_element.attr('src',this.options['image_src']);

    this.current_image = this.options['image_src'];
    //console.log('aaa: ' + this.current_image);
    load_array = [this.current_image];
  }


  if(manic.IS_TABLET_PORTRAIT == true && this.data_image_tablet != "") {
    this.current_image = this.data_image_tablet;
    load_array = [this.current_image];

    // console.log('choose tablet image');

  } else if(manic.IS_MOBILE == true && this.data_image_mobile != ""){
    this.current_image = this.data_image_mobile;
    load_array = [this.current_image];
    // console.log('choose mobile image');

  } else if(manic.IS_MOBILE == false && this.data_image_desktop != ""){
    this.current_image = this.data_image_desktop;
    load_array = [this.current_image];
    // console.log('choose desktop image');

  } else if(this.data_image != ""){
    this.current_image = this.data_image;
    load_array = [this.current_image];

  }

  // console.log('this.current_image: ' + this.current_image);

  


  /**
   * @type {createjs.LoadQueue}
   */
  this.preloader = new createjs.LoadQueue(false, null, true);
  this.preloader.addEventListener('complete', this.on_image_load_complete.bind(this));            // overkill but works

  this.preloader.loadManifest(load_array);
  //TweenMax.delayedCall(0.1,this.preloader.loadManifest, this.preloader, [load_array]);

  //$([this.image_element.attr('src')]).preloadImages(this.on_image_load_complete.bind(this))


  this.original_image_width = 0;
  this.original_image_height = 0;
  this.image_aspect_ratio = -1;

  this.scale_mode               = this.options['scale_mode'];
  this.vertical_align           = this.options['vertical_align'];
  this.horizontal_align         = this.options['horizontal_align'];
  this.has_window_width         = this.options['has_window_width'];
  this.has_window_height        = this.options['has_window_height'];
  this.has_full_window_width    = this.options['has_full_window_width'];
  this.has_full_width           = this.options['has_full_width'];

  this.fixed_width = this.options['fixed_width'];
  this.fixed_height = this.options['fixed_height'];

  this.offset_width = this.options['offset_width'];
  this.offset_height = this.options['offset_height'];

  this.offset_tablet_landscape_width = this.options['offset_tablet_landscape_width'];
  this.offset_tablet_landscape_height = this.options['offset_tablet_landscape_height'];

  this.offset_x = this.options['offset_x'];
  this.offset_y = this.options['offset_y'];

  

  this.use_3D = this.options['use_3D'];

  this.target_width = 0;
  this.target_height = 0;
  this.target_x = 0;
  this.target_y = 0;



  this.has_window_resize = this.options['has_window_resize'];


  // element attributes take priority
  
  if (goog.isDefAndNotNull(this.element.attr('data-scale-mode'))) {
    this.scale_mode = this.element.attr('data-scale-mode')
  }
  if (goog.isDefAndNotNull(this.element.attr('data-vertical-align'))) {
    this.vertical_align = this.element.attr('data-vertical-align')
  }
  if (goog.isDefAndNotNull(this.element.attr('data-horizontal-align'))) {
    this.horizontal_align = this.element.attr('data-horizontal-align')
  }
  if (this.element.hasClass('has-window-width')) {
    this.has_window_width = true;
  }
  if (this.element.hasClass('has-window-height')) {
    this.has_window_height = true;
  }

  if (this.element.hasClass('has-full-window-width')) {
    this.has_full_window_width = true;
  }
  if (this.element.hasClass('has-full-width')) {
    this.has_full_width = true;
  }


  if (this.element.hasClass('has-show-all')) {
    this.scale_mode = manic.ui.ImageContainer.SHOW_ALL;
  }
  
  


  if (goog.isDefAndNotNull(this.element.attr('data-offset-width'))) {
    this.offset_width = parseInt( this.element.attr('data-offset-width') );
  }
  if (goog.isDefAndNotNull(this.element.attr('data-offset-height'))) {
    this.offset_height = parseInt( this.element.attr('data-offset-height') );
  }

  // new 
  if (goog.isDefAndNotNull(this.element.attr('data-offset-x'))) {
    this.offset_x = parseInt( this.element.attr('data-offset-x') );
  }
  if (goog.isDefAndNotNull(this.element.attr('data-offset-y'))) {
    this.offset_y = parseInt( this.element.attr('data-offset-y') );
  }



  this.data_original_width = 0;
  this.data_original_height = 0;

  if (goog.isDefAndNotNull(this.element.attr('data-original-width'))) {
    this.data_original_width = parseInt( this.element.attr('data-original-width') );
  }
  if (goog.isDefAndNotNull(this.element.attr('data-original-height'))) {
    this.data_original_height = parseInt( this.element.attr('data-original-height') );
  }

  if (this.data_original_width != 0) {
    this.original_image_width = this.data_original_width;
  }
  if (this.data_original_height != 0) {
    this.original_image_height = this.data_original_height;
  }

  


  if (goog.isDefAndNotNull(this.element.attr('data-tablet-landscape-offset-width'))) {
    this.offset_tablet_landscape_width = parseInt( this.element.attr('data-tablet-landscape-offset-width') );
  }
  if (goog.isDefAndNotNull(this.element.attr('data-tablet-landscape-offset-height'))) {
    this.offset_tablet_landscape_height = parseInt( this.element.attr('data-tablet-landscape-offset-height') );
  }

  

  


  this.element.css({
    'overflow': 'hidden',
    'position': 'relative'
  });

  this.image_element.css({
    'display': 'block',
    'position': 'absolute',
    'top': '0px',
    'left': '0px'
  });

  if (this.use_3D == true) {
    TweenMax.to(this.image_element, 0, {'z': 0.1});
  }

  this.window = $(window);
  this.document = $(document);
  this.window_width = 0;
  this.window_height = 0;

  if (this.has_window_resize) {
    this.window.resize(this.on_window_resize.bind(this));
  }
  

  this.update_layout();

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  //console.log('init');
};
goog.inherits(manic.ui.ImageContainer, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for ImageContainer
 * @const {object}
 */
manic.ui.ImageContainer.DEFAULT = {
  'image_src': '',
  'scale_mode': 'best_fit',
  'vertical_align': 'center',                       // applies to 'best_fit' & 'show_all'
  'horizontal_align': 'center',
  'has_window_width': false,
  'has_window_height': false,
  'has_full_width': false,
  'has_full_window_width': false,

  'offset_x': 0,
  'offset_y': 0,


  'offset_width': 0,
  'offset_height': 0,
  'offset_tablet_landscape_width': 0,
  'offset_tablet_landscape_height': 0,
  'fixed_width': -1,                                // no checking if number or not
  'fixed_height': -1,
  'has_window_resize': true,
  'use_3D': false
};


/**
 * ImageContainer Event Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.ON_IMAGE_LOAD_COMPLETE = 'on_image_load_complete';

/**
 * ImageContainer Event Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.ON_UPDATE_LAYOUT = 'on_update_layout';




/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.CENTER = 'center';





/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.BEST_FIT = 'best_fit';


/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.BEST_FIT_NO_SCALE_DOWN = 'best_fit_no_scale_down';



/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.SHOW_ALL = 'show_all';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.SHOW_ALL_NO_SCALE = 'show_all_no_scale';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.STRETCH = 'stretch';



/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.TOP = 'top';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.BOTTOM = 'bottom';



/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.LEFT = 'left';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.RIGHT = 'right';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

manic.ui.ImageContainer.prototype.update_layout = function() {

  //console.log('manic.ui.ImageContainer: update_layout');

  this.window_width = this.window.width();
  this.window_height = this.window.height();

  if (manic.IS_MOBILE) {

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    this.window_height = (/android/i.test(userAgent)) ? window.innerHeight : window.innerHeight; //window.screen.height;

  }

  // window.screen.availHeight 
  

  // this.window_width = this.document.width();
  // this.window_height = this.document.height();
  //this.window_width = screen.width;
  // this.window_height = screen.height;
  // 
  
  /*
  if(this.window_width >= 992 && this.window_width <= 1100){
    this.window_width = 1100;
  }
  */
 
  var target_image = this.current_image;

  if(manic.IS_TABLET_PORTRAIT == true && this.data_image_tablet != "") {
    target_image = this.data_image_tablet;

  } else if(manic.IS_MOBILE == true && this.data_image_mobile != ""){
    target_image = this.data_image_mobile;
    
  } else if(manic.IS_MOBILE == false && this.data_image_desktop != ""){
    target_image = this.data_image_desktop;

  // } else if(manic.IS_TABLET_FAKE_PORTRAIT && this.data_image_tablet != "") {    // fake
  
    

  } else if(this.data_image != ""){
    target_image = this.data_image;

  }

  
  // console.log('target_image: ' + target_image)
  // load new image
  if (this.current_image != target_image){
    // console.log('manic.ui.ImageContainer: load new image: ' + target_image);

    this.set_image_src(target_image);

    /*
    load_array = [target_image];

    this.preloader.loadManifest(load_array);            // this is just a test
    */
    
    return false;
  }
  





 
  var target_offset_width = this.offset_width;
  var target_offset_height = this.offset_height;

  if (manic.IS_TABLET_LANDSCAPE == true) {
    target_offset_width = this.offset_tablet_landscape_width;
    target_offset_height = this.offset_tablet_landscape_height;
  }
  

  /*
  // zoom check
  if (this.window_width <= 1280 && manic.IS_ACTUAL_MOBILE == false ||
      manic.IS_ACTUAL_MOBILE == true && manic.IS_TABLET_LANDSCAPE) {
    
    this.window_width *= 1.1111;
    this.window_height *= 1.1111;

    target_offset_width *= 0.9;
    target_offset_height *= 0.9;
  }
  */
  
 
  

  // get image width
  if (this.has_window_width || this.has_full_window_width) {
    this.container_width = this.window_width;
    this.container_width += target_offset_width;
    this.element.width(this.container_width);
  } else if (this.fixed_width != -1) {
    this.container_width = this.fixed_width;
    this.container_width += target_offset_width;
    this.element.width(this.container_width);
  } else{
    this.container_width = this.element.width();
    this.container_width += target_offset_width;
  }

  


  // get image height
  if (this.has_window_height) {
    this.container_height = this.window_height;
    this.container_height += target_offset_height;
    this.element.height(this.container_height);

    // console.log('container_height: '+ this.container_height);
  } else if (this.fixed_height != -1) {
    this.container_height = this.fixed_height;
    this.container_height += target_offset_height;
    this.element.height(this.container_height);
  } else if (this.has_full_window_width ) {
    this.container_height = this.window_width / this.image_aspect_ratio;
    this.container_height += target_offset_height;
    this.element.height(this.container_height);
  } else if (this.has_full_width) {
    this.container_height = this.element.width() / this.image_aspect_ratio;
    this.container_height += target_offset_height;
    this.element.height(this.container_height);
  } else{
    this.container_height = this.element.height();
    this.container_height += target_offset_height;
  }



  this.container_aspect_ratio = this.container_width / this.container_height;


  // scale the image
  if(this.scale_mode == manic.ui.ImageContainer.STRETCH) {
    this.use_scale_mode_stretch();
  } else if(this.scale_mode == manic.ui.ImageContainer.SHOW_ALL || this.scale_mode == manic.ui.ImageContainer.SHOW_ALL_NO_SCALE) {
    this.use_scale_mode_show_all();
  } else if(this.scale_mode == manic.ui.ImageContainer.BEST_FIT) {
    this.use_scale_mode_best_fit();
  } else if(this.scale_mode == manic.ui.ImageContainer.BEST_FIT_NO_SCALE_DOWN){
    this.use_scale_mode_best_fit_no_scale_down();
  }

  this.dispatchEvent(new goog.events.Event(manic.ui.ImageContainer.ON_UPDATE_LAYOUT));

  //this.options['vertical_align'] == manic.ui.ImageContainer.TOP
};
manic.ui.ImageContainer.prototype.use_scale_mode_stretch = function() {
  
  this.target_width = Math.floor(this.container_width) + 1;
  this.target_height = Math.floor(this.container_height) + 1;
  this.target_x = 0;
  this.target_y = 0;

  this.target_x += this.offset_x;
  this.target_y += this.offset_y;

  if (this.use_3D == true) {
    TweenMax.to(this.image_element, 0, {'x': 0, 'y': 0, 'width': this.target_width, 'height': this.target_height});
  } else {
    this.image_element.css({
      'left': this.target_x + 'px',
      'top': this.target_y + 'px',
      'width': this.target_width + 'px',
      'height': this.target_height + 'px'
    });
  }
};
manic.ui.ImageContainer.prototype.use_scale_mode_show_all = function() {

  this.target_width = 0;
  this.target_height = 0;
  this.target_x = 0;
  this.target_y = 0;

  if (this.image_aspect_ratio != -1) {

    // set target width and height
    if (this.container_aspect_ratio > this.image_aspect_ratio) {
      this.target_height = this.container_height
      this.target_width = this.target_height * this.image_aspect_ratio;
    } else {
      this.target_width = this.container_width
      this.target_height = this.target_width / this.image_aspect_ratio;
    }


    // if no scale;
    if(this.scale_mode == manic.ui.ImageContainer.SHOW_ALL_NO_SCALE){
      this.target_width   = this.original_image_width;
      this.target_height  = this.original_image_height;
    }

    // set target x
    if (this.horizontal_align == manic.ui.ImageContainer.LEFT) {
      this.target_x = 0;
    } else if (this.horizontal_align == manic.ui.ImageContainer.CENTER) {
      this.target_x = (this.container_width - this.target_width) / 2;
    } else if (this.horizontal_align == manic.ui.ImageContainer.RIGHT) {
      this.target_x = this.container_width - this.target_width;
    }

    // set target y
    if(this.vertical_align == manic.ui.ImageContainer.TOP){
      this.target_y = 0;
    } else if(this.vertical_align == manic.ui.ImageContainer.CENTER){
      this.target_y = (this.container_height - this.target_height) / 2;
    } else if(this.vertical_align == manic.ui.ImageContainer.BOTTOM){
      this.target_y = this.container_height - this.target_height;
    }

    this.target_x += this.offset_x;
    this.target_y += this.offset_y;

    this.target_x = Math.round(this.target_x);
    this.target_y = Math.round(this.target_y);
    this.target_width = Math.round(this.target_width);
    this.target_height = Math.round(this.target_height);

    if (this.use_3D == true) {
      TweenMax.to(this.image_element, 0, {'x': this.target_x, 'y': this.target_y, 'width': this.target_width, 'height': this.target_height});
    } else {
      this.image_element.css({
        'left': this.target_x + 'px',
        'top': this.target_y + 'px',
        'width': this.target_width + 'px',
        'height': this.target_height + 'px'
      });
    }
    
  } // end if aspect ratio

};
manic.ui.ImageContainer.prototype.use_scale_mode_best_fit = function() {
  this.target_width = 0;
  this.target_height = 0;
  this.target_x = 0;
  this.target_y = 0;

  if (this.image_aspect_ratio != -1) {

    // set target width and height
    if (this.container_aspect_ratio > this.image_aspect_ratio) {
      this.target_width = this.container_width
      this.target_height = this.target_width / this.image_aspect_ratio;
    } else {
      this.target_height = this.container_height
      this.target_width = this.target_height * this.image_aspect_ratio;
    }

    // set target x
    if (this.horizontal_align == manic.ui.ImageContainer.LEFT) {
      this.target_x = 0;
    } else if (this.horizontal_align == manic.ui.ImageContainer.CENTER) {
      this.target_x = (this.container_width - this.target_width) / 2;
    } else if (this.horizontal_align == manic.ui.ImageContainer.RIGHT) {
      this.target_x = this.container_width - this.target_width;
    }

    // set target y
    if(this.vertical_align == manic.ui.ImageContainer.TOP){
      this.target_y = 0;
    } else if(this.vertical_align == manic.ui.ImageContainer.CENTER){
      this.target_y = (this.container_height - this.target_height) / 2;
    } else if(this.vertical_align == manic.ui.ImageContainer.BOTTOM){
      this.target_y = this.container_height - this.target_height;
    }

    this.target_x += this.offset_x;
    this.target_y += this.offset_y;

    // console.log('this.image_aspect_ratio: ' + this.image_aspect_ratio);
    // console.log(this.image);
    // console.log('this.target_x: ' + this.target_x);
    // console.log('this.target_y: ' + this.target_y);

    this.target_x = Math.round(this.target_x);
    this.target_y = Math.round(this.target_y);
    this.target_width = Math.round(this.target_width);
    this.target_height = Math.round(this.target_height);

    /*
    console.log('best_fit: target_x: ' + this.target_x);
    console.log('best_fit: target_y: ' + this.target_y);
    console.log('best_fit: target_width: ' + this.target_width);
    console.log('best_fit: target_height: ' + this.target_height);
    */

    if (this.use_3D == true) {
      TweenMax.to(this.image_element, 0, {'x': this.target_x, 'y': this.target_y, 'width': this.target_width, 'height': this.target_height});
    } else {
      this.image_element.css({
        'left': this.target_x + 'px',
        'top': this.target_y + 'px',
        'width': this.target_width + 'px',
        'height': this.target_height + 'px'
      });
    }

  } // end if aspect ratio
};
manic.ui.ImageContainer.prototype.use_scale_mode_best_fit_no_scale_down = function() {

  this.target_width = 0;
  this.target_height = 0;
  this.target_x = 0;
  this.target_y = 0;

  if (this.image_aspect_ratio != -1) {

    // set target width and height
    if (this.container_aspect_ratio > this.image_aspect_ratio) {
      this.target_width = this.container_width
      this.target_height = this.target_width / this.image_aspect_ratio;
    } else {
      this.target_height = this.container_height
      this.target_width = this.target_height * this.image_aspect_ratio;
    }

    // this is the no scale down code
    this.target_width = this.target_width <= this.original_image_width ? this.original_image_width : this.target_width;
    this.target_height =  this.target_height <= this.original_image_height ? this.original_image_height : this.target_height;
    

    // set target x
    if (this.horizontal_align == manic.ui.ImageContainer.LEFT) {
      this.target_x = 0;
    } else if (this.horizontal_align == manic.ui.ImageContainer.CENTER) {
      this.target_x = (this.container_width - this.target_width) / 2;
    } else if (this.horizontal_align == manic.ui.ImageContainer.RIGHT) {
      this.target_x = this.container_width - this.target_width;
    }

    // set target y
    if(this.vertical_align == manic.ui.ImageContainer.TOP){
      this.target_y = 0;
    } else if(this.vertical_align == manic.ui.ImageContainer.CENTER){
      this.target_y = (this.container_height - this.target_height) / 2;
    } else if(this.vertical_align == manic.ui.ImageContainer.BOTTOM){
      this.target_y = this.container_height - this.target_height;
    }

    this.target_x += this.offset_x;
    this.target_y += this.offset_y;

    this.target_x = Math.round(this.target_x);
    this.target_y = Math.round(this.target_y);
    this.target_width = Math.round(this.target_width);
    this.target_height = Math.round(this.target_height);

    if (this.use_3D == true) {
      TweenMax.to(this.image_element, 0, {'x': this.target_x, 'y': this.target_y, 'width': this.target_width, 'height': this.target_height});
    } else {
      this.image_element.css({
        'left': this.target_x + 'px',
        'top': this.target_y + 'px',
        'width': this.target_width + 'px',
        'height': this.target_height + 'px'
      });
    }


  } // end if aspect ratio

};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * set_image_src description
 * @param {string} str_param url of the image to replace current one
 */
manic.ui.ImageContainer.prototype.set_image_src = function(str_param) {

  console.log(str_param)

  this.image_element.attr('src',str_param)
  //$([str_param]).preloadImages(this.on_image_load_complete.bind(this));
  
  
    
  this.current_image = str_param;
  var load_array = [this.current_image];

  this.preloader.loadManifest(load_array);
};


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
manic.ui.ImageContainer.prototype.on_window_resize = function(event) {
  

  this.update_layout();

  
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.ImageContainer.prototype.on_image_load_complete = function(event) {

  //console.log('on_image_load_complete');
  //console.log(this.element);

  var loaded_image_element = $(this.preloader.getResult(this.current_image));

  // console.log('this.current_image: ' + this.current_image);
  this.image_element.attr('src', this.current_image);

  this.element.addClass('image-loaded-version')

  //var temp_image = 

  // if you need a cross browser compatible solution, try this
  // http://stackoverflow.com/questions/1944280/determine-original-size-of-image-cross-browser
  

  //this.original_image_width = this.image_element[0].naturalWidth;
  //this.original_image_height = this.image_element[0].naturalHeight;
  
  //console.log(this.element)
  //console.log('this.current_image: ' + this.current_image);
  //console.log(this.current_image)
  
  //console.log('loaded_image_element');
  //console.log(loaded_image_element);
  //console.log('loaded_image_element 0');
  //console.log(loaded_image_element[0]);

  if(loaded_image_element.length != 0){
    //console.log('got here.');
    this.original_image_width = loaded_image_element[0]['naturalWidth'];
    this.original_image_height = loaded_image_element[0]['naturalHeight'];

    // console.log('this.original_image_width' + this.original_image_width);


    if (this.data_original_width != 0) {
      this.original_image_width = this.data_original_width;
      // console.log('this.original_image_width: ' + this.original_image_width);
    }
    if (this.data_original_height != 0) {
      this.original_image_height = this.data_original_height;
      // console.log('this.original_image_height: ' + this.original_image_height);
    }



    this.image_aspect_ratio = this.original_image_width / this.original_image_height;

    //console.log('this.original_image_width: ' + this.original_image_width);
    //console.log('this.original_image_height: ' + this.original_image_height);
    //console.log('this.image_aspect_ratio: ' + this.image_aspect_ratio);


    this.update_layout();

    this.dispatchEvent(new goog.events.Event(manic.ui.ImageContainer.ON_IMAGE_LOAD_COMPLETE));
  }

};
