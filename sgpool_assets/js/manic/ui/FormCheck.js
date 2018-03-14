// 1. a check out jquery validation (same functionality i think)
// 2. a better way of implementing it would be to not store (<input>) elements on an array, do it only on check.
// 3. required-group <-- can only support 1 group
// 

// pass a form element.

goog.provide('manic.ui.FormCheck');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Form Check constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.FormCheck = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.FormCheck.DEFAULT, options);
  this.element = element;


  this.is_add_element_version = false;
  if (this.element.hasClass('add-element-version')) {
    this.is_add_element_version = true;
  }

  this.is_ajax_version = false;
  if (this.element.hasClass('ajax-version')) {
    this.is_ajax_version = true;
  }

  // if for some reason you are not able to add a class to the form
  if(this.element.prop("tagName").toLowerCase() != 'form'){
    // console.log('manic.ui.FormCheck: added to form inside');
    this.element = this.element.find('form');
  }


  // add reference of the form check
  this.element.data('manic.ui.FormCheck', this);
  
  
  this.element.find('.form-check-submit-btn').click(function(event){
    
    event.preventDefault();
    this.element.submit();

  }.bind(this));


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.input_array = [];
  this.post_data = {};
  this.error_str = "";

  this.error_id_array = [];

  // console.log('this.element');
  // console.log(this.element)
  this.action_url = this.element.attr("action");
  this.submit_button = this.element.find("input[type=submit]");


  
  



  this.element.submit(this.on_form_submit.bind(this));                           // listen to form submit

  // this.element.submit($.proxy(this.on_form_submit,this));                           // listen to form submit

  // FORCED SUBMIT...
  this.element.find('.form-check-force-submit').click(function(event){
    // console.log('manic.ui.FormCheck: forced submit...');
    this.element.submit();
  }.bind(this));


  this.create_input_array();


  // console.log('init');
};
goog.inherits(manic.ui.FormCheck, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Form Check
 * @const {object}
 */
manic.ui.FormCheck.DEFAULT = {
  'alert_on_error': true,
  'error_class': 'input-error',
  'parent_classes': [],
  'class_filter': ''
};

/**
 * Form Check Event Constant
 * @const
 * @type {string}
 */
manic.ui.FormCheck.ON_ERROR = 'on_error';

/**
 * Form Check Event Constant
 * @const
 * @type {string}
 */
manic.ui.FormCheck.ON_SUCCESS = 'on_success';



/**
 * Form Check Constant
 * @type {string}                       // can be changed on runtime :D
 */
manic.ui.FormCheck.STRING_REQUIRED = ' required';

/**
 * Form Check Constant
 * @type {string}                       // can be changed on runtime :D
 */
manic.ui.FormCheck.STRING_REQUIRED_GROUP = ' required';

/**
 * Form Check Constant
 * @type {string}
 */
manic.ui.FormCheck.STRING_ONLY_EMAIL = ' must be a valid email address';

/**
 * Form Check Constant
 * @type {string}
 */
manic.ui.FormCheck.STRING_ONLY_NUMBERS = ' must be all numbers';

/**
 * Form Check Constant
 * @type {string}
 */
manic.ui.FormCheck.STRING_MUST_MATCH_01 = ' must match';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.FormCheck.prototype.reset_input_array = function() {

  /**
   * @type {jQuery}
   */
  var input_item = null;
  for (var i = 0, l = this.input_array.length ; i < l; i++) {
    input_item = this.input_array[i];
    input_item.removeData('special-parent');
  }

  // reset array
  this.input_array = [];

  // create again
  this.create_input_array();

};

manic.ui.FormCheck.prototype.create_input_array = function() {
  var arr = this.element.find("input,select,textarea");

  /**
   * @type {jQuery}
   */
  var input_item = null;

  var parent_class_array = this.options['parent_classes'];
  var parent_class = "";

  /**
   * @type {jQuery}
   */
  var temp_parent = null;

  /**
   * @type {jQuery}
   */
  var temp_parent_parent = null;

  /**
   * @type {jQuery}
   */
  var temp_parent_parent_parent = null;

  /**
   * @type {jQuery}
   */
  var temp_parent_parent_parent_parent = null;

  var temp_placeholder_str = "";

  for (var i = 0; i < arr.length; i++) {
    input_item = $(arr[i]);

    temp_placeholder_str = input_item.attr('placeholder')
    if (goog.isDefAndNotNull(temp_placeholder_str)) {
      input_item.data("placeholder", temp_placeholder_str);
      input_item.focus(this.on_input_item_placeholder_focus.bind(this));
      input_item.blur(this.on_input_item_placeholder_blur.bind(this));
      input_item.removeAttr('placeholder');


      if (input_item.attr('type') == 'password') {
        input_item.data("placeholderandpassword", true);
      }

      // initial placeholder
      if (input_item.val() == '') {
        input_item.val(temp_placeholder_str);
        input_item.addClass('has-placeholder');

        if (input_item.data("placeholderandpassword") == true) {
          input_item.attr('type','text');
        }
        
      }

    }

    
    

    for (var j = 0; j < parent_class_array.length; j++) {
      parent_class = parent_class_array[j];

      temp_parent                           = input_item.parent();
      temp_parent_parent                    = input_item.parent().parent();
      temp_parent_parent_parent             = input_item.parent().parent().parent();
      temp_parent_parent_parent_parent      = input_item.parent().parent().parent().parent();
      temp_parent_parent_parent_parent_parent = input_item.parent().parent().parent().parent().parent();

      if( temp_parent && temp_parent.hasClass(parent_class) ){
        input_item.data("special-parent", temp_parent);
      }
      if( temp_parent_parent && temp_parent_parent.hasClass(parent_class) ){
        input_item.data("special-parent", temp_parent_parent);
      }
      if( temp_parent_parent_parent && temp_parent_parent_parent.hasClass(parent_class) ){
        input_item.data("special-parent", temp_parent_parent_parent);
      }
      if( temp_parent_parent_parent_parent && temp_parent_parent_parent_parent.hasClass(parent_class) ){
        input_item.data("special-parent", temp_parent_parent_parent_parent);
      }

      if( temp_parent_parent_parent_parent_parent && temp_parent_parent_parent_parent_parent.hasClass(parent_class) ){
        input_item.data("special-parent", temp_parent_parent_parent_parent_parent);
      }

      /*
      if( input_item.parent().parent().parent().parent().parent() && input_item.parent().parent().parent().parent().parent().hasClass(parent_class) ){
        input_item.data("special-parent", input_item.parent().parent().parent().parent().parent());
      }
      */
    }


    this.input_array[i] = input_item;
  }

};


/**
 * @param  {jQuery} input_item
 */
manic.ui.FormCheck.prototype.remove_input_error = function(input_item) {
  input_item.removeClass(this.options["error_class"]);
  input_item.trigger('form-check-no-error');

  if (this.is_add_element_version == true) {
    if (goog.isDefAndNotNull(input_item.data('error-element'))) {
      var error_element = input_item.data('error-element');
      error_element.remove();
    } else {
      // nothing to remove
    }
  }  

  /**
   * @type {jQuery}
   */
  var special_parent = input_item.data("special-parent");
  if(special_parent != null && special_parent != undefined){
    special_parent.removeClass(this.options["error_class"]);
  }
};

/**
 * @param {jQuery} input_item [description]
 * @param {string} input_name [description]
 * @param {string} message    [description]
 */
manic.ui.FormCheck.prototype.add_input_error = function(input_item,input_name,message) {
  input_item.addClass(this.options["error_class"]);
  input_item.trigger('form-check-error');

  if (this.is_add_element_version == true) {
    if (goog.isDefAndNotNull(input_item.data('error-element'))) {

      // modify html, then add again
      var error_element = input_item.data('error-element');
      error_element.html(message);
      input_item.before(error_element);
      
    } else {
      // create one, then add before input
      var error_element = $('<div class="error-element">' + message + '</div>');

      input_item.data('error-element', error_element);
      input_item.before(error_element);
    }
  }



  


  // console.log('has error: ' + input_name);

  /**
   * @type {jQuery}
   */
  var special_parent = input_item.data("special-parent");
  //console.log(input_item);
  //console.log(special_parent);

  //if(special_parent != null && special_parent != undefined){
  if( goog.isDefAndNotNull(special_parent)) {

    
    special_parent.addClass(this.options["error_class"]);
    special_parent.attr('data-error', message);

    TweenMax.killDelayedCallsTo(special_parent.addClass);
    TweenMax.delayedCall(0.3, special_parent.addClass, [this.options["error_class"]], special_parent);
    TweenMax.delayedCall(0.6, special_parent.addClass, [this.options["error_class"]], special_parent);
    TweenMax.delayedCall(0.9, special_parent.addClass, [this.options["error_class"]], special_parent);
  }

  if(this.options["alert_on_error"] == true){
    //bootbox.alert(input_name + message);
    alert(input_name + message);
    input_item.focus();
  } else  {
    this.error_str += (input_name + message);
    this.error_str += "<br>";
  }
};

manic.ui.FormCheck.prototype.private_method_04 = function() {};
manic.ui.FormCheck.prototype.private_method_05 = function() {};
manic.ui.FormCheck.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
manic.ui.FormCheck.prototype.sample_method_calls = function() {
  manic.ui.FormCheck.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(manic.ui.FormCheck.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.FormCheck.prototype.check_form = function() {

  // console.log('manic.ui.FormCheck: check_form');

  /**
   * @type {jQuery}
   */
  var input_item = null;
  var input_name = "";
  var input_id = "";

  this.error_str = "";

  var return_value = true;
  var must_match_01 = null;
  var required_group_value = "";

  var has_placeholder = false;
  var placeholder_str = "";

  this.error_id_array = [];


  

  for (var i = 0; i < this.input_array.length; i++) {
    input_item = this.input_array[i];
    input_name = input_item.attr("name");

    placeholder_str = input_item.data('placeholder');
    if(placeholder_str == undefined || placeholder_str == null) {
      has_placeholder = false;
      placeholder_str = "";
    } else {
      has_placeholder = true;
    }


    if(input_item.attr("data-name") != null){
      input_name = input_item.attr("data-name");
    }

    
    if (goog.isDefAndNotNull(input_item.attr('id'))) {
      input_id = '' + input_item.attr('id');
    } else {
      input_id = 'no-id';
    }

    // important
    this.remove_input_error(input_item);

    if (this.options['class_filter'] == '' ||
        (this.options['class_filter'] != '' && input_item.hasClass(this.options['class_filter']))  ) {


      // check required
      if(input_item.hasClass("required")){

        // console.log('manic.ui.FormCheck: has required');
        // console.log(input_item);

        if( 
          (input_item.attr("type") == "checkbox" && input_item.is(':checked') == false) || 
          (input_item.attr("type") != "checkbox" && has_placeholder == false && input_item.val() == "") ||
          (input_item.attr("type") != "checkbox" && has_placeholder == true && input_item.val() == "") || 
          (input_item.attr("type") != "checkbox" && has_placeholder == true && input_item.val() == placeholder_str) 
        ){

          // console.log('has error');
          this.error_id_array[this.error_id_array.length] = input_id;
          this.add_input_error(input_item, input_name, manic.ui.FormCheck.STRING_REQUIRED );    ///////////////

          if(this.options["alert_on_error"] == true){ return false; } else { return_value = false; }
        }
      }



      // email check
      if(input_item.hasClass('only-email')){
        if(this.validate_email( input_item.val() ) == false){
          this.error_id_array[this.error_id_array.length] = input_id;
          this.add_input_error(input_item, input_name, manic.ui.FormCheck.STRING_ONLY_EMAIL );   ///////////////

          if(this.options["alert_on_error"] == true){ return false; } else { return_value = false; }
        }
      }

      // number check
      if(input_item.hasClass('only-numbers')){
        if(this.validate_numbers( input_item.val() ) == false){
          this.error_id_array[this.error_id_array.length] = input_id;
          this.add_input_error(input_item, input_name, manic.ui.FormCheck.STRING_ONLY_NUMBERS );   ///////////////
          if(this.options["alert_on_error"] == true){ return false; } else { return_value = false; }
        }
      }

      
      if(input_item.hasClass('must-match-01')){
        if(must_match_01 == null || must_match_01 == undefined){
          must_match_01 = input_item.val();
        } else {
          if(input_item.val() != must_match_01){
            this.error_id_array[this.error_id_array.length] = input_id;
            this.add_input_error(input_item, input_name, manic.ui.FormCheck.STRING_MUST_MATCH_01);   ///////////////
            if(this.options["alert_on_error"] == true){ return false; } else { return_value = false; }

          }
        }
      }



      // must be redaundant
      if(input_item.hasClass('required-group')){
        // console.log('input has required-group')
        if( 
          (input_item.attr("type") == "radio" && input_item.is(':checked') == true) || 
          (input_item.attr("type") != "radio" && input_item.val() != "")  ){

          // console.log('one of the required is checked');
          required_group_value = input_item.val();
        }
      }

      if(input_item.hasClass('required-group-last')){
        // console.log('required_group_value: ' + required_group_value);

        if(required_group_value == ""){
          // console.log('add alert');

          // console.log('required_group_value: ' + required_group_value);
          this.error_id_array[this.error_id_array.length] = input_id;
          this.add_input_error(input_item, input_name, manic.ui.FormCheck.STRING_REQUIRED_GROUP);
          if(this.options["alert_on_error"] == true){ return false; } else { return_value = false; }          
        }

        required_group_value = "";
      }


      

    }
  
    
      

    
  } // end for loop



  if (this.is_ajax_version == true) {
    this.element.removeClass('form-error-version');
    this.element.removeClass('sending-version');

    if (return_value == true){
      this.element.addClass('sending-version');
      this.send_ajax();
      this.dispatchEvent(new goog.events.Event(manic.ui.FormCheck.ON_SUCCESS));

    } else {
      this.element.addClass('form-error-version');
      this.dispatchEvent(new goog.events.Event(manic.ui.FormCheck.ON_ERROR));
    }

    return false;

  }

  //return false;

  if(return_value == false){
    this.dispatchEvent(new goog.events.Event(manic.ui.FormCheck.ON_ERROR));
    //this.options["on_error"](this.error_str);
  }else{
    this.dispatchEvent(new goog.events.Event(manic.ui.FormCheck.ON_SUCCESS));
    //this.options["on_success"]();
  }

  return return_value;
};


manic.ui.FormCheck.prototype.send_ajax = function() {

  var form_data = this.element.serialize();

  $.ajax({
    type: this.element.attr('method'),      // get or post
    async: false,
    cache: false,
    data: form_data,
    url: this.action_url,
    complete: function(event){

      // console.log('on_send_ajax_complete');
      // console.log(event);
      // console.log(event.responseText);

      this.element.removeClass('form-error-version');
      this.element.removeClass('sending-version');

      if(event.responseText == 'success') {
        this.element.addClass('sent-version');
      } else {
        this.element.addClass('server-error-version');
      }

    }.bind(this)
  });
};
manic.ui.FormCheck.prototype.public_method_03 = function() {};
manic.ui.FormCheck.prototype.public_method_04 = function() {};



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
manic.ui.FormCheck.prototype.on_form_submit = function(event) {
  
  var return_value = this.check_form();
  
  // return false;                           //                                            // THIS WILL PREVENT FORM FROM SUBMITTING. debug
  
  return return_value;
  
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.FormCheck.prototype.on_input_item_placeholder_focus = function(event) {

  // console.log('manic.ui.FormCheck: on focus?');

  var current_target = $(event.currentTarget);
  var placeholder = current_target.data('placeholder');
  var value = current_target.val();
  var is_password = current_target.data("placeholderandpassword");

  if (value==placeholder) {
    current_target.val('');
    current_target.removeClass('has-placeholder');

    if (is_password) {
      current_target.attr('type','password');
    }
  }


};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.FormCheck.prototype.on_input_item_placeholder_blur = function(event) {

  // console.log('manic.ui.FormCheck: on blur?');

  var current_target = $(event.currentTarget);
  var placeholder = current_target.data('placeholder');
  var value = current_target.val();
  var is_password = current_target.data("placeholderandpassword");

  if (value=='') {
    current_target.val(placeholder);
    current_target.addClass('has-placeholder');

    if (is_password) {
      current_target.attr('type','text');
    }
  }


};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.FormCheck.prototype.on_event_handler_04 = function(event) {
};


//    _   _ _____ ___ _     
//   | | | |_   _|_ _| |    
//   | | | | | |  | || |    
//   | |_| | | |  | || |___ 
//    \___/  |_| |___|_____|
//                          

//http://stackoverflow.com/questions/46155/validate-email-address-in-javascript

/**
 * @param  {string} email
 * @return {boolean}
 */
manic.ui.FormCheck.prototype.validate_email = function(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

/**
 * @param  {string} numbers
 * @return {boolean}         [description]
 */
manic.ui.FormCheck.prototype.validate_numbers = function(numbers) {
  var re = /^[0-9]+$/;  
  return re.test(numbers);
};