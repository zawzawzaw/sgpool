goog.provide('manic.canvas.PixiCanvas');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The PixiCanvas constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.canvas.PixiCanvas = function(options, element) {
  goog.events.EventTarget.call(this);

  this.options = $.extend({}, manic.canvas.PixiCanvas.DEFAULT, options);
  this.element = element;

  this.window = $(window);
  this.document = $(document);

  this.window_width = 0;
  this.window_height = 0;
  this.element_width = 0;
  this.element_height = 0;

  this.target_width = 0;
  this.target_height = 0;

  this.frame_counter = 0;

  this.container = null;
  this.stage = null;
  this.renderer = null;
  this.is_created = false;
  this.is_rendering = false;
  //this.is_rendering = true;     // tue for now, optimize later
  this.is_web_gl = true;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.window.bind('resize', this.on_window_resize.bind(this));
  //this.window.resize(this.on_window_resize.bind(this));
  this.on_window_resize();

  TweenMax.delayedCall(this.options['creation_delay'], this.delayed_create_pixi, [], this);

  //console.log('init');
};
goog.inherits(manic.canvas.PixiCanvas, goog.events.EventTarget);

/**
 * default options for PixiCanvas
 * @const {object}
 */
manic.canvas.PixiCanvas.DEFAULT = {
  'creation_delay': 0.5,
  'fit_to_element': false,
  'interactive': false,
  'use_ticker': false,
  'scale_half_optimization': false,
  'scale_factor': 0.5,
  'frame_optimization': false
};


//manic.canvas.PixiCanvas.SCALE_OPTIMIZATION_FACTOR = 0.5;
//manic.canvas.PixiCanvas.SCALE_OPTIMIZATION_FACTOR = 0.7;


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

/**
 * delayed creation of pixi canvas element. browser is hanging if created at the same time.
 */
manic.canvas.PixiCanvas.prototype.delayed_create_pixi = function() {
  //this.dispatchEvent(new goog.events.Event(manic.canvas.PixiCanvas.EVENT_01));
  this.create_pixi();
  this.on_window_resize();
  this.create_pixi_complete();
};

/**
 * create pixi.js
 */
manic.canvas.PixiCanvas.prototype.create_pixi = function() {
  this.stage = new PIXI.Stage(0xffffff);
  this.stage.interactive = this.options['interactive'];

  this.renderer = PIXI.autoDetectRenderer(1024, 768);
  this.element.append(this.renderer.view);

  this.container = new PIXI.DisplayObjectContainer();
  this.container.position.x = 0;
  this.container.position.y = 0;

  this.is_web_gl = this.renderer instanceof PIXI.WebGLRenderer;

  //console.log('this.is_web_gl: ' + this.is_web_gl);

  if(this.is_web_gl == false) {
    this.renderer['context']['mozImageSmoothingEnabled'] = false
    this.renderer['context']['webkitImageSmoothingEnabled'] = false;
  }

  /*
  amount = (renderer instanceof PIXI.WebGLRenderer) ? 10 : 5;
  
  if(amount == 5)
  {
    renderer.context.mozImageSmoothingEnabled = false
    renderer.context.webkitImageSmoothingEnabled = false;
  }
  */


  //interactive

  this.stage.addChild(this.container);

  this.is_created = true;

  
  //if(this.is_web_gl == true) {
    if (this.options['use_ticker'] == true) {
      TweenMax.ticker.addEventListener('tick', this.tick.bind(this));
    } else {
      requestAnimationFrame(this.tick.bind(this));
    }
  //}
  
    

};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * launched when the pixi has completed
 * overwritable
 */
manic.canvas.PixiCanvas.prototype.create_pixi_complete = function() {
};

/**
 * render the canvas once
 */
manic.canvas.PixiCanvas.prototype.render_once = function() {
  if (goog.isDefAndNotNull(this.renderer)) {
    this.renderer.render(this.stage);
  }
};

/*
start_animating = function(){

  window.requestAnimationFrame();
};
*/

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * render loop
 * @param  {object} event
 */
manic.canvas.PixiCanvas.prototype.tick = function(event) {
  
  if (this.is_rendering == true) {

    //console.log('ticking...');

    this.custom_tick();

    if (this.options['frame_optimization'] == false) {
      //console.log('rendering...');
      //console.log(this.renderer);
      //console.log(this.stage);
      this.renderer.render(this.stage);

    } else {

      if (this.frame_counter % 2 == 0) {
        this.renderer.render(this.stage);
      }
      this.frame_counter++;

    }

  }

  if (this.options['use_ticker'] == false) {
    requestAnimationFrame(this.tick.bind(this));
  }
};


/**
 * custom_tick description
 */
manic.canvas.PixiCanvas.prototype.custom_tick = function() {
};

/**
 * window resize event handler
 * @param  {object} event
 */
manic.canvas.PixiCanvas.prototype.on_window_resize = function(event) {
  this.window_width = this.window.width();
  this.window_height = this.window.height();

  this.element_width = this.element.width();
  this.element_height = this.element.height();


  if (this.options['fit_to_element'] == true) {
    this.target_width = this.element_width;
    this.target_height = this.element_height;
  } else {
    this.target_width = this.window_width;
    this.target_height = this.window_height;
  }

  var scale_factor = this.options['scale_factor'];


  if (this.options['scale_half_optimization'] == true) {
    this.target_width *= scale_factor;
    this.target_height *= scale_factor;

    this.window_width *= scale_factor;
    this.window_height *= scale_factor;

    this.element_width *= scale_factor;
    this.element_height *= scale_factor;

    TweenMax.to(this.element, 0, {scaleX: 1 / scale_factor, scaleY: 1 / scale_factor, transformOrigin: 'left top'});
  }

  if (this.is_created == true) {
    this.renderer.resize(this.target_width, this.target_height);
  }




};
