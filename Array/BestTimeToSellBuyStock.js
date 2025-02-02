// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104


/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // Best Approach
    let minVal = prices[0];
    let profit = 0;
    for(let i = 1; i < prices.length ; i++ ){
        if(prices[i] < minVal)
        minVal = prices[i];
        else if(prices[i] - minVal > profit){
            profit = prices[i] - minVal;
        }
    }
    return profit;
}
var maxProfit = function(prices) {
  // Optimal Approaach
    let auxArray = [];
    let maxSoFar = -Infinity;
    for (let i = prices.length - 1; i >= 0; i--) {
    maxSoFar = Math.max(maxSoFar, prices[i]);
    auxArray.unshift(maxSoFar);
    }
    let maxProfit  = 0;

    for(let i = 0; i < prices.length - 1 ; i++){
        maxProfit= Math.max(maxProfit, (auxArray[i] - prices[i]))
    }
    return maxProfit;
}

var maxProfit = function(prices) {
     //Brute force approach
    let maxProfit = 0;
    for(let i = 0; i < prices.length-1; i++){
        for(let j =i+1; j< prices.length; j++){
            maxProfit = Math.max(maxProfit, prices[j]-prices[i]);
        }
    }
    return maxProfit;
  }

  console.log(maxProfit([7,1,5,3,6,4]))