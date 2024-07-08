let person = {
  name: "John Doe",
  age: 30,
  isStudent: true,
  address: {
    city: "New York",
    country: "USA",
  },
  info: function () {
    console.log(this.name, "-", this.age);
  },
};

person.info();
console.log(person.address.city);

person.age = 24;
person["age"] = 32;
console.log(person.age);

person.gender = "m";
console.log(person.gender);

delete person.address;
console.log(person.address);

const adList = [
  { title: "Ad1", description: "This is the Ad number 1" },
  { title: "Ad2", description: "This is the Ad number 2" },
  { title: "Ad3", description: "This is the Ad number 3" },
  { title: "Ad4", description: "This is the Ad number 4" },
];

console.log(adList[1].description);
