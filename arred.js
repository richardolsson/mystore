function reduceArray(arr, reducer) {
    let acc = arr[0];

    for (let i = 1; i < arr.length; i++) {
        acc = reducer(acc, arr[i], i, arr);
    }

    return acc;
}

let done = reduceArray([1, 6, 8, 11], (state, action, idx, src) => {
    console.log(state, action, idx, src);
    return state+action;
});

console.log(done);
