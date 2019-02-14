var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(array){
  kittens.push(array);
  return array;
};
var destructivelyPrependKitten = function (array) {
  kittens.unshift(array);
  return array;
};
var destructivelyRemoveLastKitten = function() {
  kittens.pop();
  return kittens;
};
var destructivelyRemoveFirstKitten = function() {
  kittens.slice(1);
  return kittens;
};
var appendKitten = function() {
};
var prependKitten = function( ) {
};
var removeLastKitten = function() {
};
var removeFirstKitten = function() {
};