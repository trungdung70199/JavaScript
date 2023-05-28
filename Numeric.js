// Numeric Sort
// Can use method sort for alphabet but with number can't

const points = ["20", "30", "10", "100", "5", "15"];
points.sort();
// Method sort()
console.log("Use sort Array: ");
console.log(points);
// Use function a, b and return a - b
console.log("Use function and return a - b: ");
points.sort(function(a, b) { return a - b });
console.log(points);
// Use the same with function a, b and return b - a
console.log("Use function and return b - a");
points.sort(function(a, b) { return b - a });
console.log(points);