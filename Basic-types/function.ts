//function return type
function add(n1: number, n2: number) {
  //here return type is number
  return n1 + n2;
}

function printResult(num: number): void {
  //return type is void
  //it deliberately doesn't return anything
  console.log("Rseult: " + num);
}

function addAndHandle(n1: number, n2: number, callBack: (num: number) => void) {
  const result = n1 + n2;
  callBack(result);
}

printResult(add(5, 12));

//functions as types
let combineValues: (a: number, b: number) => number;

combineValues = add;
//get Error
// combineValues = printResult;
//combineValues = 5;

console.log(combineValues(8, 5));

//undefined is valid type of TS
let someValue: undefined;

addAndHandle(10, 20, (result) => {
  //It will be ignored because we defined as 'void' so it doesn't bother to compile
  return result;
});

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});
