//Donald solution
function printerError(s) {
  var allowed = 'abcdefghijklm';
  var error = 0;

  s.split('').forEach( function( item ) {
    return ( allowed.indexOf( item ) === -1 ) ? error++ : '';
  });
  
  return error + '/' + s.length;
}

//My solution
function printerError(s) {
    let errorRate;
    let numberOfErrors= 0;
  for (i = 0; i < s.length; i++){
    switch (s[i]){
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        break;
      default:
        numberOfErrors++;
        break;
    }
  }
  errorRate = numberOfErrors / s.length;
  return "" + numberOfErrors + "/" + s.length + "";
}