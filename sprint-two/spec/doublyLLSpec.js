describe('doublyLL', function () {
  var doublyLL;

  beforeEach(function() {
    doublyLL = DoubleLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLL).to.have.property('head');
    expect(doublyLL).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", "addToHead", "removeTail", and "contains"', function() {
    expect(doublyLL.addToTail).to.be.a('function');
    expect(doublyLL.removeHead).to.be.a('function');
    expect(doublyLL.addToHead).to.be.a('function');
    expect(doublyLL.removeTail).to.be.a('function');
    expect(doublyLL.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLL.addToTail(4);
    expect(doublyLL.tail.value).to.equal(4);
    doublyLL.addToTail(5);
    expect(doublyLL.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added', function() {
    doublyLL.addToHead(4);
    expect(doublyLL.head.value).to.equal(4);
    doublyLL.addToHead(5);
    expect(doublyLL.head.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLL.addToTail(4);
    doublyLL.addToTail(5);
    expect(doublyLL.head.value).to.equal(4);
    doublyLL.removeHead();
    expect(doublyLL.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublyLL.addToTail(4);
    doublyLL.addToTail(5);
    expect(doublyLL.tail.value).to.equal(5);
    doublyLL.removeTail();
    expect(doublyLL.tail.value).to.equal(4);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLL.addToTail(4);
    expect(doublyLL.removeHead()).to.equal(4);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    doublyLL.addToTail(4);
    expect(doublyLL.removeTail()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLL.addToTail(4);
    doublyLL.addToTail(5);
    doublyLL.addToHead(8);
    doublyLL.addToHead(2);
    expect(doublyLL.contains(4)).to.equal(true);
    expect(doublyLL.contains(5)).to.equal(true);
    expect(doublyLL.contains(6)).to.equal(false);
    expect(doublyLL.contains(8)).to.equal(true);
    expect(doublyLL.contains(2)).to.equal(true);
  });

  it('should not contain a value that was removed', function() {
    doublyLL.addToTail(4);
    doublyLL.addToHead(9);
    doublyLL.addToTail(5);
    doublyLL.removeHead();
    doublyLL.removeTail();
    expect(doublyLL.contains(9)).to.equal(false);
    expect(doublyLL.contains(5)).to.equal(false);
    expect(doublyLL.contains(4)).to.equal(true);
  });



});