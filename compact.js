// Creates an array with all falsey values removed. 
// The values false, null, 0, "", undefined, and NaN are falsey.

function compact(arr) {
    return arr.filter(Boolean)
}

console.log(compact([0, 1, false, 2, '', 3, false]));
// => [1, 2, 3]