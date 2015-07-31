/*
  4 Tests
  expect(reverseString('hello')).to.be.a('String');
  expect(reverseString('hello')).to.equal('olleh');expected 'hello' to equal 'olleh'
  expect(reverseString('Howdy')).to.equal('ydwoH');expected 'Howdy' to equal 'ydwoH'
  expect(reverseString('Greetings from Earth')).to.equal('htraE morf sgniteerG');expected 'Greetings from Earth' to equal 'htraE morf sgniteerG'
*/

function reverseString(str) {
  //Split a string into an array, seperated by letter
  str = str.split('').reverse().join('');
  return str;
}

reverseString('hello');
