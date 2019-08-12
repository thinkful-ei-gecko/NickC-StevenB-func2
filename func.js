function jediName(firstName, lastName){
  return firstName.slice(0,3) + lastName.slice(0,2);
}

jediName('Luke', 'Skywalker');


function beyond(num){
  if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) { console.log('And Beyond');
  }
  else if (num >0) {console.log('to infinity');}
  else if (num <0) {console.log('to negative infinity');}
  else {console.log('Staying Home');}
}


//if /else ...for loop... looping through string... string 
//input: a string.
//output: a new string. 

function decode(string){
//given a string, take the 1st letter and return a certain index 
//of the string based on the coding system. 
  if (string.charAt(0) === 'a') {console.log(string.charAt(1));
  }
  else if (string.charAt(0) === 'b') {console.log(string.charAt(2));
  }
  else if (string.charAt(0) === 'c') {console.log(string.charAt(3));
  }
  else if (string.charAt(0) === 'd') {console.log(string.charAt(4));
  }
  else {console.log(' ');}
}

function numOfDays(month, leapYear) {
  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return `${month} has 31 days.`;
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return `${month} has 30 days.`;
    break;
  case 'February':
  case true:
    return `${month} has 29 days.`;
    break;
  case 'February':
  case false:
    return `${month} has 28 days.`;
    break;
  default:
      throw new Error('Please use a valid month.');
    }
  }

console.log(numOfDays('steven', true));