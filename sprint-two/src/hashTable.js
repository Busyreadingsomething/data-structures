  

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  if (typeof k !== 'string') {
    return 'Invalid key';
  }
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
  this._count++;
  if (this.ratio() >= 0.75) {
    this.resize();
  }
  // var tuple is k with v
  // if storage at index is undefined
    // set storage at index to []
  // var bucket is storage at index
  // bucket push tuple

  // console.log(this._storage.get(index));
};

HashTable.prototype.retrieve = function(k) {
  if (typeof k !== 'string') {
    return 'Invalid key';
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  // set bucket variable to this get at index
  // create a for loop for bucket
    // if bucket at [i][0] equals k
      // return bucket [i][1]
  // console.log('retrieve: ' + index, this._storage);
};

HashTable.prototype.remove = function(k) {
  if (typeof k !== 'string') {
    return 'Invalid key';
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
    this._count--;
  }
  if (this.ratio() < 0.25) {
    this.resize();
  }
  // set bucket to storage get at index
  // loop through bucket
    // if bucket [i][0] is k
      // splice bucket i
  //
  // console.log('remove: ' + index, this._storage);
};

HashTable.prototype.ratio = function() {
  return this._count / this._limit;
};

HashTable.prototype.resize = function() {
  var holder = [];

  for (var i = 0; i < this._limit; i++) {
    var bucket = this._storage.get(i);
    if (bucket !== undefined) {
      for (var j = 0; j < bucket.length; j++) {
        holder.push(bucket[j]);
      }
    }
  }

  if (this.ratio() >= 0.75) {
    this._limit = this._limit * 2;
  } else if (this.ratio() < 0.25) {
    this._limit = Math.floor(this._limit / 2);
  }
  
  this._storage = LimitedArray(this._limit);

  this._count = 0;
  for (var i = 0; i < holder.length; i++) {
    this.insert(holder[i][0], holder[i][1]);
  }
  // create a holder to store all tuples
  // create for loop for storage using counts
  // create if this.ratio > 0.75 then double
    //
  // else if this ratio < 0.25 then halve
    //
  // reset count to 0
  //create loop for inserting
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


