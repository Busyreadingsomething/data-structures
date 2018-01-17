var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  // create stackInstance obj
  var stackInstance = {};
  // create len prop in sI
  stackInstance.len = 0;
  // create storage prop in sI
  stackInstance.storage = {};
  // invoke extend passing sI and sM
  _.extend(stackInstance, stackMethods);
  // return sI
  return stackInstance;
};

var stackMethods = {
  //create push method
  push: function (value) {
    var key = this.len;
    this.storage[key] = value;
    this.len++;
  },
  // takes prarameter value
    // call the len prop
    // set storage[len] = value
    // increase len by one
  //create pop method
  pop: function () {
    var key = this.len - 1;
    var deleted = this.storage[key];
    if (this.len !== 0) {
      this.len--;
    }
    delete this.storage[key];
    return deleted;
  },
    // call len prop
    // set variable to len prop - 1
    // find at storage[variable] and set to variable
    // delete storage [variable]
    // if len not zero
      // decrease len prop by one
    // return variable with storage[var] value
  // create size method
  size: function () {
    return this.len;
    // return this len
  }
};


