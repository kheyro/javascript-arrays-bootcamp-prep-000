var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, el){
  return [el, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array;
}
console.log(destructivelyAddElementToBeginningOfArray([1], 'foo'));

function addElementToEndOfArray(array, el) {
  return [...array, el];
}

function destructivelyAddElementToEndOfArray(array, el) {
  return array.push(el);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
