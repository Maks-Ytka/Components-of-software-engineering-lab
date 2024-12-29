async function asyncFilterCallback(item, callback) {
    setTimeout(() => {
        const isEven = item % 2 === 0;
        callback(isEven);
    }, Math.random() * 500);
}

async function asyncFilter(array, callback) {
    const results = await Promise.all(
        array.map((item) => new Promise((resolve) => callback(item, resolve)))
    );
    return array.filter((_, index) => results[index]);
}

function debounce(fn, delay) {
    let timeout;
    if (typeof fn !== 'function') {
        throw new TypeError('Expected a function');
    }
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
}

(async () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log("Original array:", numbers);

    const filteredNumbers = await asyncFilter(numbers, asyncFilterCallback);

    console.log("Filtered array (even numbers):", filteredNumbers);

    const debouncedLog = debounce(() => console.log("This message is debounced."), 1000);
    debouncedLog();
})();
