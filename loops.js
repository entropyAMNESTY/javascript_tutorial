// LOOPS & Objects
// for-in loop --> before es 6 was the only way
// better option: convert your object into an array and loop over that

// 3 methods to convert an object into an array
// I object.keys --> creates an array that contains the property names (keys) of the object
// II object.values --> creates an array that contains the value of each property within the object
// III object.entries --> creates an array of arrays! Each inner array has 2 items - key & value

// for-of loop --> way easier way to loop through arrays
// --> loops through each key
// for (const key of fruitKeys) {console.log(key)}

// Looping through data to extract it-- is fundamental in programming
let fruitKeys = ['banana', 'mango'];

for (const key of fruitKeys) {
    console.log(key);
}
// Output --> banana, mango

let hi = function (name) {
    return `Welcome ${name}`;
};

// next, lets define our members

let memberList = ['Tom', 'Jerry'];

// new users added

memberList.push('John', 'Wally');
memberList;

// greet all members

//traditional for loop
for (i = 0; i < memberList.length; i++) {
    let greeting = hi(memberList[i]);
    console.log(greeting);
}

// traditional for-in loop

for (const name in memberList) {
    // takes data from the prototype values, and therefore because of security you build in an if-condition
    if (memberList.hasOwnProperty(name)) {
        let greeting = hi(memberList[name]);
        console.log(greeting);
    }
}

// FOR-OF-LOOP --> loops through each element of the array
for (const name of memberList) {
    let greeting = hi(name);
    console.log(greeting);
}

// Looping through OBJECTS

let fruit = {
    bananas: 12,
    carrots: 2,
    mangos: 7,
};

fruit;

//method1: Object.keys
let fruitBeys = Object.keys(fruit);
fruitBeys;
// Output --> Returns an array with the fruit keys

// method2: Object.values
let fruitValues = Object.values(fruit);
fruitValues;
// Output --> Returns an array with the fruit values

// method3: Object.entries
let fruitEntries = Object.entries(fruit);
fruitEntries;
// Output: creates an array with 3 arrays in it -- key + value pair included

// if you use Object.entries, you most likely want to extract the key value pairs

for (const [fruitKey, fruitValue] of fruitEntries) {
    console.log(
        `You need to buy ${fruitValue} ${fruitKey}`
    );
}
