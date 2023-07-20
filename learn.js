function fib(num) {
    if (isNaN(num) || num < 0) {
        return 0;
    } else {
        let fib = [0, 1];
        let result = '';
        for (let i = 2; i < num; i++) {
            fib[i] = fib[i - 2] + fib[i-1]
        }

        for (let item of fib) {
            result += item + ','
        }

        result = result.slice(0, result.length - 1)

        return result;
    }
}

console.log(fib(15));