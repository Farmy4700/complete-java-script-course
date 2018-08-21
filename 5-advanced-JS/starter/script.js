// Lecture: Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
    
}

function isFullAge(el) {
    return el >= 18;

}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));  
    } else {
        return -1;
    }
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);



console.log(ages);
console.log(fullAges);
console.log(rates);
*/

//Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ' can you explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do ?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');
teacherQuestion('John');
designerQuestion('Shane');
designerQuestion('Franks');

interviewQuestion('teacher')('Mark');

function drunk(beers) {
    if (name === 'Shane' ) {
        return function(name) {
        console.log(name + ', I bet you drank ' + ( 3 + beers ) + '!'); }
    } else {
        return function(name) {
        console.log(name + ', You only drank ' + beers + '.'); }
    }
}

var howManyBeersPro = drunk(19)
var howManyBeersRookie = drunk(3);

howManyBeersPro('Shane');
howManyBeersRookie('Lori');









































































