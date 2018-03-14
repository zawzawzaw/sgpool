goog.provide('manic.framework.FullpageEvent');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

//    _______     _______ _   _ _____
//   | ____\ \   / / ____| \ | |_   _|
//   |  _|  \ \ / /|  _| |  \| | | |
//   | |___  \ V / | |___| |\  | | |
//   |_____|  \_/  |_____|_| \_| |_|
//
//http://tomasjurman.blogspot.sg/2013/06/google-closure-custom-events-in-examples.html

/**
* @param {string} type_param
* @param {?number} percent
* @constructor
* @extends {goog.events.Event}
*/
manic.framework.FullpageEvent = function(type_param, percent) {
  goog.events.Event.call(this, type_param);

  this.id = '';
  this.index = 0;
  this.percent = percent;

  // just for fullpage ON_SECTION_LEAVE (getting the next index while the current index is leaving...)
  this.leave_next_index = -1;
  this.is_going_down = true;

  this.section = null;
  this.slide = null;
};
goog.inherits(manic.framework.FullpageEvent, goog.events.Event);

/**
 * Event type
 * @const
 * @type {string}
 */
manic.framework.FullpageEvent.AFTER_RENDER = 'fullpage_afterrender';

//    ____  _____ ____ _____ ___ ___  _   _   _______     _______ _   _ _____ ____
//   / ___|| ____/ ___|_   _|_ _/ _ \| \ | | | ____\ \   / / ____| \ | |_   _/ ___|
//   \___ \|  _|| |     | |  | | | | |  \| | |  _|  \ \ / /|  _| |  \| | | | \___ \
//    ___) | |__| |___  | |  | | |_| | |\  | | |___  \ V / | |___| |\  | | |  ___) |
//   |____/|_____\____| |_| |___\___/|_| \_| |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * Event type
 * @const
 * @type {string}
 */
manic.framework.FullpageEvent.ON_SECTION_CHANGE = 'on_section_change';
/**
 * Event type
 * @const
 * @type {string}
 */
manic.framework.FullpageEvent.ON_SECTION_ENTER = 'on_section_enter';
/**
 * Event type
 * @const
 * @type {string}
 */
manic.framework.FullpageEvent.ON_SECTION_LEAVE = 'on_section_leave';

/**
 * Event type
 * @const
 * @type {string}
 */
manic.framework.FullpageEvent.ON_SECTION_RESIZE = 'on_section_resize';
/**
 * Event type
 * @const
 * @type {string}
 */
manic.framework.FullpageEvent.ON_SECTION_SCROLL = 'on_section_scroll';


//manic.framework.FullpageEvent.TRIGGER_GOTO_INDEX = 'trigger_goto_index';          // tell parent to goto index  // not used anymore.


//    ____  _     ___ ____  _____   _______     _______ _   _ _____ ____
//   / ___|| |   |_ _|  _ \| ____| | ____\ \   / / ____| \ | |_   _/ ___|
//   \___ \| |    | || | | |  _|   |  _|  \ \ / /|  _| |  \| | | | \___ \
//    ___) | |___ | || |_| | |___  | |___  \ V / | |___| |\  | | |  ___) |
//   |____/|_____|___|____/|_____| |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * Event type
 * @const
 * @type {string}
 */
manic.framework.FullpageEvent.ON_SLIDE_SCROLL = 'on_slide_scroll';
/**
 * Event type
 * @const
 * @type {string}
 */
manic.framework.FullpageEvent.ON_SLIDE_CHANGE = 'on_slide_change';

/**
 * Event type
 * @const
 * @type {string}
 */
manic.framework.FullpageEvent.ON_SLIDE_ADDRESS_CHANGE = 'on_slide_address_change';

/**
 * Event type
 * @const
 * @type {string}
 */
manic.framework.FullpageEvent.ON_SLIDE_ENTER = 'on_slide_enter';
/**
 * Event type
 * @const
 * @type {string}
 */
manic.framework.FullpageEvent.ON_SLIDE_LEAVE = 'on_slide_leave';

/**
 * Event type
 * @const
 * @type {string}
 */
manic.framework.FullpageEvent.ON_SLIDE_RESIZE = 'on_slide_resize';


/**
 * Event type
 * @const
 * @type {string}
 */
manic.framework.FullpageEvent.TRIGGER_REBUILD = 'on_rebuild_trigger';
