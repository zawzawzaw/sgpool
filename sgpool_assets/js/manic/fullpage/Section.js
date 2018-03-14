// goog.provide('manic.fullpage.Section');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.fullpage.Section = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, manic.fullpage.Section.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.fullpage.Section.DEFAULT, options);
  this.element = element;
  this.element.data('manic.fullpage.Section', this);

  this.i = this.options['i'];
  this.id = this.options['id'];



  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // console.log('init');
};
goog.inherits(manic.fullpage.Section, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
manic.fullpage.Section.DEFAULT = {
  'i': 0,
  'id': ''
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.fullpage.Section.prototype.trigger_section_enter = function() {
  this.element.addClass('section-load-version');
  this.element.trigger('section-load');
  this.dispatchEvent(new manic.fullpage.Event(manic.fullpage.Event.ON_SECTION_ENTER));
};
manic.fullpage.Section.prototype.trigger_section_leave = function() {
  this.dispatchEvent(new manic.fullpage.Event(manic.fullpage.Event.ON_SECTION_LEAVE));
};
manic.fullpage.Section.prototype.trigger_section_resize = function() {
  this.dispatchEvent(new manic.fullpage.Event(manic.fullpage.Event.ON_RESIZE));
};



//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//
