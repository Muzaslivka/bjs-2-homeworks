function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let item of arr) {

    if (item < min) {
      min = item;
    }
    if (item > max) {
      max = item;
    }
    sum += item;
  }

  const avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...args) {

  if (args.length === 0) return 0;

  return args.reduce((acc, item) => acc + item, 0);
}

function differenceMaxMinWorker(...args) {

  if (args.length === 0) return 0;

  const max = Math.max(...args);
  const min = Math.min(...args);

  return max - min;
}

function differenceEvenOddWorker(...args) {

  if (args.length === 0) return 0;

  let sumEven = 0;
  let sumOdd = 0;

  for (let num of args) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }

  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...args) {

  if (args.length === 0) return 0;
  
  let sumEven = 0;
  let countEven = 0;
  
  for (let num of args) {
    if (num % 2 === 0) {
      sumEven += num;
      countEven++;
    }
  }
  
  return countEven === 0 ? 0 : +(sumEven / countEven).toFixed(2);
}

function makeWork(arrOfArr, func) {

}
