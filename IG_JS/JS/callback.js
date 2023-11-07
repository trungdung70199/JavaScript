function processArray(arr, callback) {
    for (const number of arr) {
        callback(number)
    }
}
const numbers = [1, 2, 3, 4, 5];
console.log("----processArray----");
processArray(numbers, function(number) {
    const answer = number * 2;
    console.log(answer);
})

console.log("----ProcessArray2----");
processArray(numbers, function(number) {
    const answer = (number + 5) * 0.5;
    console.log(answer);
})

console.log("----processArray3---");
processArray(numbers, function(number) {
    const answer = (number - 5) * 0.1;
    console.log(answer);
})

const drinks = ["Tea", "Mik tea", "Coffee"];
// for each
drinks.forEach(drink => {
    console.log(drink)
});

//anonymous function
console.log("---anonymous function---");
drinks.forEach(function(drink) {
    console.log(drink)
});

// function
console.log("---function---");

function showDrink(drink) {
    console.log(drink);
}
drinks.forEach(showDrink);

//
const items = [
    { id: 1, name: "coffee", price: 300 },
    { id: 2, name: "Tea", price: 350 },
    { id: 3, name: "Milk tea", price: 300 },
]

//for each
items.forEach(item => {
    const message = `${item.name} of cost is ${item.price}yen.`
    console.log(message);
})

// map
var newItems = items.map(function(item) {
    return {
        id: item.id,
        name: item.name,
        price: item.price,
        withOutTaxPrice: Math.floor(item.price / 1.1),
    }
});
console.log(newItems)

//filter
console.log("----fileter----");
var newItems = items.filter(item => item.price > 300);
console.log(newItems);