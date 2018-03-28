goog.provide('sgpool.page.Gallery');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.HoverItem');

goog.require('sgpool.page.Default');


/**
 * The Gallery constructor
 * @inheritDoc
 * @constructor
 * @extends {sgpool.page.Default}
 */
sgpool.page.Gallery = function(options, element) {

  sgpool.page.Default.call(this, options, element);
  this.options = $.extend(this.options, sgpool.page.Gallery.DEFAULT, options);


  console.log('sgpool.page.Gallery: init');
};
goog.inherits(sgpool.page.Gallery, sgpool.page.Default);


/**
 * like jQuery options
 * @const {object}
 */
sgpool.page.Gallery.DEFAULT = {
};

/**
 * Gallery Event Constant
 * @const
 * @type {string}
 */
sgpool.page.Gallery.EVENT_01 = '';


//    ___ _   _ ___ _____
//   |_ _| \ | |_ _|_   _|
//    | ||  \| || |  | |
//    | || |\  || |  | |
//   |___|_| \_|___| |_|
//


/**
 * @override
 * @inheritDoc
 */
sgpool.page.Gallery.prototype.init = function() {

  this.create_event_slider();
  this.create_event_grid_slider();

  sgpool.page.Gallery.superClass_.init.call(this);
  
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

sgpool.page.Gallery.prototype.create_event_slider = function() {

    $(".page-gallery-event-slider").not('.slick-initialized').slick({
      'speed': 350,
      'dots': true,
      'arrows': true,
      'infinite': true,
      'slidesToShow': 1,
      'slidesToScroll': 1,
      'pauseOnHover': true,
      'autoplay': false,
      'autoplaySpeed': 4000,
      'centerMode': true,
      'centerPadding': '200px',
      'responsive': [
        {
          breakpoint: 1025,
          settings: {
            "centerPadding": "100px"
          }
        },
        {
          breakpoint: 992,
          settings: {
            "centerPadding": "0px",
            "dots": false
          }
        }
      ]
    });

    $('.page-gallery-event-slider-item').click(function() {      

      if(!$(this).hasClass("slick-current")) {
        $(".page-gallery-event-slider").slick('slickGoTo', $(this).data("slick-index")); 
      }
    
    });

};

sgpool.page.Gallery.prototype.create_event_grid_slider = function() {
  $(".page-gallery-event-grid-slider").slick({
    'speed': 350,
    'dots': false,
    'arrows': true,
    'infinite': true,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'pauseOnHover': true,
    'autoplay': false,
    'autoplaySpeed': 4000    
  });
}

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
sgpool.page.Gallery.prototype.on_event_handler_02 = function(event) {
};



sgpool.page.Gallery.prototype.sample_method_calls = function() {

  // sample override
  sgpool.page.Gallery.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(sgpool.page.Gallery.EVENT_01));
};



//    _        _ __   _____  _   _ _____
//   | |      / \\ \ / / _ \| | | |_   _|
//   | |     / _ \\ V / | | | | | | | |
//   | |___ / ___ \| || |_| | |_| | | |
//   |_____/_/   \_\_| \___/ \___/  |_|
//

/**
 * @override
 * @inheritDoc
 */
sgpool.page.Gallery.prototype.update_page_layout = function() {

  sgpool.page.Gallery.superClass_.update_page_layout.call(this);

  /*
  if (manic.IS_MOBILE == true){

    this.banner_image.css({
      'height': this.window_height + 'px'
    });

  } else {

    this.banner_image.css({
      'height': ''
    });

  }
  */

}


//    _   _    _    ____  _   _ _____  _    ____ ____
//   | | | |  / \  / ___|| | | |_   _|/ \  / ___/ ___|
//   | |_| | / _ \ \___ \| |_| | | | / _ \| |  _\___ \
//   |  _  |/ ___ \ ___) |  _  | | |/ ___ \ |_| |___) |
//   |_| |_/_/   \_\____/|_| |_| |_/_/   \_\____|____/
//


/**
 * @override
 * @inheritDoc
 */
sgpool.page.Gallery.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  sgpool.page.Gallery.superClass_.scroll_to_target.call(this, str_param, str_param_2, str_param_3);
  

  
}

/**
 * @override
 * @inheritDoc
 */
sgpool.page.Gallery.prototype.on_scroll_to_no_target = function() {
  sgpool.page.Gallery.superClass_.on_scroll_to_no_target.call(this);

  
}



goog.exportSymbol('sgpool.page.Gallery', sgpool.page.Gallery);