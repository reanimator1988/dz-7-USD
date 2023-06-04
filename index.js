const USD = 40;
for (let i = 10; i <= 100; i += 10) {
    const cost = i * USD;
    console.log(`${i} доларів коштують ${cost} гривень`);
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(12));

function checkIfCanBePoweredBy3(n) {
    if (n == 1) {
        return true;
    }
    let x = 3;
    while (x < n) {
        x *= 3;
    }
    return x == n;
}
console.log(checkIfCanBePoweredBy3(9));
console.log(checkIfCanBePoweredBy3(81));
console.log(checkIfCanBePoweredBy3(13));

