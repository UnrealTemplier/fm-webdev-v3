let friendsAtYourParty = 0;
while (friendsAtYourParty < 10) {
    console.log("A friend is coming to the party.");
    friendsAtYourParty = friendsAtYourParty + 1;
}
console.log(`friendsAtYourParty = ${friendsAtYourParty}`);

console.log("");

let a = 0;
for (let i = 0; i < 100; i++) {
    a++;
}
console.log(`a = ${a}`);

console.log("");

const character = '🐶';
const timesToRepeat = 10;
let str = "";
for (let i = 0; i < timesToRepeat; i++) {
    str += character;
}
console.log(str);
