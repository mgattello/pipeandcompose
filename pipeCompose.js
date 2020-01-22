// Pipe functionality has a left-to-right readability 
function pipe(...fns) {
    return (arg) => fns.reduce((prev, fn) => fn(prev), arg);
}

// Bunch of random functionalities
getName = (person) => person.name;
stringToUppercase = (string) => string.toUpperCase();
stringReverse = (string) => string
    .split('')
    .reverse()
    .join();

const name = pipe(
    getName,
    stringToUppercase,
    stringReverse,
)({name: 'Marco'})

console.log(name)