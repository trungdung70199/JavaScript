// The new Map() Method
// Can create a map by passing an Array to the new Map() constructor

const fruits = new Map([
    ["apples", 10],
    ["banana", 20],
    ["Lemon", 5],
    ["Melon", 40]
]);
console.log("In gia tri apples: ");
console.log(fruits.get("apples"));


/// Size Property
// The size property returns the number of element in a Map
console.log("In gia tri size: ");
console.log(fruits.size);

// Delete() Method
// delete() method removes a Map element
console.log("Xoa gia tri apples trong fruits: ")
fruits.delete("apples");
console.log("Kiem tra cac gia tri sau khi xoa: ")
console.log(fruits.size);
console.log(fruits);

// The has() Method
// returns true if a key exists in a map
console.log("Kiem tra cac gia tri co thuoc fruits khong: ")
console.log(fruits.has("apples"));
console.log(fruits.has("banana"));