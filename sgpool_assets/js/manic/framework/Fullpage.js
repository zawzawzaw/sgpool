goog.provide('manic.framework.Fullpage');
goog.provide('manic.framework.FullpageSection');
goog.provide('manic.framework.FullpageSlide');

goog.require('manic.framework.FullpageEvent');


//console.log(goog.events.EventTarget)

/**
 * Fullpage contructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @extends {goog.events.EventTarget}
 * @constructor
 */
manic.framework.Fullpage = function(options, element) {
  goog.events.EventTarget.call(this);

  this.options = $.extend({}, manic.framework.Fullpage.DEFAULT, options);

  this.element = element;
  this.fullpage = null;
  this.section_array = null;

  TweenMax.delayedCall(0.3, this.create_jquery_fullpage, [], this);
  //this.create_jquery_fullpage();

  this.has_rendered = false;

  this.is_going_down = true;
  this.previous_section_index = 0;
  this.section_index = 0;

  // console.log('create fullpage');
  // console.log($.isFunction);


};
goog.inherits(manic.framework.Fullpage, goog.events.EventTarget);

/**
 * default options for class
 * @const {object}
 */
manic.framework.Fullpage.DEFAULT = {
  'anchor_array': [],
  'is_mobile': false
};

/**
 * Create fullpage via jquery plugin
 */
manic.framework.Fullpage.prototype.create_jquery_fullpage = function() {

  var should_scroll_section = true;
  if (this.options['is_mobile'] == true) {
    should_scroll_section = false;
  }

  this.element.fullpage({
    'keyboardScrolling': false,       // some of the components use the down arrow.
    'anchors': this.options['anchor_array'],

    'touchSensitivity': 30,
    'scrollOverflow': true,
    'afterRender': this.on_fullpage_event_afterrender.bind(this),

    // section
    'afterLoad': this.on_fullpage_event_afterload.bind(this),
    'onLeave': this.on_fullpage_event_onleave.bind(this),

    'loopHorizontal': false,

    // slide
    'afterSlideLoad': this.on_fullpage_event_onslidelload.bind(this),
    'onSlideLeave': this.on_fullpage_event_onslideleave.bind(this),

    'afterResize': this.on_fullpage_event_afterresize.bind(this),
    
    'should_scroll_section': should_scroll_section
  });


  this.element.on('slide_change', this.on_custom_slide_change.bind(this));      // custom event

};

/**
 * rebuild the fullpage jquery object
 */
manic.framework.Fullpage.prototype.rebuild = function() {

  try{
    this.element.fullpage['reBuild']();

  } catch(e){
    // console.log(e);
    
  }

  //$.fn.fullpage.reBuild();
};

/**
 * move the fullpage 1 page down
 */
manic.framework.Fullpage.prototype.next_section = function() {
  this.element.fullpage['moveSectionDown']();
  //$.fn.fullpage.reBuild();
};

/**
 * move the fullpage 1 slide to the left
 */
manic.framework.Fullpage.prototype.next_slide = function() {
  this.element.fullpage['moveSlideRight']();
};

//    _____ _   _ _     _     ____   _    ____ _____   _______     _______ _   _ _____ ____
//   |  ___| | | | |   | |   |  _ \ / \  / ___| ____| | ____\ \   / / ____| \ | |_   _/ ___|
//   | |_  | | | | |   | |   | |_) / _ \| |  _|  _|   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   |  _| | |_| | |___| |___|  __/ ___ \ |_| | |___  | |___  \ V / | |___| |\  | | |  ___) |
//   |_|    \___/|_____|_____|_| /_/   \_\____|_____| |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * after fullpage.js renders the html
 */
