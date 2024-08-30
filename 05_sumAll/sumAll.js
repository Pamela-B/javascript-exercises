const sumAll = function(num1, num2) {
    if ((typeof num1 !== 'number') || typeof num2 !== 'number') {return 'ERROR'};
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {return 'ERROR'};
    if (num1 < 1 || num2 < 1) {return 'ERROR'};
    
    let finalResult = 0;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            finalResult += i;
        };
    } else if (num1 === num2) {
        finalResult += num1;
    } else {
        for (let i = num2; i <= num1; i++) {
            finalResult += i;
        };
    };
    return finalResult;
};

// Do not edit below this line
module.exports = sumAll;
