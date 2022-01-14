//Generics
///Built-in
const names: Array<string> = []; //string[]
// names[0].split(" "); //possible

///Promises
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

// promise.then((data) => {
//   data.split(" ");
// });

///generic function
//we can also specify certain types instead of  T or U
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max" }, { age: 30 });
//can acess
console.log(mergeObj.age);

interface lengthy {
  //has length property
  length: number;
}

function countAndDescribe<T extends lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = `Got 1 elements`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Movies", "Cooking"]));
console.log(countAndDescribe({ name: "Max", length: 4 }));
// console.log(countAndDescribe(3)) //ERROR because number doesn't have length property

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  //TS can't guarantee key exists in obj
  return obj[key];
}

console.log(extractAndConvert({ age: 70 }, "age"));

///generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("title");
textStorage.addItem("content");
textStorage.removeItem("title");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

///utilize generic types
//generic types give us certain utility functionalities.
//during compliation, gives us extra check or skip check
//1.Partial
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

//2.Readonly
const peopleNames: Readonly<string[]> = ["Max", "Anna"];
// peopleNames.push("Manu"); //ERROR we can't edit
