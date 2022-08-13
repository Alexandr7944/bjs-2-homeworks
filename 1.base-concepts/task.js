"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;

  if(d === 0) {
    arr.push(-b / (2 * a));
  }else if(d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let numPercent = parseInt(percent);
  let numContribution = parseInt(contribution);
  let numAmount = parseInt(amount);

  //Проверка типа данных
  if(isNaN(numPercent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }else if(isNaN(numContribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }else if(isNaN(numAmount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let today = new Date();
  let yearDate = date.getFullYear();
  let yearToday = today.getFullYear();
  let monthDate = date.getMonth();
  let monthToday = today.getMonth();
  let nomberOfMonths = (yearDate - yearToday) * 12 + monthDate - monthToday;
  
  numAmount -= numContribution;
  numPercent = numPercent / 100 / 12;
  let payment = numAmount * (numPercent + (numPercent / (((1 + numPercent)**nomberOfMonths) - 1)));

  if(numContribution < numAmount) {
    console.log(+(nomberOfMonths * payment).toFixed(2));
    return +(nomberOfMonths * payment).toFixed(2);
  } else {
    console.log(0);
    return 0
  }
}
