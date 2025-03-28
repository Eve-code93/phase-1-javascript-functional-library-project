function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let result = [];
    myEach(collection, (value, key, col) => {
        result.push(callback(value, key, col));
    });
    return result;
}

function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;
    
    if (acc === undefined) {
        acc = values[0];
        startIndex = 1;
    }
    
    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let result = [];
    myEach(collection, value => {
        if (predicate(value)) {
            result.push(value);
        }
    });
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
        let valA = callback(a);
        let valB = callback(b);
        return valA > valB ? 1 : valA < valB ? -1 : 0;
    });
}

function myKeys(obj) {
    return Object.keys(obj);
}

function myValues(obj) {
    return Object.values(obj);
}

// Exporting functions if required in a Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { myKeys, myValues };
}
