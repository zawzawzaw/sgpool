goog.provide('manic.util.DateUtil');

/**
 * @param  {Date} date_param [description]
 * @return {String}
 */
manic.util.DateUtil.get_date_in_dd_mm_yyyy = function(date_param){
  var yyyy = date_param.getFullYear().toString();
  var mm = (date_param.getMonth()+1).toString(); // getMonth() is zero-based
  var dd  = date_param.getDate().toString();

  return (dd[1]?dd:"0"+dd[0]) + '/' + (mm[1]?mm:"0"+mm[0]) + '/' + yyyy; // padding
};

/**
 * @param  {Date} date_param [description]
 * @return {String}
 */
manic.util.DateUtil.get_date_in_dd_mm_yyyy_with_padding = function(date_param){
  var yyyy = date_param.getFullYear().toString();
  var mm = (date_param.getMonth()+1).toString(); // getMonth() is zero-based
  var dd  = date_param.getDate().toString();

  return dd + '/' + mm + '/' + yyyy; // padding
};
