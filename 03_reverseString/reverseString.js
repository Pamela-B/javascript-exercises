const reverseString = function(text) {
    const originalString = text;
    let invertedTextArray = [];
    for (let i = 1; i <= originalString.length; i++) {
        invertedTextArray.push(originalString.substr(-i,1));
    }
    return invertedTextArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
