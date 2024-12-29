async function asyncFilterCallback(item, callback) {
    setTimeout(() => {
        const isEven = item % 2 === 0;
        callback(isEven); 
    }, Math.random() * 500);
}
