goog.provide('manic.util.ArrayImagePreloader');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The ArrayImagePreloader constructor
 * @param {object} options The object extendable like jquery plugins
 * @constructor
 */
manic.util.ArrayImagePreloader = function(options) {
  goog.events.EventTarget.call(this);

  this.options = $.extend({}, manic.util.ArrayImagePreloader.DEFAULT, options);

  this.data_array = this.options['array'];
  this.preloader = null;

  /**
   * @type {number}
   */
  this.preload_percentage = 0;

  this.has_loaded = false;
  this.image_array = null;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // create image preloader
  this.preloader = new createjs.LoadQueue(false, null, true);
  //this.preloader = new createjs.LoadQueue(false);
  this.preloader.addEventListener('progress', this.on_preloader_progress.bind(this));
  this.preloader.addEventListener('complete', this.on_preloader_complete.bind(this));


  //console.log('init');


};
goog.inherits(manic.util.ArrayImagePreloader, goog.events.EventTarget);

/**
 * default options for ArrayImagePreloader
 * @const {object}
 */
manic.util.ArrayImagePreloader.DEFAULT = {
  'array': [],
  'base_url': ''
};

/**
 * Event Constant
 * @type {string}
 */
manic.util.ArrayImagePreloader.ON_PROGRESS = 'on_progress';

/**
 * Event Constant
 * @type {string}
 */
manic.util.ArrayImagePreloader.ON_COMPLETE = 'on_complete';

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

/**
 * create preloader data & start loading, uses preload.js
 */
manic.util.ArrayImagePreloader.prototype.create_preloader_data = function() {
  //goog.events.listen(this,EVENTTYPE, EVENTLISTENER);
  var load_array = [];

  for (var i = 0, l = this.data_array.length; i < l; i++) {

    load_array[load_array.length] = {
      'src': this.options['base_url'] + this.data_array[i],
      'id': ('image_' + i)
    };

  }

  this.preloader.loadManifest(load_array);

};

/**
 * create image_array which will be used by outside classes
 */
manic.util.ArrayImagePreloader.prototype.create_image_data = function() {
  //goog.events.listen(this,EVENTTYPE, EVENTLISTENER);

  this.image_array = [];

  var object, image, image2;

  for (var i = 0, l = this.data_array.length; i < l; i++) {
    image = this.preloader.getResult('image_' + i);

    object = {
      'image': $(image),
      'i': i,
      'data': this.data_array[i]
    };

    this.image_array[i] = object;

  }

  this.has_loaded = true;
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * start loading the json, then starts preloading the images
 */
manic.util.ArrayImagePreloader.prototype.start_load = function() {
  this.create_preloader_data();
};

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//


/**
 * preload.js progress
 * @param  {object} event
 */
manic.util.ArrayImagePreloader.prototype.on_preloader_progress = function(event) {
  this.preload_percentage = event['loaded'];
  this.dispatchEvent(new goog.events.Event(manic.util.ArrayImagePreloader.ON_PROGRESS));
};

/**
 * preload.js complete. images have loaded.
 * @param  {object} event
 */
manic.util.ArrayImagePreloader.prototype.on_preloader_complete = function(event) {
  this.preload_percentage = 1;
  this.create_image_data();
  this.dispatchEvent(new goog.events.Event(manic.util.ArrayImagePreloader.ON_COMPLETE));
};
