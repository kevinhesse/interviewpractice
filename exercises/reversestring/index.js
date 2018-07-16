// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
function reverse(str) {
  let reversed = "";

  for ( let x = 0; x < str.length; x++ ) {
    reversed = x + reversed;
  }
    return reversed;
  }

module.exports = reverse;
