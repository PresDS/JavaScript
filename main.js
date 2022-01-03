// JavaScript Higher Order Functions & Arrays - Brad Traversy
// https://www.youtube.com/watch?v=rRgD1yVwIvE&ab_channel=TraversyMedia


const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
    
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


/*****************************************/
// forEach
/*****************************************/
// For Loop - Basic Javascript
// for(let i=0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// Ex 1 - forEach
// companies.forEach( function(company) {
//     console.log(company.name);
// });

/*****************************************/
// filter
/*****************************************/

// Ex. 1 - Find all ages over 21
// let canDrink = [];
// for(let i=0; i<ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink)

// Ex. 2 - Find all ages over 21 using filter function
// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });

// Ex. 3 - filter - one-liner
// const canDrink = ages.filter( age => age >= 21);
// console.log(canDrink);

// Ex. 4 - Filter retail companies - ES5 style
// const retailCompanies = companies.filter( function(company) {
//     if(company.category === "Retail" ) {
//         return true;
//     }
// });
// console.log(retailCompanies)

// Ex. 5  - Filter retail companies - ES6 style
// const retailCompanies = companies.filter( company => company.category === 'Retail');
// console.log(retailCompanies)

// Ex. 6 - Get 80s companies - ES5
// const eightiesCompanies = companies.filter( function (comp) {
//     if(comp.start >= 1980 && comp.start < 1990) {
//         return true;
//     }
// });
// console.log(eightiesCompanies);

// Ex. 7 - Get 80s companies - ES6
// const eightiesCompanies = companies.filter( company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

// Ex. 8 - Get Companies that lasted 10 years or more
// const lastedTenYears = companies.filter( company => (company.end - company.start >= 10));
// console.log(lastedTenYears);


/*****************************************/
// map
/*****************************************/

// Ex 1 - Create array of company names
// const companyNames = companies.map(function (company) {
//     return company.name;
// });
// console.log(companyNames)

// Ex 2 - Create array with Company name, start to end dates - using template literals
// const testMap= companies.map(function (company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(testMap);

// Ex 3 - Same as ex 2 - shorthand
// const testMap= companies.map( (company) => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

// Ex 4 - Get Square root for all ages
// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// Ex 5 - Double all ages
// const agesDouble = ages.map(age => age * 2);
// console.log(agesDouble);

// Ex 6 - Coombing two previous examples - chaining 
// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);
// console.log(ageMap);


/*****************************************/
// sort
// takes two arguments
/*****************************************/

// Ex 1 - Sort companies by start year
// const sortedCompanies = companies.sort( function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedCompanies);

// Ex 2 - same as ex 1 - shorthand
// const sortedCompanies = companies.sort( (a,b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// Ex. 3 - Sort Ages
// const sortedAges = ages.sort((a,b) => ( a > b ? 1 : -1));
// console.log(sortedAges);

/*****************************************/
// reduce
/*****************************************/

// For Loop
// let ageSum = 0;
// for(let i = 0; i< ages.length; i++) {
//     ageSum += ages[i];
// }
// console.log(ageSum);

// Ex 1 - Sum all ages - first argument is the callback function, the second argument sets the intial value for the total variable
// const ageSum = ages.reduce( function(total, age) {
//     return total + age;
// }, 0);
// console.log(ageSum);

// Ex 2 - shorthand version of example 1
// const ageSum = ages.reduce( (total, age) => total + age, 0);
// console.log(ageSum);

// Ex 3 - Get total years for all companies
// const totalYears = companies.reduce( function (total, company) {
//     return total + (company.end - company.start);
// }, 0);
// console.log(totalYears)

// Ex 4 - Get total years for all companies - shorthand ES6
// const totalYears = companies.reduce( (total, company) => total + (company.end - company.start), 0 );
// console.log(totalYears);

// Ex 5 - Combine Methods
// const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >=40 )
//     .sort((a,b) => a - b)
//     .reduce((a, b) => a + b);
// console.log(combined);
