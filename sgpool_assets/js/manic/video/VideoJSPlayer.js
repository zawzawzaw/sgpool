// this is a fullpage video element

goog.provide('manic.video.VideoJSPlayer');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The VideoJSPlayer constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.video.VideoJSPlayer = function(options, element) {
  goog.events.EventTarget.call(this);

  this.options = $.extend({}, manic.video.VideoJSPlayer.DEFAULT, options);
  this.element = element;

  //this.video_element = this.element.find('video');
  this.video_element = this.element.find('.video-js');                              // <video> tag might not alway be called.
  this.video_container = this.element.find('.video-container');
  this.id_str = this.video_element.attr('id');

  
  
  

  this.video_video_element = this.element.find('video');
  this.original_width = 100;
  this.original_height = 100;

  this.original_width = this.options['width'];
  this.original_height = this.options['height'];

  /*
  try{
    this.original_width = parseInt(this.video_video_element.width());
    this.original_height = parseInt(this.video_video_element.height());
  } catch(e) {
    console.log('error in original width height of manic.video.VideoJSPlayer');
    console.log(e);
  }
  */

  this.auto_replay = this.options['auto_replay'];

  this.player = null; // important
  this.player_poster_image = null;

  this.total_duration = 0;
  this.time_object = {t: 0};
  this.target_scale = 1;
  this.target_x = 0;
  this.target_y = 0;
  this.is_paused = false;
  this.is_ready = false;

  this.window = $(window);
  this.window_width = 0;
  this.window_height = 0;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  //TweenMax.delayedCall(0.5, this.delayed_video_init, [], this);      // delay it cause the 'ready event' is getting fired too fast.
  this.delayed_video_init(); // i need the videojs object...
};
goog.inherits(manic.video.VideoJSPlayer, goog.events.EventTarget);

/**
 * default options for VideoJSPlayer
 * @const {object}
 */
manic.video.VideoJSPlayer.DEFAULT = {
  'width': 640,
  'height': 340,
  'auto_replay': false
};

/**
 * VideoJSPlayer Event Constant
 * @type {string}
 */
manic.video.VideoJSPlayer.ON_VIDEO_READY = 'on_video_ready';

/**
 * VideoJSPlayer Event Constant
 * @type {string}
 */
manic.video.VideoJSPlayer.ON_VIDEO_PLAY = 'on_video_play';

/**
 * VideoJSPlayer Event Constant
 * @type {string}
 */
manic.video.VideoJSPlayer.ON_VIDEO_PAUSE = 'on_video_pause';

/**
 * VideoJSPlayer Event Constant
 * @type {string}
 */
manic.video.VideoJSPlayer.ON_VIDEO_END = 'on_video_end';
manic.video.VideoJSPlayer.ON_VIDEO_END_02 = 'on_video_end_02';

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


/**
 * update the layout of the video to best fit the window
 */
manic.video.VideoJSPlayer.prototype.delayed_video_init = function() {
  // console.log('this.id_str: ' + this.id_str);        // this fails often
  this.player = videojs(this.id_str);
  this.player.ready(this.on_video_ready.bind(this));
  this.player.on('ended', this.on_video_end.bind(this));
  this.player.on('play', this.on_video_play.bind(this));
  this.player.ready(this.on_video_ready.bind(this));

  this.window.resize(this.on_window_resize.bind(this));
  this.on_window_resize();
};

/**
 * update the layout of the video to best fit the window
 */
manic.video.VideoJSPlayer.prototype.update_layout = function() {


  this.window_width = this.window.width();
  this.window_height = this.window.height();

  /*
  // zoom check
  if (this.window_width <= 1280 && manic.IS_ACTUAL_MOBILE == false ||
      manic.IS_ACTUAL_MOBILE == true && manic.IS_TABLET_LANDSCAPE) {
    
    this.window_width *= 1.1111;
    this.window_height *= 1.1111;

    console.log('this got here.....');
  }
  */
  

  var temp_height = 0,
      temp_width = 0;

  this.target_x = 0;
  this.target_y = 0;

  //console.log('video js player: update_layout');
  // console.log('original_width: ' + this.original_width);
  // console.log('original_height: ' + this.original_height);

  this.element.find('.video-js').css({
    'width': this.original_width + 'px',
    'height': this.original_height + 'px'
  })

  if (this.window_width / this.window_height > this.original_width / this.original_height) {

    this.target_scale = this.window_height / this.original_height;
    // temp_width = this.original_width * this.target_scale;
    // this.target_x = (this.window_width - temp_width) / 2;

  } else {
    
    this.target_scale = this.window_width / this.original_width;
    // temp_height = this.original_height * this.target_scale;
    // this.target_y = (this.window_height - temp_height) / 2;

  }

  // i dunno, i'm just guessing
  if (this.window_width <= 1280 && manic.IS_ACTUAL_MOBILE == false ||
      manic.IS_ACTUAL_MOBILE == true && manic.IS_TABLET_LANDSCAPE) {
    this.target_scale *= 1.1111;
  }

  if (this.window_width / this.window_height > this.original_width / this.original_height) {

    temp_width = this.original_width * this.target_scale;
    this.target_x = (this.window_width - temp_width) / 2;

  } else {
    
    temp_height = this.original_height * this.target_scale;
    this.target_y = (this.window_height - temp_height) / 2;

  }


  this.target_scale = Math.ceil(this.target_scale * 100) / 100;
  this.target_x = Math.floor(this.target_x);
  this.target_y = Math.floor(this.target_y);

  //console.log('this.target_scale: ' + this.target_scale);

  //console.log('this.target_scale: ' + this.target_scale);
  //console.log(this.video_container);
  



  TweenMax.to(this.element, 0, {
    scale: this.target_scale,
    transformOrigin: 'left top',
    x: this.target_x, y: this.target_y
  });

  // console.log('this was completed')


};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * replay video
 */
