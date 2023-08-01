// Typeof Symbol
// All typeof:

// primitive typeof:

// Number
// BigInt
// String
// Boolean
// null
// undefined
// Symbol

// Syntax: Symbol(key)
a = Symbol('a');
console.log(a)

function f() { return 1; }
c = Symbol(f);
console.log(c);
console.log(typeof(c));

// Tinh doc nhat cua Symbol:
// Khong the ton tai hai gia tri symbol bang nhau

d = Symbol();
e = Symbol();

console.log(d == e);

sb = Symbol('aa')

obj = {
    Name: 'Gamer',
    Age: 20,
    [sb]: 'AAAA'
}
console.log(obj[sb]);
console.log(obj['Name']);
console.log(obj['Age']);