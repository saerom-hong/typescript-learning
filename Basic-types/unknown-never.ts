//unknown type
let userInput: unknown;
let userName: string;

//we don't know the type yet, we can store any types
userInput = 5;
userInput = "saerom";
//we can't guarantee userInput would be string -> error
//but with 'any', possibie
// userName = userInput;

//need extra type check with unknown to be able to assign an unknown value to a value with a fixed type
if (typeof userInput === "string") {
  userName = userInput;
}

//never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
