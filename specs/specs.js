describe('results', function() {
  it("will display every number divisible by 5 to say ping", function() {
  expect(results(5)).to.equal("1,2,ping,4,pong");
  });
});

describe('results', function() {
  it("will display every number divisible by 3 to say ping", function() {
  expect(results(3)).to.equal("1,2,ping");
  });
});
