/**
 * Manic Google Map
 *
 * Requires:
 *
 * (google map api)
 * <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
 *
 * For styling maps:
 * http://www.mapstylr.com/style/light-monochrome/
 *
 *
 */

goog.provide('manic.google.Map');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Google Map constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.google.Map = function(options, element) {
  goog.events.EventTarget.call(this);

  this.options = $.extend({}, manic.google.Map.DEFAULT, options);
  this.element = element;

  this.map = null;
  this.overlay = null;
  this.center_point = null;

  this.window_width = 0;
  this.window_height = 0;
  this.window = $(window);

  this.overlay_created = false;
  this.has_google = false;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // one test should be enough
  if (goog.isDefAndNotNull(window.google) && 
      goog.isDefAndNotNull(google.maps) && 
      goog.isDefAndNotNull(google.maps.LatLng)){

    this.has_google = true;
  } else {

    this.has_google = false;
  }

  if(this.has_google == true){

    this.center_point = new google.maps.LatLng(this.options['lat'], this.options['lng']);

    this.load_google_map();
    this.create_overlay();

    this.window.resize(this.on_window_resize.bind(this));
    this.on_window_resize();
  }


  //console.log('init');
};
goog.inherits(manic.google.Map, goog.events.EventTarget);

/**
 * default options for Google Map
 * @const {object}
 */
manic.google.Map.DEFAULT = {
  'lat': 62.323907,
  'lng': -150.109291,
  'zoom': 17,
  'marker_dom': null,
  'has_scrollwheel': true,

  'marker_image': '',

  // previous styles found in old code

  // https://developers.google.com/maps/documentation/javascript/styling?hl=pl
  // http://journal.supereightstudio.com/text/custom-google-maps-api-v3-styles/
  // google_style_array: [{"featureType":"all","stylers":[{"saturation":"-100"},{"lightness":"60"}]}]

  // added removing poi code
  // http://googlegeodevelopers.blogspot.sg/2011/08/business-icons-and-styling-across.html
  'google_style_array': [
    {'featureType': 'all', 'stylers': [{'saturation': '-100'}, {'lightness': '60'}]},                     // desaturate map

    {'featureType': 'poi.business', 'elementType': 'labels', 'stylers': [{ 'visibility': 'off' }]},           // make business poi invisible

    {'featureType': 'poi', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#e1e9eb' }]},   // make other poi less visible
    {'featureType': 'poi', 'elementType': 'labels.icon', 'stylers': [{'lightness': '60'}]}             // same
  ]
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

/**
 * method_01
 */
manic.google.Map.prototype.load_google_map = function() {

  this.map = new google.maps.Map(this.element[0], {
    'mapTypeControlOptions': {
      'mapTypeIds': ['Styled']
    },
    'center': this.center_point,
    'zoom': this.options['zoom'],
    'disableDefaultUI': true,
    'scrollwheel': this.options['has_scrollwheel'],
    'disableDoubleClickZoom': true,
    'mapTypeId': 'Styled'
  });

  // copied from the web somewhere...
  var styledMapType = new google.maps.StyledMapType(this.options['google_style_array'], { 'name': 'Styled' });

  // could fail in the compiler
  //this.map.mapTypes.set('Styled', styledMapType);
  this.map.mapTypes['set']('Styled', styledMapType);

};

/**
 * method_02
 */
manic.google.Map.prototype.create_overlay = function() {

  
  if (goog.isDefAndNotNull(google) && 
      goog.isDefAndNotNull(google.maps) && 
      goog.isDefAndNotNull(google.maps.OverlayView)){

    this.overlay_created = true;
    this.overlay = new ManicGoogleMapOverlay(this.center_point, this.map);
  }

};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * load a pair of lat lng coordinates
 * @param  {number} lat_param
 * @param  {number} lng_param
 */
manic.google.Map.prototype.load_coordinates = function(lat_param , lng_param) {
  if(this.has_google == true){
    var options = {
      'center': new google.maps.LatLng(lat_param, lng_param)
    };

    this.map.setOptions(options);
  }
};

/**
 * move the map by x,y pixels
 * @param  {number} param_x
 * @param  {number} param_y
 */
manic.google.Map.prototype.translate_center = function(param_x, param_y) {
  if(this.has_google == true){
    this.map.panBy(param_x, param_y);
  }
};

/**
 * add document to overlay
 * @param {object} element_param document element
 */
manic.google.Map.prototype.add_to_overlay = function(element_param) {

  if(this.has_google == true){
    if (goog.isDefAndNotNull(this.overlay.element) && 
        this.overlay_created == true) {

      this.overlay.element.append(element_param);

    }
  }

};

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * on_some_event
 * @param  {object} event
 */
manic.google.Map.prototype.on_window_resize = function(event) {
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




















// maybe this should be an external file...

//     _____     _______ ____  _        _ __   __   ____ ___  ____  _____
//    / _ \ \   / / ____|  _ \| |      / \\ \ / /  / ___/ _ \|  _ \| ____|
//   | | | \ \ / /|  _| | |_) | |     / _ \\ V /  | |  | | | | | | |  _|
//   | |_| |\ V / | |___|  _ <| |___ / ___ \| |   | |__| |_| | |_| | |___
//    \___/  \_/  |_____|_| \_\_____/_/   \_\_|    \____\___/|____/|_____|
//

// from
// https://developers.google.com/maps/documentation/javascript/examples/overlay-hideshow

if(window.google){

  if (google != undefined && google != null){
    if (goog.isDefAndNotNull(google.maps)){
      if (goog.isDefAndNotNull(google.maps.OverlayView)){
        ManicGoogleMapOverlay.prototype = new google.maps.OverlayView();
      }
    }
  }
}

/**
 * an overlay of the map
 * @param {*} center
 * @param {*} map
 * @constructor
 */
function ManicGoogleMapOverlay(center, map) {
  this.center_point = center;
  this.map_ = map;

  this.element = null;
  this.element = $(document.createElement('div'));
  this.element.addClass('manic-google-map-overlay');

  this.setMap(map);
}

/**
 * on add
 * @override
 */
ManicGoogleMapOverlay.prototype.onAdd = function() {

  var panes = this.getPanes();
  $(panes['overlayImage']).append(this.element);
};

/**
 * draw
 * @override
 */
ManicGoogleMapOverlay.prototype.draw = function() {

  var overlayProjection = this.getProjection();
  var center_point = overlayProjection['fromLatLngToDivPixel'](this.center_point);

  this.element.css({
    top: center_point['y'] + 'px',
    left: center_point['x'] + 'px'
  });
};

/**
 * on remove
 * @override
 */
ManicGoogleMapOverlay.prototype.onRemove = function() {
  this.element.remove();
};

/**
 * hide
 * @override
 */
ManicGoogleMapOverlay.prototype.hide = function() {
  this.element.hide(0);
};

/**
 * show
 * @override
 */
ManicGoogleMapOverlay.prototype.show = function() {
  this.element.show(0);
};

/**
 * toggle
 * @override
 */
ManicGoogleMapOverlay.prototype.toggle = function() {
  this.element.toggle(0);
};

/**
 * toggle dom
 * @override
 */
ManicGoogleMapOverlay.prototype.toggleDOM = function() {
  if (this.getMap()) {
    // Note: setMap(null) calls OverlayView.onRemove()
    this.setMap(null);
  } else {
    this.setMap(this.map_);
  }
};
