// uses jquery ui... for drag and drop
// quite slow due to multiple update_layout calls...
// just a strait up copy of old version

goog.provide('manic.ui.Masonry');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Masonry constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.Masonry = function(options, element) {
  //goog.events.EventTarget.call(this, options, element);                                   // if has parent.
  goog.events.EventTarget.call(this);

  //this.options = $.extend(this.options, manic.ui.Masonry.DEFAULT, options);         // if has parent.
  this.options = $.extend({}, manic.ui.Masonry.DEFAULT, options);
  this.element = element;

  this.container = this.element.find('.masonry-container');
  this.variable_col_num = Math.round(this.element.width() / this.options['column_divider']);
  this.variable_col_num = this.variable_col_num >= this.options['max_column_num'] ? this.options['max_column_num'] : this.variable_col_num;

  this.element_width = this.element.width();

  $(window).resize(this.on_window_resize.bind(this));

  /*
  if( this.options['sortable'] == true){
    this.container.sortable({
      //helper: "clone",
      start: this.on_list_sortable_start.bind(this),
      change: this.on_list_sortable_change.bind(this),
      stop: this.on_list_sortable_change.bind(this)
      //update: $.proxy(this.on_list_sortable_change,this)        // update, stop
    });

    this.container.disableSelection();
  } else {
  }
  */

  this.update_layout();

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //
  //console.log('init');
};
goog.inherits(manic.ui.Masonry, goog.events.EventTarget);

/**
 * default options for Masonry
 * @const {object}
 */
manic.ui.Masonry.DEFAULT = {
  'column_num': 4,
  'column_divider': 350,
  'max_column_num': 5,          // max of 5 columns
  'gutter_width': 10,
  //sortable: false,
  'element_width_offset': 0
};

/**
 * Masonry Event Constant
 * @const
 * @type {string}
 */
manic.ui.Masonry.EVENT_01 = '';

/**
 * Masonry Event Constant
 * @const
 * @type {string}
 */
manic.ui.Masonry.EVENT_02 = '';
//this.dispatchEvent(new goog.events.Event(manic.ui.Masonry.EVENT_01));

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

/**
 * hide_not_visible
 */
manic.ui.Masonry.prototype.hide_not_visible = function() {
  var arr = this.container.find('.masonry-item.not-visible');
  var item = null;
  for (var i = 0, l = arr.length; i < l; i++) {
    item = $(arr[i]);
    TweenMax.killTweensOf(item);
    //TweenMax.to(item,0.8,{autoAlpha:0,width:0,height:0,marginRight:0,marginBottom:0});
    TweenMax.to(item, 0.4, {
      autoAlpha: 0, width: 0, height: 0, marginRight: 0, marginBottom: 0,
      ease: Sine.easeInOut
    });
  }

};

// cannot call this on display:none objects.
// no element width or height

/**
 * update_layout description
 */
manic.ui.Masonry.prototype.update_layout = function() {

  // console.log('update_layout');

  // needed
  //this.element_width = this.element.width();
  //this.element_width = this.element.width() - 10;
  this.element_width = this.element.width();
  if ((this.element_width + this.options['element_width_offset']) > 0) {
    this.element_width += this.options['element_width_offset'];
  }

  //console.log('this.element_width: ' + this.element_width);


  //var arr = this.container.find("li");
  var arr = this.container.find('.masonry-item').not('ui-sortable-helper').not('.not-visible');

  this.hide_not_visible();

  var col_num = this.options['column_num'];

  // http://www.pexels.com/search/business/
  this.variable_col_num = Math.round(this.element_width / this.options['column_divider']);
  this.variable_col_num = this.variable_col_num >= this.options['max_column_num'] ? this.options['max_column_num'] : this.variable_col_num;
  col_num = this.variable_col_num;

  var row_num = Math.ceil(arr.length / col_num);


  var item = null;
  var i = 0;
  var w = 0;
  var h = 0;

  var col_array = [];
  var lowest_height = 0;
  var width_scale = 1;

  var target_scale = 1;
  var target_width = 0;
  var target_height = 0;
  var target_margin_right = 0;



  for (var r = 0; r < row_num; r++) {

    col_array = [];
    lowest_height = 0;
    lowest_height_width_total = 0;
    target_scale_y_array = [];

    for (var c = 0; c < col_num; c++) {
      i = (r * col_num) + c;

      if (i < arr.length) {
        item = $(arr[i]);

        //if(item.hasClass('ui-sortable-helper') == false){
          w = parseInt(item.attr('data-width'));
          h = parseInt(item.attr('data-height'));
          item.data('w', w);
          item.data('h', h);
          col_array[col_array.length] = item;

        //}
      }
    }


    // get lowest height of the 4 items
    lowest_height = this.get_lowest_height(col_array);
    //console.log('lowest_height: ' + lowest_height);

    // calculate target scale based on
    //   1. lowest height of items
    //   2. element width
    //   3. column num
    //   4. gutter width

    width_scale = this.get_width_scale(col_array, lowest_height);
    //console.log("width_scale:" + width_scale)

    //console.log('width_scale: ' + width_scale);

    // fix for 1px off
    item = col_array[0];
    h = item.data('h');
    target_scale = (lowest_height / h) * width_scale;
    target_height = Math.floor(h * target_scale);       // also needs css fix( width 100% + overflow:hidden)

    //console.log('target_scale');
    //console.log(target_scale);

    var temp_duration = 0;
    // scale elements
    for (var c = 0, clll = col_array.length; c < clll; c++) {
      item = col_array[c];
      w = item.data('w');
      h = item.data('h');
      target_scale = (lowest_height / h) * width_scale;
      target_width = Math.floor(w * target_scale);
      //target_height = Math.floor( h * target_scale );       // fix for 1px off.
      target_margin_right = 0;

      if (c != col_array.length - 1) {
        target_margin_right = this.options['gutter_width'];
      }


      temp_duration = 0;
      //console.log(item.width());
      if (item.width() == 0) {
        temp_duration = 0.4;
      }

      //console.log('target_width');
      //console.log(target_width);
      //console.log('target_height');
      //console.log(target_height);

      TweenMax.killTweensOf(item);
      //TweenMax.to(item,0.4,{
      TweenMax.to(item, temp_duration, {
        autoAlpha: 1,
        width: target_width,
        height: target_height,
        marginRight: target_margin_right,
        marginBottom: this.options['gutter_width'],
        ease: Sine.easeInOut
      });

      /*
      item.css({
        width: target_width + 'px',
        height: target_height + 'px',
        marginRight: target_margin_right + 'px',
        marginBottom: this.options['gutter_width'] + 'px'
      });
      */

    }

  }

  //console.log('update_layout end');

};


