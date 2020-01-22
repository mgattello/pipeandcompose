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

const inverseNamePipe = pipe(
    getName,
    stringToUppercase,
    stringReverse,
)({name: 'Marco'})

console.log(inverseNamePipe)

// Compose functionality- it's a reverse F(x) of Pipe
compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const inverseNameCompose = compose(
    stringReverse,
    stringToUppercase,
    getName
)({name: 'Marco'})

console.log(inverseNameCompose)