 

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // this storage at set passing in index, and v
  var tuple = [k, v];
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  var bucket = this._storage.get(index);
  var itExists = false;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      itExists = true;
      bucket[i][1] = v;
    }
  }
  if (!itExists) {
    bucket.push(tuple);
  }
  // var tuple is k with v
  // if storage at index is undefined
    // set storage at index to []
  // var bucket is storage at index
  // bucket push tuple

  // console.log(this._storage.get(index));
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  // set bucket variable to this get at index
  // create a for loop for bucket
    // if bucket at [i][0] equals k
      // return bucket [i][1]
  // console.log('retrieve: ' + index, this._storage);
};

HashTable.prototype.remove = function(k) {
  debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  // set bucket to storage get at index
  // loop through bucket
    // if bucket [i][0] is k
      // splice bucket i
  //
  // console.log('remove: ' + index, this._storage);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


