function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //2. so we put mathematical calculation first to avoid wrong calculation later
  const result = n1 + n2;
  if (showResult) {
    //1. once we combine phrase with numbers, n1 + n2 becomes string too
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
