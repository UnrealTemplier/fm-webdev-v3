const person = {
    name: 'John Smith',
    age: 15,
    city: 'Lawrence',
    state: 'Kansas',
    country: 'USA',
};

console.log(person);
console.log(person.name);
console.log(person['age']);

const person1 = {
    name: {
        first: 'Alex',
        last: 'Smith',
    },
    age: '15-25',
    location: {
        city: 'Wichita',
        state: 'Kansas',
        country: 'USA',
    }
};

const person2 = {
    name: {
        first: 'James',
        last: 'Smith',
    },
    age: '25-35',
    location: {
        city: 'Wichita',
        state: 'Kansas',
        country: 'USA',
    }
};

function whatAge(person) {
    if (person.age === '25-35') {
        console.log(`${person.name.first} is in his prime!`);
    } else if (person.age === '15-25') {
        console.log(`${person.name.first} is very young!`);
    } else {
        console.log(`${person.name.first} is a child or an oldman`);
    }
};

console.log(whatAge(person1));
console.log(whatAge(person2));

const dog = {
    type: 'dog',
    name: 'William',
    speak() {
        console.log('woof woof');
    },
};

dog.speak();