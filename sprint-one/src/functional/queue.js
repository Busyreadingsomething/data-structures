var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    for (var i = Object.keys(storage).length; i >= 0; i--) {
      storage[i] = storage[i - 1];
    }
    storage[0] = value;
  };

  someInstance.dequeue = function() {
    var property = Object.keys(storage).length -1;
    var deleted = storage[property];
    delete storage[property];
    return deleted;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
