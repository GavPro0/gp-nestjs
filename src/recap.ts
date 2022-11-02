const myName = 'Pepe';
let myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};
// suma(12, "12");
suma(12, 7);

class Persona {
  // private age;
  // private name;

  // constructor(age: number, name: string) {
  //   this.age = age;
  //   this.name = name;
  // }

  constructor(private age: number, private name: string) {}

  getSummary() {
    return `My name is ${this.name}, ${this.age} `;
  }
}

const pepe = new Persona(15, 'pepe');
pepe.getSummary();
