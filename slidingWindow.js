function contAvg(nums, k) {
    // Given an array of ints and int K, return the averages of every contigous subarray of size K.
    // Time: O(n), Space: O(n)
    let winLeft = 0;
    let winRight = 0;
    let movingSum = 0;
    let avgs = [];
    while (winRight - winLeft >= k-1 || winLeft < 1) {
        // if window is not of size k yet keep iterating
        movingSum += nums[winRight];
        if (winRight - winLeft < k-1) {
            winRight++;
        }
        else { //window is of size K
            // add the current avg to the list
            avgs.push(movingSum / k);
            // remove the left part from the sum            
            movingSum -= nums[winLeft];
            // keep iterating
            winLeft++;
            if (winRight < (nums.length - 1)) winRight++;
        }
    }
    return avgs;
}


function smallesContSum(nums, s) {
    // Given an array of positive ints `nums` and a positive int `s` return the length of the smallest contigous subarray with sum greater then or equal to s
    let winLeft = 0;
    let winRight = 0;
    let winSum = 0;
    let smallestLenth = Infinity;

    while (winRight < nums.length || winSum >= s) {
        winSum += nums[winRight];
        // if the window sum is to small move the right part
        if (winSum < s) {
            winRight++;
        }
        else { //window sum is >= to s
            smallestLenth = winRight - winLeft + 1;
            // try to shorten the array and see if the window sum is still >= s
            winSum -= nums[winLeft]; //remove the left part of the window
            winLeft++;
            // remove the right part of the window from the sum to offset the next iteration where it will be added again
            winSum -= nums[winRight];
        }
    }
    if (smallestLenth === Infinity) return 0;
    return smallestLenth;
}

console.log(smallesContSum([1,3,2,4,5], 6));
console.log(smallesContSum([1,3,2,4,5], 12));
console.log(smallesContSum([1,3,2,4,5], 22));