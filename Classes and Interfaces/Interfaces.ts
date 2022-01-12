//Interfaces
//with objects
interface Named {
  readonly name: string;
  outputName?: string; // if its optional, use '?'
}

interface Greetable extends Named {
  //define only types not concrete values
  greet(phrase: string): void;
}
class Person implements Greetable {
  name: string;
  outputName?: string;
  age = 30;
  constructor(n: string, outputn?: string) {
    this.name = n;
    if (outputn) {
      this.outputName = outputn;
    }
  }

  greet(pharse: string) {
    console.log(`${pharse}, You are ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person("Max");
//user1.name = 'Anna' // Error
user1.greet("Hi there!");
console.log(user1);

//with functions
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
//use interface as a function type
let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;
