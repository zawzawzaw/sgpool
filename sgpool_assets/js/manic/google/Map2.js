goog.provide('manic.google.Map2');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

            



/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.google.Map2 = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.google.Map2.DEFAULT, options);
  this.element = element;

  // if class has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, manic.google.Map2.DEFAULT, options);
  
  this.map = null;
  this.center_lat = 0;
  this.center_lng = 0;
  this.center_point = null;

  this.window_width = 0;
  this.window_height = 0;
  this.window = $(window);

  this.has_google = false;

  this.home_icon = '';
  this.marker_icon = '';

  

  
  // one test should be enough
  if (goog.isDefAndNotNull(window.google) && 
      goog.isDefAndNotNull(google.maps) && 
      goog.isDefAndNotNull(google.maps.LatLng)){

    this.has_google = true;
  } else {

    this.has_google = false;
  }

  if(this.has_google == true){


    var target_lat = this.element.attr('data-lat');
    var target_lng = this.element.attr('data-lng');

    if (goog.isDefAndNotNull(target_lat) && 
        target_lat != '' && 
        goog.isDefAndNotNull(target_lng) && 
        target_lng != ''){


        // IMPORTANT !!
        
        this.init();

        // IMPORTANT !!

    } else {
      // console.log('manic.google.Map2: Missing data-lng or data-lat attributes')
    }
  } else {
    // console.log('manic.google.Map2: google maps api not instanciated');
  }

  // console.log('manic.google.Map2: init');

};
goog.inherits(manic.google.Map2, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
manic.google.Map2.DEFAULT = {
  'zoom': 17,
  'zoom_control': true,
  'has_scrollwheel': true,

  'google_style_array': [
    {'featureType': 'all', 'stylers': [{'saturation': '-100'}, {'lightness': '60'}]},                     // desaturate map

    {'featureType': 'poi.business', 'elementType': 'labels', 'stylers': [{ 'visibility': 'off' }]},           // make business poi invisible

    {'featureType': 'poi', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#e1e9eb' }]},   // make other poi less visible
    {'featureType': 'poi', 'elementType': 'labels.icon', 'stylers': [{'lightness': '60'}]}             // same
  ]
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
manic.google.Map2.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
manic.google.Map2.EVENT_02 = '';







//    ___ _   _ ___ _____
//   |_ _| \ | |_ _|_   _|
//    | ||  \| || |  | |
//    | || |\  || |  | |
//   |___|_| \_|___| |_|
//

// Must pass the checks first
manic.google.Map2.prototype.init = function() {

  var target_lat = this.element.attr('data-lat');
  var target_lng = this.element.attr('data-lng');

  this.center_lat = parseFloat(target_lat);
  this.center_lng = parseFloat(target_lng);
  this.center_point = new google.maps.LatLng(this.center_lat, this.center_lng);


  // get url of custom icons
  if (goog.isDefAndNotNull(this.element.attr('data-home-icon')) && this.element.attr('data-home-icon') != '') {
    this.home_icon = this.element.attr('data-home-icon');
  }

  if (goog.isDefAndNotNull(this.element.attr('data-marker-icon')) && this.element.attr('data-marker-icon') != '') {
    this.marker_icon = this.element.attr('data-marker-icon');    
  }

  
  


  this.create_google_map();

  this.window.resize(this.on_window_resize.bind(this));
  this.on_window_resize();

};


//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//

manic.google.Map2.prototype.create_google_map = function(){
  this.map = new google.maps.Map(this.element[0], {
    'mapTypeControlOptions': {
      'mapTypeIds': ['Styled']
    },
    'center': this.center_point,
    'zoom': this.options['zoom'],
    'disableDefaultUI': true,
    'scrollwheel': this.options['has_scrollwheel'],
    'disableDoubleClickZoom': true,


    'zoomControl': this.options['zoom_control'],
    'mapTypeId': 'Styled'
  });


  // set as a styled map
  var styledMapType = new google.maps.StyledMapType(this.options['google_style_array'], { 'name': 'Styled' });
  this.map.mapTypes['set']('Styled', styledMapType);


  // create home marker
  var data_obj = {
    position: {lat: this.center_lat, lng: this.center_lng},
    map: this.map
  };

  if (this.home_icon != '') {
    data_obj.icon = this.home_icon;
  }

  this.home_marker = new google.maps.Marker(data_obj);
  
  this.home_marker.addListener('click', function(event) {
    this.map.panTo(new google.maps.LatLng(this.center_lat, this.center_lng));
  }.bind(this));

};



//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//



manic.google.Map2.prototype.private_method_02 = function() {};
manic.google.Map2.prototype.private_method_03 = function() {};
manic.google.Map2.prototype.private_method_04 = function() {};
manic.google.Map2.prototype.private_method_05 = function() {};
manic.google.Map2.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.google.Map2.prototype.public_method_01 = function() {};
manic.google.Map2.prototype.public_method_02 = function() {};
manic.google.Map2.prototype.public_method_03 = function() {};
manic.google.Map2.prototype.public_method_04 = function() {};
manic.google.Map2.prototype.public_method_05 = function() {};
manic.google.Map2.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
manic.google.Map2.prototype.on_window_resize = function(event) {
  if (this.overlay_created == true && 
      goog.isDefAndNotNull(this.overlay.element)) {
    var element_width = this.element.width();
    var element_height = this.element.height();

    this.overlay.element.css({
      width: element_width + 'px',
      height: element_height + 'px'
    });
  }
};

/**
 * @param {object} event
 */
manic.google.Map2.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
manic.google.Map2.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
manic.google.Map2.prototype.on_event_handler_04 = function(event) {
};






manic.google.Map2.prototype.sample_method_calls = function() {

  // sample override
  manic.google.Map2.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(manic.google.Map2.EVENT_01));
};