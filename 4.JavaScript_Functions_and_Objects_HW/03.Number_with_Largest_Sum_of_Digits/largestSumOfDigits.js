function findLargestBySumOfDigits(nums) {
    "use strict";
    var result;
    var maxSum = 0;

    if (arguments.length < 1) {
        result = 'undefined';
    }

    for (var i = 0; i < nums.length; i++) {
        if (parseInt(nums[i]) !== nums[i]) {
            result = 'undefined';
        }
        var curNum = Math.abs(nums[i]).toString();
        var curSum = 0;
        for (var z = 0; z < curNum.length; z++) {
            curSum += Number(curNum[z]);
        }
        if (curSum >= maxSum) {
            result = nums[i];
            maxSum = curSum;
        }
    }
    console.log(result);
}
findLargestBySumOfDigits([5555, 5560]);
findLargestBySumOfDigits([33, 44, -99, 0, 2]);
findLargestBySumOfDigits(['hello']);
findLargestBySumOfDigits([5, 3.3]);