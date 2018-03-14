goog.provide('manic.ui.BoxItem');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.BoxItem = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.BoxItem.DEFAULT, options);
  this.element = element;

  this.is_mobile_height = false;
  
  if (this.element.hasClass('mobile-height-version')) {
    this.is_mobile_height = true;
  }

  // console.log('is_mobile_height: ' + this.is_mobile_height);

  /**
   * @type {Array.<jQuery>}
   */
  this.item_array = [];

  /**
   * @type {Array.<jQuery>}
   */
  this.box_array = [];


  this.item_selector = this.options['item_selector'];
  this.box_selector = this.options['box_selector'];


  this.all_item_elements = this.element.find(this.item_selector);
  this.all_box_elements = this.element.find(this.box_selector);


  var arr = this.element.find(this.item_selector);
  var item = null;
  

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    this.item_array[i] = item;
  }

  arr = this.element.find(this.box_selector);
  var box = null;
  for (var i = 0, l=arr.length; i < l; i++) {
    box = $(arr[i]);
    this.box_array[i] = box;
  }
  
  
  this.update_layout();


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init');
};
goog.inherits(manic.ui.BoxItem, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
manic.ui.BoxItem.DEFAULT = {
  'item_selector': '.manic-box-item',
  'box_selector': '.manic-box-item-content'
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
manic.ui.BoxItem.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
manic.ui.BoxItem.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.BoxItem.prototype.private_method_01 = function() {};
manic.ui.BoxItem.prototype.private_method_02 = function() {};
manic.ui.BoxItem.prototype.private_method_03 = function() {};
manic.ui.BoxItem.prototype.private_method_04 = function() {};
manic.ui.BoxItem.prototype.private_method_05 = function() {};
manic.ui.BoxItem.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
manic.ui.BoxItem.prototype.sample_method_calls = function() {
  manic.ui.BoxItem.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(manic.ui.BoxItem.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.BoxItem.prototype.update_layout = function() {

  
  // console.log('update_layout');


  this.all_item_elements.css({
    'height': ''
  });
  this.all_box_elements.css({
    'height': ''
  });


  var box = null;
  var highest_height = 0;
  var box_height = 0;

  for (var i = 0, l=this.box_array.length; i < l; i++) {

    box = this.box_array[i];
    box_height = box.innerHeight();

    // console.log('box_height: ' + box_height);

    if (highest_height < box_height) {
      highest_height = box_height;
    }
  }

  // console.log(this.element)
  // console.log('highest_height: ' + highest_height);

  if (this.is_mobile_height == true) {
    this.all_item_elements.css({
      'cssText': ('height:' + highest_height + 'px !important')
    });
    this.all_box_elements.css({
      'cssText': ('height:' + highest_height + 'px !important')
    });

  } else {

    this.all_item_elements.css({
      'height': highest_height + 'px'
    });
    this.all_box_elements.css({
      'height': highest_height + 'px'
    });

  }




};
manic.ui.BoxItem.prototype.public_method_02 = function() {};
manic.ui.BoxItem.prototype.public_method_03 = function() {};
manic.ui.BoxItem.prototype.public_method_04 = function() {};
manic.ui.BoxItem.prototype.public_method_05 = function() {};
manic.ui.BoxItem.prototype.public_method_06 = function() {};


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
manic.ui.BoxItem.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.BoxItem.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.BoxItem.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.BoxItem.prototype.on_event_handler_04 = function(event) {
};

