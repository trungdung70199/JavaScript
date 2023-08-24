// Made Iterables
console.log("Made Iterable")

function myNumbers() {
    let i = 0;
    return {
        next: function() {
            n += 5;
            return { value: n, done: false };
        }
    };
}

const n = myNumbers();
n.next();
n.next();
n.next();
console.log(n.next().value);