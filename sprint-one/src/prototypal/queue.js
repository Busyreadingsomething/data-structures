var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  // create stackInstance using object create - referencing queue methods
  var stackInstance = Object.create(queueMethods);
  // create property storage equal to empty object
  stackInstance.storage = {};
  // return SI 
  return stackInstance;
};

var queueMethods = {};

//create enqueue method
queueMethods.enqueue = function (value) {
  this.storage[this.size()] = value;
};
queueMethods.dequeue = function () {
  var holder = [];
  for (var key in this.storage) {
    holder[holder.length] = this.storage[key];
  }
  this.storage = {};
  for (let i = 1; i < holder.length; i++) {
    this.storage[i - 1] = holder[i];
  }
  return holder[0];
};
queueMethods.size = function () {
  return Object.keys(this.storage).length;
};
  // comes with value paramater
  // storage[this.size()] set to value
//create dequeue method
  // create holder array
  // loop through storage
    // push values into holder array
  // reset storage
  // loop holder array
    // starting loop at index 1
    // set storage[key] to index-1 and value to holder[index]
  // return holder[0]
// create size method
  //return object keys length of storage

