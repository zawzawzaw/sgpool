// simple fade slider...

goog.provide('manic.ui.ImageSlider');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The ImageSlider constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.ImageSlider = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.ImageSlider.DEFAULT, options);
  this.element = element;

  this.width = 0;
  this.height = 0;

  this.index = 0;
  this.max_index = 0;

  this.container = null;
  this.image_div_array = [];

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.image_array = this.element.find('img');
  this.image_num = this.image_array.length;

  this.create_silder();

  // select initial
  if (this.options['default_index'] <= (this.image_num - 1)) {
    this.index = this.options['default_index'];
  }
  this.select(this.index);

  // start auto play
  TweenLite.delayedCall(2, this.select_next, [], this);

  //console.log('init');
};
goog.inherits(manic.ui.ImageSlider, goog.events.EventTarget);

/**
 * default options for ImageSlider
 * @const {object}
 */
manic.ui.ImageSlider.DEFAULT = {
  'width': '100%',
  'height': '250px',

  'duration': 0.5,
  'delay': 2,
  'ease': Sine.easeInOut,

  'default_index': 0,
  'image_container_class': 'image-slider-container',
  'image_div_class': 'image-slider-image'
};

/**
 * ImageSlider Event Constant
 * @const
 * @type {string}
 */
manic.ui.ImageSlider.ON_CHANGE = 'on_change';

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

/**
 * create slider
 */
manic.ui.ImageSlider.prototype.create_silder = function() {
  var fragment = $(document.createDocumentFragment());

  this.element.css({
    width: this.options['width'],
    height: this.options['height']
  });
  this.width = this.element.width();
  this.height = this.element.height();

  this.container = $(document.createElement('div'));
  this.container.addClass(this.options['image_container_class']);

  fragment.append(this.container);

  var image_div;
  var image_div_class = this.options['image_div_class'];

  for (var i = 0, l = this.image_array.length; i < l; i++) {
    image_div = $(document.createElement('div'));
    image_div.css({
      /*
      width: this.width,
      height: this.height
      */
      width: this.options['width'],
      height: this.options['height']
    });
    image_div.addClass(image_div_class);
    image_div.append(this.image_array[i]);

    TweenLite.to(image_div, 0, {opacity: 0});

    this.image_div_array[i] = image_div;

    this.container.append(image_div);
  }

  this.max_index = this.image_div_array.length;

  this.element.append(fragment);

};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * select next image
 */
manic.ui.ImageSlider.prototype.select_next = function() {
  var next_index = this.index + 1;
  if (next_index < this.max_index) {
    this.select(next_index);
  } else {
    this.select(0);
  }

  TweenLite.delayedCall(this.options['delay'], this.select_next, [], this);
};

/**
 * select image by index
 * @param {number} index_param
 */
manic.ui.ImageSlider.prototype.select = function(index_param) {
  this.index = index_param;

  //var target_x = -1 * this.index * this.width;

  for (var i = 0, l = this.image_div_array.length; i < l; i++) {
    if (i == this.index) {
      TweenLite.to(this.image_div_array[i], this.options['duration'], {opacity: 1, ease: this.options['ease']});
    } else {
      TweenLite.to(this.image_div_array[i], this.options['duration'], {opacity: 0, ease: this.options['ease']});
    }
  }

  this.dispatchEvent(new goog.events.Event(manic.ui.ImageSlider.ON_CHANGE));
};
