var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create instance object
  var stackInstance = {};
  // var storage = {};
  stackInstance.storage = {};
  // stackInstance.enqueue = queueMethods.enqueue;
  // stackInstance.dequeue = queueMethods.dequeue;
  // stackInstance.size = queueMethods.size;
  // extend methods from shared method object
  _.extend(stackInstance, queueMethods);
  // return instance object
  return stackInstance;

};

var queueMethods = { 
  // create enqueue method
  enqueue: function (value) {
  // debugger;
    var key = this.size();
    this.storage[key] = value;
  },
  //takes in parameter 'value'
    // call size method to obtain size of storage
    // use size as key to storage method
  // create dequeue method
  dequeue: function () {
    var holder = [];
    for (var key in this.storage) {
      holder.push(this.storage[key]);
      // holder[holder.length] = this.storage[key]
    }
    this.storage = {};
    for (var i = 1; i < holder.length; i++) {
      this.storage[i - 1] = holder[i];
    }
    return holder[0];
  }, 
    //declare a holder array
    //loop through storage object
      //push to holder the value
    //reset storage object
    // loop through holder array, starting at index 1
      //set storage object key to index-1
      // set value of storage object to holder[i] 
    // return holder[0]
  // create size method
  size: function () {
    return Object.keys(this.storage).length;
  }
    // find list of keys inside storage object
    //return length of list
};