/**
 * method_01
 */
manic.ui.Masonry.prototype.method_01 = function() {
  this.dispatchEvent(new goog.events.Event(manic.ui.Masonry.EVENT_01));
};

/**
 * method_02
 */
manic.ui.Masonry.prototype.method_02 = function() {
  //manic.ui.Masonry.superClass_.method_02.call(this);
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * init_sorting description
 */
manic.ui.Masonry.prototype.init_sorting = function() {
  this.container.sortable({
    //helper: "clone",
    start: this.on_list_sortable_start.bind(this),
    change: this.on_list_sortable_change.bind(this),
    stop: this.on_list_sortable_change.bind(this)
    //update: $.proxy(this.on_list_sortable_change,this)        // update, stop
  });

  this.container.disableSelection();
};

/**
 * disable_sorting description
 */
manic.ui.Masonry.prototype.disable_sorting = function() {
  this.container.sortable({disabled: true});
};

/**
 * enable_sorting description
 */
manic.ui.Masonry.prototype.enable_sorting = function() {
  this.container.sortable({disabled: false});
};

//   _______     _______ _   _ _____
//  | ____\ \   / / ____| \ | |_   _|
//  |  _|  \ \ / /|  _| |  \| | | |
//  | |___  \ V / | |___| |\  | | |
//  |_____|  \_/  |_____|_| \_| |_|
//


/**
 * on_list_sortable_start description
 * @param  {object} event
 * @param  {object} ui
 */
manic.ui.Masonry.prototype.on_list_sortable_start = function(event, ui) {
  ui.placeholder.attr('data-width', ui.item.attr('data-width'));
  ui.placeholder.attr('data-height', ui.item.attr('data-height'));
  this.update_layout();
};

/**
 * on_list_sortable_change description
 * @param  {object} event
 */
manic.ui.Masonry.prototype.on_list_sortable_change = function(event) {
  //console.log("on_list_sortable_change");
  this.update_layout();
};

/**
 * on_window_resize description
 */
manic.ui.Masonry.prototype.on_window_resize = function() {
  this.update_layout();
};






//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//


/**
 * get_lowest_height description
 * @param  {array} arr
 * @return {number} the lowest height in the row
 */
manic.ui.Masonry.prototype.get_lowest_height = function(arr) {
  var lowest_height = 10000;

  // get lowest height
  var h = 0;
  for (var i = 0, l = arr.length; i < l; i++) {
    h = arr[i].data('h');
    if (h <= lowest_height) {
      lowest_height = h;
    }
  }

  return lowest_height;

};

/**
 * get the total scale by which to scale every one of these elements
 * @param  {array} arr
 * @param  {number} lowest_height
 * @return {number} scale factor to use
 */
manic.ui.Masonry.prototype.get_width_scale = function(arr, lowest_height) {
  //console.log("get_width_scale");
  var target_scale_y = 0;
  var target_scale_y_array = [];

  var lowest_height_width_total = 0;

  var h = 0;
  var w = 0;

  //console.log('lowest_height: ' + lowest_height);

  //console.log('arr.length: ' + arr.length);

  for (var i = 0, l = arr.length; i < l; i++) {
    w = arr[i].data('w');
    h = arr[i].data('h');

    target_scale_y = lowest_height / h;
    target_scale_y_array[i] = target_scale_y;

    lowest_height_width_total += (target_scale_y * w);
  }

  /*
  var total_items = arr.length;
  var column_gutter_width = (this.options['column_num'] - 1) * this.options["gutter_width"];
  var additional_width = (this.options["column_num"] - total_items) * (this.element_width/this.options["column_num"]);    // possibly incorrect
  */
 
  //console.log('ggg');
  //console.log(this.options['gutter_width']);

  // this.variable_col_num
  var total_items = arr.length;
  var column_gutter_width = (this.variable_col_num - 1) * this.options['gutter_width'];
  var additional_width = (this.variable_col_num - total_items) * (this.element_width / this.variable_col_num);    // possibly incorrect


  //console.log('lowest_height_width_total1: ' + lowest_height_width_total);
  lowest_height_width_total += additional_width;

  //console.log('lowest_height_width_total2: ' + lowest_height_width_total);


  target_scale = (this.element_width - column_gutter_width) / lowest_height_width_total;

  return target_scale;
};
