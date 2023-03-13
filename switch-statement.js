// using switch statements
/*
IF we are checking 1 thing for multiple choices
  a switch case might make more sense than a bunch of if else statements
*/
let day = 8;
// for switch:
//  for each case if there isn't a "break", then it will keep running the remaining cases until it hits a break. So if you want to group certain switches together, don't add a break :
/* ie.
  case 'lips':
  case 'heart':
    console.log("red")
    break;
  case 'sad face':
  case 'happy face':
  case 'angry face':
    console.log("yellow");
    break
*/
switch (day) {
  case 1:
    console.log('MON');
    break;
  case 2:
    console.log('TUE');
    break;
  case 3:
    console.log('WED');
    break;
  case 4:
    console.log('THUR');
    break;
  case 5:
    console.log('FRI');
    break;
  case 6:
    console.log('SAT');
    break;
  case 7:
    console.log('SUN');
    break;
  default:
    console.log('Invalid DAY');
}
