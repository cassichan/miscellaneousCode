function divideNumberByTwo(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(divideNumberByTwo(10));