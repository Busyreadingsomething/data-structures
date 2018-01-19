var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
    // set node to Node(value)
    // if head is null
      // head equals node
      // tail equals node
    // else 
      // tail.next equals node
      // tail equals node
  };

  list.removeHead = function() {
    var holder = list.head;
    list.head = list.head.next;
    return holder.value;
    // set var holder to head
    // head to head.next
    // return holder;
  };

  list.contains = function(target) {
    // debugger;
    var res = false;
    var search = function(obj) {
      if (!res) {
        if (obj.value === target) {
          res = !res;
        } else if (obj.next !== null) {
          if (search(obj.next)) {
            res = !res;
          }
        }
      }
    };
    search(list.head);
    return res;
    // set res to false;
    // create search function - parameter obj
      // if not res
        // if obj value is target
          // bang res
        // else if obj next isn't null
          // if recurse with obj next true
            // bang res
    // invoke search with list.head
    // return res
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
