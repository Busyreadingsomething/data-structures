describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild", "contains", "removeFromParent", and "traverse", and properties named "value" and "parent"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    expect(tree.hasOwnProperty('parent')).to.equal(true);
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly assign parent to children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.children[0].parent).to.equal(tree);
    expect(tree.children[1].parent).to.equal(tree);  
    expect(tree.children[0].children[0].parent).to.equal(tree.children[0]);
    expect(tree.children[1].children[0].parent).to.equal(tree.children[1]);
  });

  it('should disassociate the tree with its parent in both directions', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[1].addChild(4);
    var birch = tree.children[1].removeFromParent();
    expect(tree.contains(6)).to.equal(false);
    expect(tree.contains(8)).to.equal(false);
    expect(birch.parent).to.equal(null); 
  });

  it('should start cb function at the parent, regardless of where it was called', function() {
    var test = [];
    var expected = [101, 5, 7, 6, 8, 4];
    var callBackFunction = function (value) {
      test.push(value);
    };
    
    tree.value = 101;
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[1].addChild(4);
    tree.children[1].traverse(callBackFunction);
    expect(test[0]).to.equal(tree.value);
    expect(JSON.stringify(test)).to.equal(JSON.stringify(expected));
  });
});
