// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  max = Math.max(...arr);
  min = Math.min(...arr);
  avg = +(arr.reduce((acc, item) => acc + item, 0) / arr.length).toFixed(2);

  return {min, max, avg};
}

// Задание 2
function worker(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  // for(let item of arrOfArr) {
  //   max = max < func(item) ? func(item) : max;
  // }
  max = arrOfArr.reduce(item, acc => acc = Math.max(item), 0)
  
  return max;
}

// Задание 3
function worker2(arr) {
  return Math.max(...arr) - Math.min(...arr);
}