// 0/1 Knapsack Dp
// https://www.youtube.com/watch?v=8LusJS5-AGo

var weightValueMap = {
    1: 1,
    3: 4,
    4: 5,
    5: 7
}

var weightValueArr = [[1,1], [3,4], [4,5], [5,7]]

function knapsack (map) {
    var table = [];
    var row = 0;
    for (var weight in map) {
      table.push([]);
      var capacity = 0;
      while (capacity < 8) {
        var valueWithoutTakingThisWeight = 0
        var remainingWeight = 0;
        if (row >= 1) {
          valueWithoutTakingThisWeight = table[row - 1][capacity];
        }
        // unable to take current weight. 
        if (weight > capacity) {
          table[row][capacity] = valueWithoutTakingThisWeight;
          // decision point. I can take the weight. am I better off taking this new weight?
        } else  {
          if (row >= 1) {
            remainingWeight = table[row - 1][capacity - weight];
          }
          var valueAfterThisWeight = map[weight] + remainingWeight;
          table[row][capacity] = Math.max(valueAfterThisWeight, valueWithoutTakingThisWeight)
        } 
        capacity ++;
      }
      row ++;
    }
    return table;
}

//console.log(knapsack(weightValueMap));

function getWeights (grid) {
  // init w last row and col
  var row = grid.length - 1;
  var col = grid[row].length - 1;

  var currentValue = grid[row][col];
  while (currentValue > 0) {
    console.log(row, col)
    // if same value at previous weight, did not take weight
    if (col === 0) {
      break;
    }
    if (currentValue === grid[row - 1][col]) {
      row = row - 1;
      currentValue = grid[row][col];
    } else {// else took weight
      // print weight
      console.log(weightValueArr[row]);
      // move up one row and to capacity before weight
      col = col - weightValueArr[row][0];
      row = row - 1;
      currentValue = grid[row][col];
    }
  }
}

console.log(getWeights(knapsack(weightValueMap)));