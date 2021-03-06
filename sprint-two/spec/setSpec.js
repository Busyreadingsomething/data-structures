describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should have a storage property', function() {
    expect(set).to.have.property('_storage');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should not add duplicate items', function() {
    set.add('Mel Gibson');
    expect(set.add('Mel Gibson')).to.equal('Already in set');
  });

  it('should handle any sort of data type', function() {
    var types = [{}, [], 1, true, null, undefined, function() {}];
    for (var i = 0; i < types.length; i++) {
      set.add(types[i]);
      expect(set.contains(types[i])).to.equal(true);
      set.remove(types[i]);
      expect(set.contains(types[i])).to.equal(false);  
    }
  });

});
