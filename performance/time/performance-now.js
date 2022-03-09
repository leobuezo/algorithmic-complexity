function counter(length) {
    for(let i = 0; i < length; i++) {
        console.log(i);
    }
}

function test(iterations, counterLenght) {
    let avg = 0;
    let totalElapsed = 0;
    for(let i = 0; i < iterations; i++) {
        let start = performance.now();
        counter(counterLenght);
        let elapsed = (performance.now() - start);
        console.log("Elapsed Time: " + elapsed.toFixed(2));
        totalElapsed += elapsed;
    }
    avg = totalElapsed / iterations;
    console.log("Performance Average: " + avg.toFixed(2));
}

test(15, 5);
