var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
  // if doesn't contain item
    // push item to storage
};

setPrototype.contains = function(item) {
  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
  // loop through storage
    // if storage[i] is item
      // return true;
  // return false
};

setPrototype.remove = function(item) {
  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i, 1);
    }
  }
  // loop through storage
    // splice out if found
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
