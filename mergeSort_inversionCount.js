function InversionCount () {
    this.inversionCount = 0;
}

InversionCount.prototype.mergeSort = function (arr) {
  if (arr.length === 1) {
      return arr;
  }
  var mid = Math.floor((arr.length - 1)/ 2);
  var left = arr.slice(0, mid + 1);
  var right = arr.slice(mid + 1);
  return this.merge(this.mergeSort(left),this.mergeSort(right))
}

InversionCount.prototype.merge = function (left, right){
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
            this.inversionCount ++;
            rightPointer ++;
        }
    }

    if (leftPointer > lastLeftIndex) {
        result = result.concat(right.slice(rightPointer));
        return result;
    } 
    if (rightPointer > lastRightIndex) {
        var remaining = left.slice(leftPointer);
        this.inversionCount = this.inversionCount + remaining.length;
        result = result.concat(remaining);
        return result;
    }

    return result;
}

// var ic = new InversionCount()
// console.log(ic.mergeSort([4,6,5,8,3,9]));
// console.log(ic.inversionCount, 'inversionCount');

module.exports = {
    inversionCountClass: InversionCount
}