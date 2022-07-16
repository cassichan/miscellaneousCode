function removeEveryOther(arr){
//   let originalArrayLength = arr.length;
 return arr.filter((element, index) => index % 2 === 0);
//   for (let i = 1; i < arr.length; i++) {
//     arr.splice(i,1);
//   }
//   return arr;
}