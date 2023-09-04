/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];

// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john, mary, joe] = ages;

console.log('John:', john, 'Mary:', mary, 'Joe:', joe);

// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant',
};

let {mike, jill, alicia} = jobs;
console.log('Mike:', mike,'Jill:', jill,'Alicia:', alicia);

// Destructuring subsets
let languages = ['English', 'French', 'Spanish', 'German', 'Japanese'];
let [johnNative, johnSecondary] = languages;
console.log('Johns Native Language:',johnNative, 'Johns Secondary Language:', johnSecondary); 


let [, , maryNative, marySecondary] = languages;
console.log('Marys Native Language:',maryNative, 'Marys Secondary Language:', marySecondary); 


let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese',
};

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;

console.log(favorite);
console.log(secondFavorite);
console.log(others);


let favoritFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'squid',
    andrea: 'steak',
};

let {brian, anna, ...rest} = favoritFoods;
console.log(brian);
console.log(anna);
console.log(rest);