// Creates an array of elements split into groups the length of size. 
// If array can't be split evenly, the final chunk will be the remaining elements.

function chunk(arr, size) {
    let newArr = []

    for(let i = 0; i < arr.length;) {
        newArr.push(arr.splice(i, i + size))
    }

    return newArr;
}

console.log(chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]

console.log(chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]