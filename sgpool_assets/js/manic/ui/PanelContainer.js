goog.provide('manic.ui.PanelContainer');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The PanelContainer constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.PanelContainer = function(options, element) {
  goog.events.EventTarget.call(this);

  this.options = $.extend({}, manic.ui.PanelContainer.DEFAULT, options);
  this.element = element;

  this.element_width = this.element.width();
  this.element_height = this.element.height();

  this.resize_height = this.options['resize_height'];
  if(this.resize_height){
    this.element.addClass('resize-height-version')
  }

  this.index = 0;
  this.max_index = 0;
  this.current_panel = null;

  this.container = this.element.find(this.options['container_selector']);
  this.panel_array = [];

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.create_panels();
  this.update_layout();
  this.goto_index(this.options['initial_index']);

  $(window).resize(this.on_window_resize.bind(this))

  //console.log('init');
};
goog.inherits(manic.ui.PanelContainer, goog.events.EventTarget);

/**
 * default options for PanelContainer
 * @const {object}
 */
manic.ui.PanelContainer.DEFAULT = {
  'initial_index': 0,
  'panel_selector': '.panel',
  'container_selector': '.panel-container-container',
  'duration': 0.8,
  'resize_height': false
};

/**
 * PanelContainer Event Constant
 * @const
 * @type {string}
 */
manic.ui.PanelContainer.ON_CREATE = 'on_create';

/**
 * PanelContainer Event Constant
 * @const
 * @type {string}
 */
manic.ui.PanelContainer.ON_CHANGE = 'on_change';

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

/**
 * select panels and place them into panel array
 */
manic.ui.PanelContainer.prototype.create_panels = function() {

  this.panel_array = [];
  var arr = this.element.find(this.options['panel_selector']);
  var panel = null;

  for (var i = 0, l = arr.length; i < l; i++) {
    panel = $(arr[i]);
    this.panel_array[i] = panel;
  }

  this.max_index = this.panel_array.length;

  this.current_panel = this.panel_array[0];     // default panel is first panel

  this.dispatchEvent(new goog.events.Event(manic.ui.PanelContainer.ON_CREATE));

};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * method_03
 */
manic.ui.PanelContainer.prototype.update_layout = function() {

  this.element_width = this.element.width();
  this.element_height = this.element.height();

  if(this.resize_height){
    this.element_height = this.current_panel.height();
    TweenMax.to(this.element, 0.8, {height: this.element_height});
  }

  
  TweenLite.killTweensOf(this.container);
  TweenLite.to(this.container, 0, {left: (-1 * this.index * this.element_width)});  // instant

  for (var i = 0, l = this.panel_array.length; i < l; i++) {
    this.panel_array[i].css({
      left: (this.element_width * i) + 'px'
    });
  }



};

/**
 * method_04
 */
manic.ui.PanelContainer.prototype.update_position = function() {
  TweenLite.killTweensOf(this.container);
  TweenLite.to(this.container, this.options['duration'], {
    left: (-1 * this.index * this.element_width),
    ease: Sine.easeInOut
  });
};

/**
 * method_04
 * @param {number} index_param
 */
manic.ui.PanelContainer.prototype.goto_index = function(index_param) {
  if (this.index != index_param) {
    index_param = index_param <= 0 ? 0 : index_param;
    index_param = index_param >= this.max_index ? this.max_index : index_param;
    this.index = index_param;
    this.update_position();

    this.current_panel = this.panel_array[this.index];

    if(this.resize_height){
      this.element_height = this.current_panel.height();
      TweenMax.to(this.element, 0.8, {height: this.element_height});
    }

    this.dispatchEvent(new goog.events.Event(manic.ui.PanelContainer.ON_CHANGE));
  }
};

/**
 * method_04
 * @param {number} index_param
 */
manic.ui.PanelContainer.prototype.goto_index_force = function(index_param) {
  index_param = index_param <= 0 ? 0 : index_param;
  index_param = index_param >= this.max_index ? this.max_index : index_param;
  this.index = index_param;
  this.update_position();

  this.current_panel = this.panel_array[this.index];

  //this.dispatchEvent(new goog.events.Event(manic.ui.PanelContainer.ON_CHANGE));
};

/**
 * goto next panel
 */
manic.ui.PanelContainer.prototype.next = function() {
  var target_index = this.index + 1;
  if (target_index <= (this.panel_array.length - 1)) {
    this.goto_index(target_index);
  }
};

/**
 * goto prev panel
 */
manic.ui.PanelContainer.prototype.prev = function() {
  var target_index = this.index - 1;
  if (target_index >= 0) {
    this.goto_index(target_index);
  }
};


/**
 * create / update panel from array
 * used in sga.component.PersonCanvas
 * @param  {array} array_param
 */
manic.ui.PanelContainer.prototype.create_panels_from_array = function(array_param) {
  var arr = array_param;
  this.container.empty();

  var fragment = $(document.createDocumentFragment());
  var panel_item = null;
  for (var i = 0, l = arr.length; i < l; i++) {
    panel_item = $('<div class="panel"></div>');
    panel_item.append($('' + arr[i]));

    //console.log("" + arr[i]);

    fragment.append(panel_item);
  }

  this.container.append(fragment);

  this.create_panels();
  this.update_layout();
  this.goto_index_force(0);
};

/**
 * create / update panel from array
 * used in sga.component.PersonCanvas
 * @param  {array} array_param
 */
manic.ui.PanelContainer.prototype.create_panels_from_array_with_inner = function(array_param) {
  var arr = array_param;
  this.container.empty();

  var fragment = $(document.createDocumentFragment());
  var panel_item = null;
  var panel_inner = null;
  for (var i = 0, l = arr.length; i < l; i++) {
    panel_item = $('<div class="panel"></div>');
    panel_inner = $('<div class="panel-inner"></div>');

    panel_inner.append($('' + arr[i]));
    panel_item.append(panel_inner);

    //console.log("" + arr[i]);

    fragment.append(panel_item);
  }

  this.container.append(fragment);

  this.create_panels();
  this.update_layout();
  this.goto_index_force(0);
};



/**
 * on_window_resize description
 * @param  {object} event
 */
manic.ui.PanelContainer.prototype.on_window_resize = function(event){
  this.update_layout();
}