manic.framework.Fullpage.prototype.on_fullpage_event_afterrender = function() {

  // console.log('framework: on_fullpage_event_afterrender');
  // console.log('framework: on_fullpage_event_afterrender');
  // console.log('framework: on_fullpage_event_afterrender');
  // console.log('framework: on_fullpage_event_afterrender');
  // console.log('framework: on_fullpage_event_afterrender');
  // console.log('framework: on_fullpage_event_afterrender');
  // console.log('framework: on_fullpage_event_afterrender');
  // console.log('framework: on_fullpage_event_afterrender');
  // console.log('framework: on_fullpage_event_afterrender');
  // console.log('framework: on_fullpage_event_afterrender');

  // create section
  this.section_array = [];
  var arr = this.element.find('.section');
  var section_element = null;
  var section = null;
  for (var i = 0, l = arr.length; i < l; i++) {
    section_element = $(arr[i]);
    section = new manic.framework.FullpageSection({
      'i': i,
      'id': this.options['anchor_array'][i]
    },section_element);

    goog.events.listen(section, manic.framework.FullpageEvent.TRIGGER_REBUILD, this.on_trigger_rebuild.bind(this));

    this.section_array[i] = section;
  }

  this.has_rendered = true;
  // console.log('framework: on_fullpage_event_afterrender 2');

  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.AFTER_RENDER));

};

/**
 * fullpage.js section enter event handler
 * @param  {string} anchorLink
 * @param  {number} index
 */
manic.framework.Fullpage.prototype.on_fullpage_event_afterload = function(anchorLink, index) {

  // console.log(this);
  // console.log(this.has_rendered)

  if(this.has_rendered){
    this.previous_section_index = this.section_index;
    this.section_index = index - 1;
    //console.log('this.section_index: ' + this.section_index);

    this.is_going_down = this.previous_section_index < this.section_index;

    var section = this.section_array[this.section_index];
    section.set_section_enter(this.is_going_down);

    if (section.has_slides == false) {
      var custom_event = new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SECTION_ENTER);
      custom_event.section = section;
      this.dispatchEvent(custom_event);
    } else {
      // figure out which one of the slides has entered... ?

      var slide = section.slide_array[section.slide_index];

      var custom_event = new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SLIDE_ENTER);
      custom_event.slide = slide;
      this.dispatchEvent(custom_event);
    }
  }

};

/**
 * fullpage.js section leave event handler
 * @param  {number} index
 * @param  {number} nextIndex
 * @param  {string} direction
 */
manic.framework.Fullpage.prototype.on_fullpage_event_onleave = function(index, nextIndex, direction) {

  if(this.has_rendered){
    var section = null;
    var target_index = 0;

    //this.section_index = index;
    //var is_going_down = this.previous_section_index < this.section_index;
    this.is_going_down = this.section_index < (nextIndex - 1);

    if (this.has_rendered == true) {
      for (var i = 0, l = this.section_array.length; i < l; i++) {
        if (i == index - 1) {
          section = this.section_array[i];
          section.set_section_leave(this.is_going_down);
        }
      }
    }

    //this.dispatchEvent( new goog.events.Event(manic.framework.FullpageEvent.ON_SECTION_LEAVE));
    var custom_event = new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SECTION_LEAVE);
    custom_event.leave_next_index = (nextIndex - 1);
    custom_event.is_going_down = this.is_going_down;
    this.dispatchEvent(custom_event);
  }

};






/**
 * fullpage.js slide enter event handler
 * @param  {string} anchorLink
 * @param  {number} index
 * @param  {string} slideAnchor
 * @param  {number} slideIndex
 */
manic.framework.Fullpage.prototype.on_fullpage_event_onslidelload = function(anchorLink, index, slideAnchor, slideIndex) {
  var section = null;
  var slide = null;
  var target_index = 0;
  if (this.has_rendered == true) {
    for (var i = 0, l = this.section_array.length; i < l; i++) {
      if (i == index - 1) {
        section = this.section_array[i];
        section.set_slide_index(slideIndex);

        slide = section.slide_array[slideIndex];

        var custom_event = new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SLIDE_ENTER);
        custom_event.slide = slide;
        this.dispatchEvent(custom_event);

      }
    }
  }
};

/**
 * fullpage.js slide leave event handler
 * @param  {string} anchorLink
 * @param  {number} index
 * @param  {number} slideIndex
 * @param  {string} direction
 */
