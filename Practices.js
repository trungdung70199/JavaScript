// Best Practices

// Avoid Global Variables

// Declarations on top

let fullName, firstName, lastName, price, discount, fullPrice;

firstName = "Dung";
lastName = "Nguyen";
fullName = firstName + lastName;
console.log(fullName);

price = 20;
discount = 0.10;
fullPrice = price - discount;
console.log(fullPrice);