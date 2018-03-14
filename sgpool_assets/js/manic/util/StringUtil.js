goog.provide('manic.util.StringUtil');
//goog.provide('manic.util.StringUtil.occurrences');
//goog.provide('manic.util.StringUtil.pad');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');



/**
 * static class function
 * pad a str number with zeros
 * //http://stackoverflow.com/questions/6466135/adding-extra-zeros-in-front-of-a-number-using-jquery
 * @param {string} str
 * @param {number} max
 * @type {function}
 * @return {string}
 */
manic.util.StringUtil.pad = function(str, max) {
  str = str.toString();
  return str.length < max ? manic.util.StringUtil.pad('0' + str, max) : str;
};

/**
 * static class function
 * find the number of occurrence of an string in a substring
 * //http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string
 * @type {function}
 * @param {string} string
 * @param {string} subString
 * @param {?boolean} allowOverlapping
 * @return {number}
 */
manic.util.StringUtil.occurrence = function(string, subString, allowOverlapping) {
  string += '';
  subString += '';
  if (subString.length <= 0) return string.length + 1;

  var n = 0, pos = 0;
  var step = (allowOverlapping) ? (1) : (subString.length);

  while (true) {
    pos = string.indexOf(subString, pos);
    if (pos >= 0) { n++; pos += step; } else break;
  }
  return (n);
};

/**
 * static class function
 *
 * check if email or not
 *
 * @type {function}
 * @param {string} email_param string to check
 * @return {boolean}
 */
manic.util.StringUtil.is_email = function(email_param) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email_param);
};
