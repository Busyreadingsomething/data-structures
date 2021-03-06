var DoubleLinkedList = function() {
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
      node.prev = list.tail;
      list.tail = node;
      // set tail next to node
      // set node prev to tail
      // set tail to node
    }

  };

  list.addToHead = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.head.prev = node;
      node.next = list.head;
      list.head = node;
    }
  };

  list.removeHead = function() {
    // debugger;
    var holder = list.head;
    if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
      list.head.prev = null;
    }
    return holder.value;

  };

  list.removeTail = function() {
    var holder = list.tail;
    if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
    } else {
      list.tail = list.tail.prev;
      list.tail.next = null;
    }
    return holder.value;
    // set holder to tail
    // set tail to tail.prev
    // tail next to null
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

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;
  // adding prev to attach to previous node

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
