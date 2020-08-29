interface Person {
    name: string;
    age: number;
  }
  
  const person: Person = {
    name: 'Gassan',
    age: 47,
  };
  
  type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
  };
  
  function freeze<T>(obj: T): MyReadonly<T> {
    return Object.freeze(obj);
  }
  
  const newPerson = freeze(person);