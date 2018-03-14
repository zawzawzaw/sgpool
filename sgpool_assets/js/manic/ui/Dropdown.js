goog.provide('manic.ui.Dropdown');

goog.require('goog.ui.MenuItem');
goog.require('goog.ui.Select');
goog.require('goog.math.Box');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Dropdown constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.Dropdown = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.Dropdown.DEFAULT, options);
  this.element = element;

  this.element.data('manic.ui.Dropdown', this);

  this.select_element = this.element.find('select');

  this.label_array = [];
  this.value_array = [];

  this.option_array = [];
  this.option_dictionary = [];

  this.menu_item_array = [];
  this.menu_item_dictionary = [];

  this.initial_label = null;
  this.initial_index = -1;
  this.initial_value = '';

  this.current_value = "";

  /**
   * @type {goog.ui.Select}
   */
  this.goog_select = null;

  /**
   * @type {jQuery}
   */
  this.goog_select_menu = null;

  /**
   * @type {jQuery}
   */
  this.selected_option_element = null;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.current_value = this.select_element.val();
  if(this.current_value == null){
    this.current_value = '';
  }
  //console.log('this.current_value: ' + this.current_value);

  this.initial_value = this.current_value;

  // get initial label, value & copy as array
  
  if(this.current_value == ''){
    this.element.addClass('has-placeholder');
  } else {
    this.element.removeClass('has-placeholder');
  }

  var arr = this.select_element.find('option');
  var item = null;
  var value = '';
  var label = '';

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    value = '';
    label = item.html();

    if (goog.isDef(item.attr('value'))) {
      value = item.attr('value');
    } else {
      value = item.html();
    }
    
    if (value == this.current_value) {
      this.initial_index = i - 1;   // off for some reason
    }

    //console.log('value: ' + value);
    //console.log('label: ' + label);

    if (value == '') {
      this.initial_label = label;
    } else {
      this.label_array[this.label_array.length] = label;
      this.value_array[this.value_array.length] = value;
    }
    
  }

  if (this.initial_label == null && this.options['initial_label'] != '') {
    this.initial_label = '' + this.options['initial_label'];
  }


  /*
  if (manic.IS_MOBILE == true) {
    this.init_mobile();
  } else {
    this.init_desktop();
  }
  */
  
  this.init_mobile();
  this.init_desktop();


};
goog.inherits(manic.ui.Dropdown, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Dropdown
 * @const {object}
 */
manic.ui.Dropdown.DEFAULT = {
  'initial_label': 'Please Select'       // only when there is no option with value ""
};

/**
 * Dropdown Event Constant
 * @const
 * @type {string}
 */
manic.ui.Dropdown.ON_CHANGE = 'on_change';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.Dropdown.prototype.init_mobile = function(){
  this.element.attr('data-label', this.initial_label);
  this.select_element.change(this.on_mobile_select_element_change.bind(this));

  //console.log('Dropdown: init_mobile');
  //console.log('this.initial_index: ' + this.initial_index);


  //console.log('this.initial_index: ' + this.initial_index);

  // select initial index:
  if (this.initial_index != -1) {
    
    var target_value = this.value_array[this.initial_index];
    var target_label = this.label_array[this.initial_index];

    //this.select_element.find('option').removeAttr('selected');
    //this.select_element.val(target_value);
    
    // http://stackoverflow.com/questions/13343566/set-select-option-selected-by-value
    // this.select_element.find('option[value=' + target_value +']').attr('selected','selected');
    
    this.element.attr('data-label', target_label);

    //console.log('to remove: ');
    //console.log(this.select_element.find('option[value=""]'));
    this.select_element.find('option[value=""]').remove();  // i don't remember why i added this

    //console.log('this.initial_index: ' + this.initial_index);
    //console.log('target_value: ' + target_value);
  }



  // create option array after removing 1 item.
  var arr = this.select_element.find('option');
  var item = null;
  var value = '';
  var label = '';

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    value = '';
    label = item.html();

    if (goog.isDef(item.attr('value'))) {
      value = item.attr('value');
    } else {
      value = item.html();
    }

    this.option_array[i] = item;
    this.option_dictionary['' + value] = item;

  } // end for loop
  
};

manic.ui.Dropdown.prototype.init_desktop = function(){
  

  this.create_google_select();
};

manic.ui.Dropdown.prototype.create_google_select = function() {

  this.goog_select = new goog.ui.Select(this.initial_label);

  /**
   * @type {goog.ui.MenuItem}
   */
  var menu_item = null;
  var value = '';
  var label = '';

  for (var i = 0, l=this.label_array.length; i < l; i++) {
    label = this.label_array[i];
    value = this.value_array[i];

    menu_item = new goog.ui.MenuItem(label, value);
    this.goog_select.addItem(menu_item);

    this.menu_item_array[this.menu_item_array.length] = menu_item;
    this.menu_item_dictionary['' + value] = menu_item;

  }

  this.goog_select.render(this.element[0]);
  goog.events.listen(this.goog_select, 'change', this.on_goog_select_change.bind(this));
  // goog.events.listen(this.goog_select, 'show', this.on_goog_select_show.bind(this));


  this.goog_select.setSelectedIndex(this.initial_index);
  this.goog_select.setRenderMenuAsSibling(true)

  this.goog_select_menu = $(this.goog_select.getMenu().getElement());
  $('body').append(this.goog_select_menu);
  this.goog_select_menu.hide(0);


  if (goog.isDefAndNotNull(this.select_element.attr('id'))) {
    this.goog_select_menu.attr('data-id', this.select_element.attr('id'));
  }
  //this.goog_select_menu.css('min-width', this.element.width() + 'px');
    
  /*
  // this is to force the width of the element
  this.goog_select_menu.css({
    'max-width': (this.element.width() + 2) + 'px',
    'min-width': (this.element.width() + 2) + 'px'
  });
  */

  if (this.element.hasClass('scroll-version')) {
    this.goog_select_menu.addClass('scroll-version');
    this.goog_select.setScrollOnOverflow(true);
  }

};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * @param {str_param} str_param
 */
