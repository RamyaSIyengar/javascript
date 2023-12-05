
let namee = "Palak"

console.log(namee.toUpperCase())
console.log(namee.toLowerCase())
console.log(namee.slice(2,4)) // excluded end

let friend = "dhairya"
console.log(namee.concat(" is a friend of " , friend, " from US"))

let friend1 = "         Rakhi     "
console.log(friend1)
console.log(friend1.trim())

for (letters in friend){
    console.log(friend[letters])
}


console.log("har\*".length) //escape sequence

str = "please give me Rs 1000"
console.log(str.slice(-4))

//includes
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
//backtick