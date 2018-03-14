// needs tweenmax & pixijs

goog.provide('manic.canvas.ImageSequenceCanvas');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('goog.string');
goog.require('goog.userAgent');

goog.require('manic.canvas.PixiCanvas');
goog.require('manic.util.ArrayImagePreloader');
goog.require('manic.util.StringUtil');


/**
 * The ImageSequenceCanvas constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {manic.canvas.PixiCanvas}
 */
manic.canvas.ImageSequenceCanvas = function(options, element) {
  manic.canvas.PixiCanvas.call(this, options, element);
  this.options = $.extend(this.options, manic.canvas.ImageSequenceCanvas.DEFAULT, options);

  this.image_name = this.options['image_name'];
  this.image_folder = this.options['image_folder'];
  this.image_num = this.options['image_num'];
  this.image_width = this.options['image_width'];
  this.image_height = this.options['image_height'];

  this.max_frame_num = this.options['image_num'] - 1;
  this.frame_object = {
    frame: 1
  };

  this.image_pound_count = 0;
  this.image_pount_str = '';

  /**
   * @type {number}
   */
  this.progress_percent = 0;
  this.has_loaded = false;

  this.pixi_loader = null;
  this.pixi_texture_array = [];
  this.pixi_movieclip = null;

  this.image_name_array = [];
  this.image_array = [];

  this.current_frame = 1;
  this.target_frame = 1;

  this.frame_counter = 0;


  // cause asset loader will fail with ie11...
  
  /**
   * @type {manic.util.ArrayImagePreloader}
   */
  this.stable_loader = null;

  // Possible IE fix
  this.url_suffix = '';
  if (goog.userAgent.IE || true) {
    var current_time = new Date().getTime();
    // http://stackoverflow.com/questions/27934411/images-failing-to-load-in-ie-with-dom-7009-error-unable-to-decode-in-console
    this.url_suffix = '?&test=' + current_time;
  }

  //this.is_movieclip_created = false;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // count how many #
  this.image_pound_count = manic.util.StringUtil.occurrence(this.options['image_name'], '#');
  for (var i = 0, l = this.image_pound_count; i < l; i++) {
    this.image_pount_str += '#';
  }

  //TweenMax.ticker.addEventListener("tick", this.on_custom_tick.bind(this));

  //this.create_image_array();
  //this.create_pixi_loader();

};
goog.inherits(manic.canvas.ImageSequenceCanvas, manic.canvas.PixiCanvas);

/**
 * default options for ImageSequenceCanvas
 * @const {object}
 */
manic.canvas.ImageSequenceCanvas.DEFAULT = {
  'image_name': '',
  'image_folder': '',
  'image_num': 342,
  'image_width': 1920,
  'image_height': 1080
};

/**
 * ImageSequenceCanvas Event Constant
 * @type {string}
 * @const
 */
manic.canvas.ImageSequenceCanvas.ON_PROGRESS = 'on_progress';

/**
 * ImageSequenceCanvas Event Constant
 * @type {string}
 * @const
 */
manic.canvas.ImageSequenceCanvas.ON_COMPLETE = 'on_complete';

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

/**
 * @inheritDoc
 * @override
 */
manic.canvas.ImageSequenceCanvas.prototype.create_pixi_complete = function() {
  // moved this to instanciate later...
  this.create_image_array();
  this.create_stable_loader();
  //this.create_pixi_loader();
};


/**
 * create array of image names
 */
manic.canvas.ImageSequenceCanvas.prototype.create_image_array = function() {
  //this.dispatchEvent(new goog.events.Event(manic.canvas.ImageSequenceCanvas.EVENT_01));
  var str = '';

  //console.log('this.image_folder');
  //console.log(this.image_folder);

  for (var i = 0, l = this.image_num; i < l; i++) {
    str = this.image_name.replace(this.image_pount_str, manic.util.StringUtil.pad('' + i, this.image_pound_count));
    //str = this.image_folder + str;
    //str = this.image_folder + str + this.url_suffix + '&id=' + this.id_generator.getNextUniqueId();
    //str = this.image_folder + str + this.url_suffix + '&id=' + goog.string.getRandomString();             // i used this previously...
    str = this.image_folder + str;
    this.image_name_array[i] = str;
  }

  //console.log(this.image_name_array);

};

