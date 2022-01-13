//Intersection Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};
//allow us to combine other types
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};
///with union types
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

//Type Guards
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`); // we don't know emp has this property or not
  }
  if ("startDate" in emp) {
    console.log(`startDate is: ${emp.startDate}`); // we don't know emp has this property or not
  }
}

printEmployeeInformation(e1);

///with Classes
class Car {
  drive() {
    console.log("driving...");
  }
}

class Truck {
  drive() {
    console.log("driving...");
  }
  loadCargo(amount: number) {
    console.log(`Loading Cargo..${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function userVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
  //if(loadCargo in vehicle) also possible
}

//Discriminated Union
//It's a pattern when working with union types making implementing type guards easier. available with object types
interface Bird {
  type: "bird"; //this is certain value
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log(`Moving with speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 100 });

//Type Casting
const paragraph = document.querySelector("p");
// document.getElementById('message=output') TS can't detect this
//1.
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
//2.
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi There!";

//Index Properties
interface ErrorContainer {
  id: string; // id: number; not possible, should be matched with prop property type
  //flexible
  // I dont know exact property name, count
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  id: "error1",
  email: "Not a valid email!",
  userName: "Must start with a capital character!",
};

//Function Overloads
//2. gives function information
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
// but it feels little cumbersome for me to write all these things..
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
const result = add(1, 5);
const result2 = add("Max", "Schwarz");
// 1. result2.split(' ') error because TS doesn't know exactly it is string or number
const result3 = add(1, "Max");
const result4 = add("Max", 1);

//Optional Chaining
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "own company" },
};

// console.log(fetchedUserData.job && fetchedUserData.job.title);
//safely access nested objects, properties
console.log(fetchedUserData?.job?.title);

//Nullish Coalescing
//helps us to deal with nullish data (null, undefined)

const userInput = "";
const userInput2 = 0;

// const storedData = userInput || 'DEFAULT';
const storedData = userInput ?? "DEFAULT";
const storedData2 = userInput2 ?? "NUMBER";

console.log(storedData);
console.log(storedData2);
