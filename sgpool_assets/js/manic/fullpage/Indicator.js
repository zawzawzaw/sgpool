// goog.provide('manic.fullpage.Indicator');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Indicator constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.fullpage.Indicator = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.fullpage.Indicator.DEFAULT, options);
  this.element = element;

  this.show_state = manic.fullpage.Indicator.VISIBLE;

  this.item_index = -1;
  this.item_array = [];
  this.item_a_array = [];

  this.create_item_array();

  this.element.mouseout(this.on_element_mouseout.bind(this));

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init');
};
goog.inherits(manic.fullpage.Indicator, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Indicator
 * @const {object}
 */
manic.fullpage.Indicator.DEFAULT = {
};

/**
 * Indicator Constant
 * @const
 * @type {string}
 */
manic.fullpage.Indicator.VISIBLE = 'visible';

/**
 * Indicator Constant
 * @const
 * @type {string}
 */
manic.fullpage.Indicator.NOT_VISIBLE = 'not-visible';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.fullpage.Indicator.prototype.create_item_array = function() {

  var arr = this.element.find('ul li');
  var item = null;
  var item_a = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    item.data('index',i)
    item.mouseover(this.on_item_mouseover.bind(this));

    item_a = item.find('a');
    TweenMax.to(item_a, 0, {autoAlpha:0});

    this.item_a_array[i] = item_a;
    this.item_array[i] = item;
  }
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.fullpage.Indicator.prototype.show = function(){
  if (this.show_state != manic.fullpage.Indicator.VISIBLE) {
    this.show_state = manic.fullpage.Indicator.VISIBLE;
    TweenMax.to(this.element, 0.5, {autoAlpha: 1, ease:Sine.easeOut});
  }
};
manic.fullpage.Indicator.prototype.hide = function(){
  if (this.show_state != manic.fullpage.Indicator.NOT_VISIBLE) {
    this.show_state = manic.fullpage.Indicator.NOT_VISIBLE;
    TweenMax.to(this.element, 0.5, {autoAlpha: 0, ease:Sine.easeOut});
  }
};




// this is more important

/**
 * @param  {Number} number_param
 */
manic.fullpage.Indicator.prototype.show_dot_index = function(number_param){
  if (this.item_index != number_param && goog.isDefAndNotNull(this.item_array[number_param])) {
    this.item_index = number_param;

    var item = null;
    var item_a = null;

    for (var i = 0, l=this.item_array.length; i < l; i++) {
      item = this.item_array[i];
      item_a = this.item_a_array[i];

      if (i==this.item_index) {
        item.addClass('selected-dot');
      } else {
        item.removeClass('selected-dot');
      }

    }
  }
};

/**
 * @param  {Number} number_param
 */
manic.fullpage.Indicator.prototype.show_item = function(number_param) {

  if (goog.isDefAndNotNull(this.item_array[number_param])) {

    var item = null;
    var item_a = null;

    for (var i = 0, l=this.item_array.length; i < l; i++) {
      item = this.item_array[i];
      item_a = this.item_a_array[i];

      if (i==number_param) {
        TweenMax.to(item_a, 0.3, {autoAlpha:1, ease:Sine.easeOut});
        item.addClass('selected');

        if (manic.IS_TABLET) {
          window.location.href = item_a.attr('href');
        }
      } else {
        TweenMax.to(item_a, 0.3, {autoAlpha:0, ease:Sine.easeInOut});
        item.removeClass('selected');
      }

    }

  }
  
};
manic.fullpage.Indicator.prototype.hide_all_items = function() {

  //this.item_index = -1;
  
  var item = null;
  var item_a = null;

  for (var i = 0, l=this.item_array.length; i < l; i++) {
    item = this.item_array[i];
    item_a = this.item_a_array[i];

    TweenMax.to(item_a, 0.3, {autoAlpha:0, ease:Sine.easeInOut});
    item.removeClass('selected');
  }

};

/**
 * @param  {Number} number_param
 */
manic.fullpage.Indicator.prototype.show_item_temporarily = function(number_param) {

  // console.log('show_item_temporarily:' + number_param);
  // 
  this.show_dot_index(number_param);

  TweenMax.killDelayedCallsTo(this.show_item);
  TweenMax.killDelayedCallsTo(this.hide_all_items);

  //if (this.item_index == -1) {
    // this.show_item(number_param);
    // 
    
    this.show_item(number_param);
    TweenMax.delayedCall(2.1,this.hide_all_items, [], this);
    
    
    /*
    TweenMax.delayedCall(1.1,this.show_item, [number_param], this);
    TweenMax.delayedCall(2.1,this.hide_all_items, [], this);
    */
    
  //}
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
manic.fullpage.Indicator.prototype.on_item_mouseover = function(event) {
  var target = $(event.currentTarget);
  var index = target.data('index');
  this.show_item(index);
};

/**
 * event handler
 * @param  {object} event
 */
manic.fullpage.Indicator.prototype.on_element_mouseout = function(event) {
  this.hide_all_items();
};



