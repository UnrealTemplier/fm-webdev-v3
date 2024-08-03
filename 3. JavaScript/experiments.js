function addTwo(number) {
    return number + 2;
}
console.log(addTwo(5));
console.log(addTwo(10));

console.log("");

const meow = function() {
    return "meow!";
}

const woof = () => {
    return "woof!";
}

console.log(meow);
console.log(woof);

console.log("");

console.log(meow());
console.log(woof());