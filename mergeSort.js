function mergeSort (arr) {
    if (arr.length === 1) {
        return arr;
    }
    var mid = Math.floor((arr.length - 1)/ 2);
    var left = arr.slice(0, mid + 1);
    var right = arr.slice(mid + 1);
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right) {
    var result = [];
    var leftPointer = 0;
    var rightPointer = 0;
    var lastLeftIndex = left.length - 1;
    var lastRightIndex = right.length - 1;

    while (leftPointer <= lastLeftIndex && rightPointer <= lastRightIndex) {
        if (left[leftPointer] < right[rightPointer]) {
            result.push(left[leftPointer]);
            leftPointer ++;
        } else {
            result.push(right[rightPointer]);
            rightPointer ++;
        }
    }

    if (leftPointer > lastLeftIndex) {
        result = result.concat(right);
        return result;
    } 
    if (rightPointer > lastRightIndex) {
        result = result.concat(left);
        return result;
    }

    return result;
}

console.log(mergeSort([4,6,5,8,3,9]))