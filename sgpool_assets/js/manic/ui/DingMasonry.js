// this will crash if hidden or not visible

goog.provide('manic.ui.DingMasonry');
goog.provide('manic.ui.DingMasonryItem');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The DingMasonry constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.DingMasonry = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.DingMasonry.DEFAULT, options);
  this.element = element;

  this.column_divider = this.options['column_divider'];
  this.max_column_num = this.options['max_column_num'];
  this.gutter_width = this.options['gutter_width'];
  this.remove_last_row = this.options['remove_last_row'];

  this.element_width = 100;
  this.column_num = 1;
  this.row_num = 1;

  this.item_array = [];
  this.item_array_length = 0;

  this.create_item_array();

  $(window).resize(this.on_window_resize.bind(this));
  this.update_layout();

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init');
};
goog.inherits(manic.ui.DingMasonry, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for DingMasonry
 * @const {object}
 */
manic.ui.DingMasonry.DEFAULT = {
  'selector': '.item',
  'column_divider': 350,
  'max_column_num': 5,                    // max of 5 columns
  'gutter_width': 10,
  'remove_last_row': false
};

/**
 * DingMasonry Event Constant
 * @const
 * @type {string}
 */
manic.ui.DingMasonry.EVENT_01 = '';

/**
 * DingMasonry Event Constant
 * @const
 * @type {string}
 */
manic.ui.DingMasonry.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.DingMasonry.prototype.create_item_array = function() {
  var arr = this.element.find(this.options['selector']);
  var item_element = null;

  /**
   * @type {manic.ui.DingMasonryItem}
   */
  var item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item_element = $(arr[i]);
    item = new manic.ui.DingMasonryItem({
      'i': i
    }, item_element);

    this.item_array[i] = item;
  }

  this.item_array_length = this.item_array.length;

};
manic.ui.DingMasonry.prototype.private_method_02 = function() {};
manic.ui.DingMasonry.prototype.private_method_03 = function() {};
manic.ui.DingMasonry.prototype.private_method_04 = function() {};
manic.ui.DingMasonry.prototype.private_method_05 = function() {};
manic.ui.DingMasonry.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
manic.ui.DingMasonry.prototype.sample_method_calls = function() {
  manic.ui.DingMasonry.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(manic.ui.DingMasonry.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

manic.ui.DingMasonry.prototype.update_layout = function() {

  //if(this.element.is(':visible') == true){
    // console.log('DingMasonry: update_layout');

    
    this.element_width = this.element.width();
    this.update_column_num();

    if (this.remove_last_row == false) {
      this.row_num = Math.ceil(this.item_array_length / this.column_num);     // default behavior keeps last row
      this.row_num = this.row_num <= 1 ? 1 : this.row_num;

    } else {
      this.row_num = Math.floor(this.item_array_length / this.column_num);     // default behavior keeps last row
      this.row_num = this.row_num <= 1 ? 1 : this.row_num;

      this.update_visible_items();    
    }

    /**
     * @type {Array.<manic.ui.DingMasonryItem>}
     */
    var column_item_array = [];
    /**
     * @type {manic.ui.DingMasonryItem}
     */
    var item = null;

    var row_lowest_height = 0;
    var row_scale = 1;
    var i = 0;


    var target_item_scale = 0;
    var target_item_margin_right = 0;
    var target_item_margin_bottom = 0;

    for (var r = 0; r < this.row_num; r++) {
      column_item_array = [];
      row_lowest_height = 0;

      for (var c = 0; c < this.column_num; c++) {   // from the row, get items
        i = (r * this.column_num) + c;

        if (i < this.item_array_length) {  // if item is valid (0 to L), add to array
          column_item_array[column_item_array.length] = this.item_array[i];
        }
      }

      row_lowest_height = this.get_row_lowest_height(column_item_array);
      row_scale = this.get_row_scale(column_item_array, row_lowest_height);

      //console.log('row_lowest_height: ' + row_lowest_height);
      //console.log('row_scale: ' + row_scale);

      for (var ii = 0, ll=column_item_array.length; ii < ll; ii++) {
        item = column_item_array[ii];
        target_item_scale = (row_lowest_height / item.h) * row_scale; // scale item to lowest height, then scale again to the scale of the row.
        target_item_margin_right = this.gutter_width;
        target_item_margin_bottom = this.gutter_width;

        

        if (ii == (ll - 1))  {
          target_item_margin_right = 0;
        }
        if(r == (this.row_num -1)){
          target_item_margin_bottom = 0;
        }


        //console.log((r * this.column_num) + ii);

        item.set_layout(
          target_item_scale,
          target_item_margin_right,
          target_item_margin_bottom
        );
      }


    }

  // }

};
manic.ui.DingMasonry.prototype.update_column_num = function() {
  this.column_num = Math.round(this.element_width / this.column_divider);
  this.column_num = this.column_num >= this.max_column_num ? this.max_column_num : this.column_num;

  this.column_num = this.column_num <= 1 ? 1 : this.column_num;

  // console.log('this.column_num: ' + this.column_num);
};

// only happens when this.remove_last_row is true
manic.ui.DingMasonry.prototype.update_visible_items = function() {
  /**
   * @type {manic.ui.DingMasonryItem}
   */
  var item = null;
  var item_row = 0;

  // console.log('this.row_num: ' + this.row_num);

  for (var i = 0, l=this.item_array.length; i < l; i++) {
    item = this.item_array[i];
    item_row = Math.floor(i / this.column_num);

    // console.log('i: ' + i + ', row: ' + item_row);

    if (item_row < this.row_num) {
      item.show(0);
    } else {
      item.hide(0);
    }
  }
};
manic.ui.DingMasonry.prototype.public_method_04 = function() {};
manic.ui.DingMasonry.prototype.public_method_05 = function() {};
manic.ui.DingMasonry.prototype.public_method_06 = function() {};


//    _   _ _____ ___ _     
//   | | | |_   _|_ _| |    
//   | | | | | |  | || |    
//   | |_| | | |  | || |___ 
//    \___/  |_| |___|_____|
//                          

/**
 * get_row_lowest_height
 * @param  {Array.<manic.ui.DingMasonryItem>} arr_param
 * @return {Number}
 */
manic.ui.DingMasonry.prototype.get_row_lowest_height = function(arr_param) {
  var lowest_height = 10000;

  /**
   * @type {manic.ui.DingMasonryItem}
   */
  var item = null;

  for (var i = 0, l=arr_param.length; i < l; i++) {
    item = arr_param[i];
    if (item.h <= lowest_height) {
      lowest_height = item.h;
    }
  }

  return lowest_height;
};

/**
 * get_row_scale
 * @param  {Array.<manic.ui.DingMasonryItem>} arr_param
 * @param  {Number} row_lowest_height_param
 * @return {Number}
 */
manic.ui.DingMasonry.prototype.get_row_scale = function(arr_param, row_lowest_height_param) {
  var item_scale = 0;
  var item_scale_array = [];

  var total_item_width = 0

  /**
   * @type {manic.ui.DingMasonryItem}
   */
  var item = null;

  for (var i = 0, l=arr_param.length; i < l; i++) {
    item = arr_param[i];
    
    item_scale = row_lowest_height_param / item.h;    // get scale from lowest height
    item_scale_array[i] = item_scale;

    total_item_width += (item.w * item_scale);
  }


  // gutter calculations...
  var item_num = arr_param.length;

  // this might not be true for all rows
  // ex. last row with missing items
  var total_gutter_width = (this.column_num - 1) * this.gutter_width;


  // not sure what the rest of these are ????????
  var additional_width = (this.column_num - item_num) * (this.element_width / this.column_num);
  total_item_width += additional_width;


  // calculate scale ?????
  var row_scale = (this.element_width - total_gutter_width) / total_item_width;
  return row_scale;

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
manic.ui.DingMasonry.prototype.on_window_resize = function(event) {
  this.update_layout();
  
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.DingMasonry.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.DingMasonry.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.DingMasonry.prototype.on_event_handler_04 = function(event) {
};





















/////////////////////////////////
//    ___ _____ _____ __  __   //
//   |_ _|_   _| ____|  \/  |  //
//    | |  | | |  _| | |\/| |  //
//    | |  | | | |___| |  | |  //
//   |___| |_| |_____|_|  |_|  //
//                             //
/////////////////////////////////


/////////////////////////////////
//    ___ _____ _____ __  __   //
//   |_ _|_   _| ____|  \/  |  //
//    | |  | | |  _| | |\/| |  //
//    | |  | | | |___| |  | |  //
//   |___| |_| |_____|_|  |_|  //
//                             //
/////////////////////////////////





/**
 * The manic.ui.DingMasonryItem constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.DingMasonryItem = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.DingMasonryItem.DEFAULT, options);
  this.element = element;

  this.i = this.options['i'];

  this.w = 400;
  this.h = 400;

  this.additional_height = 0;
  this.additional_image_height = 0;

  this.scale = 1;

  if (goog.isDefAndNotNull(this.element.attr('data-width'))) {
    this.w = parseInt(this.element.attr('data-width'))
  }
  if (goog.isDefAndNotNull(this.element.attr('data-height'))) {
    this.h = parseInt(this.element.attr('data-height'))
  }
  if (goog.isDefAndNotNull(this.element.attr('data-additional-height'))) {
    this.additional_height = parseInt(this.element.attr('data-additional-height'))
  }

  if (goog.isDefAndNotNull(this.element.attr('data-additional-image-height'))) {
    this.additional_image_height = parseInt(this.element.attr('data-additional-image-height'))
    this.h += this.additional_image_height;
  }

  
  

  

  //console.log('this.w: ' + this.w);
  //console.log('this.h: ' + this.h);

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init');
};
goog.inherits(manic.ui.DingMasonryItem, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for manic.ui.DingMasonryItem
 * @const {object}
 */
manic.ui.DingMasonryItem.DEFAULT = {
  'i': 0
};

/**
 * manic.ui.DingMasonryItem Event Constant
 * @const
 * @type {string}
 */
manic.ui.DingMasonryItem.EVENT_01 = '';

/**
 * manic.ui.DingMasonryItem Event Constant
 * @const
 * @type {string}
 */
manic.ui.DingMasonryItem.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.DingMasonryItem.prototype.private_method_01 = function() {};
manic.ui.DingMasonryItem.prototype.private_method_02 = function() {};
manic.ui.DingMasonryItem.prototype.private_method_03 = function() {};
manic.ui.DingMasonryItem.prototype.private_method_04 = function() {};
manic.ui.DingMasonryItem.prototype.private_method_05 = function() {};
manic.ui.DingMasonryItem.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
manic.ui.DingMasonryItem.prototype.sample_method_calls = function() {
  manic.ui.DingMasonryItem.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(manic.ui.DingMasonryItem.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.DingMasonryItem.prototype.set_layout = function(target_item_scale_param, target_item_margin_right_param, target_item_margin_bottom_param) {
  this.scale = target_item_scale_param;

  var target_width = Math.floor(this.w * this.scale);
  var target_height = Math.floor(this.h * this.scale);
  target_height += this.additional_height;
  //target_height += this.additional_image_height;

  /*
  console.log('this.scale: ' + this.scale);
  console.log('target_width: ' + target_width);
  console.log('target_height: ' + target_height);
  console.log('target_item_margin_bottom_param: ' + target_item_margin_bottom_param);
  */

  TweenMax.killTweensOf(this.element);
  TweenMax.to(this.element, 0, {
    //autoAlpha: 1,
    width: target_width,
    height: target_height,
    marginRight: target_item_margin_right_param,
    marginBottom: target_item_margin_bottom_param,
    ease: Sine.easeInOut
  });

};
manic.ui.DingMasonryItem.prototype.show = function() {
  this.element.show(0);
};
manic.ui.DingMasonryItem.prototype.hide = function() {
  this.element.hide(0);
};
manic.ui.DingMasonryItem.prototype.public_method_04 = function() {};
manic.ui.DingMasonryItem.prototype.public_method_05 = function() {};
manic.ui.DingMasonryItem.prototype.public_method_06 = function() {};


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
manic.ui.DingMasonryItem.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.DingMasonryItem.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.DingMasonryItem.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.DingMasonryItem.prototype.on_event_handler_04 = function(event) {
};

