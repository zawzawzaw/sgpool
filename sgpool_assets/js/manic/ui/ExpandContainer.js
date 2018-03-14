goog.provide('manic.ui.ExpandContainer');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.ImageContainer');

/**
 * The ExpandContainer constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.ExpandContainer = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.ExpandContainer.DEFAULT, options);
  this.element = element;

  this.element.data('manic.ui.ExpandContainer', this);

  this.title_element = this.element.find('.manic-expand-container-title');
  this.content_element = this.element.find('.manic-expand-container-content');

  this.extra_button_element = this.element.find('.manic-expand-container-btn');

  this.scroll_value = 'none';

  if (this.element.find('.scroll-target').length != 0 &&
      goog.isDefAndNotNull(this.element.find('.scroll-target').attr('data-value'))) {

    this.scroll_value = this.element.find('.scroll-target').attr('data-value');
  }

  this.group_value = 'none';

  
  if (goog.isDefAndNotNull(this.element.attr('data-group'))) {
    this.group_value = this.element.attr('data-group');
  }  
  


  // if class has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, manic.ui.ExpandContainer.DEFAULT, options);
  

  this.is_expanded = false;

  // find all image containers inside cause we need to update the layout of them as soon as we expand
  // this.content_element.find('.manic-image-container');


  this.title_element.click(this.on_title_element_click.bind(this));
  this.extra_button_element.click(this.on_title_element_click.bind(this));

  /**
   * @type {Array.<manic.ui.ImageContainer>}
   */
  this.image_array = [];

  // GATHER MANIC IMAGE CONTAINER

  var arr = this.content_element.find('.manic-image-container');
  var item = null;
  var image_container = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    image_container = item.data('manic.ui.ImageContainer');

    this.image_array[i] = image_container;
  }


  this.is_tablet_open_version = false;
  if (this.element.hasClass('tablet-open-version')) {
    this.is_tablet_open_version = true;
  }

  this.is_tablet_fixed_open_version = false;
  if (this.element.hasClass('tablet-fixed-open-version')) {
    this.is_tablet_fixed_open_version = true;
  }
  
  this.is_mobile_open_version = false;
  if (this.element.hasClass('mobile-open-version')) {
    this.is_mobile_open_version = true;
  }
  


  this.is_mobile_fixed_open_version = false;
  if (this.element.hasClass('mobile-fixed-open-version')) {
    this.is_mobile_fixed_open_version = true;
  }

  

  




  if (manic.IS_MOBILE == true) {
    // if mobile & has expand version, remove expand version
    if (this.element.hasClass('expand-version')){
      this.element.removeClass('expand-version');
    }
  } else {
    // desktop, it's okay
    if (this.element.hasClass('expand-version')) {
      this.instant_expand();
    }
  }

  

  if (manic.IS_TABLET_PORTRAIT == true && this.is_tablet_open_version == true) {
    this.instant_expand();
  }
  
  if (manic.IS_MOBILE == true && this.is_mobile_open_version == true) {
    this.instant_expand();
  }

  // console.log('manic.ui.ExpandContainer: init');
};
goog.inherits(manic.ui.ExpandContainer, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
manic.ui.ExpandContainer.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * ExpandContainer Event Constant
 * @const
 * @type {string}
 */
manic.ui.ExpandContainer.ON_COLLAPSE = 'on_collapse';

/**
 * ExpandContainer Event Constant
 * @const
 * @type {string}
 */
manic.ui.ExpandContainer.ON_EXPAND = 'on_expand';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.ExpandContainer.prototype.private_method_01 = function() {};
manic.ui.ExpandContainer.prototype.private_method_02 = function() {};
manic.ui.ExpandContainer.prototype.private_method_03 = function() {};
manic.ui.ExpandContainer.prototype.private_method_04 = function() {};
manic.ui.ExpandContainer.prototype.private_method_05 = function() {};
manic.ui.ExpandContainer.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.ExpandContainer.prototype.collapse = function() {
  if (this.is_expanded == true) {
    this.is_expanded = false;

    this.element.removeClass('expand-version');
    this.content_element.slideUp(500);

    this.dispatchEvent(new goog.events.Event(manic.ui.ExpandContainer.ON_COLLAPSE));
  }

};


manic.ui.ExpandContainer.prototype.instant_collapse = function(){
  if (this.is_expanded == true) {
    this.is_expanded = false;

    this.element.removeClass('expand-version');
    this.content_element.hide(0);

    // silent
    // this.dispatchEvent(new goog.events.Event(manic.ui.ExpandContainer.ON_COLLAPSE));
  }
};

manic.ui.ExpandContainer.prototype.expand = function() {
  if (this.is_expanded == false) {
    this.is_expanded = true;

    this.element.addClass('expand-version');
    this.content_element.slideDown(500);
    this.element.trigger('expand-container-expand');

    this.update_layout();

    this.dispatchEvent(new goog.events.Event(manic.ui.ExpandContainer.ON_EXPAND));
  }
};


manic.ui.ExpandContainer.prototype.instant_expand = function(){
  if (this.is_expanded == false) {
    this.is_expanded = true;

    this.element.addClass('expand-version');
    this.content_element.show(0);
    this.element.trigger('expand-container-expand');

    this.update_layout();

    // silent
    // this.dispatchEvent(new goog.events.Event(manic.ui.ExpandContainer.ON_EXPAND));
  }
};

manic.ui.ExpandContainer.prototype.update_layout = function() {
  /**
   * @type {manic.ui.ImageContainer}
   */
  var image_container = null;
  for (var i = 0, l=this.image_array.length; i < l; i++) {

    image_container = this.image_array[i];
    image_container.update_layout();


  }
};
manic.ui.ExpandContainer.prototype.public_method_04 = function() {};
manic.ui.ExpandContainer.prototype.public_method_05 = function() {};
manic.ui.ExpandContainer.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
manic.ui.ExpandContainer.prototype.on_title_element_click = function(event) {

  if (manic.IS_TABLET_PORTRAIT == true && this.is_tablet_fixed_open_version == true) {
    return;
  }
  if (manic.IS_MOBILE == true && this.is_mobile_fixed_open_version == true) {
    return;
  }
  

  if(this.is_expanded == true){
    this.collapse();
  } else {
    this.expand();
  }
};

/**
 * @param {object} event
 */
manic.ui.ExpandContainer.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
manic.ui.ExpandContainer.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
manic.ui.ExpandContainer.prototype.on_event_handler_04 = function(event) {
};






manic.ui.ExpandContainer.prototype.sample_method_calls = function() {

  // sample override
  manic.ui.ExpandContainer.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(manic.ui.ExpandContainer.EVENT_01));
};