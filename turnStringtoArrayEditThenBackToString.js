function removeChar(str){
  let splitStr = str.split("");
  splitStr.shift();
  splitStr.pop();
  return splitStr.join("");
};

