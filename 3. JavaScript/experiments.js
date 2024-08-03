const skyIsBlue = true;
if (skyIsBlue) {
    console.log("Sky is blue!");
} else {
    console.log("Sky is not blue?");
}

let doubleEqual = (2 + 2) == "4";
let tripleEqual = (2 + 2) === "4";
console.log(`doubleEqual = ${doubleEqual}`);
console.log(`tripleEqual = ${tripleEqual}`);

const friendsAtParty = 10;
if (friendsAtParty < 0) {
    console.log(`Wrong friends number!`);
} else if (friendsAtParty === 0) {
    console.log(`Nobody at the party.`);
} else if (friendsAtParty <= 4) {
    console.log(`We can play Mario Kart!`);
} else {
    console.log(`Let's dance!`);
}