/**
 * create stable loader
 */
manic.canvas.ImageSequenceCanvas.prototype.create_stable_loader = function() {

  this.stable_loader = new manic.util.ArrayImagePreloader({'array': this.image_name_array});
  goog.events.listen(this.stable_loader, manic.util.ArrayImagePreloader.ON_PROGRESS, this.on_stable_loader_progress.bind(this));
  goog.events.listen(this.stable_loader, manic.util.ArrayImagePreloader.ON_COMPLETE, this.on_stable_loader_complete.bind(this));
  this.stable_loader.start_load();
};


/**
 * create pixi.js loader
 */
manic.canvas.ImageSequenceCanvas.prototype.create_pixi_loader = function() {
  //console.log('this.image_name_array');
  //console.log(this.image_name_array);
  this.pixi_loader = new PIXI.AssetLoader(this.image_name_array);
  //this.pixi_loader.onComplete = this.on_pixi_loader_complete.bind(this);
  this.pixi_loader.onProgress = this.on_pixi_loader_progress.bind(this);
  this.pixi_loader.onComplete = this.on_pixi_loader_complete.bind(this);
  this.pixi_loader.load();
};

/**
 * create pixi.js
 */
manic.canvas.ImageSequenceCanvas.prototype.create_pixi_movieclip = function() {

  this.pixi_texture_array = [];

  var texture = null;
  for (var i = 0, l = this.image_name_array.length; i < l; i++) {
    texture = PIXI.Texture.fromFrame(this.image_name_array[i]);
    this.pixi_texture_array[i] = texture;
  }

  this.pixi_movieclip = new PIXI.MovieClip(this.pixi_texture_array);
  this.stage.addChild(this.pixi_movieclip);
  //this.container.addChild(this.pixi_movieclip);

  //this.pixi_movieclip.play();

  //this.is_movieclip_created = true;
  this.has_loaded = true;
  this.dispatchEvent(new goog.events.Event(manic.canvas.ImageSequenceCanvas.ON_COMPLETE));
};

/**
 * update movie clip scale and position
 */
