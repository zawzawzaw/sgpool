// this is a brute force solution... (too lazy to think)

goog.provide('manic.util.JsonImagePreloaderMobile');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.util.JsonParser');

/**
 * The JsonImagePreloader constructor
 * @param {object} options The object extendable like jquery plugins
 * @constructor
 */
manic.util.JsonImagePreloaderMobile = function(options) {
  goog.events.EventTarget.call(this);

  this.options = $.extend({}, manic.util.JsonImagePreloaderMobile.DEFAULT, options);

  this.data_array = null;
  this.preloader = null;

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
  this.preloader.addEventListener('progress', this.on_preloader_progress.bind(this));
  this.preloader.addEventListener('complete', this.on_preloader_complete.bind(this));



  // create json parser
  this.json_parser = new manic.util.JsonParser({
    'json': this.options['json']
  });
  goog.events.listen(this.json_parser, manic.util.JsonParser.ON_COMPLETE, this.on_json_parser_complete.bind(this));

  //console.log('init');
};
goog.inherits(manic.util.JsonImagePreloaderMobile, goog.events.EventTarget);

/**
 * default options for JsonImagePreloader
 * @const {object}
 */
manic.util.JsonImagePreloaderMobile.DEFAULT = {
  'json': '',
  'base_url': ''
};

/**
 * Event Constant
 * @type {string}
 */
manic.util.JsonImagePreloaderMobile.ON_PROGRESS = 'on_progress';

/**
 * Event Constant
 * @type {string}
 */
manic.util.JsonImagePreloaderMobile.ON_COMPLETE = 'on_complete';

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

/**
 * create preloader data & start loading, uses preload.js
 */
manic.util.JsonImagePreloaderMobile.prototype.create_preloader_data = function() {
  //goog.events.listen(this,EVENTTYPE, EVENTLISTENER);
  var load_array = [];

  var image_str = 'mobile_image';
  if(manic.IS_TABLET == true){
    image_str = 'tablet_image';
  }


  for (var i = 0, l = this.data_array.length; i < l; i++) {

    if (this.data_array[i][image_str] != null &&
        this.data_array[i][image_str] != undefined) {

      load_array[load_array.length] = {
        src: this.options['base_url'] + this.data_array[i][image_str],
        id: ('image_' + i)
      };
    }
    

  }

  this.preloader.loadManifest(load_array);

};

/**
 * create image_array which will be used by outside classes
 */
manic.util.JsonImagePreloaderMobile.prototype.create_image_data = function() {
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
manic.util.JsonImagePreloaderMobile.prototype.start_load = function() {
  //console.log('start...');
  this.json_parser.start_load();
};

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * json has finished loading
 * @param  {object} event
 */
manic.util.JsonImagePreloaderMobile.prototype.on_json_parser_complete = function(event) {
  //console.log('on_json_parser_complete');
  this.data_array = this.json_parser.data_array;

  if (goog.isArray(this.data_array)) {
    this.create_preloader_data();
  } else {
    throw 'manic.util.JsonImagePreloaderMobile: data is not array';
  }

};

/**
 * preload.js progress
 * @param  {object} event
 */
manic.util.JsonImagePreloaderMobile.prototype.on_preloader_progress = function(event) {
  //console.log('on_preloader_progress: ' + event.loaded);
  this.preload_percentage = event.loaded;
  this.dispatchEvent(new goog.events.Event(manic.util.JsonImagePreloaderMobile.ON_PROGRESS));
};

/**
 * preload.js complete. images have loaded.
 * @param  {object} event
 */
manic.util.JsonImagePreloaderMobile.prototype.on_preloader_complete = function(event) {
  this.preload_percentage = 1;
  this.create_image_data();
  this.dispatchEvent(new goog.events.Event(manic.util.JsonImagePreloaderMobile.ON_COMPLETE));
};
