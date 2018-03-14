goog.provide('manic.util.JsonParser');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The JsonParser constructor
 * @param {object} options The object extendable like jquery plugins
 * @constructor
 */
manic.util.JsonParser = function(options) {
  goog.events.EventTarget.call(this);
  // console.log('init');

  this.options = $.extend({}, manic.util.JsonParser.DEFAULT, options);
  this.data_array = null;
  this.has_loaded = false;

};
goog.inherits(manic.util.JsonParser, goog.events.EventTarget);

/**
 * default options for JsonParser
 * @const {object}
 */
manic.util.JsonParser.DEFAULT = {
  'json': '',
  'loaded_json': null
};

/**
 * Event Constant
 * @const {string}
 */
manic.util.JsonParser.ON_COMPLETE = 'on_complete';

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

/**
 * start loading json file via jquery ajax
 */
manic.util.JsonParser.prototype.start_json_load = function() {

  //console.log('start_json_load: ' + this.options['json']);

  //TODO: replace with actual google closure js.
  $.ajax({
    type: 'GET',
    data: {},
    url: this.options['json'],
    complete: this.on_json_load_complete.bind(this)
  });
};

/**
 * [process_json description]
 * @param  {object} parsed_json
 */
manic.util.JsonParser.prototype.process_json = function(parsed_json) {
  this.has_loaded = true;
  this.data_array = parsed_json;
  //console.log('process_json: this.data_array');
  //console.log(this.data_array);
  //console.log('manic.util.JsonParser: ON_COMPLETE');
  this.dispatchEvent(new goog.events.Event(manic.util.JsonParser.ON_COMPLETE));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * public start loading the json file,
 * if loaded json is provided, no need to do it again.
 */
manic.util.JsonParser.prototype.start_load = function() {

  //console.log('start_load: ' + this.options['loaded_json']);

  if (goog.isDefAndNotNull(this.options['loaded_json'])) {
    this.process_json(this.options['loaded_json']);
  } else {
    this.start_json_load();
  }
};

//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * when the json file has loaded
 * @param  {object} event
 */
manic.util.JsonParser.prototype.on_json_load_complete = function(event) {
  //console.log(event);
  //console.log(event['responseText']);
  //console.log(JSON.parse(event['responseText']));
  try{
    this.process_json(JSON.parse(event['responseText']));
  } catch (e) {
    // console.log('on_json_load_complete: ' + this.options['json']);
    // console.log(e);
  }
};
