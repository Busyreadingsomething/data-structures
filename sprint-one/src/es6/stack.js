class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // create storage for this of {}
    this.storage = {};
    // create len for this of 0
    this.len = 0;
  }

  push(value) {
    var key = this.len;
    this.storage[key] = value;
    this.len++;
    // set key to this.len
    // set this.storage[key] to value
    // increase this.len by one
  }
  
  pop() {
    var key = this.len - 1;
    var deleted = this.storage[key];
    delete this.storage[key];
    if (this.len !== 0) {
      this.len--;
    }
    return deleted;
    // set key to this.len - 1
    // set deleted to storage[key]
    // delete storage[key]
    // if this.len not 0
      // this.len decrease by one
    // return deleted
  }

  size() {
    return this.len;
  }

}