manic.framework.Fullpage.prototype.on_fullpage_event_onslideleave = function(anchorLink, index, slideIndex, direction) {

  var section = null;
  var slide = null;
  var target_index = 0;
  if (this.has_rendered == true) {
    for (var i = 0, l = this.section_array.length; i < l; i++) {
      if (i == index - 1) {
        section = this.section_array[i];

        slide = section.slide_array[slideIndex];
        slide.set_slide_leave();
      }
    }
  }
};

/**
 * fullpage.js resize event handler
 */
manic.framework.Fullpage.prototype.on_fullpage_event_afterresize = function() {
  var section = null;
  if (this.has_rendered == true) {
    for (var i = 0, l = this.section_array.length; i < l; i++) {
      section = this.section_array[i];
      section.trigger_resize();
    }
  }
};

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/*
manic.framework.Fullpage.prototype.on_trigger_goto_index = function(event) {
  //console.log('on_trigger_goto_index: ' + event.id + " | " + event.index);
  this.element.fullpage.moveTo(event.id, event.index);
};
*/

/**
 * custom made jquery event trigger on fullpage.js
 * @param  {object} event
 */
manic.framework.Fullpage.prototype.on_custom_slide_change = function(event) {
  //console.log('on_custom_slide_change: ' + event.section + ' | ' + event.slide);
  //console.log('on_custom_slide_change: ' + event.section + ' | ' + event.slide);
  //console.log('has_rendered: ' + this.has_rendered);
  var section = null;
  var target_index = 0;
  if (this.has_rendered == true) {
    for (var i = 0, l = this.section_array.length; i < l; i++) {
      section = this.section_array[i];
      if (section.id == event['section']) {
        section.set_slide_address(event['slide']);
      }
    }
  }

};




/**
 * on_trigger_rebuild description
 * @param  {object} event
 */
manic.framework.Fullpage.prototype.on_trigger_rebuild = function(event){

  // console.log('on_trigger_rebuild');
  this.rebuild();
};












//    ____  _____ ____ _____ ___ ___  _   _
//   / ___|| ____/ ___|_   _|_ _/ _ \| \ | |
//   \___ \|  _|| |     | |  | | | | |  \| |
//    ___) | |__| |___  | |  | | |_| | |\  |
//   |____/|_____\____| |_| |___\___/|_| \_|
//

/**
 * FullpageSection constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.framework.FullpageSection = function(options, element) {
  goog.events.EventTarget.call(this);

  this.options = $.extend({}, manic.framework.FullpageSection.DEFAULT, options);
  this.element = element;
  this.element.data('manic.framework.FullpageSection', this);

  this.i = this.options['i'];
  this.id = this.options['id'];
  this.slide_array = null;
  this.slide_index = -1;
  this.slide_num = 0;
  this.has_slides = false;
  this.is_going_down = true;


  var arr = this.element.find('.slide');

  if (arr.length != 0) {
    // create slides
    this.slide_index = 0;
    this.has_slides = true;
    this.slide_array = [];
    var slide_element = null;
    var slide = null;
    for (var i = 0, l = arr.length; i < l; i++) {
      slide_element = $(arr[i]);
      slide = new manic.framework.FullpageSlide({
        'i': i
      },slide_element);


      slide.parent_id = this.id;

      this.slide_array[i] = slide;

      goog.events.listen(slide, manic.framework.FullpageEvent.TRIGGER_REBUILD, this.on_trigger_rebuild.bind(this));
    }

    this.slide_num = this.slide_array.length;

  } else {
    // create scrollbar
    this.scrollbar = this.element.find('.fp-scrollable');
    //console.log('this.scrollbar');
    //console.log(this.scrollbar);
    if (this.scrollbar.length != 0) {

      this.scrollbar.on('slimscroll_scroll', this.on_scrollbar_scroll.bind(this));
    }
  }


  // create address stuff
  this.address_index = -1;      // used just for using the # of the fullpage.js
  this.address_array = [];
  arr = this.element.find('.address-slide');
  for (var i = 0, l = arr.length; i < l; i++) {
    this.address_array[i] = $(arr[i]).attr('data-anchor');
  }

};
goog.inherits(manic.framework.FullpageSection, goog.events.EventTarget);

/**
 * default options for class
 * @const {Object}
 */
