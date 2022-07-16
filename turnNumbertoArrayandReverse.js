//Solution 1
function digitize(n) {
 let arrayOfDigits = String(n).split('');
  let newArray = [];
  for (let i = arrayOfDigits.length - 1; i >= 0; i--) {
    newArray.push(Number(arrayOfDigits[i]))
  }
  return newArray;
}
//Solution 2
function digitize(n) {
  const arrayOfNumbers = Array.from(String(n), Number);
  const reversedArray = arrayOfNumbers.reverse();
  return reversedArray;
}
//Solution 3
function digitize(n) {
  //code here
  let x = String(n).split("").reverse().map(Number);
  return x;
//Solution 4
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}