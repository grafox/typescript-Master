const person = {
    name: 'Gassan',
    age: 27,
  };
  
  type Person = typeof person;
  type PersonKeys = keyof Person;
  
  type PersonTypes = Person[PersonKeys];
  
  const anotherPerson: Person = {
    name: 'Jabbar',
    age: 30,
  };
  