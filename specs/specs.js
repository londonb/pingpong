describe('results', function() {
  it("will display every number divisible by 5 to say ping", function() {
  expect(results(5)).to.equal("<li>1<li>2<li>Ping<li>4<li>ponG");
  });
});

describe('results', function() {
  it("will display every number divisible by 3 to say ping", function() {
  expect(results(3)).to.equal("<li>1<li>2<li>Ping");
  });
});

describe('results', function() {
  it("will display every number divisible by 3 and 5 to say pingpong", function() {
  expect(results(15)).to.equal('<li>1<li>2<li>Ping<li>4<li>ponG<li>Ping<li>7<li>8<li>Ping<li>ponG<li>11<li>Ping<li>13<li>14<li>PINGPONG!!!');
  });
});
