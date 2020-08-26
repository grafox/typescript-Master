const person = {
  name: 'Gassan',
  age: 47,
};

type Person = typeof person;

const anotherPerson: Person = {
  name: 'Jabbar',
  age: 70,
};

// JavaScript
// typeof person // 'object'
