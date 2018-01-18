var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  // have storage prop set to empty obj
  this.storage = {};
  // have len prop set to 0
  this.len = 0;
};

Queue.prototype.enqueue = function(value) {
  for (let i = this.len; i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }
  this.storage[0] = value;
  this.len++;
  // for loop through storage of obj; i is len of storage
    // set storage[index] = storage[index - 1]
  // set storage at 0 equal to value
  // add 1 to this.len
};

Queue.prototype.dequeue = function() {
  let key = this.len - 1;
  let deleted = this.storage[key];
  
  delete this.storage[key];
  
  if (this.len !== 0) {
    this.len--;
  }
  return deleted;
  // set key to this.len - 1
  // set deleted to storage key
  // delete storage at key
  // if the len isn't 0
    // decrement len by one
  // return deleted
};

Queue.prototype.size = function() {
  return this.len;
};

