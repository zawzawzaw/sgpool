/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.events.EventDispatcher}
 * @param {number=} duration
 * @param {Object=} vars
 */
com.greensock.core.Animation = function(duration, vars) {};

/**
 * @type {*}
 */
com.greensock.core.Animation.prototype.data;

/**
 * @type {com.greensock.Ticker}
 */
com.greensock.core.Animation.ticker;


/**
 * @type {com.greensock.core.SimpleTimeline}
 */
com.greensock.core.Animation.prototype.timeline;


/**
 * @type {Object}
 */
com.greensock.core.Animation.prototype.vars;

/**
 * @param {number} value
 * @return {*}
 */
com.greensock.core.Animation.prototype.delay = function(value) {};
  
/**
 * @param {number} value
 * @return {*}
 */   
com.greensock.core.Animation.prototype.duration = function(value) {};

/**
 * @param {string} type
 * @param {Function=} callback
 * @param {Object=} params
 * @param {*=} scope
 * @return {*}
 */
com.greensock.core.Animation.prototype.eventCallback = function(type, callback, params, scope) {};

/**
 * @return {*}
 */
com.greensock.core.Animation.prototype.invalidate = function() {};

/**
 * @param {Object=} vars
 * @param {Object=} target
 * @return {*}
 */
com.greensock.core.Animation.prototype.kill = function(vars, target) {};

/**
 * @param {*=} atTime
 * @param {boolean=} suppressEvents
 * @return {*}
 */
com.greensock.core.Animation.prototype.pause = function(atTime, suppressEvents) {};

/**
 * @param {boolean=} value
 * @return {*}
 */
com.greensock.core.Animation.prototype.paused = function(value) {};

/**
 * @param {*=} from
 * @param {boolean=} suppressEvents
 * @return {*}
 */
com.greensock.core.Animation.prototype.play = function(from, suppressEvents) {};

/**
 * @param {boolean=} includeDelay
 * @param {boolean=} suppressEvents
 * @return {*}
 */
com.greensock.core.Animation.prototype.restart = function(includeDelay, suppressEvents) {};

/**
 * @param {*=} from
 * @param {boolean=} suppressEvents
 * @return {*}
 */
com.greensock.core.Animation.prototype.resume = function(from, suppressEvents) {};

/**
 * @param {*=} from
 * @param {boolean=} suppressEvents
 * @return {*}
 */
com.greensock.core.Animation.prototype.reverse = function(from, suppressEvents) {};

/**
 * @param {boolean=} value
 * @return {*}
 */
com.greensock.core.Animation.prototype.reversed = function(value) {};

/**
 * @param {*=} time
 * @param {boolean=} suppressEvents
 * @return {*}
 */
com.greensock.core.Animation.prototype.seek = function(time, suppressEvents) {};

/**
 * @param {number=} value
 * @return {*}
 */
com.greensock.core.Animation.prototype.startTime = function(value) {};

/**
 * @param {number=} value
 * @param {boolean=} suppressEvents
 * @return {*}
 */
com.greensock.core.Animation.prototype.time = function(value, suppressEvents) {};

/**
 * @param {number=} value
 * @return {*}
 */
com.greensock.core.Animation.prototype.timeScale = function(value) {};

/**
 * @param {number=} value
 * @return {*}
 */
com.greensock.core.Animation.prototype.totalDuration = function(value) {};

/**
 * @param {number=} time
 * @param {boolean=} suppressEvents
 * @return {*}
 */
com.greensock.core.Animation.prototype.totalTime = function(time, suppressEvents) {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Back = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Back.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Back.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Back.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.plugins.TweenPlugin}
 */
com.greensock.plugins.BezierPlugin  = function() {};

/**
 * @param {Object} values
 * @param {number=} curviness
 * @param {boolean=} quadratic
 * @param {string=} correlate
 * @param {Object=} prepend
 * @param {boolean=} calcDifs
 * @return {Object}
 */
com.greensock.plugins.BezierPlugin.bezierThrough = function(values, curviness, quadratic, correlate, prepend, calcDifs) {};

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @return {Object}
 */
com.greensock.plugins.BezierPlugin.cubicToQuadratic = function(a, b, c, d) {};

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {Object}
 */
com.greensock.plugins.BezierPlugin.quadraticToCubic = function(a, b, c) {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Circ = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Circ.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Circ.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Circ.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Bounce = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Bounce.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Bounce.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Bounce.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.plugins.TweenPlugin}
 */
