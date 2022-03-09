function counter(length) {
    for(let i = 0; i < length; i++) {
        console.log(i);
    }
}

function arrayConverter(arr) {
    return arr.map( el => el.toString());
}

function array2DConverter(value) {
    let newArr2D = new Array(value);
    for(let i = 0; i < value; i++) {
        newArr2D[i] = new Array(value).fill(value);
    }
    return newArr2D;
}

// See through console.log the auxiliar space used by arrayConverter(value) function
console.log(arrayConverter([2, 3, 4]));

// See how a big auxiliar space afects the time performance
let start = performance.now();
console.log(array2DConverter(20000));
let elapsed = (performance.now() - start);
console.log("Elapsed Time: " + elapsed.toFixed(2) + " miliseconds");