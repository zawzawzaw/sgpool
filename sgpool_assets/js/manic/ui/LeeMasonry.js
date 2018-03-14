// fixed height masonry
// first used in news section of aspire corp
// add float left or right to items !!!!!!!!!!!

goog.provide('manic.ui.LeeMasonry');
goog.provide('manic.ui.LeeMasonryItem');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.LeeMasonry = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.LeeMasonry.DEFAULT, options);
  this.element = element;

  /*
  this.row_divider = this.options['row_divider'];
  this.max_row_num = this.options['max_row_num'];

  this.column_divider = this.options['column_divider'];
  this.max_column_num = this.options['max_column_num'];
  */

  this.element_width = 0;
  this.element_height = 0;
  this.column_num = 0;
  this.row_num = 0;


  /**
   * @type {Array.<manic.ui.LeeMasonryItem>}
   */
  this.item_array = [];
  this.item_array_length = 0;

  this.create_item_array();


  $(window).resize(this.on_window_resize.bind(this));
  ////this.update_layout();
  //this.update_layout();

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init');
};
goog.inherits(manic.ui.LeeMasonry, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
manic.ui.LeeMasonry.DEFAULT = {
  'selector': '.item'

  /*
  // 'column_divider': 350,
  //'column_divider': 450,
  'column_divider': 550,
  'max_column_num': 5,

  //'row_divider': 500,
  'row_divider': 415,
  'max_row_num': 5                    // max of 5 rows
  */
};



//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.LeeMasonry.prototype.create_item_array = function() {
  var arr = this.element.find(this.options['selector']);
  var item_element = null;

  /**
   * @type {manic.ui.DingMasonry}
   */
  var item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item_element = $(arr[i]);
    item = new manic.ui.LeeMasonryItem({
      'i': i
    }, item_element);

    this.item_array[i] = item;
  }

  this.item_array_length = this.item_array.length;
};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.LeeMasonry.prototype.update_layout = function() {
  
  
  this.element_width = this.element.width();
  this.element_height = this.element.height();
  

  
  /*
  this.element_width = $(window).width();
  this.element_height = $(window).height();
  */

  this.update_row_col_num();


  var target_height = Math.floor( this.element_height / this.row_num );
  //console.log('target_height: ' + target_height);


  /**
   * @type {Array.<manic.ui.DingMasonryItem>}
   */
  var column_item_array = [];
  /**
   * @type {manic.ui.LeeMasonryItem}
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

    //console.log('row_scale: ' + row_scale);

    //console.log('row_lowest_height: ' + row_lowest_height);
    //console.log('row_scale: ' + row_scale);
    
    
    for (var ii = 0, ll=column_item_array.length; ii < ll; ii++) {
      item = column_item_array[ii];
      target_item_scale = (row_lowest_height / item.h) * row_scale; // scale item to lowest height, then scale again to the scale of the row.
      
      //console.log((r * this.column_num) + ii);

      if(ii == ll - 1){
        item.element.addClass('right-version');
      } else {
        item.element.removeClass('right-version');
      }

      item.set_layout(
        target_height,
        target_item_scale
      );
    }


  }


  /*
  var target_height = Math.floor( this.element_height / this.row_num );

  console.log('target_height: ' + target_height);

  for (var i = 0, l=this.item_array.length; i < l; i++) {
    item = this.item_array[i];
    item.set_layout(target_height);
  }
  */
 



  // add lines
  this.element.find('.horizontal-line').remove();

  for (var i = 0; i < (this.row_num-1); i++) {
    var line = $('<div class="horizontal-line"></div>');
    line.css({
      'top': ((target_height * (i+1)) - 1 ) + 'px'
    })
    this.element.append(line);
  }


};
manic.ui.LeeMasonry.prototype.update_row_col_num = function() {

  /*
  //this.row_num = Math.round(this.element_height / this.row_divider);
  //this.row_num = Math.floor(this.element_height / this.row_divider);
  this.row_num = Math.round(this.element_height / this.row_divider);
  this.row_num = this.row_num >= this.max_row_num ? this.max_row_num : this.row_num;
  this.row_num = this.row_num <= 2 ? 2 : this.row_num;  // min 2

  //this.column_num = Math.round(this.element_width / this.column_divider);
  this.column_num = Math.floor(this.element_width / this.column_divider);
  this.column_num = this.column_num >= this.max_column_num ? this.max_column_num : this.column_num;

  //console.log('this.row_num: ' + this.row_num);
  //console.log('this.column_num: ' + this.column_num);
  //
  //
  */
  

  var row_divider = 415;
  var min_row = 2;
  var max_row = 5;

  var column_divider = 426;
  var min_col = 3;
  var max_col = 5;


  this.row_num = Math.round(this.element_height / row_divider);
  this.row_num = this.row_num >= max_row ? max_row : this.row_num;
  this.row_num = this.row_num <= min_row ? min_row : this.row_num;

  this.column_num = Math.floor(this.element_width / column_divider);
  this.column_num = this.column_num >= max_col ? max_col : this.column_num;
  this.column_num = this.column_num <= min_col ? min_col : this.column_num;





  /*
  'column_divider': 550,
  'max_column_num': 5,

  //'row_divider': 500,
  'row_divider': 415,
  'max_row_num': 5                    // max of 5 rows
  */


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
manic.ui.LeeMasonry.prototype.on_window_resize = function(event) {
  ////this.update_layout();
  //this.update_layout();
};



//    _   _ _____ ___ _     
//   | | | |_   _|_ _| |    
//   | | | | | |  | || |    
//   | |_| | | |  | || |___ 
//    \___/  |_| |___|_____|
//                          

/**
 * get_row_lowest_height
 * @param  {Array.<manic.ui.LeeMasonryItem>} arr_param
 * @return {Number}
 */
manic.ui.LeeMasonry.prototype.get_row_lowest_height = function(arr_param) {
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
 * @param  {Array.<manic.ui.LeeMasonryItem>} arr_param
 * @param  {Number} row_lowest_height_param
 * @return {Number}
 */
manic.ui.LeeMasonry.prototype.get_row_scale = function(arr_param, row_lowest_height_param) {
  var item_scale = 0;
  var item_scale_array = [];

  var total_item_width = 0
  var total_fixed_item_width = 0;

  /**
   * @type {manic.ui.DingMasonryItem}
   */
  var item = null;

  for (var i = 0, l=arr_param.length; i < l; i++) {
    item = arr_param[i];
    
    item_scale = row_lowest_height_param / item.h;    // get scale from lowest height
    item_scale_array[i] = item_scale;

    if(item.is_fixed_width == true){
      //total_item_width += (item.w);   // default;
      total_fixed_item_width += (item.w);   // default;
    } else {
      total_item_width += (item.w * item_scale);   // default;
    }
  }


  // gutter calculations...
  var item_num = arr_param.length;

  // this might not be true for all rows
  // ex. last row with missing items
  //var total_gutter_width = (this.column_num - 1) * this.gutter_width;
  var total_gutter_width = 0;


  // not sure what the rest of these are ????????
  var additional_width = (this.column_num - item_num) * (this.element_width / this.column_num);
  total_item_width += additional_width;

  // calculate scale ?????
  var row_scale = (this.element_width - total_gutter_width - total_fixed_item_width) / total_item_width;
  return row_scale;
};












//    ___ _____ _____ __  __ 
//   |_ _|_   _| ____|  \/  |
//    | |  | | |  _| | |\/| |
//    | |  | | | |___| |  | |
//   |___| |_| |_____|_|  |_|
//                           

/**
 * The LeeMasonryItem constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.LeeMasonryItem = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.LeeMasonryItem.DEFAULT, options);
  this.element = element;

  this.i = this.options['i'];

  //this.row_i = 0; // to be set outside

  this.w = 400;
  this.h = 400;

  this.additional_width = 0;
  this.additional_image_width = 0;

  this.is_fixed_width = false;

  this.scale = 1; // not used anymore...

  if (goog.isDefAndNotNull(this.element.attr('data-width'))) {
    this.w = parseInt(this.element.attr('data-width'))
  }
  if (goog.isDefAndNotNull(this.element.attr('data-height'))) {
    this.h = parseInt(this.element.attr('data-height'))
  }
  if (goog.isDefAndNotNull(this.element.attr('data-additional-width'))) {
    this.additional_width = parseInt(this.element.attr('data-additional-width'))
  }

  if (goog.isDefAndNotNull(this.element.attr('data-additional-image-width'))) {
    this.additional_image_width = parseInt(this.element.attr('data-additional-image-width'))
    this.w += this.additional_image_width;
  }

  
  if (this.element.hasClass('fixed-width-version')) {
    this.is_fixed_width = true;
  }
  
  

  this.aspect_ratio = this.w / this.h;


  

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  //console.log('init');
};
goog.inherits(manic.ui.LeeMasonryItem, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for LeeMasonryItem
 * @const {object}
 */
manic.ui.LeeMasonryItem.DEFAULT = {
  'i': 0
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//



//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * @param {Number} height_param
 * @param {Number} scale_param
 */
manic.ui.LeeMasonryItem.prototype.set_layout = function(height_param, scale_param) {

  //this.scale = height_param / this.h;
  //var target_width = Math.floor(this.w * this.scale);
  

  var target_width = Math.floor(this.w * scale_param);

  if (this.is_fixed_width == true) {
    target_width = this.w;
  }

  //var target_height = Math.floor(this.h * this.scale);   // to make this more consistent
  var target_height = height_param;

  //target_width += this.additional_width;
  

  TweenMax.killTweensOf(this.element);
  TweenMax.to(this.element, 0, {
    width: target_width,
    height: target_height
  });


  //this.row_i
  
  if (target_width < 500) {
    this.element.addClass('short-version');
  }
  

};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//
