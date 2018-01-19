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
  debugger;
  var node = BinarySearchTree(val);
  var search = function (obj) {
    if (obj.value > val) {
      if (obj.left === null) {
        obj.left = node;
      } else {
        search(obj.left);
      }
    } else {
      if (obj.right === null) {
        obj.right = node;
      } else {
        search(obj.right);
      }
    }
  };
  search(this);
  // check to see if value is larger than this.val
    // if smaller 
      // if left is null - insert to left
      // if not - recurse with left
    // if larger
      // if right is null - insert to right
      // if not - recurse with right
};

BinarySearchTree.prototype.contains = function(value) {

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

}
/*
 * Complexity: What is the time complexity of the above functions?
 */