manic.video.VideoJSPlayer.prototype.replay_video = function() {
  this.player.currentTime(0);
  this.player.play();

  this.is_paused = false;
  this.dispatchEvent(new goog.events.Event(manic.video.VideoJSPlayer.ON_VIDEO_PLAY));      // we also play on video end for final frame.
};

/**
 * play video
 */
manic.video.VideoJSPlayer.prototype.play_video = function() {
  this.player.play();
  this.is_paused = false;
  this.dispatchEvent(new goog.events.Event(manic.video.VideoJSPlayer.ON_VIDEO_PLAY));      // we also play on video end for final frame.
};

/**
 * stop video
 */
manic.video.VideoJSPlayer.prototype.stop_video = function() {

  if(this.is_ready == true){
    //console.log('stop_video');
    //this.player.end();
    //this.is_paused = false;
    this.pause_video();
    TweenMax.to(this.player_poster_image, 0.0, {opacity: 0});
    //this.player.posterImage.show();
    this.player.posterImage['show']();
    TweenMax.to(this.player_poster_image, 0.5, {opacity: 1});
    this.dispatchEvent(new goog.events.Event(manic.video.VideoJSPlayer.ON_VIDEO_END));
  }
};

/**
 * pause video
 */
manic.video.VideoJSPlayer.prototype.pause_video = function() {
  try{
    this.player.pause();
  } catch(e){
    // console.log('manic.video.VideoJSPlayer.prototype.pause_video: ERROR');
    // console.log(e);
  }
  this.is_paused = true;
};

/**
 * seek video to certain time
 * @param {number} percent_param
 */
manic.video.VideoJSPlayer.prototype.seek = function(percent_param) {
  if (this.total_duration == 0) {
    this.total_duration = this.player.duration();
  }

  var time = percent_param * this.total_duration;
  TweenMax.to(this.time_object, 0.3, {t: time, ease: Linear.easeNone, onUpdate: this.on_seek_update, onUpdateScope: this});
};


/**
 * @param {String} mp4_url_param
 */
manic.video.VideoJSPlayer.prototype.set_mp4_url = function(mp4_url_param){
  this.player.src([
    { type: 'video/mp4', src: mp4_url_param }
    //{ type: 'video/webm', src: this.loop_video_webm },
    //{ type: 'video/ogg', src: this.loop_video_ogv }
  ]);

  this.play_video();
};

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * on every frame of the seek tween
 */
manic.video.VideoJSPlayer.prototype.on_seek_update = function() {
  this.player.currentTime(this.time_object.t);
};

/**
 * video.js ready event hander
 * @param  {object} event
 */
manic.video.VideoJSPlayer.prototype.on_video_ready = function(event) {
  //console.log('on_video_ready');
  this.is_paused = false;

  this.player_poster_image = this.element.find('.vjs-poster');
  //this.player.posterImage;

  //this.player.play();
  //this.player.pause();    // no need to auto play...

  this.on_window_resize();

  this.is_ready = true;

  this.dispatchEvent(new goog.events.Event(manic.video.VideoJSPlayer.ON_VIDEO_READY));
};

/**
 * video.js video end event handler
 * @param  {object} event
 */
manic.video.VideoJSPlayer.prototype.on_video_end = function(event) {
  //console.log('on_video_end');
  this.is_paused = false;

  if (this.total_duration == 0) {
    this.total_duration = this.player.duration();
  }

  if (this.auto_replay == true) {
    this.player.currentTime(0);
    this.player.play();
  } else {
    this.player.play();
    this.player.currentTime(this.total_duration - 0.1);
    this.player.pause();

    this.dispatchEvent(new goog.events.Event(manic.video.VideoJSPlayer.ON_VIDEO_END));
    this.dispatchEvent(new goog.events.Event(manic.video.VideoJSPlayer.ON_VIDEO_END_02));
  }

};


/**
 * video.js video play event handler
 * @param  {object} event
 */
manic.video.VideoJSPlayer.prototype.on_video_play = function(event) {

  //console.log('on_video_play');
  //this.dispatchEvent( new goog.events.Event( manic.video.VideoJSPlayer.ON_VIDEO_PLAY ));      // we also play on video end for final frame.
};


/**
 * window resize event handler
 * @param  {object} event
 */
manic.video.VideoJSPlayer.prototype.on_window_resize = function(event) {
  
  this.update_layout();
};