manic.canvas.ImageSequenceCanvas.prototype.update_movieclip_dimentions = function() {
  if (this.has_loaded == true) {
    var temp_height = 0;
    var temp_width = 0;

    var target_x = 0;
    var target_y = 0;
    var target_scale = 1;

    if (this.window_width / this.window_height > this.image_width / this.image_height) {
      target_scale = this.window_width / this.image_width;
      temp_height = this.image_height * target_scale;
      target_y = (this.window_height - temp_height) / 2;

    } else {
      target_scale = this.window_height / this.image_height;
      temp_width = this.image_width * target_scale;
      target_x = (this.window_width - temp_width) / 2;
    }

    this.pixi_movieclip.position.x = Math.round(target_x);
    this.pixi_movieclip.position.y = Math.round(target_y);
    this.pixi_movieclip.scale.x = target_scale;
    this.pixi_movieclip.scale.y = target_scale;
  }
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * @inheritDoc
 * @override
 */
manic.canvas.ImageSequenceCanvas.prototype.custom_tick = function() {
  if (this.has_loaded == true) {
    //this.current_frame += (this.target_frame - this.current_frame) /10;
    
    //this.frame_counter++;

    //if (this.frame_counter % 2 == 0) {
      this.current_frame += (this.target_frame - this.current_frame) /8;
    //}
    
    // console.log('custom_tick: ' + this.current_frame);

    var target_frame = Math.round(this.current_frame);
    this.pixi_movieclip.gotoAndStop(target_frame);
  }
    
};


/**
 * set percent of movieclip
 * @param {number} percent_param
 */
manic.canvas.ImageSequenceCanvas.prototype.set_percent = function(percent_param) {         // not used
  if (this.has_loaded == true) {
    var target_frame = Math.floor(percent_param * this.max_frame_num);
    //TweenMax.to(this.frame_object, 0.1, {frame: target_frame, ease: Sine.easeInOut, onUpdate: this.on_set_percent_update, onUpdateScope: this });

    this.target_frame = target_frame;

  }
};

/**
 * set percent of movieclip
 * @param {number} percent_param
 */
manic.canvas.ImageSequenceCanvas.prototype.set_percent_instant = function(percent_param) {         // not used
  if (this.has_loaded == true) {
    var target_frame = Math.floor(percent_param * this.max_frame_num);
    //TweenMax.to(this.frame_object, 0.0, {frame: target_frame, ease: Sine.easeInOut, onUpdate: this.on_set_percent_update, onUpdateScope: this });

    this.current_frame = target_frame;
    this.target_frame = target_frame;
  }
};

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * when frame_object frame has been updated
 */
manic.canvas.ImageSequenceCanvas.prototype.on_set_percent_update = function() {
  var target_frame = Math.round(this.frame_object.frame);
  this.pixi_movieclip.gotoAndStop(target_frame);
};

/**
 * after pixi loader loads images
 * @param  {object} event
 */
manic.canvas.ImageSequenceCanvas.prototype.on_pixi_loader_progress = function(event) {


  this.progress_percent = 1 - (this.pixi_loader['loadCount'] / this.pixi_loader['assetURLs']['length']);
  //console.log('this.progress_percent: ' + this.progress_percent);

  this.dispatchEvent(new goog.events.Event(manic.canvas.ImageSequenceCanvas.ON_PROGRESS));


  //this.progress_percent = event.content.loadCount / event.content.assetURLs.length      // this probably doesn't work.

  /*
  //var percent = event.content.loadCount / event.content.assetURLs.length
  this.progress_percent = 1 - (this.pixi_loader.loadCount / this.pixi_loader.assetURLs.length);
  this.dispatchEvent(new goog.events.Event(manic.canvas.ImageSequenceCanvas.ON_PROGRESS));
  */
};

/**
 * after pixi loader loads images
 * @param  {object} event
 */
manic.canvas.ImageSequenceCanvas.prototype.on_pixi_loader_complete = function(event) {
  TweenMax.delayedCall(0.5, this.delayed_on_pixi_loader_complete, [], this);
};





/**
 * after pixi loader loads images
 * @param  {object} event
 */
manic.canvas.ImageSequenceCanvas.prototype.on_stable_loader_progress = function(event) {
  this.progress_percent = this.stable_loader.preload_percentage;

  //console.log('manic.canvas.ImageSequenceCanvas.prototype.on_stable_loader_progress: ' + this.progress_percent);
  this.dispatchEvent(new goog.events.Event(manic.canvas.ImageSequenceCanvas.ON_PROGRESS));
};

/**
 * after pixi loader loads images
 * @param  {object} event
 */
manic.canvas.ImageSequenceCanvas.prototype.on_stable_loader_complete = function(event) {
  // console.log('on_stable_loader_complete');
  // start regular loading here:
  // this.create_pixi_loader();
  this.create_pixi_loader();

};





/**
 * after pixi loader loads images with delay
 */
manic.canvas.ImageSequenceCanvas.prototype.delayed_on_pixi_loader_complete = function() {
  this.create_pixi_movieclip();
  this.update_movieclip_dimentions();
  this.render_once();


};

/**
 * overwritten method
 * @inheritDoc
 * @override
 */
manic.canvas.ImageSequenceCanvas.prototype.on_window_resize = function(event) {
  manic.canvas.ImageSequenceCanvas.superClass_.on_window_resize.call(this, event);

  if (this.has_loaded == true) {
    this.update_movieclip_dimentions();
  }
};
