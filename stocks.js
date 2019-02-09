// Create a function maxProfit, which, given a list of stock prices for a given day, returns 
// the maximum profit that could have been made by buying a stock at the given price and then 
// selling the stock later on. For example if the input is: [45, 24, 35, 31, 40, 38, 11] then 
// your program should return 16 because if you bought the stock at $24 and sold it at $40, a 
// profit of $16 was made and this is the largest profit that could be made. If no profit 
// could have been made, return -1.
exports.findMaxBrute = (arr) => {
  return maxProfitBrute(arr);
}
exports.findMaxElegant = (arr) => {
  return maxProfitElegant(arr);
}

function maxProfitBrute(arr) {
  var tempMax = 0;
  arr.forEach((elem, i) => {
    arr.slice(i++).forEach(newElem => {
      var temp = newElem - elem;
      if (tempMax < temp) tempMax = temp;
    });
  });

  return tempMax;
}

function maxProfitElegant(arr) {
  var tempMax = -1;
  arr.forEach((elem, i) => {
    var temp = Math.max(...arr.slice(i++)) - elem;
    if (tempMax < temp) tempMax = temp;
  });

  return tempMax;
}