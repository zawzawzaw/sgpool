
goog.provide('manic.ui.ImageContainerPadding');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.ImageContainer');


/**
 * The ImageContainerPadding constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.ImageContainerPadding = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.ImageContainerPadding.DEFAULT, options);
  this.element = element;

  this.element_height = 0;
  
  this.data_y = 1080 / 2;   // centered by default
  this.data_offset_y = 0;
  this.padding_y = 0;


  this.target_image_container_element = this.options['target'];

  this.min_padding = this.options['min-padding'];

  /**
   * @type {manic.ui.ImageContainer}
   */
  this.target_image_container = null;


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  this.element_height = Math.abs(this.element.height());

  if (goog.isDefAndNotNull(this.element.attr('data-y'))) {
    this.data_y = parseInt( this.element.attr('data-y') );
  } else {
    // console.log('data-y attribute is MISSING!!');
    // console.log(this.element);
  }



  if (goog.isDefAndNotNull(this.element.attr('data-offset-y'))) {
    this.data_offset_y = parseInt( this.element.attr('data-offset-y') );
  } else {
  }
  
  

  this.get_image_container();


  // console.log('init');
};
goog.inherits(manic.ui.ImageContainerPadding, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for ImageContainerPadding
 * @const {object}
 */
manic.ui.ImageContainerPadding.DEFAULT = {
  'target': null,
  'min-padding': 0
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.ImageContainerPadding.prototype.get_image_container = function() {

  this.target_image_container = this.target_image_container_element.data('manic.ui.ImageContainer');


  if(goog.isDefAndNotNull(this.target_image_container)){
    goog.events.listen(this.target_image_container,manic.ui.ImageContainer.ON_UPDATE_LAYOUT, this.on_target_image_container_update_layout.bind(this));
    this.on_target_image_container_update_layout(null);
  }
  
};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.ImageContainerPadding.prototype.force_update_layout = function() {
  this.on_target_image_container_update_layout(null);
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
manic.ui.ImageContainerPadding.prototype.on_target_image_container_update_layout = function(event) {

  //console.log('on target image container update layout');

  this.element_height = Math.abs(this.element.height());

  //console.log('this.element_height: ' + this.element_height);
  //console.log('this.data_y: ' + this.data_y);
  
  //console.log('this.target_image_container.original_image_height: ' + this.target_image_container.original_image_height);
  //console.log('this.target_image_container.target_height: ' + this.target_image_container.target_height);
  //console.log('this.target_image_container.target_y: ' + this.target_image_container.target_y)    ;


  var percentage_y = this.data_y / this.target_image_container.original_image_height;
  var scaled_y = percentage_y * this.target_image_container.target_height;
  var center_y = scaled_y + this.target_image_container.target_y;
  this.padding_y = Math.round(center_y - (this.element_height/2));

  //this.data_offset_y += this.data_offset_y;
  this.padding_y += this.data_offset_y;
  
  // console.log('this.data_offset_y: ' + this.data_offset_y);
  
  this.padding_y = this.padding_y <= this.min_padding ? this.min_padding : this.padding_y;
  

  //console.log('this.padding_y: ' + this.padding_y);

  this.element.css({
    paddingTop: this.padding_y + 'px'
  });

};
