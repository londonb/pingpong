describe('results', function() {
  it("will display the array as a string", function() {
  expect(results(3)).to.equal("1,2,3");
  });
});

describe('results', function() {
  it("will display every number divisible by 3 to say ping", function() {
  expect(results(3)).to.equal("1,2,ping");
  });
});
