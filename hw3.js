// ex1

function getSecondMax(arr) {
  const maxNumInd = maxNumIndex(arr);
  arr[maxNumInd] = -Infinity;
  return maxNumIndex(arr);
}

function maxNumIndex(arr) {
  let maxNum = arr[0];
  const arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return arr.indexOf(maxNum);
}

getSecondMax([-60, 2, 43, -18, 5, -19, 36, 7, 56]);

//ex2
function repeatNum(arr, padAmount, repeat) {
  const arrLen = arr.length;
  if (padAmount > arrLen) {
    return "Invalid padding amount";
  }
  const first = arr.slice(0, padAmount);
  const last = arr.slice(arrLen - padAmount);
  return [].concat(
    ...Array(repeat).fill(first),
    arr,
    ...Array(repeat).fill(last)
  );
}

repeatNum([1, 2, 3, 4], 2, 1);

//ex3
function validity(password) {
  const valid = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@])(?=.{6,16}$)"
  );
  if (valid.test(password)) {
    return "Valid";
  }
  return "Invalid";
}

validity("Aaza1234566#");

//ex4
function star(n) {
  let matrix = [];
  const len = n + n - 1;
  for (let i = 0; i < len; i++) {
    matrix[i] = [];
    for (let j = 0; j < len; j++) {
      if (i === j || i + j === len - 1) {
        matrix[i][j] = "*";
      } else {
        matrix[i][j] = " ";
      }
    }
  }
  return matrix;
}

star(3);

//ex5

function strToArr(str) {
  const arr = [""];
  const strLen = str.length;
  let index = 0;
  for (let i = 0; i < strLen; i++) {
    if (str[i] === " ") {
      index++;
      arr.push("");
    } else {
      arr[index] += str[i];
    }
  }
  return arr;
}

// function strToArr(str) {
//   return str.split(" ");
// }
strToArr("  46788 + !");

//ex6

function freq(arr) {
  const obj = arr.reduce((acc, elem) => {
    if (!acc.hasOwnProperty(elem)) {
      acc[elem] = 0;
    }
    acc[elem] += 1;
    return acc;
  }, {});
  const result = {};
  for (let key in obj) {
    result[key] = obj[key] / arr.length;
  }
  return result;
}

freq([1, 1, 2, 2, 3]);

// ex7

function pattern(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += "\n";
  }
  for (let i = num - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += "\n";
  }

  return str;
}

pattern(10);

//ex8

function numStrNumber(arr) {
  let numNum = 0;
  let numStr = 0;
  const arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    if (typeof arr[i] === "number") {
      numNum += 1;
    } else {
      numStr += 1;
    }
  }
  return `Numbers: ${numNum}, Strings: ${numStr}`;
}

numStrNumber([1, "10", "hi", 2, 3]);
