var BinarySearchTree = function(val) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.right = null;
  obj.left = null;
  obj.value = val;
  return obj;
  // declare left - loc of smaller
  // declare right - loc of larger
  // declare value 
};

BinarySearchTree.prototype.insert = function(val) {
  // debugger;
  if (typeof val !== 'number') {
    return 'Invalid Input: Should be number';
  }
  
  var node = BinarySearchTree(val);
  var search = function (obj) {
    if (obj.value > val) {
      if (obj.left === null) {
        obj.left = node;
      } else if (obj.left.value === val) { 
        return 'Value already in tree';
      } else {
        return search(obj.left);
      }
    } else if (obj.value < val) {
      if (obj.right === null) {
        obj.right = node;
      } else if (obj.right.value === val) { 
        return 'Value already in tree';
      } else {
        return search(obj.right);
      }
    }
  };
  return search(this);
  // check to see if value is larger than this.val
    // if smaller 
      // if left is null - insert to left
      // if not - recurse with left
    // if larger
      // if right is null - insert to right
      // if not - recurse with right
};

BinarySearchTree.prototype.contains = function(target) {
  var search = function(obj) {
    if (obj.value === target) {
      return true;
    } else if (obj.value > target && obj.left !== null) {
      return search(obj.left);
    } else if (obj.value < target && obj.right !== null) {
      return search(obj.right);
    } else {
      return false;
    }
  };
  return search(this);
  // return search function - parameter obj
    // if obj value is target
      // return true
    // else if target < obj value and if obj left isn't null
      // return recurse of search on obj left
    // else if target > obj value and if obj right isn't null
      // return recurse of search on obj right
    // else return false
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var search = function(obj) {
    cb(obj.value);
    if (obj.left !== null) {
      search(obj.left);
    }
    if (obj.right !== null) {
      search(obj.right);
    }
  };
  search(this);
  // create search funtion - parameter obj
    //pass obj into cb function
    // determine if obj.left is null
      // if not null, call search function on obj.left
    // determine if obj.right is null
      // if not null, call search function on obj.right
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
