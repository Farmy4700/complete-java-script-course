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
/*
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
*/



////////////////////////////////
//IIFE

/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 3);  //data privacy score cannot be accessed outside
})();



(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 3 - goodLuck);  //data privacy score cannot be accessed outside
})(5);
*/

/////////////////////////////
//Closures

//function how many years left until retirement
/*
function retirement(retiermentAge) {
    var a = ' years left until retirement.'
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retiermentAge - age) + a)
    }   
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland= retirement(67);

retirementGermany(1979);
retirementIceland(1987);
retirementUS(1990);
*/

//retirement(66)(2003);
/*
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
*/
/*  
function interviewQuestion(job) {
        return function(name) {
            if (job === 'designer') {
                console.log(name + ', can you please explain what UX design is?');
            } else if (job === 'teacher') {
                console.log('What subject do you teach, ' + name + '?');
            } else {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
    }
    
    interviewQuestion('dog walker')('John');
*/

//////////////////////////////////////////////
//Bind, call and apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};


john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation.call(emily, 'friendly', 'afternoon');

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');





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

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

var id = "10.10.10.10";
var privateIP;
if (/^(10)\.(.*)\.(.*)\.(.*)$/.test(id)){
  privateIP=(true);
}else if (/^(172)\.(1[6-9]|2[0-9]|3[0-1])\.(.*)\.(.*)$/.test(id)){
    privateIP=(true);
}else if (/^(192)\.(168)\.(.*)\.(.*)$/.test(id)){
    privateIP=(true);
}else {
  privateIP=(false);
}

































































































































































































