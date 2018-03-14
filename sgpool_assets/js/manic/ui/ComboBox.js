goog.provide('manic.ui.ComboBox');

goog.require('goog.ui.MenuItem');
goog.require('goog.ui.ComboBox');
goog.require('goog.ui.ComboBoxItem');
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
manic.ui.ComboBox = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.ComboBox.DEFAULT, options);
  this.element = element;

  this.element.data('manic.ui.ComboBox', this);

  this.select_element = this.element.find('select');

  this.label_array = [];
  this.value_array = [];

  this.initial_label = null;
  this.initial_index = -1;

  this.current_value = "";

  /**
   * @type {goog.ui.ComboBox}
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

  // console.log('>>>>>>>>>>>')

  this.create_google_select();


};
goog.inherits(manic.ui.ComboBox, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Dropdown
 * @const {object}
 */
manic.ui.ComboBox.DEFAULT = {
  'initial_label': 'Choose One'       // only when there is no option with value ""
};

/**
 * Dropdown Event Constant
 * @const
 * @type {string}
 */
manic.ui.ComboBox.ON_CHANGE = 'on_change';



//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.ComboBox.prototype.create_google_select = function() {

  //this.goog_select = new goog.ui.ComboBox(this.initial_label);
  this.goog_select = new goog.ui.ComboBox();
  this.goog_select.setUseDropdownArrow(true);
  this.goog_select.setDefaultText(this.initial_label);

  /**
   * @type {goog.ui.ComboBoxItem}
   */
  var menu_item = null;
  var value = '';
  var label = '';

  for (var i = 0, l=this.label_array.length; i < l; i++) {
    label = this.label_array[i];
    value = this.value_array[i];

    //menu_item = new goog.ui.ComboBoxItem(label, value);
    menu_item = new goog.ui.ComboBoxItem(label);
    this.goog_select.addItem(menu_item);

  }

  this.goog_select.render(this.element[0]);

  this.goog_select_menu = $(this.goog_select.getMenu().getElement());
  this.goog_select_menu.addClass('combo-scroll-version');

  goog.events.listen(this.goog_select, 'change', this.on_goog_select_change.bind(this));
  //goog.events.listen(this.goog_select, 'show', this.on_goog_select_show.bind(this));

  /*
  css({
    height: '200px',
    overflow: 'scroll'
  })
  */

  /*
  


  this.goog_select.setSelectedIndex(this.initial_index);

  this.goog_select_menu = $(this.goog_select.getMenu().getElement());
  //this.goog_select_menu.css('min-width', this.element.width() + 'px');
  
  // this is to force the width of the element
  this.goog_select_menu.css({
    'max-width': (this.element.width() + 3) + 'px',
    'min-width': (this.element.width() + 3) + 'px'
  });

  if (this.element.hasClass('scroll-version')) {
    this.goog_select_menu.addClass('scroll-version');
    this.goog_select.setScrollOnOverflow(true);
  }
  */

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
manic.ui.ComboBox.prototype.set_value = function(str_param) {

  var current_value_index = this.value_array.indexOf(str_param);
  if(current_value_index == -1){
    this.goog_select.setValue(this.initial_label);
  } else {
    var current_label = this.label_array[current_value_index];
    this.goog_select.setValue(current_label);
  }
};

/**
 * @return {String} [description]
 */
manic.ui.ComboBox.prototype.get_value = function(){
  return this.current_value;
}

manic.ui.ComboBox.prototype.reset_value = function() {
  //this.goog_select.setSelectedIndex(0);
};



/**
 * @param {Array} arr_param
 */
manic.ui.ComboBox.prototype.set_option_array = function(arr_param) {
  this.goog_select.removeAllItems();

  this.label_array = [];
  this.value_array = [];

  var item = null;
  for (var i = 0, l=arr_param.length; i < l; i++) {
    item = arr_param[i];

    if (goog.isDefAndNotNull(item['label']) && goog.isDefAndNotNull(item['value'])) {
      this.label_array[i] = item['label'];
      this.value_array[i] = item['value'];

      menu_item = new goog.ui.ComboBoxItem(item['label']);
      this.goog_select.addItem(menu_item);
    }
  }


  this.set_value(this.value_array[0]);    // this should trigger the on_change event
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
manic.ui.ComboBox.prototype.on_goog_select_change = function(event) {
  var goog_select_value = this.goog_select.getValue();
  
  

  var current_value_index = this.label_array.indexOf(goog_select_value);
  if(current_value_index == -1){
        
    this.current_value = '';


  } else {

    this.current_value = this.value_array[current_value_index];
    this.select_element.val(this.current_value);
    
  }

  // console.log('ComboBox Value: ' + this.current_value);

  this.dispatchEvent(new goog.events.Event(manic.ui.ComboBox.ON_CHANGE));
};


/**
 * event handler
 * @param  {object} event
 */
manic.ui.ComboBox.prototype.on_goog_select_show = function(event){
  /*
  this.goog_select_menu.css({
    'max-width': (this.element.width() + 3) + 'px',
    'min-width': (this.element.width() + 3) + 'px'
  });
  */
};
