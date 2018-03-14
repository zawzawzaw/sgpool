// http://www.tbyrne.org/export-flash-to-animated-svg
// http://tbyrne.org/portfolio/smil/beginElement.html

goog.provide('manic.ui.AnimatedSVG');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The AnimatedVG constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.AnimatedSVG = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.AnimatedSVG.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.element.data('manic.ui.AnimatedSVG', this);
  this.element.on('play-svg', function(){
    this.play_svg();
  }.bind(this));


  // how to use: 
  // this.element.trigger('play-svg')
  

  this.svg_element = null;


  this.is_loaded = false;
  this.play_on_load = false;
  this.has_played = false;


  this.is_fit_to_layout_version = this.element.hasClass('fit-to-layout-version');

  this.data_width = 0;
  this.data_height = 0;

  if (this.is_fit_to_layout_version == true) {
    this.data_width = this.element.attr('data-width');
    this.data_width = parseFloat(this.data_width);

    this.data_height = this.element.attr('data-height');
    this.data_height = parseFloat(this.data_height);
  }



  this.svg_path = this.element.attr('data-image');
  this.element.load(this.svg_path, this.on_svg_load_complete.bind(this));

  // console.log('manic.ui.AnimatedSVG: init');
};
goog.inherits(manic.ui.AnimatedSVG, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
manic.ui.AnimatedSVG.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * AnimatedVG Event Constant
 * @const
 * @type {string}
 */
manic.ui.AnimatedSVG.EVENT_01 = '';

/**
 * AnimatedVG Event Constant
 * @const
 * @type {string}
 */
manic.ui.AnimatedSVG.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.AnimatedSVG.prototype.actual_play = function() {


  this.element.addClass('play-version');

  var animateNodes = this.element.find("animate[begin='indefinite']");

  var animateNodes2 = this.element.find("animateTransform");
  for(var i=0; i<animateNodes2.length; ++i){
    var node = animateNodes2[i];
    if($(node).attr("begin")=="indefinite"){
      animateNodes.push(node);
    }
  }
  if(!animateNodes.length){
    // console.log("playSvg: No indefinite animation nodes found.");
    return;
  }
  var dur = parseFloat(animateNodes.attr("dur"));
  var repeat = parseFloat(animateNodes[0].getAttribute("repeatCount"));
  if(!isNaN(repeat) && repeat>0){
    dur *= repeat;
  }
  
  if(animateNodes[0]['beginElement']){
    
    for(var i=0; i<animateNodes.length; ++i){
      animateNodes[i]['beginElement']();
    }

    /*
    if(onComplete){
      setTimeout(function(){
        onComplete();
      }, dur*1000);
    }
    */
  }else{

    var timeDif = (new Date()).getTime()-window.startTime-6000;

    var timeVal = (timeDif/1000)+"s";

    var beginWas = animateNodes.attr("begin");

    animateNodes.attr("begin", timeVal);

    setTimeout(function(){
      // if(onComplete)onComplete();
      animateNodes.attr("begin", beginWas);
    }, dur*1000);

  }

};
manic.ui.AnimatedSVG.prototype.private_method_02 = function() {};
manic.ui.AnimatedSVG.prototype.private_method_03 = function() {};
manic.ui.AnimatedSVG.prototype.private_method_04 = function() {};
manic.ui.AnimatedSVG.prototype.private_method_05 = function() {};
manic.ui.AnimatedSVG.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.AnimatedSVG.prototype.play_svg = function() {
  // console.log('play_svg');

  if (this.is_loaded == true) {

    if (this.has_played == false) {

      this.has_played = true;

      this.actual_play();

      
    } else {
      // console.log('dont play again');
    }

  } else {
    this.play_on_load = true;
  }

};



// this needs a bit more css to use
manic.ui.AnimatedSVG.prototype.fit_to_layout = function() {

  if (this.is_loaded == true && this.is_fit_to_layout_version == true){

    var container_width = this.element.width();
    var container_height = this.element.height();
    var container_aspect_ratio = container_width / container_height;

    
    var image_aspect_ratio = this.data_width / this.data_height;

    // manic.ui.ImageContainer.prototype.use_scale_mode_best_fit

    var target_width = 0;
    var target_height = 0;
    var target_x = 0;
    var target_y = 0;

    if (container_aspect_ratio > image_aspect_ratio) {
      target_width = container_width
      target_height = target_width / image_aspect_ratio;
    } else {
      target_height = container_height
      target_width = target_height * image_aspect_ratio;
    }

    target_x = (container_width - target_width) / 2;
    target_y = (container_height - target_height) / 2;

    target_x = Math.round(target_x);
    target_y = Math.round(target_y);
    target_width = Math.round(target_width);
    target_height = Math.round(target_height);

    var target_scale_x = target_width / this.data_width;
    var target_scale_y = target_height / this.data_height;
    
    TweenMax.to(this.svg_element, 0, {'x': target_x, 'y': target_y, 'scaleX': target_scale_x, 'scaleY': target_scale_y});
  }


};
manic.ui.AnimatedSVG.prototype.public_method_03 = function() {};
manic.ui.AnimatedSVG.prototype.public_method_04 = function() {};
manic.ui.AnimatedSVG.prototype.public_method_05 = function() {};
manic.ui.AnimatedSVG.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
manic.ui.AnimatedSVG.prototype.on_svg_load_complete = function(event) {

  // init ?
  this.is_loaded = true;

  this.svg_element = this.element.find('svg');

  if (this.is_fit_to_layout_version == true) {
    this.fit_to_layout();
  }

  if (this.play_on_load == true) {
    this.play_svg();
  }
};

/**
 * @param {object} event
 */
manic.ui.AnimatedSVG.prototype.on_play_complete = function(event) {
};

/**
 * @param {object} event
 */
manic.ui.AnimatedSVG.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
manic.ui.AnimatedSVG.prototype.on_event_handler_04 = function(event) {
};






manic.ui.AnimatedSVG.prototype.sample_method_calls = function() {

  // sample override
  manic.ui.AnimatedSVG.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(manic.ui.AnimatedSVG.EVENT_01));
};