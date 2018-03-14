///////////////////////////////////////
///////////////////////////////////////  //socialite
///////////////////////////////////////

/**
 * @type {object}
 */
var Socialite = {}

/**
 * load description
 * @type {function}
 */
Socialite.load = function(){};

///////////////////////////////////////
///////////////////////////////////////  //videojs
///////////////////////////////////////

/**
 * @type {function}
 * @returns {videojs_instance} the video js object that is returned.
 */
var videojs = function(){};

/**
 * special_videojs
 * @constructor
 */
var videojs_instance = function(){};

/**
 * ready description
 * @param  {function} function_param
 */
videojs_instance.prototype.ready = function(function_param){};

/**
 * ready description
 * @param {string} str
 * @param  {function} function_param
 */
videojs_instance.prototype.on = function(str, function_param){};

/**
 * set current time
 * @param {number=} num_param
 */
videojs_instance.prototype.currentTime = function(num_param){};

/**
 * play
 */
videojs_instance.prototype.play = function(){};

/**
 * pause
 */
videojs_instance.prototype.pause = function(){};

/**
 * @type {object}
 */
videojs_instance.prototype.posterImage = {};

/**
 * duration
 * @return {number} current duration of video...
 */
videojs_instance.prototype.duration = function(){};



///////////////////////////////////////
///////////////////////////////////////  //jstorage.js
///////////////////////////////////////



/**
 * jstorage jquery plugin used for storing cookies
 * @param {string} str
 * @return {*}
 */
$.jStorage.get = function(str){};

/**
 * jstorage jquery plugin used for storing cookies
 * @param {object=} obj
 */
$.jStorage.set = function(obj){};

///////////////////////////////////////
///////////////////////////////////////  //preloadjs-0.4.0.min.js
///////////////////////////////////////

/**
 * @type {object}
 */
var createjs = {};



/**
 * LoadQueue description
 * @param {boolean=} preferXHR   [description]
 * @param {string=} basePath    [description]
 * @param {boolean=} crossOrigin [description]
 * @constructor
 */
createjs.LoadQueue = function(preferXHR, basePath, crossOrigin){};


/**
 * loadManifest description
 * @param  {*} params
 */
createjs.LoadQueue.prototype.loadManifest = function(params){};

/**
 * loadManifest description
 * @param {string} str
 * @return {object}
 */
createjs.LoadQueue.prototype.getResult = function(str){};


/**
 * addEventListener description
 * @param {string} str
 * @param {function} function_param
 */
createjs.LoadQueue.prototype.addEventListener = function(str, function_param){};



///////////////////////////////////////
///////////////////////////////////////  //Odometer
///////////////////////////////////////

/**
 * @param {object} obj_param
 */
var Odometer = function(obj_param){};


///////////////////////////////////////
///////////////////////////////////////  //raphael-min.js
///////////////////////////////////////


/**
 * Raphael description
 * @param {element} element_param
 * @param {number} w
 * @param {number} h
 * @return {raphael_instance}
 */
var Raphael = function(element_param,w,h){};

/**
 * raphael_instance description
 * @constructor
 */
var raphael_instance = function(){};


/**
 * circle description
 * @param  {number} x 
 * @param  {number} y 
 * @param  {number} r 
 * @return {raphael_object}
 */
raphael_instance.prototype.circle = function(x,y,r){};

/**
 * text description
 * @param  {number} x  
 * @param  {number} y  
 * @param  {string} str
 * @return {raphael_object}    
 */
raphael_instance.prototype.text = function(x,y,str){};


/**
 * text description
 * @param  {string} str
 * @return {raphael_object}    
 */
raphael_instance.prototype.path = function(str){};


/**
 * raphael_object description
 * @constructor
 */
var raphael_object = function(){};


/**
 * attr description
 * @param  {object} options
 */
raphael_object.prototype.attr = function(options){};


/**
 * note description
 */
raphael_object.prototype.node = function(){};

/**
 * mouseover description
 * @param  {function} function_param
 */
raphael_object.prototype.mouseover = function(function_param){};

/**
 * mouseout description
 * @param  {function} function_param
 */
raphael_object.prototype.mouseout = function(function_param){};