com.greensock.plugins.CSSPlugin = function() {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.plugins.TweenPlugin}
 */
com.greensock.plugins.ColorPropsPlugin = function() {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.plugins.TweenPlugin}
 */
com.greensock.plugins.CSSRulePlugin = function() {};

/**
 * @param {string} selector
 * @return {Object}
 */
com.greensock.plugins.CSSRulePlugin.getRule = function(selector) {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Cubic = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Cubic.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Cubic.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Cubic.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 * @param {Function=} func
 * @param {Object=} extraParams
 * @param {number=} type
 * @param {number=} power
 */
com.greensock.easing.Ease = function(func, extraParams, type, power) {};

/**
 * @param {number} p
 * @return {number}
 */
com.greensock.easing.Ease.prototype.getRatio = function(p) {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.EaseLookup = function() {};

/**
 * @param {string} name
 * @return {com.greensock.easing.Ease}
 */
com.greensock.easing.EaseLookup.find = function(name) {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.plugins.TweenPlugin}
 */
com.greensock.plugins.EaselPlugin = function() {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Elastic = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Elastic.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Elastic.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Elastic.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.events.EventDispatcher = function() {};

/**
 * @param {string} type
 * @param {Function|Object} callback
 * @param {Object} scope
 * @param {*=} useParam
 * @param {number=} priority
 */
com.greensock.events.EventDispatcher.prototype.addEventListener = function(type, callback, scope, useParam, priority) {};

/**
 * @param {string} type
 * @param {Function|Object} callback
 */
com.greensock.events.EventDispatcher.prototype.removeEventListener = function(type, callback) {};

/**
 * @param {string} type
 */
com.greensock.events.EventDispatcher.prototype.dispatchEvent = function(type) {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Expo = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Expo.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Expo.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Expo.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @type {Object}
 */
var com = {};

/**
 * @type {Object}
 */
com.greensock = {};

/**
 * @type {Object}
 */
com.greensock.core = {};

/**
 * @type {Object}
 */
com.greensock.easing = {};


/**
 * @type {Object}
 */
com.greensock.plugins = {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 * @param {Function=} func
 * @param {Object=} extraParams
 * @param {number=} type
 * @param {number=} power
 */
com.greensock.easing.Linear = function(func, extraParams, type, power) {};

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.ease;

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.easeIn;

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.easeInOut;

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.easeNone;

/**
 * @type {com.greensock.easing.Linear}
 */
com.greensock.easing.Linear.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Power0 = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Power0.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Power0.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Power0.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Power1 = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Power1.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Power1.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Power1.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Power2 = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Power2.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Power2.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Power2.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Power3 = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Power3.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Power3.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Power3.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Power4 = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Power4.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Power4.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Power4.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Quad = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Quad.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Quad.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Quad.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Quart = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Quart.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Quart.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Quart.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Quint = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Quint.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Quint.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Quint.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.plugins.TweenPlugin}
 */
com.greensock.plugins.RaphaelPlugin = function() {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.plugins.TweenPlugin}
 */
com.greensock.plugins.RoundPropsPlugin = function() {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.plugins.TweenPlugin}
 */
com.greensock.plugins.ScrollToPlugin = function() {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.core.Animation}
 * @param {Object} vars
 */
com.greensock.core.SimpleTimeline = function(vars) {};

/**
 * @type {boolean}
 */
com.greensock.core.SimpleTimeline.prototype.autoRemoveChildren;

/**
 * @type {boolean}
 */
com.greensock.core.SimpleTimeline.prototype.smoothChildTiming;

/**
 * @param {*} tween
 * @param {*=} time
 * @return {*}
 */
com.greensock.core.SimpleTimeline.prototype.insert = function(tween, time) {};
    
/**
 * @param {number} time
 * @param {boolean=} suppressEvents
 * @param {boolean=} force
 */
com.greensock.core.SimpleTimeline.prototype.render = function(time, suppressEvents, force) {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Sine = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Sine.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Sine.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Sine.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 * @param {number=} linearRatio
 * @param {number=} power
 * @param {boolean=} yoyoMode
 */
com.greensock.easing.SlowMo = function(linearRatio, power, yoyoMode) {};

/**
 * @type {Object}
 */
com.greensock.easing.SlowMo.ease;

/**
 * @param {number=} linearRatio
 * @param {number=} power
 * @param {boolean=} yoyoMode
 * @return {com.greensock.easing.SlowMo}
 */
com.greensock.easing.SlowMo.config = function(linearRatio, power, yoyoMode) {};

/**
 * @param {number} p
 * @return {number}
 * @override
 */
com.greensock.easing.SlowMo.prototype.getRatio = function(p) {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.easing.Ease}
 * @param {number} steps
 */
com.greensock.easing.SteppedEase = function(steps) {};

/**
 * @param {number} steps
 * @return {com.greensock.easing.SteppedEase}
 */
com.greensock.easing.SteppedEase.config = function(steps) {};

/**
 * @param {number} p
 * @return {number}
 * @override
 */
com.greensock.easing.SteppedEase.prototype.getRatio = function(p) {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.easing.Strong = function() {};

/**
 * @type {Object}
 */
com.greensock.easing.Strong.easeIn;

/**
 * @type {Object}
 */
com.greensock.easing.Strong.easeInOut;

/**
 * @type {Object}
 */
com.greensock.easing.Strong.easeOut;

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.events.EventDispatcher}
 */
com.greensock.Ticker = function() {};

/**
 * @type {number}
 */
com.greensock.TweenLite.prototype.frame;

/**
 * @type {number}
 */
com.greensock.TweenLite.prototype.time;

/**
 * @param {number} value
 */
com.greensock.Ticker.prototype.fps = function(value) {};

/**
 * 
 */
com.greensock.Ticker.prototype.sleep = function() {};

/**
 * 
 */
com.greensock.Ticker.prototype.tick = function() {};

/**
 * @param {boolean} value
 */
com.greensock.Ticker.prototype.useRAF = function(value) {};

/**
 * 
 */
com.greensock.Ticker.prototype.wake = function() {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.core.SimpleTimeline}
 * @param {Object=} vars
 */
com.greensock.TimelineLite = function(vars) {};

/**
 * @param {string} label
 * @param {number} time
 * @return {*}
 */
com.greensock.TimelineLite.prototype.addLabel = function(label, time) {};

/**
 * @param {*} value
 * @param {number=} offset
 * @return {*}
 */
com.greensock.TimelineLite.prototype.append = function(value, offset) {};

/**
 * @param {Object} tweens
 * @param {number=} offset
 * @param {string=} align
 * @param {number=} stagger
 * @return {*}
 */
com.greensock.TimelineLite.prototype.appendMultiple = function(tweens, offset, align, stagger) {};

/**
 * @param {Function} callback
 * @param {Object=} params
 * @param {*=} scope
 * @param {number=} offset
 * @param {*=} baseTimeOrLabel
 * @return {*}
 */
com.greensock.TimelineLite.prototype.call = function(callback, params, scope, offset, baseTimeOrLabel) {}

/**
 * @param {boolean=} labels
 * @return {*}
 */
com.greensock.TimelineLite.prototype.clear = function(labels) {};

/**
 * @param {number} value
 * @return {*}
 * @override
 */
com.greensock.TimelineLite.prototype.duration = function(value) {};

/**
 * @param {Object=} vars
 * @param {boolean=} omitDelayedCalls
 * @return {com.greensock.TimelineLite}
 * @override
 */
com.greensock.TimelineLite.exportRoot = function(vars, omitDelayedCalls) {};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @param {number=} offset
 * @param {*=} baseTimeOrLabel
 * @return {*}
 */
com.greensock.TimelineLite.prototype.from = function(target, duration, vars, offset, baseTimeOrLabel) {};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @param {number=} offset
 * @param {*=} baseTimeOrLabel
 * @return {*}
 */
com.greensock.TimelineLite.prototype.fromTo = function(target, duration, fromVars, toVars, offset, baseTimeOrLabel) {};

/**
 * @param {boolean=} nested
 * @param {boolean=} tweens
 * @param {boolean=} timelines
 * @param {number=} ignoreBeforeTime
 * @return {Object}
 */
com.greensock.TimelineLite.prototype.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {};

/**
 * @param {string} label
 * @return {number}
 */
com.greensock.TimelineLite.prototype.getLabelTime = function(label) {}

/**
 * @param {Object} target
 * @param {boolean=} nested
 * @return {Object}
 */
com.greensock.TimelineLite.prototype.getTweensOf = function(target, nested) {};

/**
 * @param {*} value
 * @param {*=} timeOrLabel
 * @return {*}
 * @override
 */
com.greensock.TimelineLite.prototype.insert = function(value, timeOrLabel) {};

/**
 * @param {Object} tweens
 * @param {*=} timeOrLabel
 * @param {string=} align
 * @param {number=} stagger
 * @return {*}
 */
com.greensock.TimelineLite.prototype.insertMultiple = function(tweens, timeOrLabel, align, stagger) {};

/**
 * @return {*}
 * @override
 */
com.greensock.TimelineLite.prototype.invalidate = function() {};

/**
 * @param {number} value
 * @return {*}
 */
com.greensock.TimelineLite.prototype.progress = function(value) {};

/**
 * @param {*} value
 * @return {*}
 */
com.greensock.TimelineLite.prototype.remove = function(value) {};

/**
 * @param {string} label
 * @return {*}
 */
com.greensock.TimelineLite.prototype.removeLabel = function(label) {};

/**
 * @param {*=} timeOrLabel
 * @param {boolean=} suppressEvents
 * @return {*}
 * @override
 */
com.greensock.TimelineLite.prototype.seek = function(timeOrLabel, suppressEvents) {};

/**
 * @param {Object} target
 * @param {Object} vars
 * @param {number=} offset
 * @param {*=} baseTimeOrLabel
 * @return {*}
 */
com.greensock.TimelineLite.prototype.set = function(target, vars, offset, baseTimeOrLabel) {};

/**
 * @param {number} amount
 * @param {boolean=} adjustLabels
 * @param {number=} ignoreBeforeTime
 * @return {*}
 */ 
com.greensock.TimelineLite.prototype.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {};

/**
 * @param {Object} targets
 * @param {number} duration
 * @param {Object} vars
 * @param {number=} stagger
 * @param {number=} offset
 * @param {*=} baseTimeOrLabel
 * @param {Function=} onCompleteAll
 * @param {Object=} onCompleteAllParams
 * @param {*=} onCompleteAllScope
 * @return {*}
 */ 
com.greensock.TimelineLite.prototype.staggerFrom = function(targets, duration, vars, stagger, offset, baseTimeOrLabel, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {}

/**
 * @param {Object} targets
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @param {number=} stagger
 * @param {number=} offset
 * @param {*=} baseTimeOrLabel
 * @param {Function=} onCompleteAll
 * @param {Object=} onCompleteAllParams
 * @param {*=} onCompleteAllScope
 * @return {*}
 */ 
com.greensock.TimelineLite.prototype.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, offset, baseTimeOrLabel, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {};

/**
 * @param {Object} targets
 * @param {number} duration
 * @param {Object} vars
 * @param {number} stagger
 * @param {number=} offset
 * @param {*=} baseTimeOrLabel
 * @param {Function=} onCompleteAll
 * @param {Object=} onCompleteAllParams
 * @param {*=} onCompleteAllScope
 * @return {*}
 */ 
com.greensock.TimelineLite.prototype.staggerTo = function(targets, duration, vars, stagger, offset, baseTimeOrLabel, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {};

/**
 * @return {*}
 */ 
com.greensock.TimelineLite.prototype.stop = function() {};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @param {number=} offset
 * @param {*=} baseTimeOrLabel
 * @return {*}
 */ 
com.greensock.TimelineLite.prototype.to = function(target, duration, vars, offset, baseTimeOrLabel) {};

/**
 * @param {number=} value
 * @return {*}
 * @override
 */ 
com.greensock.TimelineLite.prototype.totalDuration = function(value) {};

/**
 * @return {boolean}
 */ 
com.greensock.TimelineLite.prototype.usesFrames = function() {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.TimelineLite}
 * @param {Object=} vars
 */
com.greensock.TimelineMax = function(vars) {};

/**
 * @param {Function} callback
 * @param {*} timeOrLabel
 * @param {Object=} params
 * @param {*=} scope
 * @return {com.greensock.TimelineMax}
 */
com.greensock.TimelineMax.prototype.addCallback = function(callback, timeOrLabel, params, scope) {};

/**
 * @param {string=} value
 * @return {*}
 */
com.greensock.TimelineMax.prototype.currentLabel = function(value) {};

/**
 * @param {boolean=} nested
 * @param {boolean=} tweens
 * @param {boolean=} timelines
 * @return {Object}
 */
com.greensock.TimelineMax.prototype.getActive = function(nested, tweens, timelines) {};

/**
 * @param {number} time
 * @return {string}
 */
com.greensock.TimelineMax.prototype.getLabelAfter = function(time) {};

/**
 * @param {number} time
 * @return {string}
 */
com.greensock.TimelineMax.prototype.getLabelBefore = function(time) {};

/**
 * @return {Object}
 */
com.greensock.TimelineMax.prototype.getLabelsArray = function() {};

/**
 * @return {*}
 * @override
 */
com.greensock.TimelineMax.prototype.invalidate = function() {};

/**
 * @param {number} value
 * @return {*}
 * @override
 */
com.greensock.TimelineMax.prototype.progress = function(value) {};

/**
 * @param {Function} callback
 * @param {*=} timeOrLabel
 * @return {com.greensock.TimelineMax}
 */
com.greensock.TimelineMax.prototype.removeCallback = function(callback, timeOrLabel) {};

/**
 * @param {number=} value
 * @return {*}
 */
com.greensock.TimelineMax.prototype.repeat = function(value) {};

/**
 * @param {number=} value
 * @return {*}
 */
com.greensock.TimelineMax.prototype.repeatDelay = function(value) {};

/**
 * @param {number=} value
 * @param {boolean=} suppressEvents
 * @return {*}
 * @override
 */
com.greensock.TimelineMax.prototype.time = function(value, suppressEvents) {};

/**
 * @param {number=} value
 * @return {*}
 * @override
 */
com.greensock.TimelineMax.prototype.totalDuration = function(value) {};

/**
 * @param {number} value
 * @return {*}
 */
com.greensock.TimelineMax.prototype.totalProgress = function(value) {};

/**
 * @param {*} fromTimeOrLabel
 * @param {*} toTimeOrLabel
 * @param {Object=} vars
 * @return {com.greensock.TweenLite}
 */
com.greensock.TimelineMax.prototype.tweenFromTo = function(fromTimeOrLabel, toTimeOrLabel, vars) {};

/**
 * @param {*} timeOrLabel
 * @param {Object=} vars
 * @return {com.greensock.TweenLite}
 */
com.greensock.TimelineMax.prototype.tweenTo = function(timeOrLabel, vars) {};

/**
 * @param {boolean=} value
 * @return {*}
 */
com.greensock.TimelineMax.prototype.yoyo = function(value) {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.core.Animation}
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 */
com.greensock.TweenLite = function(target, duration, vars) {};

/**
 * @type {com.greensock.easing.Ease}
 */
com.greensock.TweenLite.defaultEase;

/**
 * @type {string}
 */
com.greensock.TweenLite.defaultOverwrite;

/**
 * @type {com.greensock.Ticker}
 */
com.greensock.TweenLite.ticker;


/**
 * @type {Object}
 */
com.greensock.TweenLite.prototype.target;

/**
 * @param {number} delay
 * @param {Function} callback
 * @param {Object=} params
 * @param {*=} scope
 * @param {boolean=} useFrames
 * @return {com.greensock.TweenLite}
 */
com.greensock.TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @return {com.greensock.TweenLite}
 */
com.greensock.TweenLite.from = function(target, duration, vars) {};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @return {com.greensock.TweenLite}
 */
com.greensock.TweenLite.fromTo = function(target, duration, fromVars, toVars) {};

/**
 * @param {*} target
 * @return {Object}
 */
com.greensock.TweenLite.getTweensOf = function(target) {};

/**
 * @param {Function} func
 */
com.greensock.TweenLite.killDelayedCallsTo = function(func) {};

/**
 * @param {*} target
 * @param {Object=} vars
 */
com.greensock.TweenLite.killTweensOf = function(target, vars) {};

/**
 * @param {Object} target
 * @param {Object} vars
 * @return {com.greensock.TweenLite}
 */
com.greensock.TweenLite.set = function(target, vars) {};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @return {com.greensock.TweenLite}
 */
com.greensock.TweenLite.to = function(target, duration, vars) {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {com.greensock.TweenLite}
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 */
com.greensock.TweenMax = function(target, duration, vars) {};

/**
 * @type {com.greensock.Ticker}
 */
com.greensock.TweenMax.ticker;

/**
 * @param {number} delay
 * @param {Function} callback
 * @param {Object=} params
 * @param {*=} scope
 * @param {boolean=} useFrames
 * @return {com.greensock.TweenMax}
 */
com.greensock.TweenMax.delayedCall = function(delay, callback, params, scope, useFrames) {};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @return {com.greensock.TweenMax}
 */
com.greensock.TweenMax.from = function(target, duration, vars) {};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @return {com.greensock.TweenMax}
 */
com.greensock.TweenMax.fromTo = function(target, duration, fromVars, toVars) {};

/**
 * @param {boolean=} includeTimelines
 * @return {Object}
 */
com.greensock.TweenMax.getAllTweens = function(includeTimelines) {};

/**
 * @param {*} target
 * @return {Object}
 */
com.greensock.TweenMax.getTweensOf = function(target) {};

/**
 * @param {Object} target
 * @return {boolean}
 */
com.greensock.TweenMax.isTweening = function(target) {};

/**
 * @param {boolean=} complete
 * @param {boolean=} tweens
 * @param {boolean=} delayedCalls
 * @param {boolean=} timelines
 */
com.greensock.TweenMax.killAll = function(complete, tweens, delayedCalls, timelines) {};

/**
 * @param {Object} parent
 * @param {boolean=} complete
 */
com.greensock.TweenMax.killChildTweensOf = function(parent, complete) {};

/**
 * @param {Function} func
 */
com.greensock.TweenMax.killDelayedCallsTo = function(func) {};

/**
 * @param {*} target
 * @param {Object=} vars
 */
com.greensock.TweenMax.killTweensOf = function(target, vars) {};

/**
 * @param {boolean=} tweens
 * @param {boolean=} delayedCalls
 * @param {boolean=} timelines
 */
com.greensock.TweenMax.pauseAll = function(tweens, delayedCalls, timelines) {};

/**
 * @param {number} value
 * @return {*}
 */
com.greensock.TweenMax.prototype.progress = function(value) {};

/**
 * @param {number=} value
 * @return {*}
 */
com.greensock.TweenMax.prototype.repeat = function(value) {}

/**
 * @param {number} value
 * @return {*}
 */
com.greensock.TweenMax.prototype.repeatDelay = function(value) {};

/**
 * @param {boolean=} tweens
 * @param {boolean=} delayedCalls
 * @param {boolean=} timelines
 */
com.greensock.TweenMax.resumeAll = function(tweens, delayedCalls, timelines) {};

/**
 * @param {Object} target
 * @param {Object} vars
 * @return {com.greensock.TweenMax}
 */
com.greensock.TweenMax.set = function(target, vars) {};

/**
 * @param {Object} targets
 * @param {number} duration
 * @param {Object} vars
 * @param {number=} stagger
 * @param {Function=} onCompleteAll
 * @param {Object=} onCompleteAllParams
 * @param {*=} onCompleteAllScope
 * @return {Object}
 */
com.greensock.TweenMax.staggerFrom = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {};

/**
 * @param {Object} targets
 * @param {number} duration
 * @param {Object} fromVars
 * @param {Object} toVars
 * @param {number=} stagger
 * @param {Function=} onCompleteAll
 * @param {Object=} onCompleteAllParams
 * @param {*=} onCompleteAllScope
 * @return {Object}
 */
com.greensock.TweenMax.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {};

/**
 * @param {Object} targets
 * @param {number} duration
 * @param {Object} vars
 * @param {number=} stagger
 * @param {Function=} onCompleteAll
 * @param {Object=} onCompleteAllParams
 * @param {*=} onCompleteAllScope
 * @return {Object}
 */
com.greensock.TweenMax.staggerTo = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {};

/**
 * @param {Object} target
 * @param {number} duration
 * @param {Object} vars
 * @return {com.greensock.TweenMax}
 */
com.greensock.TweenMax.to = function(target, duration, vars) {};

/**
 * @param {number} value
 * @return {*}
 */
com.greensock.TweenMax.prototype.totalProgress = function(value) {};

/**
 * @param {Object} vars
 * @param {boolean=} resetDuration
 * @return {*}
 */
com.greensock.TweenMax.prototype.updateTo = function(vars, resetDuration) {};

/**
 * @param {boolean=} value
 * @return {*}
 */
com.greensock.TweenMax.prototype.yoyo = function(value) {};

/**
 * @fileoverview Externs for the greensock
 * @externs
 */

/**
 * @constructor
 * @extends {Object}
 */
com.greensock.plugins.TweenPlugin = function() {};

/**
 * @param {Object} plugins
 * @return {boolean}
 */
com.greensock.plugins.TweenPlugin.activate = function(plugins) {};