manic.ui.Dropdown.prototype.set_value = function(str_param) {
  /*
  console.log('str_param: ' + str_param);
  if(this.goog_select != null) {

    if(str_param == ''){
      this.goog_select.setValue(null);
    } else {
      this.goog_select.setValue(str_param);
    }

  } else {
    this.select_element.val(str_param);
    this.on_mobile_select_element_change(null);
  }
  */

  if(str_param == ''){
    this.goog_select.setValue(null);
  } else {
    this.goog_select.setValue(str_param);
  }

  this.select_element.val(str_param);
  this.on_mobile_select_element_change(null);


};
manic.ui.Dropdown.prototype.reset_value = function() {
  this.set_value(this.initial_value);
  // this.initial_index
  //this.goog_select.setSelectedIndex(0);
};

manic.ui.Dropdown.prototype.set_enabled = function() {
  this.goog_select.setEnabled(true);
  this.select_element.prop('disabled', false);
};
manic.ui.Dropdown.prototype.set_disabled = function() {
  this.goog_select.setEnabled(false);
  this.select_element.prop('disabled', 'disabled');
};




manic.ui.Dropdown.prototype.disable_value = function(str_param){
  // must work for both desktop and mobile
  

  /**
   * @type {goog.ui.MenuItem}
   */
  var menu_item = this.menu_item_dictionary['' + str_param];


  // console.log('menu_item: ');
  // console.log(menu_item);

  if(goog.isDefAndNotNull(menu_item)){
    this.goog_select.removeItem(menu_item);
    // menu_item.setSelectable(false);
  }


  // mobile
  //this.select_element.find('option[value="' + str_param + '"]').hide(0);
  
  var option = this.option_dictionary['' + str_param];
  if (goog.isDefAndNotNull(option)) {
    option.remove();
  }

};
manic.ui.Dropdown.prototype.enable_all = function(str_param){
  // must work for both desktop and mobile
  
  this.menu_item_array = [];
  this.menu_item_dictionary = [];

  var temp_model = this.goog_select.getSelectionModel();
  while(temp_model.getItemCount() > 0){
    this.goog_select.removeItemAt(0);
  }

  

  
  /**
   * @type {goog.ui.MenuItem}
   */
  var menu_item = null;
  var value = '';
  var label = '';

  for (var i = 0, l=this.label_array.length; i < l; i++) {
    label = this.label_array[i];
    value = this.value_array[i];

    menu_item = new goog.ui.MenuItem(label, value);
    this.goog_select.addItem(menu_item);

    this.menu_item_array[this.menu_item_array.length] = menu_item;
    this.menu_item_dictionary['' + value] = menu_item;
  }



  
  // mobile
  //this.select_element.find('option').show(0);
  for (var i = 0, l=this.option_array.length; i < l; i++) {
    item = this.option_array[i];
    this.select_element.append(item);
  }

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
manic.ui.Dropdown.prototype.on_goog_select_change = function(event) {
  this.current_value = this.goog_select.getValue();

  if(this.current_value == null){
    this.current_value = '';
  }

  if(this.current_value == ''){
    this.element.addClass('has-placeholder');
  } else {
    this.element.removeClass('has-placeholder');
  }

  this.select_element.val(this.current_value);
  this.select_element.trigger("change");
  
  if(manic.IS_MOBILE == false){
    this.dispatchEvent(new goog.events.Event(manic.ui.Dropdown.ON_CHANGE));
  }
  

};


/**
 * event handler
 * @param  {object} event
 */
manic.ui.Dropdown.prototype.on_goog_select_show = function(event){
  /*
  this.goog_select_menu.css({
    'max-width': (this.element.width() + 2) + 'px',
    'min-width': (this.element.width() + 2) + 'px'
  });
  */
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.Dropdown.prototype.on_mobile_select_element_change = function(event) {
  this.current_value = this.select_element.val();

  if(this.current_value == ''){
    this.element.addClass('has-placeholder');
  } else {
    this.element.removeClass('has-placeholder');
  }

  var current_label = this.initial_index;
  var value_index = this.value_array.indexOf(this.current_value);

  // console.log('value_index: ' + value_index);

  if(value_index != -1){
    current_label = this.label_array[value_index];
  } else {
    current_label = this.initial_label;
  }

  if(current_label == ''){
    this.element.attr('data-label', this.initial_label);
  } else {
    this.element.attr('data-label', current_label);
  }
  
  if(manic.IS_MOBILE == true){
    this.dispatchEvent(new goog.events.Event(manic.ui.Dropdown.ON_CHANGE));
  }
};

