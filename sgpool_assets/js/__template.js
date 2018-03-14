goog.provide('rippledot.component.ClassName');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
rippledot.component.ClassName = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, rippledot.component.ClassName.DEFAULT, options);
  this.element = element;

  // if class has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, rippledot.component.ClassName.DEFAULT, options);
  




  


  // console.log('rippledot.component.ClassName: init');
};
goog.inherits(rippledot.component.ClassName, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
rippledot.component.ClassName.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
rippledot.component.ClassName.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
rippledot.component.ClassName.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


rippledot.component.ClassName.prototype.private_method_01 = function() {};
rippledot.component.ClassName.prototype.private_method_02 = function() {};
rippledot.component.ClassName.prototype.private_method_03 = function() {};
rippledot.component.ClassName.prototype.private_method_04 = function() {};
rippledot.component.ClassName.prototype.private_method_05 = function() {};
rippledot.component.ClassName.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


rippledot.component.ClassName.prototype.public_method_01 = function() {};
rippledot.component.ClassName.prototype.public_method_02 = function() {};
rippledot.component.ClassName.prototype.public_method_03 = function() {};
rippledot.component.ClassName.prototype.public_method_04 = function() {};
rippledot.component.ClassName.prototype.public_method_05 = function() {};
rippledot.component.ClassName.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
rippledot.component.ClassName.prototype.on_event_handler_01 = function(event) {
};

/**
 * @param {object} event
 */
rippledot.component.ClassName.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
rippledot.component.ClassName.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
rippledot.component.ClassName.prototype.on_event_handler_04 = function(event) {
};






rippledot.component.ClassName.prototype.sample_method_calls = function() {

  // sample override
  rippledot.component.ClassName.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(rippledot.component.ClassName.EVENT_01));
};