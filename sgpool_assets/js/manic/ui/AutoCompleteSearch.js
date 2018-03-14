// COPIED FROM THE MANIC WEBSITE
goog.provide('manic.ui.AutoCompleteSearch');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('goog.ui.ac');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.AutoCompleteSearch = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.AutoCompleteSearch.DEFAULT, options);
  this.element = element;
    
  /**
   * @type {goog.ui.ac.AutoComplete}
   */
  this.ac = null;
  this.has_pressed_down = false;
  
  this.name_array = [];
  this.url_dictionary = [];


  this.search_txt = this.element.find('input[type=text]');
  this.search_submit_btn = this.element.find('input[type=submit]');


  this.data_container_element = $(this.options['data_container']);




  this.parse_data();
  this.create_autocomplete();
  this.create_form();

  
  


  // console.log('manic.ui.AutoCompleteSearch: init');
};
goog.inherits(manic.ui.AutoCompleteSearch, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
manic.ui.AutoCompleteSearch.DEFAULT = {
  'data_container': '#search-data-container',
  'selector': '.search-data-item',
  'unique_name': 'ac-renderer-unique-name',
  'custom_placeholer': 'Search'
};



//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

manic.ui.AutoCompleteSearch.prototype.parse_data = function() {

  var arr = this.data_container_element.find(this.options['selector']);
  var item = null;

  var name = '';
  var url = '';

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);

    name = item.attr('data-name');
    url = item.attr('data-url');

    this.name_array[this.name_array.length] = name;
    this.url_dictionary[name] = url;
  }  
};

manic.ui.AutoCompleteSearch.prototype.create_autocomplete = function(){

  this.ac = goog.ui.ac.createSimpleAutoComplete(this.name_array, this.search_txt[0], false);

  goog.events.listen(this.ac, goog.ui.ac.AutoComplete.EventType.SELECT, this.on_autocomplete_select.bind(this));

  this.ac_renderer = this.ac.getRenderer();
  // this.ac_renderer.className = this.options['unique_name']; //   'ac-renderer-desktop-aside-search';
  this.ac_renderer.className = this.options['unique_name']; //   'ac-renderer-desktop-aside-search';
  
};

manic.ui.AutoCompleteSearch.prototype.create_form = function() {

  this.element.submit(this.on_search_form_submit.bind(this));
  this.search_txt.focus(this.on_search_txt_focus.bind(this));
  this.search_txt.blur(this.on_search_txt_blur.bind(this));
  this.search_txt.keyup(this.on_search_key_up.bind(this));

  
  this.reset_text();



};




//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

manic.ui.AutoCompleteSearch.prototype.reset_text = function() {

  this.search_txt.val(this.options['custom_placeholer']);
  this.element.addClass('has-placeholder');

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
manic.ui.AutoCompleteSearch.prototype.on_autocomplete_select = function(event) {
  
  this.on_search_txt_blur(null);
  this.element.submit();
};










/**
 * event handler
 * @param  {object} event
 */
manic.ui.AutoCompleteSearch.prototype.on_search_txt_focus = function(event) {
  // console.log('Search: on_search_txt_focus');


  if(this.search_txt.val() == this.options['custom_placeholer']){
    this.search_txt.val('');
    this.element.removeClass('has-placeholder');
  }


  this.has_pressed_down = false;
  this.ac.getSuggestion(3);


  /*
  this.ac_renderer_element = $(this.ac_renderer.getElement());
  if(this.ac_renderer_element != null && this.ac_renderer_element.length > 0){
    this.ac_renderer_element.attr('data-id','' + this.search_txt_id);
  }
  */
};




/**
 * event handler
 * @param  {object} event
 */
manic.ui.AutoCompleteSearch.prototype.on_search_txt_blur = function(event) {
  this.has_pressed_down = false;

  if(this.search_txt.val() == ''){
    this.search_txt.val(this.options['custom_placeholer']);
    this.element.addClass('has-placeholder');
  }

  if(this.ac_renderer_element != null && this.ac_renderer_element.length > 0){
    this.ac_renderer_element.removeClass('has-highlight');
  }
};




/**
 * event handler
 * @param  {object} event
 */
manic.ui.AutoCompleteSearch.prototype.on_search_key_up = function(event) {

  // http://stackoverflow.com/questions/3462995/jquery-keydown-keypress-keyup-enterkey-detection
  var code = event.which; // recommended to use e.which, it's normalized across browsers
  // console.log(code);

  this.ac_renderer_element = $(this.ac_renderer.getElement());
  /*
  this.ac_renderer_element = $(this.ac_renderer.getElement());
  if(this.ac_renderer_element != null && this.ac_renderer_element.length > 0){
    this.ac_renderer_element.attr('data-id','' + this.search_txt_id);
  }
  */

  

  // escape button ?

  /*
  if (code == 27) {
    this.close_search();

  }
  */

  

  // down button
  if (code == 40) {
    if( this.has_pressed_down == false) {
      this.has_pressed_down = true;
      this.ac.hilitePrev();
      this.ac_renderer_element = $(this.ac_renderer.getElement());
      if(this.ac_renderer_element != null && this.ac_renderer_element.length > 0){
        this.ac_renderer_element.addClass('has-highlight');
      }
    }   
  } else if(code == 13){
    this.element.submit();
  }


};



/**
 * event handler
 * @param  {object} event
 */
manic.ui.AutoCompleteSearch.prototype.on_search_form_submit = function(event) {
  if(this.search_txt.val() == ''){
    return false;
  }



  if(goog.isDefAndNotNull(this.url_dictionary[this.search_txt.val()])){
    window.location.href = this.url_dictionary[this.search_txt.val()];
    return false;
  }
  
  

  return true;
};


