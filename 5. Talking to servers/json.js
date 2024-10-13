const responseFromServer = `{"name": "Luna","age": 10,"breed": "Havanese","location": {"city":"Seattle","state": "WA"}}`;

console.log(responseFromServer);

const responseObject = JSON.parse(responseFromServer);
console.log(responseObject.name);
console.log(responseObject.breed);
console.log(responseObject.location.state);
console.log(responseObject);



const dog = {
    name: "Luna",
    age: 10,
    breed: "Havanese",
    location: {
      city: "Seattle",
      state: "WA",
    },
  };

console.log(dog.age);

const jsonString = JSON.stringify(dog);
console.log(jsonString);



const codeBlock = document.querySelector("#code-block");
codeBlock.innerText = JSON.stringify(dog, null, 4);