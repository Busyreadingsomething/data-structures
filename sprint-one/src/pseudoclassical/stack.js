var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 
  // create storage property using this to {}
  this.storage = {};
};


// create stack prototype of push - with parameter of value
Stack.prototype.push = function (value) {
  this.storage[this.size()] = value;
  // set storage[this.size] = value
};
// create stack prototype of pop
Stack.prototype.pop = function () {
  // debugger;
  if (this.size() !== 0) {
    var deleted = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return deleted;
  }
};

  // set deleted variable to storage[this.size-1]
  // delete storage[this.size-1]
  // return deleted variable
// create stack prototype of size
Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};

  // return length of object keys of this.storage