manic.framework.FullpageSection.DEFAULT = {
  'i': 0,
  'id': ''
};

/**
 * set internal slide index and trigger slide enter event
 * @param {number} index_param
 */
manic.framework.FullpageSection.prototype.set_slide_index = function(index_param) {
  this.slide_index = index_param;

  var slide = this.slide_array[this.slide_index];
  slide.set_slide_enter();

  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SLIDE_CHANGE));
};


/**
 * set internal 'address-slide' and let section trigger address change event
 * @param {string} id_param
 */
manic.framework.FullpageSection.prototype.set_slide_address = function(id_param) {

  this.address_index = 0;

  for (var i = 0, l = this.address_array.length; i < l; i++) {
    if (this.address_array[i] == id_param) {
      this.address_index = i;
      //console.log('this.address_index: ' + this.address_index);
    }
  }
  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SLIDE_ADDRESS_CHANGE));
};

/**
 * alpha-in transition for slide, need to hack the css to let them show on top 0 left 0
 * @param  {number} index_param
 */
manic.framework.FullpageSection.prototype.show_slide_index = function(index_param) {
  var slide = null;
  for (var i = 0, l = this.slide_array.length; i < l; i++) {
    slide = this.slide_array[i];
    if (i == index_param) {
      slide.show();
    } else {
      slide.hide();
    }
  }
};

/**
 * custom event triggered on slimscrollbar...
 * @param  {object} event
 */
manic.framework.FullpageSection.prototype.on_scrollbar_scroll = function(event) {
  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SECTION_SCROLL, event['percent']));
};

/**
 * on trigger rebuild
 * @param  {object} event
 */
manic.framework.FullpageSection.prototype.on_trigger_rebuild = function(event) {
  this.rebuild();
};


/**
 * section will dispatch resize event.
 */
manic.framework.FullpageSection.prototype.trigger_resize = function() {

  if (this.has_slides == true) {
    var slide = null;
    for (var i = 0, l = this.slide_array.length; i < l; i++) {
      slide = this.slide_array[i];
      slide.trigger_resize();
    }
  }

  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SECTION_RESIZE));

};

/**
 * trigger section enter event
 * @param {boolean} is_going_down_param if the section is going down
 */
manic.framework.FullpageSection.prototype.set_section_enter = function(is_going_down_param) {
  this.is_going_down = is_going_down_param;

  if (this.has_slides == true) {
    var slide = null;
    for (var i = 0, l = this.slide_array.length; i < l; i++) {
      slide = this.slide_array[i];
      slide.set_section_enter(this.is_going_down);        // let the slide listen to section enter.
    }
  }

  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SECTION_ENTER));
};

/**
 * trigger section leave event
 * @param {boolean} is_going_down_param if the section is going down
 */
manic.framework.FullpageSection.prototype.set_section_leave = function(is_going_down_param) {

  this.is_going_down = is_going_down_param;

  if (this.has_slides == true) {
    var slide = null;
    for (var i = 0, l = this.slide_array.length; i < l; i++) {
      slide = this.slide_array[i];
      slide.set_slide_leave();
      slide.set_section_leave(this.is_going_down);          // different from slide leave ...
    }
  }

  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SECTION_LEAVE));
};



/**
 * move the scrollbar to top
 */
manic.framework.FullpageSection.prototype.move_scrollbar_to_top = function() {
  this.scrollbar.slimScroll({ scrollTo: '0' });
  //this.scrollbar.slimScroll({ scrollBy: '1' });
};

/**
 * move the scrollbar to top
 * @param {number} top_param number to move up the scrollbar
 */
manic.framework.FullpageSection.prototype.move_scrollbar = function(top_param) {
  var target_str = top_param + 'px';
  this.scrollbar.slimScroll({ scrollTo: target_str });
};



/**
 * rebuild description
 */
manic.framework.FullpageSection.prototype.rebuild = function() {
  // console.log('section rebuild');
  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.TRIGGER_REBUILD));
};




















