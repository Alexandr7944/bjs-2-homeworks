// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  max = -Infinity;
  min = Infinity;
  sum = 0;

  for(let i = 0; i < arr.length; i++) {
    max = arr[i] > max ? arr[i] : max;
    min = arr[i] < min ? arr[i] : min;
    sum += arr[i];
  }
  
  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for(let item of arr) {
    sum += item;
  }

  return sum;
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