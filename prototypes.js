// Prototypes != Classes
// food object

let food = {
    init: function (type) {
        this.type = type;
    },
    recipe: function () {
        console.log(`This is a recipe for ${this.type}`);
    },
};

// Object.create() creates a new empty object - food object is only a fallback
let donut = Object.create(food);
let orange = Object.create(food);
donut.init('Donuts');
orange.init('Oranges');

food.recipe = function () {
    console.log(
        `You are now eating ${this.type.toUpperCase()}`
    );
};

donut.recipe();
orange.recipe();

// isPrototypeOf()
food.type = 'Blah blah blah';
console.log(food.isPrototypeOf(donut));
// --> true
