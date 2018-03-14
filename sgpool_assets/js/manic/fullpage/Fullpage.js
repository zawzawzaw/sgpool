goog.provide('manic.fullpage.Fullpage');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.fullpage.Section');
goog.require('manic.fullpage.Event');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.fullpage.Fullpage = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.fullpage.Fullpage.DEFAULT, options);
  this.element = element;


  this.has_scrollbar = this.options['has_scrollbar'];

  this.has_rendered = false;
  this.previous_section_index = 0;
  this.section_index = 0;
  this.max_section_index = 0;

  this.previous_section_id = "";
  this.section_id = "";

  this.anchor_array = [];


  this.has_section_scroll = false;

  if(this.element.hasClass('has-section-scroll')){
    this.has_section_scroll = true;
  }
  // console.log('has_section_scroll: ' + this.has_section_scroll);
  


  /**
   * @type {manic.fullpage.Section}
   */
  this.current_section = null;

  this.current_section_element = null;


  //this.body = $('body');

  /**
   * @type {Array.<manic.fullpage.Section>}
   */
  this.section_array = [];

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  var arr = this.element.find('.section');
  var item = null;
  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    if (goog.isDefAndNotNull(item.attr('data-anchor'))) {
      this.anchor_array[i] = "" + item.attr('data-anchor');
    } else {
      // console.log('ERROR');
      // console.log('ERROR! missing data-anchor');
      // console.log('ERROR');
    }
  }




  TweenMax.delayedCall(0.3, this.create_jquery_fullpage, [], this);

  // console.log('init');
};
goog.inherits(manic.fullpage.Fullpage, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
manic.fullpage.Fullpage.DEFAULT = {
  'has_scrollbar': false
  //'anchor_array': []
};



//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.fullpage.Fullpage.prototype.create_jquery_fullpage = function() {
  //console.log('lets create the jquery fullpage');

  this.element.fullpage({
    "verticalCentered": false,
    'anchors':              this.anchor_array,


    //'scrollBar': true,
    'scrollBar': this.has_scrollbar,
    //'autoScrolling': false,
    //'scrollingSpeed': 400,

    'touchSensitivity':     30,   // i can't remember what this is for

    'afterRender':          this.on_fullpage_event_afterrender.bind(this),
    'afterLoad':            this.on_fullpage_event_afterload.bind(this),
    'afterSlideLoad':       this.on_fullpage_event_afterslideload.bind(this),
    'onLeave':              this.on_fullpage_event_onleave.bind(this),
    'afterResize':          this.on_fullpage_event_afterresize.bind(this),
    'scrollOverflow':this.has_section_scroll
  });
};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.fullpage.Fullpage.prototype.initial_scroll_to_target = function() {
  //$.fn.fullpage.scrollToAnchorPublic();


  var value =  window.location.hash.replace('#', '').split('/');
  var section = '' + value[0];


  var slide = null;

  if(goog.isDef(value[1])){
    slide = '' + value[1];
  }
  //var slide = '' + value[1];

  /*
  var section_index = 0;
  // var slide = value[1];

  var arr = this.anchor_array;
  for (var i = 0, l=arr.length; i < l; i++) {
    if(arr[i] == section){
      section_index = i + 1;
      //this.on_section_change( i + 1);
    }
  }
  */
  
  
  if (section != '') {
    if (slide != null) {
      // console.log('silentMoveTo');
      // console.log('section: ' + section);
      // console.log('slide: ' + slide);
      $.fn.fullpage.silentMoveTo(section,slide);
    } else {
      $.fn.fullpage.silentMoveTo(section);
      
    }
    


  }

  TweenMax.delayedCall(0.5, this.initial_scroll_to_target_delayed, [], this)
};