/**
 * toFront description
 */
raphael_object.prototype.toFront = function(){};





///////////////////////////////////////
///////////////////////////////////////  //google map extern...
///////////////////////////////////////

/**
 * @return {*}
 */
google.maps.OverlayView = function(){};

/**
 * getMap description
 * @return {object}
 */
google.maps.OverlayView.prototype.getMap = function(){};

/**
 * setMap description]
 * @param {object} obj
 */
google.maps.OverlayView.prototype.setMap = function(obj){};

/**
 * getPanes description
 * @return {object}
 */
google.maps.OverlayView.prototype.getPanes = function(){};

/**
 * getProjection description
 * @return {object}
 */
google.maps.OverlayView.prototype.getProjection = function(){};




google.maps.OverlayView.prototype.onAdd = function(){};
google.maps.OverlayView.prototype.draw = function(){};
google.maps.OverlayView.prototype.onRemove = function(){};
google.maps.OverlayView.prototype.hide = function(){};
google.maps.OverlayView.prototype.show = function(){};
google.maps.OverlayView.prototype.toggle = function(){};
google.maps.OverlayView.prototype.toggleDOM = function(){};






/**
 * @constructor
 */
google.maps.LatLng = function(){};

/**
 * @constructor
 */
google.maps.Map = function(){};

google.maps.Map.prototype.mapTypes = function(){};
google.maps.Map.prototype.setOptions = function(){};
google.maps.Map.prototype.panBy = function(){};



/**
 * @constructor
 */
google.maps.StyledMapType = function(){};

/**
 * MobileDetect description
 * @constructor
 */
var MobileDetect = function(){};

/**
 * tablet description
 * @return {boolean}
 */
MobileDetect.prototype.tablet = function(){};

/**
 * mobile description
 * @return {boolean}
 */
MobileDetect.prototype.mobile = function(){};


//    _______        _______ _____ _   _ __  __    _    __  __  ____   _    ____      _    __  __ ____  
//   |_   _\ \      / / ____| ____| \ | |  \/  |  / \   \ \/ / |  _ \ / \  |  _ \    / \  |  \/  / ___| 
//     | |  \ \ /\ / /|  _| |  _| |  \| | |\/| | / _ \   \  /  | |_) / _ \ | |_) |  / _ \ | |\/| \___ \ 
//     | |   \ V  V / | |___| |___| |\  | |  | |/ ___ \  /  \  |  __/ ___ \|  _ <  / ___ \| |  | |___) |
//     |_|    \_/\_/  |_____|_____|_| \_|_|  |_/_/   \_\/_/\_\ |_| /_/   \_\_| \_\/_/   \_\_|  |_|____/ 
//                                                                                                      

// To prevent closure from renaming these properties...

/**
 * @type {object}
 */
var autoAlpha = {};
var onComplete = {};
var onCompleteParams = {};
var onCompleteScope = {};
var onUpdate = {};
var onUpdateParams = {};
var onUpdateScope = {};
var onStart = {};
var onStartParams = {};
var onStartScope = {};

var raphael = {};
var opacity = {};
var scaleX = {};
var scaleY = {};
var tx = {};
var ty = {};
var globalPivot = {};
var opacity = {};
var fade = {};
var bezier = {};
var repeat = {};
var repeatDelay = {};
var yoyo = {};
var rotation = {};

var f = {};
var physics2D = {};
var velocity = {};
var angle = {};
var gravity = {};

var paddingTop = {};
var height = {};
//var top = {};
var fontSize = {};
var marginBottom = {};
var marginTop = {};
var scrollTo = {};
var percent = {};


//    ______        _____ _____ _______   __
//   / ___\ \      / /_ _|  ___|  ___\ \ / /
//   \___ \\ \ /\ / / | || |_  | |_   \ V / 
//    ___) |\ V  V /  | ||  _| |  _|   | |  
//   |____/  \_/\_/  |___|_|   |_|     |_|  
//                                          

var swiffy = {};


/**
 * Stage description
 * @constructor
 * @param {element} element_param [description]
 * @param {object|array} data_param    [description]
 */
swiffy.Stage = function(element_param, data_param, object_param){};

//swiffy.Stage.prototype.