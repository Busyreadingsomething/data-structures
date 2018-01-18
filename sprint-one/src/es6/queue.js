class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  // create storage for this set to {}
    this.storage = {};
  }
  // create enqueue method
  enqueue (value) {
    this.storage[this.size()] = value;
  }
    //takes parameter of value
    //storage [this.size()] set to value

  // create dequeue method
  dequeue () {
    var holder = [];
    for (var key in this.storage) {
      holder.push(this.storage[key]);
    }
    this.storage = {};
    for (var i = 1; i < holder.length; i++) {
      this.storage[i - 1] = holder[i];
    }
    return holder[0];
  }
    //create holder array
    // loop through storage
      //push values of storage[key] into holder
    //reset storage to {}
    //loop through holder - starting at index 1
      // storage[i-1] set to holder[i]
    // return holder[0]

  //create size method
  size () {
    return Object.keys(this.storage).length;
    // return length of object keys of storage
  }
}