manic.fullpage.Fullpage.prototype.initial_scroll_to_target_delayed = function(){
  var value =  window.location.hash.replace('#', '').split('/');
  var section = '' + value[0];
  //var section_index = 0;
  var section_index = 1;        // default is 0 + 1;
  // var slide = value[1];

  var arr = this.anchor_array;
  for (var i = 0, l=arr.length; i < l; i++) {
    if(arr[i] == section){
      section_index = i + 1;
    }
  }

  //console.log('initial_scroll_to_target_delayed: ' + section_index);
  this.on_section_change(section_index);
}
manic.fullpage.Fullpage.prototype.disable_scroll = function() {
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling (false);
  $.fn.fullpage.setRecordHistory(false);
};
manic.fullpage.Fullpage.prototype.enable_scroll = function() {
  $.fn.fullpage.setAllowScrolling(true);
  $.fn.fullpage.setKeyboardScrolling (true);
  $.fn.fullpage.setRecordHistory(true);
};
manic.fullpage.Fullpage.prototype.next_section = function() {
  $.fn.fullpage.moveSectionDown();
};
manic.fullpage.Fullpage.prototype.prev_section = function() {
  $.fn.fullpage.moveSectionUp();
};
manic.fullpage.Fullpage.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * event handler
 */
manic.fullpage.Fullpage.prototype.on_fullpage_event_afterrender = function() {
  // create section
  this.section_array = [];
  var arr = this.element.find('.section');
  var section_element = null;
  var section = null;

  for (var i = 0, l = arr.length; i < l; i++) {
    section_element = $(arr[i]);
    section = new manic.fullpage.Section({
      'i': i,
      'id': this.anchor_array[i]
    },section_element);

    this.section_array[i] = section;
  }

  this.max_section_index = this.section_array.length - 1;

  this.on_section_change(1)
  

  this.has_rendered = true;
  this.dispatchEvent(new manic.fullpage.Event(manic.fullpage.Event.ON_RENDER));
};

/**
 * fullpage.js section enter event handler
 * @param  {string} anchorLink
 * @param  {number} index
 */
manic.fullpage.Fullpage.prototype.on_fullpage_event_afterload = function(anchorLink, index) {
  //console.log('on_fullpage_event_afterload');
  if (this.has_rendered == true) {
    this.on_section_change(index);
  }
};



manic.fullpage.Fullpage.prototype.on_fullpage_event_afterslideload = function(anchorLink, index, slideAnchor, slideIndex){

};

manic.fullpage.Fullpage.prototype.on_section_change = function(index){


  this.previous_section_index = this.section_index;
  this.section_index = index - 1;
  this.previous_section_id = this.section_id;


  // if (this.has_rendered && this.section_index >= 0 && this.section_index<this.section_array.length ){

    this.section_id = this.anchor_array[this.section_index];
    //this.body.addClass('on-' + this.section_id + '-section');
    //
    //console.log('this.section_index: ' + this.section_index + ', this.section_id: ' + this.section_id);

    this.current_section = this.section_array[this.section_index];
    this.current_section.trigger_section_enter();

    this.current_section_element = this.current_section.element;

    this.dispatchEvent(new manic.fullpage.Event(manic.fullpage.Event.ON_SECTION_CHANGE));
  // }


};

/**
 * fullpage.js section leave event handler
 * @param  {number} index
 * @param  {number} nextIndex
 * @param  {string} direction
 */
manic.fullpage.Fullpage.prototype.on_fullpage_event_onleave = function(index, nextIndex, direction) {
  if(this.has_rendered){
    var section = null;
    var target_index = 0;


    var leaving_section_index = index - 1;
    var leaving_section = this.section_array[leaving_section_index];

    if (goog.isDefAndNotNull(leaving_section)) {
      leaving_section.trigger_section_leave();
    }
    
  }
};

/**
 * event handler
 * @param  {object} event
 */
manic.fullpage.Fullpage.prototype.on_fullpage_event_afterresize = function(event) {

  var section = null;

  for (var i = 0, l=this.section_array.length; i < l; i++) {
    section = this.section_array[i];
    section.trigger_section_resize();
  }
  
  this.dispatchEvent(new manic.fullpage.Event(manic.fullpage.Event.ON_RESIZE));
};
