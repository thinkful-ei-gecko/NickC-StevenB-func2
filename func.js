function jediName(firstName, lastName){
    return firstName.slice(0,3) + lastName.slice(0,2);
}

jediName('Luke', 'Skywalker');


function beyond(num){
if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) { console.log('And Beyond')
}
else if (num >0) {console.log('to infinity')}
else if (num <0) {console.log('to negative infinity')}
else {console.log('Staying Home')}
}
