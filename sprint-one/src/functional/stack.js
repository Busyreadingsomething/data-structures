var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var property = Object.keys(storage).length;
    storage[property] = value;
  };

  someInstance.pop = function() {
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
