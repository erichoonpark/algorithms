/*
5 Tests
expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.be.a('Number');
expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.equal(6);
expect(findLongestWord('May the force be with you')).to.equal(5);
expect(findLongestWord('Google do a barrel roll')).to.equal(6);
expect(findLongestWord('What is the average airspeed velocity of an unladen swallow')).to.equal(8);
*/


function findLongestWord(str) {
  str = str.split(" ");
  var longest = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > longest) {
      longest = str[i].length;
    }
  }
  return longest;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
