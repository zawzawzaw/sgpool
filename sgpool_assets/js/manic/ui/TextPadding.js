goog.provide('manic.ui.TextPadding');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The TextPadding constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.TextPadding = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.TextPadding.DEFAULT, options);
  this.element = element;





  this.element_height = 0;

  this.data_y = 1080 / 2;   // centered by default
  this.data_width = 1728;
  this.data_height = 1080;

  this.padding_y = 0;



  this.window = $(window);
  this.window_width = 0;
  this.window_height = 0;







  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.element_height = Math.abs(this.element.height());

  if (goog.isDefAndNotNull(this.element.attr('data-y'))) {
    this.data_y = parseInt( this.element.attr('data-y') );
  } else {
    // console.log('data-y attribute is MISSING!!!!');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-width'))) {
    this.data_width = parseInt( this.element.attr('data-width') );
  } else {
    // console.log('data-width attribute is MISSING!!!!');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-height'))) {
    this.data_height = parseInt( this.element.attr('data-height') );
  } else {
    // console.log('data-height attribute is MISSING!!!!');
  }



  this.original_image_width = 0;
  this.original_image_height = 0;
  this.image_aspect_ratio = -1;

  this.original_image_width = this.data_width;
  this.original_image_height = this.data_height;

  this.image_aspect_ratio = this.original_image_width / this.original_image_height;





  // copied from image container
  
  this.container_width = 0;
  this.container_height = 0;
  this.container_aspect_ratio = -1;


  this.target_width = 0;
  this.target_height = 0;
  this.target_x = 0;
  this.target_y = 0;

  this.vertical_align = this.options['vertical_align'];
  this.horizontal_align = this.options['horizontal_align'];

  if (goog.isDefAndNotNull(this.element.attr('data-vertical-align'))) {
    this.vertical_align = this.element.attr('data-vertical-align')
  }
  if (goog.isDefAndNotNull(this.element.attr('data-horizontal-align'))) {
    this.horizontal_align = this.element.attr('data-horizontal-align')
  }

  this.has_window_resize = this.options['has_window_resize'];



  if (this.has_window_resize) {
    this.window.resize(this.on_window_resize.bind(this));
  }
  this.update_layout();




  // console.log('init');
};
goog.inherits(manic.ui.TextPadding, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for TextPadding
 * @const {object}
 */
manic.ui.TextPadding.DEFAULT = {
  'min-padding': 0,
  'vertical_align': 'center',                       // applies to 'best_fit' & 'show_all'
  'horizontal_align': 'center',
  'has_window_resize': true
};

/**
 * TextPadding Event Constant
 * @const
 * @type {string}
 */
manic.ui.TextPadding.EVENT_01 = '';

/**
 * TextPadding Event Constant
 * @const
 * @type {string}
 */
manic.ui.TextPadding.EVENT_02 = '';


/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.TextPadding.CENTER = 'center';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.TextPadding.TOP = 'top';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.TextPadding.BOTTOM = 'bottom';



/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.TextPadding.LEFT = 'left';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.TextPadding.RIGHT = 'right';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.TextPadding.prototype.update_layout = function() {

  //console.log('update_layout');

  this.window_width = this.window.width();
  this.window_height = this.window.height();

  this.container_width = this.window_width;
  this.container_height = this.window_height;
  this.container_aspect_ratio = this.container_width / this.container_height;

  this.use_scale_mode_best_fit();
  this.dispatchEvent(new goog.events.Event(manic.ui.TextPadding.ON_UPDATE_LAYOUT));
};
manic.ui.TextPadding.prototype.use_scale_mode_best_fit = function() {
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
    if (this.horizontal_align == manic.ui.TextPadding.LEFT) {
      this.target_x = 0;
    } else if (this.horizontal_align == manic.ui.TextPadding.CENTER) {
      this.target_x = (this.container_width - this.target_width) / 2;
    } else if (this.horizontal_align == manic.ui.TextPadding.RIGHT) {
      this.target_x = this.container_width - this.target_width;
    }

    // set target y
    if(this.vertical_align == manic.ui.TextPadding.TOP){
      this.target_y = 0;
    } else if(this.vertical_align == manic.ui.TextPadding.CENTER){
      this.target_y = (this.container_height - this.target_height) / 2;
    } else if(this.vertical_align == manic.ui.TextPadding.BOTTOM){
      this.target_y = this.container_height - this.target_height;
    }

    this.target_x = Math.round(this.target_x);
    this.target_y = Math.round(this.target_y);
    this.target_width = Math.round(this.target_width);
    this.target_height = Math.round(this.target_height);

    //TweenMax.to(this.image_element, 0, {'x': this.target_x, 'y': this.target_y, 'width': this.target_width, 'height': this.target_height});
    //
    
    // copied from ImageContainerPadding: on_target_image_container_update_layout

    var percentage_y = this.data_y / this.original_image_height;
    var scaled_y = percentage_y * this.target_height;
    var center_y = scaled_y + this.target_y;
    this.padding_y = Math.round(center_y - (this.element_height/2));

  
    this.padding_y = this.padding_y <= this.min_padding ? this.min_padding : this.padding_y;


    //console.log('update_layout 2');
    //console.log('use_scale_mode_best_fit');
    this.element.css({
      paddingTop: this.padding_y + 'px'
    });


  } // end if aspect ratio

};
manic.ui.TextPadding.prototype.private_method_03 = function() {};
manic.ui.TextPadding.prototype.private_method_04 = function() {};
manic.ui.TextPadding.prototype.private_method_05 = function() {};
manic.ui.TextPadding.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
manic.ui.TextPadding.prototype.sample_method_calls = function() {
  manic.ui.TextPadding.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(manic.ui.TextPadding.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.TextPadding.prototype.public_method_01 = function() {};
manic.ui.TextPadding.prototype.public_method_02 = function() {};
manic.ui.TextPadding.prototype.public_method_03 = function() {};
manic.ui.TextPadding.prototype.public_method_04 = function() {};
manic.ui.TextPadding.prototype.public_method_05 = function() {};
manic.ui.TextPadding.prototype.public_method_06 = function() {};


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
manic.ui.TextPadding.prototype.on_window_resize = function(event) {
  this.update_layout();
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.TextPadding.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.TextPadding.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.TextPadding.prototype.on_event_handler_04 = function(event) {
};

