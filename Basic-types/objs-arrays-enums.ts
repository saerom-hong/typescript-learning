//2. provide some info about the structure of the object
// by using {}, we tells TS that this is an object
// explicitly assign but this is not a good practice
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   //above this, TS infers it but we want role key as a tuple type
//   //but TS can't know. so need to specify
//   // it marks a 'tuple type'
//   role: [number, string];
// } = {
//   name: "saerom",
//   age: 28,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
//this works
// person.role.push("admin"); // but Push is exception
// //but this doesnt work
// person.role = [0, "user", "admin"];
// person.role[1] = 10; //ERROR

const ADMIN = 0;
const READ_OLNY = 1;
const AUTHOR = 2;

enum Role {
  ADMIN = 5, // if we dont' want to start zero, we can put any number
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "saerom",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

//get error
let favoriteActivities: string[];
favoriteActivities = ["Sports"];
// 1. we only specify person as an object so can't read property
// -> we need to be more specific
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // ERROR!
}

if (person.role === Role.AUTHOR) {
  console.log(`is admin`);
}
