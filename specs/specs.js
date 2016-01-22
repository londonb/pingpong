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

describe('results', function() {
  it("will display every number divisible by 3 and 5 to say pingpong", function() {
  expect(results(15)).to.equal("1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong");
  });
});
