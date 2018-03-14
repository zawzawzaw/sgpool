goog.provide('manic.fullpage.Event');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {string} type_param
 * @constructor
 * @extends {goog.events.Event}
 */
manic.fullpage.Event = function(type_param) {

  goog.events.Event.call(this, type_param);

};
goog.inherits(manic.fullpage.Event, goog.events.Event);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
manic.fullpage.Event.DEFAULT = {
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
manic.fullpage.Event.ON_SECTION_CHANGE = 'on_section_change';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
manic.fullpage.Event.ON_SECTION_ENTER = 'on_section_enter';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
manic.fullpage.Event.ON_SECTION_LEAVE = 'on_section_leave';



/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
manic.fullpage.Event.ON_RESIZE = 'on_fullpage_resize';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
manic.fullpage.Event.ON_RENDER = 'on_fullpage_render';
