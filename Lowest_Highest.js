// Lowest Array Value

const points = [40, 100, 1, 5, 10];
points.sort(function(a, b) { return a - b });
console.log(points[0]);

// Highest Array Value
points.sort(function(a, b) { return b - a });
console.log(points[0]);