//    ____  _     ___ ____  _____
//   / ___|| |   |_ _|  _ \| ____|
//   \___ \| |    | || | | |  _|
//    ___) | |___ | || |_| | |___
//   |____/|_____|___|____/|_____|
//

/**
 * FullpageSlide constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.framework.FullpageSlide = function(options, element) {
  goog.events.EventTarget.call(this);

  this.options = $.extend({}, manic.framework.FullpageSlide.DEFAULT, options);
  this.element = element;
  this.id = this.element.attr('data-anchor');
  this.parent_id = '';
  //console.log('this.id: ' + this.id);

  this.is_going_down = true;

  this.element.data('manic.framework.FullpageSlide', this);
  this.i = this.options['i'];

  this.scrollbar = this.element.find('.fp-scrollable');
  if (this.scrollbar.length != 0) {
    this.scrollbar.on('slimscroll_scroll', this.on_scrollbar_scroll.bind(this));
  }
};
goog.inherits(manic.framework.FullpageSlide, goog.events.EventTarget);

/**
 * default options for class
 * @const {Object}
 */
manic.framework.FullpageSlide.DEFAULT = {
  'i': 0
};

/**
 * alpha-in transition
 */
manic.framework.FullpageSlide.prototype.show = function() {
  TweenMax.killTweensOf(this.element);
  TweenMax.to(this.element, 0.5, {autoAlpha: 1, delay: 0.5});
};

/**
 * alpha-out transition
 */
manic.framework.FullpageSlide.prototype.hide = function() {
  TweenMax.killTweensOf(this.element);
  TweenMax.to(this.element, 0.5, {autoAlpha: 0});
};


/**
 * trigger resize
 */
manic.framework.FullpageSlide.prototype.trigger_resize = function() {
  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SLIDE_RESIZE));
};

/**
 * trigger slide enter event
 */
manic.framework.FullpageSlide.prototype.set_slide_enter = function() {
  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SLIDE_ENTER));
};

/**
 * trigger slide leave event
 */
manic.framework.FullpageSlide.prototype.set_slide_leave = function() {
  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SLIDE_LEAVE));
};





/**
 * trigger section enter event
 * @param {boolean} is_going_down_param if the section is going down
 */
manic.framework.FullpageSlide.prototype.set_section_enter = function(is_going_down_param) {
  this.is_going_down = is_going_down_param;
  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SECTION_ENTER));
};

/**
 * trigger section leave event
 * @param {boolean} is_going_down_param if the section is going down
 */
manic.framework.FullpageSlide.prototype.set_section_leave = function(is_going_down_param) {

  this.is_going_down = is_going_down_param;
  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SECTION_LEAVE));
};




/**
 * custom event on slimscrollbar...
 * @param  {object} event
 */
manic.framework.FullpageSlide.prototype.on_scrollbar_scroll = function(event) {
  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.ON_SLIDE_SCROLL, event['percent']));
};

/**
 * move the scrollbar to top
 */
manic.framework.FullpageSlide.prototype.move_scrollbar_to_top = function() {
  //console.log( this.id + ' this.scrollbar: ' + this.scrollbar.length);
  //console.log(this.scrollbar);
  this.scrollbar.slimScroll({ scrollTo: '0' });
};


/**
 * move the scrollbar
 * @param  {number} top_param number to use to move the scrollbar
 */
manic.framework.FullpageSlide.prototype.move_scrollbar = function(top_param) {
  var target_str = top_param + 'px';
  this.scrollbar.slimScroll({ scrollTo: target_str });
};

/**
 * re-get the scrollbar of fullpage.js
 */
manic.framework.FullpageSlide.prototype.update_scrollbar = function() {
  this.scrollbar = this.element.find('.fp-scrollable');
  /* might cause a memory leak
  if (this.scrollbar.length != 0) {
    this.scrollbar.on('slimscroll_scroll', this.on_scrollbar_scroll.bind(this));
  }
  */
};


/**
 * rebuild description
 */
manic.framework.FullpageSlide.prototype.rebuild = function() {
  this.dispatchEvent(new manic.framework.FullpageEvent(manic.framework.FullpageEvent.TRIGGER_REBUILD));
};