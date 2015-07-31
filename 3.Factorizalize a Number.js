/*
  4 Tests
  expect(factorialize(5)).to.be.a("Number");
  expect(factorialize(5)).to.equal(120);expected 5 to equal 120
  expect(factorialize(10)).to.equal(3628800);expected 10 to equal 3628800
  expect(factorialize(20)).to.equal(2432902008176640000);expected 20 to equal 2432902008176640000
*/

function factorialize(num) {
  for(var i = num-1; i > 0; i--) {
    num *= i;
  }
  return num;
}

factorialize(5);
