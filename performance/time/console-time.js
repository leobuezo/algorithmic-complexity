function counter(length) {
    for(let i = 0; i < length; i++) {
        console.log(i);
    }
}

function test(iterations, counterLenght) {
    for(let i = 0; i < iterations; i++) {
        console.time('time-performance');
        counter(counterLenght);
        console.timeEnd('time-performance');
    }
}

test(15, 5);
