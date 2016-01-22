describe('results', function() {
  it("make an array for as long as the entered input", function(){
  expect(results(3)).to.eql([1,2,3]);
  });
});

describe('results', function() {
  it("will display the array as a string", function(){
  expect(results(3)).to.equal("1,2,3");
  });
});
