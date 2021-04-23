function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 5) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i]%2==0){
            totalEvens++;
        } else {
            totalOdds++
        }
    }
    if(totalOdds > totalEvens) {
        return "odds are larger";
    } else if(totalEvens > totalOdds) {
        return "evens are larger";
    } else {
        return "tied"
    }
}
var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"


function betterThanAverage(arr) {
    var sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum+= arr[i];
    }
    sum/=arr.length;
    var count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > sum) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(let i = 0; fibArr.length < n; i++) {
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]