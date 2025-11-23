'use strict';

const memoize = (f) => {
    const cacheMap = new Map()

    return (...args) => {
        const cacheKey = args.map((arg) => arg.toString()).join('|');
        if (!cacheMap.has(cacheKey)) cacheMap.set(cacheKey, f(...args))

        return cacheMap.get(cacheKey)
    }
};

const fib = memoize((n) => n <= 1 ? n : fib(n - 1) + fib(n - 2));

console.log(fib(10));
