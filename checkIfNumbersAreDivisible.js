function isDivisible (number1, number2) {
    const remainder = number1 % number2;
    if (remainder === 0) {
      return true;
    }
    else {
      return false;
    }
    }
    
    console.log(isDivisible(25,5));