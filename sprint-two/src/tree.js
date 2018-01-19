var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // debugger;
  var res = false;
  var search = function(obj) {
    if (!res) {
      if (obj.value === target) {
        res = !res;
      } else if (obj.children) {
        obj.children.forEach(function(child) {
          if (search(child)) {
            res = !res;
          }
        });
      }
    }
  };
  search(this);
  return res;
  //set res to false;
  //set search function - parameter this tree obj
    // if res is false
      // if this tree value is target
        // set res to !res
      // else if !empty children list
        // loop through children array
          // if recurse into search for child is target
          // set res to !res
  // invoke search(this)
  // return res
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
