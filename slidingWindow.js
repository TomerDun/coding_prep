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


console.log(contAvg([1,2,3,4,5,6,7,8,9], 1));