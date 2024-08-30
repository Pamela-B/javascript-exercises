const removeFromArray = function(initialArray, ...argsToRemove) {
    let finalArray = initialArray;
    for (const arg of argsToRemove) {
        if (finalArray.includes(arg)) {
            finalArray = finalArray.filter(function(value) {
                return value !== arg;
            });
        };
    };
    return finalArray;
};
// Do not edit below this line
module.exports = removeFromArray;
