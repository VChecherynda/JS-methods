// Recursively flattens array.
function isArray(arr) {
    return Array.isArray(arr);
}

function flattenDeep(arr) {
    if (!isArray(arr)) return;

    const result = []

    for(const elem of arr) {
        if(isArray(elem)) {
            result.push(...flattenDeep(elem))
        } else {
            result.push(elem)
        }
    }
    
    return result;
}

console.log('[result]',flattenDeep([1, [2, [3, [4]], 5]]));
// => [1, 2, 3, 4, 5]