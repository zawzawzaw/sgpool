goog.provide('manic.util.ArrayUtil');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');



/**
 * static class function
 * return a shuffled version of the array
 * ////http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * @param {array} array
 * @type {function}
 * @return {array}
 */
manic.util.ArrayUtil.shuffle = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
