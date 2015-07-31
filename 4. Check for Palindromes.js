/*
  7 Tests
  expect(palindrome("eye")).to.be.a("boolean");
  assert.deepEqual(palindrome("eye"), true);
  assert.deepEqual(palindrome("race car"), true);
  assert.deepEqual(palindrome("not a palindrome"), false);
  assert.deepEqual(palindrome("A man, a plan, a canal. Panama"), true);
  assert.deepEqual(palindrome("never odd or even"), true);
  assert.deepEqual(palindrome("nope"), false);
*/


function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/\s/g,"").replace(/[.,]/g,"");
  var reverse = str.split("").reverse().join("");

  return str == reverse;

}

palindrome("A man, a plan, a canal. Panama");
