var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
 
  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  // create a child node
  // set created node's parent to this
  this.children.push(child);
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

treeMethods.removeFromParent = function () {
  var holder = this.parent;
  var index = holder.children.indexOf(this);
  holder.children.splice(index, 1);
  this.parent = null;
  return this;
  
  //create holder set to this.parent
  //get index for this in holder's children
  //splice holder's children at index
  //set this parent to null
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
