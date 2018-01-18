var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stackInstance = Object.create(stackMethods);
  // add storage to sI
  stackInstance.storage = {};
  // add len to sI
  stackInstance.len = 0;

  // NO EXTEND!
  //return sI
  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  // find sI len as key
  var key = this.len;
  // set this storage[key] to value
  this.storage[key] = value;
  // increase sI len by 1
  this.len++;
};

stackMethods.pop = function() {
  // find sI len - 1 as key
  var key = this.len - 1;
  // set deleted var to storage[key]
  var deleted = this.storage[key];
  // delete storage at key
  delete this.storage[key];
  // if sI len not 0
  if (this.len !== 0) {
    this.len--;
    // subtract 1 from len
  }
  // return deleted
  return deleted;
};

stackMethods.size = function() {
  return this.len;
};
