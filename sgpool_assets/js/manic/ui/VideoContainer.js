goog.provide('manic.ui.VideoContainer');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.VideoContainer = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.VideoContainer.DEFAULT, options);
  this.element = element;


  this.video_url = this.element.attr('data-video');

  this.video_element = this.element.find('video');

  this.video_element[0].addEventListener('loadedmetadata', this.on_loaded_metadata.bind(this));



  this.auto_replay = this.options['auto_replay'];

  if(this.element.hasClass('auto-replay')){
    this.auto_replay = true;                              // this is forced
  }
  
  

  this.element.data('manic.ui.VideoContainer', this);
  /*
  var html_to_add = [
    '<video class="video-js vjs-default-skin" preload="auto" data-setup="{"controls": false, "autoplay": true}" autoplay>',
      '<source src=""  type="video/mp4" />',
    '</video>'
  ].join('');

  this.element.append(html_to_add);
  */


  // copied from VideoJSPlayer

  this.player = null; // important
  this.player_poster_image = null;

  this.total_duration = 0;
  this.time_object = {t: 0};

  this.is_paused = false;
  this.is_ready = false;



  // copied from ImageContainer

  this.container_width = 0;
  this.container_height = 0;
  this.container_aspect_ratio = -1;




  this.original_image_width = 0;
  this.original_image_height = 0;
  this.image_aspect_ratio = -1;

  this.element.click(this.on_element_click.bind(this));
  // this.element.on('tap', this.on_element_click.bind(this));
  this.element.tap(this.on_element_click.bind(this));
  


  this.scale_mode = this.options['scale_mode'];
  this.vertical_align = this.options['vertical_align'];
  this.horizontal_align = this.options['horizontal_align'];
  this.has_window_width = this.options['has_window_width'];
  this.has_window_height = this.options['has_window_height'];
  this.has_full_window_width    = this.options['has_full_window_width'];
  this.has_full_width           = this.options['has_full_width'];

  this.fixed_width = this.options['fixed_width'];
  this.fixed_height = this.options['fixed_height'];

  this.offset_width = this.options['offset_width'];
  this.offset_height = this.options['offset_height'];
  this.has_window_resize = this.options['has_window_resize'];

  this.public_target_x = 0;
  this.public_target_y = 0;
  this.public_target_width = 0;
  this.public_target_height = 0;

  if (goog.isDefAndNotNull(this.element.attr('data-scale-mode'))) {
    this.scale_mode = this.element.attr('data-scale-mode')
  }
  if (goog.isDefAndNotNull(this.element.attr('data-vertical-align'))) {
    this.vertical_align = this.element.attr('data-vertical-align')
  }
  if (goog.isDefAndNotNull(this.element.attr('data-horizontal-align'))) {
    this.horizontal_align = this.element.attr('data-horizontal-align')
  }
  if (this.element.hasClass('has-window-width')) {
    this.has_window_width = true;
  }
  if (this.element.hasClass('has-window-height')) {
    this.has_window_height = true;
  }

  if (this.element.hasClass('has-full-window-width')) {
    this.has_full_window_width = true;
  }
  if (this.element.hasClass('has-full-width')) {
    this.has_full_width = true;
  }

  if (goog.isDefAndNotNull(this.element.attr('data-offset-width'))) {
    this.offset_width = parseInt( this.element.attr('data-offset-width') );
  }
  if (goog.isDefAndNotNull(this.element.attr('data-offset-height'))) {
    this.offset_height = parseInt( this.element.attr('data-offset-height') );
  }


  this.element.css({
    'overflow': 'hidden',
    'position': 'relative'
  });



  this.video_element.css({
    'display': 'block'
  })
  TweenMax.to(this.video_element, 0, {'z': 0.1});


  this.window = $(window);
  this.window_width = 0;
  this.window_height = 0;

  if(this.has_window_resize == true){
    this.window.resize(this.on_window_resize.bind(this));
  }


  this.update_layout();


  TweenMax.delayedCall(0.5, this.delayed_video_init, [], this);



  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init');
};
goog.inherits(manic.ui.VideoContainer, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
manic.ui.VideoContainer.DEFAULT = {
  'auto_replay': false,
  'scale_mode': 'best_fit',
  'vertical_align': 'center',                       // applies to 'best_fit' & 'show_all'
  'horizontal_align': 'center',
  'has_window_width': false,
  'has_window_height': false,
  'has_full_width': false,
  'has_full_window_width': false,

  'offset_width': 0,
  'offset_height': 0,
  'fixed_width': -1,                                // no checking if number or not
  'fixed_height': -1,
  'has_window_resize': true
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
manic.ui.VideoContainer.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
manic.ui.VideoContainer.EVENT_02 = '';


/**
 * VideoJSPlayer Event Constant
 * @type {string}
 */
manic.ui.VideoContainer.ON_VIDEO_READY = 'on_video_ready';

/**
 * VideoJSPlayer Event Constant
 * @type {string}
 */
manic.ui.VideoContainer.ON_VIDEO_PLAY = 'on_video_play';

/**
 * VideoJSPlayer Event Constant
 * @type {string}
 */
manic.ui.VideoContainer.ON_VIDEO_PAUSE = 'on_video_pause';

/**
 * VideoJSPlayer Event Constant
 * @type {string}
 */
manic.ui.VideoContainer.ON_VIDEO_END = 'on_video_end';







/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.VideoContainer.CENTER = 'center';





/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.VideoContainer.BEST_FIT = 'best_fit';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.VideoContainer.BEST_FIT_NO_SCALE_DOWN = 'best_fit_no_scale_down';



/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.VideoContainer.SHOW_ALL = 'show_all';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.VideoContainer.STRETCH = 'stretch';



/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.VideoContainer.TOP = 'top';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.VideoContainer.BOTTOM = 'bottom';



/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.VideoContainer.LEFT = 'left';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.VideoContainer.RIGHT = 'right';








//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.VideoContainer.prototype.delayed_video_init = function() {

  this.player = videojs(this.element.find('video')[0]);
  
  this.player.ready(this.on_video_ready.bind(this));
  this.player.on('ended', this.on_video_end.bind(this));
  this.player.on('play', this.on_video_play.bind(this));
  // this.player.ready(this.on_video_ready.bind(this));
  

  this.set_mp4_url(this.video_url);

};
manic.ui.VideoContainer.prototype.private_method_02 = function() {};
manic.ui.VideoContainer.prototype.private_method_03 = function() {};
manic.ui.VideoContainer.prototype.private_method_04 = function() {};
manic.ui.VideoContainer.prototype.private_method_05 = function() {};
manic.ui.VideoContainer.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
manic.ui.VideoContainer.prototype.sample_method_calls = function() {
  manic.ui.VideoContainer.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(manic.ui.VideoContainer.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.VideoContainer.prototype.replay_video = function() {

  if(this.is_ready == true){
    if(this.player != null){
      this.player.currentTime(0);
      this.player.play();

      this.element.addClass('custom-play');

      this.is_paused = false;
      this.dispatchEvent(new goog.events.Event(manic.ui.VideoContainer.ON_VIDEO_PLAY));      // we also play on video end for final frame.
    }
  }

};
manic.ui.VideoContainer.prototype.play_video = function() {
  if(this.is_ready){
    this.player.play();

    this.element.addClass('custom-play');
    this.is_paused = false;
    this.dispatchEvent(new goog.events.Event(manic.ui.VideoContainer.ON_VIDEO_PLAY));      // we also play on video end for final frame.
  }
};
manic.ui.VideoContainer.prototype.stop_video = function() {
  if(this.is_ready == true){
    //console.log('stop_video');
    //this.player.end();
    //this.is_paused = false;
    this.pause_video();

    this.element.removeClass('custom-play');

    TweenMax.to(this.player_poster_image, 0.0, {opacity: 0});
    //this.player.posterImage.show();
    this.player.posterImage['show']();
    TweenMax.to(this.player_poster_image, 0.5, {opacity: 1});
    this.dispatchEvent(new goog.events.Event(manic.ui.VideoContainer.ON_VIDEO_END));
  }
};
manic.ui.VideoContainer.prototype.pause_video = function() {
  try{
    this.player.pause();
  } catch(e){
    // console.log('manic.ui.VideoContainer.prototype.pause_video: ERROR');
    // console.log(e);
  }
  this.is_paused = true;

  this.element.removeClass('custom-play');

};

/**
 * seek video to certain time
 * @param {number} percent_param
 */
manic.ui.VideoContainer.prototype.seek = function(percent_param) {
  if(this.is_ready == true){
    if (this.total_duration == 0) {
      this.total_duration = this.player.duration();
    }

    var time = percent_param * this.total_duration;
    TweenMax.to(this.time_object, 0.3, {t: time, ease: Linear.easeNone, onUpdate: this.on_seek_update, onUpdateScope: this});
  }
};

manic.ui.VideoContainer.prototype.on_seek_update = function() {
  if(this.is_ready == true){
    this.player.currentTime(this.time_object.t);
  }
};

/**
 * @param {String} mp4_url_param
 */
manic.ui.VideoContainer.prototype.set_mp4_url = function(mp4_url_param){
  this.player.src([
    { type: 'video/mp4', src: mp4_url_param }
    //{ type: 'video/webm', src: this.loop_video_webm },
    //{ type: 'video/ogg', src: this.loop_video_ogv }
  ]);

  //this.play_video();
};










//    ___ __  __    _    ____ _____    ____ ___  _   _ _____  _    ___ _   _ _____ ____    _____ _   _ _   _  ____ _____ ___ ___  _   _ ____
//   |_ _|  \/  |  / \  / ___| ____|  / ___/ _ \| \ | |_   _|/ \  |_ _| \ | | ____|  _ \  |  ___| | | | \ | |/ ___|_   _|_ _/ _ \| \ | / ___|
//    | || |\/| | / _ \| |  _|  _|   | |  | | | |  \| | | | / _ \  | ||  \| |  _| | |_) | | |_  | | | |  \| | |     | |  | | | | |  \| \___ \
//    | || |  | |/ ___ \ |_| | |___  | |__| |_| | |\  | | |/ ___ \ | || |\  | |___|  _ <  |  _| | |_| | |\  | |___  | |  | | |_| | |\  |___) |
//   |___|_|  |_/_/   \_\____|_____|  \____\___/|_| \_| |_/_/   \_\___|_| \_|_____|_| \_\ |_|    \___/|_| \_|\____| |_| |___\___/|_| \_|____/
//







manic.ui.VideoContainer.prototype.update_layout = function() {

  //if(this.image_aspect_ratio != -1) {
    // console.log('manic.ui.VideoContainer: update_layout');

    this.window_width = this.window.width();
    this.window_height = this.window.height();

    // get image width
    if (this.has_window_width || this.has_full_window_width) {
      this.container_width = this.window_width;
      this.container_width += this.offset_width;
      this.element.width(this.container_width);
    } else if (this.fixed_width != -1) {
      this.container_width = this.fixed_width;
      this.container_width += this.offset_width;
      this.element.width(this.container_width);
    } else{
      this.container_width = this.element.width();
      this.container_width += this.offset_width;
    }

    


    // get image height
    if (this.has_window_height) {
      this.container_height = this.window_height;
      this.container_height += this.offset_height;
      this.element.height(this.container_height);
    } else if (this.fixed_height != -1) {
      this.container_height = this.fixed_height;
      this.container_height += this.offset_height;
      this.element.height(this.container_height);
    } else if (this.has_full_window_width ) {
      this.container_height = this.window_width / this.image_aspect_ratio;
      this.container_height += this.offset_height;
      this.element.height(this.container_height);
    } else if (this.has_full_width) {
      this.container_height = this.element.width() / this.image_aspect_ratio;
      this.container_height += this.offset_height;
      this.element.height(this.container_height);
    } else{
      this.container_height = this.element.height();
      this.container_height += this.offset_height;
    }



    this.container_aspect_ratio = this.container_width / this.container_height;

    if(this.image_aspect_ratio != -1) {

      // console.log('VideoContainer scale_mode: ' + this.scale_mode);

      // scale the image
      if(this.scale_mode == manic.ui.VideoContainer.STRETCH) {
        this.use_scale_mode_stretch();
      } else if(this.scale_mode == manic.ui.VideoContainer.SHOW_ALL) {
        this.use_scale_mode_show_all();
      } else if(this.scale_mode == manic.ui.VideoContainer.BEST_FIT) {
        this.use_scale_mode_best_fit();
      } else if(this.scale_mode == manic.ui.VideoContainer.BEST_FIT_NO_SCALE_DOWN){
        this.use_scale_mode_best_fit_no_scale_down();
      }

    }


    //this.options['vertical_align'] == manic.ui.VideoContainer.TOP
    
  //}

};






manic.ui.VideoContainer.prototype.use_scale_mode_stretch = function() {
  var target_width = Math.floor(this.container_width) + 1;
  var target_height = Math.floor(this.container_height) + 1;

  this.public_target_x = 0;
  this.public_target_y = 0;
  this.public_target_width = target_width;
  this.public_target_height = target_height;

  TweenMax.to(this.video_element, 0, {'x': 0, 'y': 0, 'width': target_width, 'height': target_height});
  /*
  this.video_element.css({
    'top': '0px',
    'left': '0px',
    'width': target_width + 'px',
    'height': target_height + 'px'
  });
  */
};
manic.ui.VideoContainer.prototype.use_scale_mode_show_all = function() {

  var target_width = 0;
  var target_height = 0;
  var target_x = 0;
  var target_y = 0;

  if (this.image_aspect_ratio != -1) {

    // set target width and height
    if (this.container_aspect_ratio > this.image_aspect_ratio) {
      target_height = this.container_height
      target_width = target_height * this.image_aspect_ratio;
    } else {
      target_width = this.container_width
      target_height = target_width / this.image_aspect_ratio;
    }

    // set target x
    if (this.horizontal_align == manic.ui.VideoContainer.LEFT) {
      target_x = 0;
    } else if (this.horizontal_align == manic.ui.VideoContainer.CENTER) {
      target_x = (this.container_width - target_width) / 2;
    } else if (this.horizontal_align == manic.ui.VideoContainer.RIGHT) {
      target_x = this.container_width - target_width;
    }

    // set target y
    if(this.vertical_align == manic.ui.VideoContainer.TOP){
      target_y = 0;
    } else if(this.vertical_align == manic.ui.VideoContainer.CENTER){
      target_y = (this.container_height - target_height) / 2;
    } else if(this.vertical_align == manic.ui.VideoContainer.BOTTOM){
      target_y = this.container_height - target_height;
    }

    target_x = Math.round(target_x);
    target_y = Math.round(target_y);
    target_width = Math.round(target_width);
    target_height = Math.round(target_height);

    this.public_target_x = target_x;
    this.public_target_y = target_y;
    this.public_target_width = target_width;
    this.public_target_height = target_height;

    TweenMax.to(this.video_element, 0, {'x': target_x, 'y': target_y, 'width': target_width, 'height': target_height});
    /*
    TweenMax.to(this.video_element, 0, {'x': target_x, 'y': target_y});

    // update css of image
    this.video_element.css({
      //'top': target_y + 'px',
      //'left': target_x + 'px',
      'width': target_width + 'px',
      'height': target_height + 'px'
    });
    */

  } // end if aspect ratio

};
manic.ui.VideoContainer.prototype.use_scale_mode_best_fit = function() {
  var target_width = 0;
  var target_height = 0;
  var target_x = 0;
  var target_y = 0;

  if (this.image_aspect_ratio != -1) {

    // set target width and height
    if (this.container_aspect_ratio > this.image_aspect_ratio) {
      target_width = this.container_width
      target_height = target_width / this.image_aspect_ratio;
    } else {
      target_height = this.container_height
      target_width = target_height * this.image_aspect_ratio;
    }

    // set target x
    if (this.horizontal_align == manic.ui.VideoContainer.LEFT) {
      target_x = 0;
    } else if (this.horizontal_align == manic.ui.VideoContainer.CENTER) {
      target_x = (this.container_width - target_width) / 2;
    } else if (this.horizontal_align == manic.ui.VideoContainer.RIGHT) {
      target_x = this.container_width - target_width;
    }

    // set target y
    if(this.vertical_align == manic.ui.VideoContainer.TOP){
      target_y = 0;
    } else if(this.vertical_align == manic.ui.VideoContainer.CENTER){
      target_y = (this.container_height - target_height) / 2;
    } else if(this.vertical_align == manic.ui.VideoContainer.BOTTOM){
      target_y = this.container_height - target_height;
    }

    target_x = Math.round(target_x);
    target_y = Math.round(target_y);
    target_width = Math.round(target_width);
    target_height = Math.round(target_height);

    this.public_target_x = target_x;
    this.public_target_y = target_y;
    this.public_target_width = target_width;
    this.public_target_height = target_height;

    TweenMax.to(this.video_element, 0, {'x': target_x, 'y': target_y, 'width': target_width, 'height': target_height});

    /*
    // update css of image
    this.video_element.css({
      //'top': target_y + 'px',
      //'left': target_x + 'px',
      'width': target_width + 'px',
      'height': target_height + 'px'
    });
    */

  } // end if aspect ratio
};
manic.ui.VideoContainer.prototype.use_scale_mode_best_fit_no_scale_down = function() {

  var target_width = 0;
  var target_height = 0;
  var target_x = 0;
  var target_y = 0;

  if (this.image_aspect_ratio != -1) {

    // set target width and height
    if (this.container_aspect_ratio > this.image_aspect_ratio) {
      target_width = this.container_width
      target_height = target_width / this.image_aspect_ratio;
    } else {
      target_height = this.container_height
      target_width = target_height * this.image_aspect_ratio;
    }

    // this is the no scale down code
    target_width = target_width <= this.original_image_width ? this.original_image_width : target_width;
    target_height =  target_height <= this.original_image_height ? this.original_image_height : target_height;
    

    // set target x
    if (this.horizontal_align == manic.ui.VideoContainer.LEFT) {
      target_x = 0;
    } else if (this.horizontal_align == manic.ui.VideoContainer.CENTER) {
      target_x = (this.container_width - target_width) / 2;
    } else if (this.horizontal_align == manic.ui.VideoContainer.RIGHT) {
      target_x = this.container_width - target_width;
    }

    // set target y
    if(this.vertical_align == manic.ui.VideoContainer.TOP){
      target_y = 0;
    } else if(this.vertical_align == manic.ui.VideoContainer.CENTER){
      target_y = (this.container_height - target_height) / 2;
    } else if(this.vertical_align == manic.ui.VideoContainer.BOTTOM){
      target_y = this.container_height - target_height;
    }

    target_x = Math.round(target_x);
    target_y = Math.round(target_y);
    target_width = Math.round(target_width);
    target_height = Math.round(target_height);

    this.public_target_x = target_x;
    this.public_target_y = target_y;
    this.public_target_width = target_width;
    this.public_target_height = target_height;

    /*
    TweenMax.to(this.video_element, 0, {'x': target_x, 'y': target_y});
    // update css of image
    this.video_element.css({
      //'top': target_y + 'px',
      //'left': target_x + 'px',
      'width': target_width + 'px',
      'height': target_height + 'px'
    });
    */

    TweenMax.to(this.video_element, 0, {'x': target_x, 'y': target_y, 'width': target_width, 'height': target_height});


  } // end if aspect ratio

};






/**
 * event handler
 * @param  {object} event
 */
manic.ui.VideoContainer.prototype.on_window_resize = function(event) {
  

  this.update_layout();

  
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
manic.ui.VideoContainer.prototype.on_loaded_metadata = function(event) {

  // console.log('this.video_element[0].videoWidth: ' + this.video_element[0].videoWidth);
  // console.log('this.video_element[0].videoHeight: ' + this.video_element[0].videoHeight);

  this.original_image_width = this.video_element[0].videoWidth;
  this.original_image_height = this.video_element[0].videoHeight;

  this.image_aspect_ratio = this.original_image_width / this.original_image_height;


  this.update_layout();

  // this.video_element[0].videoWidth
  // this.video_element[0].videoHeight
};

/**
 * video.js ready event hander
 * @param  {object} event
 */
manic.ui.VideoContainer.prototype.on_video_ready = function(event) {
  //console.log('on_video_ready');
  this.is_paused = false;

  this.player_poster_image = this.element.find('.vjs-poster');
  //this.player.posterImage;

  //this.player.play();
  //this.player.pause();    // no need to auto play...

  this.on_window_resize();

  this.is_ready = true;

  this.dispatchEvent(new goog.events.Event(manic.ui.VideoContainer.ON_VIDEO_READY));
};

/**
 * video.js video end event handler
 * @param  {object} event
 */
manic.ui.VideoContainer.prototype.on_video_end = function(event) {
  //console.log('on_video_end');
  this.is_paused = false;

  if (this.total_duration == 0) {
    this.total_duration = this.player.duration();
  }

  if (this.auto_replay == true) {
    this.player.currentTime(0);
    this.player.play();
    this.element.addClass('custom-play');

  } else {
    this.player.play();
    this.player.currentTime(this.total_duration - 0.1);
    this.player.pause();

    this.element.removeClass('custom-play');

    this.dispatchEvent(new goog.events.Event(manic.ui.VideoContainer.ON_VIDEO_END));
  }

};


/**
 * video.js video play event handler
 * @param  {object} event
 */
manic.ui.VideoContainer.prototype.on_video_play = function(event) {
  //console.log('on_video_play');
  this.dispatchEvent( new goog.events.Event( manic.ui.VideoContainer.ON_VIDEO_PLAY ));      // we also play on video end for final frame.
};




/**
 * event handler
 * @param  {object} event
 */
manic.ui.VideoContainer.prototype.on_element_click = function(event) {
  // console.log('on_element_click');
  if (this.is_ready == true) { 
    if(manic.IS_ACTUAL_MOBILE == true) {
      // this.player.play();
      this.play_video();
      

    }
  }
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.VideoContainer.prototype.on_event_handler_04 = function(event) {
};

