var globalSceneOptions = {};
var triggerElement = {};
var triggerHook = {};
var duration = {};
var offset = {};


/**
 * @constructor
 */
var IScroll = function(){};

/**
 * @type {Number}
 */
IScroll.prototype.y = 0;



IScroll.prototype.refresh = function(){};

/**
 * @param  {String} str_param
 * @param  {function} function_param
 */
IScroll.prototype.on = function(str_param, function_param){};

/**
 * @param  {Element} target_element  [description]
 * @param  {Number} number_param    [description]
 * @param  {Number} number_param_02 [description]
 * @param  {Number} number_param_03 [description]
 */
IScroll.prototype.scrollToElement = function(target_element, number_param, number_param_02, number_param_03){};

/**
 * @param  {Number} number_param    [description]
 * @param  {Number} number_param_02 [description]
 * @param  {Number} number_param_03 [description]
 */
IScroll.prototype.scrollTo = function(number_param, number_param_02, number_param_03){};






/**
 * @type {object}
 */
var ScrollMagic = {};

/**
 * @constructor
 * @param {object=} object_param settings of the controller (Optional)
 */
ScrollMagic.Controller = function(object_param){};

/**
 * @param  {function} function_param
 */
ScrollMagic.Controller.scrollPos = function(function_param){};

ScrollMagic.Controller.update = function(){};

/**
 * @constructor
 * @param {object=} object_param settings of the scene (Optional)
 */
ScrollMagic.Scene = function(object_param){};

/**
 * triggerHook description
 * @param  {number} number_param 
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.triggerHook = function(number_param){};

/**
 * offset description
 * @param  {number} number_param 
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.offset = function(number_param){};

/**
 * duration description
 * @param  {number} number_param 
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.duration = function(number_param){};


/**
 * setPin description
 * @param {string} str_param
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.setPin = function(str_param){};

/**
 * setClassToggle description
 * @param {string} str1_param [description]
 * @param {string} str2_param [description]
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.setClassToggle = function(str1_param, str2_param){};

/**
 * setTween description
 * @param  {object} object_param 
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.setTween = function(object_param){};

/**
 * addTo description
 * @param {ScrollMagic.Controller} controller_param
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.addTo = function(controller_param){};

/**
 * addIndicators description
 * @param {object} object_param [description]
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.addIndicators = function(object_param){};


/**
 * on description
 * @param  {string} str_param
 * @param  {function} function_param
 */
ScrollMagic.Scene.prototype.on = function(str_param, function_param){};


ScrollMagic.Scene.prototype.update = function(){};

