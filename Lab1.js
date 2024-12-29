async function asyncFilterCallback(item, callback) {
    setTimeout(() => {
        const isEven = item % 2 === 0;
        callback(isEven); 
    }, Math.random() * 500);
}
async function asyncFilter(array, callback) {
    const results = await Promise.all(array.map(item =>
        new Promise((resolve) => callback(item, resolve))
    ));
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
