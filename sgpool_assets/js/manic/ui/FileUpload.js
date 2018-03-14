// just a wrapper class for jQuery-File-Upload
// https://github.com/blueimp/jQuery-File-Upload



goog.provide('manic.ui.FileUpload');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The FileUpload constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.FileUpload = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.FileUpload.DEFAULT, options);
  this.element = element;

  this.url = this.element.attr('data-url');

  if (goog.isDefAndNotNull(this.url) == false || this.url == '') {
    // console.log('manic.ui.FileUpload: ERROR: data-url not set');
  }

    

  this.input_filename = this.element.find(this.options['input_filename_selector']);
  this.input_fileurl = this.element.find(this.options['input_fileurl_selector']);
  this.input_filesize = this.element.find(this.options['input_filesize_selector']);

  this.input_fileoriginalname = this.element.find(this.options['input_fileoriginalname_selector']);
  this.preloader_element = this.element.find(this.options['preloader_selector']);

  this.input_element = this.element.find('input[type=file]');


  this.input_element.fileupload({
    'acceptFileTypes': /(\.|\/)(doc|docx|pdf)$/i,
    'url': this.url,
    'dataType': 'json'
  });


  this.input_element.bind('fileuploaddone', function(event,data){
    //console.log('fileuploaddone');
    //console.log(data);

    this.hide_preloader();

    var arr = data['result']['files'];
    var item = null;
    var filename = '';
    var fileurl = '';
    var filesize = '';
    var error = '';

    var original_filename = '';

    var has_error = false;

    for (var i = 0, l=arr.length; i < l; i++) {
      item = arr[i];

      filename = item['url'];
      fileurl = item['name'];
      filesize = item['size'];
      filesize = Math.round(filesize / 1024) + ' kb';

      error = item['error'];

      // console.log('error: ' + error);


      if (goog.isDefAndNotNull(error)) { 

        has_error = true;
        this.show_error();


      } else {


        this.input_filename.val(filename);
        this.input_fileurl.val(fileurl);
        this.input_filesize.val(filesize);
        
      }


    }


    if (has_error == false) {

      this.hide_error();

      // get and display name of file uploaded
      arr = data['files'];

      for (var i = 0, l=arr.length; i < l; i++) {
        item = arr[i];
        original_filename = item['name'];

        this.input_fileoriginalname.val(original_filename);

      }
      
    }



  }.bind(this));


  this.input_element.bind('fileuploadprocessfail', function(event,data){

    // console.log('fileuploadprocessfail');

    /*

    this.hide_preloader();
    this.element.parent().addClass('has-error');
    this.element.parent().attr('data-error', 'Upload doc, docx, or pdf file');
    */

  }.bind(this));

  this.input_element.bind('fileuploadstart', function(event,data){
    // console.log('fileuploadstart');

    this.show_preloader();

  }.bind(this));

  this.input_element.bind('fileuploadprogressall', function(event,data){
    // console.log('fileuploadprogressall');
    // console.log(data);

    var progress = parseInt(data['loaded'] / data['total'] * 100, 10);
    // console.log('progress: ' + progress);

    this.set_preloader_progress(progress);

  }.bind(this));

  
  

  // console.log('manic.ui.FileUpload: init');
};
goog.inherits(manic.ui.FileUpload, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
manic.ui.FileUpload.DEFAULT = {
  'input_filename_selector': '.manic-file-upload-filename',
  'input_fileurl_selector': '.manic-file-upload-fileurl',
  'input_filesize_selector': '.manic-file-upload-filesize',
  'input_fileoriginalname_selector': '.manic-file-upload-fileoriginalname',

  'preloader_selector': '.preloader'
};

/**
 * FileUpload Event Constant
 * @const
 * @type {string}
 */
manic.ui.FileUpload.EVENT_01 = '';

/**
 * FileUpload Event Constant
 * @const
 * @type {string}
 */
manic.ui.FileUpload.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.FileUpload.prototype.show_preloader = function() {
  this.preloader_element.addClass('visible-version');

  this.preloader_element.css({
    'width': '0%'
  });

};
manic.ui.FileUpload.prototype.hide_preloader = function() {
  this.preloader_element.removeClass('visible-version');
};


/**
 * @param {String} str_param
 */
manic.ui.FileUpload.prototype.set_preloader_progress = function(str_param) {

  this.preloader_element.css({
    'width': str_param + '%'
  });

};

manic.ui.FileUpload.prototype.show_error = function() {

  // console.log('show_error');

  this.element.parent().addClass('has-error');
  this.element.parent().attr('data-error', 'Doc, docx, or pdf file only');

};
manic.ui.FileUpload.prototype.hide_error = function() {
  this.element.parent().removeClass('has-error');
};
manic.ui.FileUpload.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.FileUpload.prototype.public_method_01 = function() {};
manic.ui.FileUpload.prototype.public_method_02 = function() {};
manic.ui.FileUpload.prototype.public_method_03 = function() {};
manic.ui.FileUpload.prototype.public_method_04 = function() {};
manic.ui.FileUpload.prototype.public_method_05 = function() {};
manic.ui.FileUpload.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
manic.ui.FileUpload.prototype.on_event_handler_01 = function(event) {
};

/**
 * @param {object} event
 */
manic.ui.FileUpload.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
manic.ui.FileUpload.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
manic.ui.FileUpload.prototype.on_event_handler_04 = function(event) {
};






manic.ui.FileUpload.prototype.sample_method_calls = function() {

  // sample override
  manic.ui.FileUpload.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(manic.ui.FileUpload.EVENT_01));
};