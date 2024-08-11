const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

console.log(daysOfWeek);
console.log(daysOfWeek[2]);
console.log(daysOfWeek.length);
console.log(daysOfWeek.join(" | "));

console.log("");

const capitals = [
    {country: "Russia", capital: "Moscow"},
    {country: "France", capital: "Paris"},
    {country: "China", capital: "Beijing"},
];

for (let i = 0; i < capitals.length; i++) {
    console.log(capitals[i]);
}
console.log("");

capitals.push({country: "Belarus", capital: "Minsk"});

for (let i = 0; i < capitals.length; i++) {
    console.log(capitals[i]);
}
console.log("");

capitals[1].country = "Iran";
capitals[1].capital = "Tehran";

capitals.forEach(function(capital) {
    console.log(capital);
});
console.log("");
