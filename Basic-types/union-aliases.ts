//union type
//when we want two different kinds of value
//literal type
//when we are very clear about the exact value
//Aliases
// It can be cumbersome to aways repeat the union type, Then we can store the union type
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor //any other value is not allowed
) {
  let result;
  //runtime check
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Saerom", "Anna", "as-text");
console.log(combinedNames);

const combinedStringAsNumber = combine("Saerom", "Anna", "as-number");
console.log(combinedStringAsNumber); //NaN
