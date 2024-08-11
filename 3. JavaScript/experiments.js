const me = {
    name: {
        first: "Unreal",
        last: "Templier",
    },
    location: {
        streetNumber: 500,
        street: "Fakestreet",
        city: "Seattle",
        state: "WA",
        zipCode: 55555,
        country: "USA",
    },
    getAddress() {
        return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
    },
    getThis() {
        return this;
    },
};

console.log(me.getAddress());
console.log("");
console.log("Local this:");
console.log(me.getThis());
console.log("");
console.log("Global this:");
console.log(this);

