const convertToCelsius = function(temperature) {
  let result = (temperature - 32) / 1.8;
  if (!Number.isInteger(result)) {
    result = Math.round(result * 10) / 10;
  };
  return result;
};

const convertToFahrenheit = function(temperature) {
  let result = (temperature * 1.8) + 32;
  if (!Number.isInteger(result)) {
    result = Math.round(result * 10) / 10;
  };
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
