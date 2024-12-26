
function multiplyMatrices(A, B) {
    let result = [];
    for (let i = 0; i < A.length; i++) {
        result[i] = [];
        for (let j = 0; j < B[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < B.length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}


const epochStart = Date.now();
const first = [];
const second = [];

for (let index = 0; index < 1000000; index++) {
    first.push(Math.floor(Math.random() * 2354));
    second.push(Math.floor(Math.random() * 3214));
}

for (let index = 0; index < 50; index++) {
    console.time(`timer_${index}`);
    multiplyMatrices(first, second);
    console.timeEnd(`timer_${index}`);
}

const epochEnd = Date.now();

console.log('Total time taken = ', epochEnd - epochStart, 'ms');
