function fromPairs(arr) {
    const pairs = {};

    arr.forEach(elem => {
        const key = elem[0];
        const value = elem[1];
        
        pairs[key] = value;
    });

    return pairs;
}

console.log(fromPairs([['a', 1], ['b', 2]]));
// => { 'a': 1, 'b': 2 }
