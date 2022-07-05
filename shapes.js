// SHAPES -- Objects that have the same structure
// Accessing properties is by far the most common task when dealing with objects
// It's common to have multiple objects with the same property names(Keys)

const dog = {
    type: 'mammal',
    age: 13,
};
const snake = {
    type: 'mammal',
    age: 13,
};

// Those objects have the same shape / keys

let obj = {
    x: 10,
    y: 20,
};

// JS stores the shape of the created Object
// Each JS object is unique, so JS only has to save the unique values to the object
// so only the values are stored 10 | 20 --> and it is pointing to a shape x | y --> The shape is storing the keys and the offsets
// offset: 0 | [[Writable]]: true | [[Enumerable]]: true | [[Configurable]]: true
// offset: 1 | [[Writable]]: true | [[Enumerable]]: true | [[Configurable]]: true

obj1 = {
    x: 10,
    y: 20,
};
obj2 = {
    x: 100,
    y: 200,
};

// Shape will be stored only once, no matter how many objects with the same structure we have

let user = {};
// user object is pointing to an empty shape
user.name = 'John'; // a new shape is going to be created [0]
user.age = 38; // another shape is created || including a name and age key [1] // every shape links back to its previous shape // TRANSITION CHAIN

let user1 = {};
user1.name = 'Freddy'; // 2shapes: empty shape + name shape

let user2 = {};
user2.age = 38; // 3 shapes --> 1 empty for both of the users, and then 1 specific shape for the keys

let user3 = {};
user3.name = 'Walter';
let user4 = { name: 'Walter' }; // downs't start shape with empty object

let userX = {};
userX.name = 'Smally';
userX.age = 42;
userX.bald = false; // 4 shapes in memory --> using a ShapeTable under the hood // the later shape points to the shapeTable so it immediately finds all the keys

// Inline Caches --> makes JS-Runtime fast
function test(user) {
    console.log(user.name);
}

test(user1);
test(user2); // Inline-Cache recognizes it has the same shape
// doesn't need to view the Shape-Table

// Shape-Table and Inline Caches help to optimize the retrieving speed for the JS-Runtime
// So consistency is very important when you have similar Objects, to have faster/ optimized code in the end

//BE CONSISTENT NAMING YOUR OBJECTS
// Example: Don't do this:
user1 = { name: 'Katja' };
user2 = { fname: 'Johanna' };
user3 = { firstname: 'Smeraldá' };
user4 = { firstName: 'Fiona' };
