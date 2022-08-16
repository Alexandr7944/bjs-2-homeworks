// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  max = -Infinity;
  min = Infinity;
  sum = 0;

  for(let item of arr) {
    max = item > max ? item : max;
    min = item < min ? item : min;
    sum += item;
  }
  
  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for(let item of arrOfArr) {
    max = max < func(item) ? func(item) : max;
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];

  for(let item of arr) {
    max = item > max ? item : max;
    min = item < min ? item : min;
  }

  return max - min;
}