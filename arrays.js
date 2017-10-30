var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, el){
  return [el, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}
console.log(destructivelyAddElementToBeginningOfArray([1], 'foo'));
