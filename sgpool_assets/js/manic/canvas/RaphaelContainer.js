goog.provide('manic.canvas.RaphaelContainer');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The RaphaelContainer constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.canvas.RaphaelContainer = function(options, element) {
  goog.events.EventTarget.call(this);

  this.options = $.extend({}, manic.canvas.RaphaelContainer.DEFAULT, options);
  this.element = element;

  this.paper = null;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  // raphael init
  this.paper = Raphael(this.element[0], this.options.width, this.options.height);

  //console.log('init');
};
goog.inherits(manic.canvas.RaphaelContainer, goog.events.EventTarget);

/**
 * default options for RaphaelContainer
 * @const {object}
 */
manic.canvas.RaphaelContainer.DEFAULT = {
  'width': 100,
  'height': 100
};
