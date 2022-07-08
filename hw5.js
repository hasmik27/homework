//ex1
function odd(num) {
  if (num === 0) {
    return true;
  }
  const lastDigit = num % 10;
  if (lastDigit % 2 === 0) {
    return false;
  }
  num = (num - lastDigit) / 10;
  return odd(num);
}

odd(4211133);

//ex2
function minPos(arr, maxN = Infinity, minP = -1) {
  if (arr.length === 0) {
    return minP;
  }
  if (arr[0] >= 0 && arr[0] < maxN) {
    minP = arr[0];
    maxN = minP;
  }
  return minPos(arr.slice(1), maxN, minP);
}

minPos([45, -9, 15, 5, -78]);

//ex3
function ascOrder(arr, minNum = arr[0], index = 0) {
  if (arr.length === 0) {
    return -1;
  }
  if (arr[0] >= minNum) {
    index++;
    minNum = arr[0];
  } else {
    return index;
  }
  return ascOrder(arr.slice(1), minNum, index);
}

ascOrder([2, 12, 15, 48, 64]);

//ex4
function delFirst(arr, arrLen = arr.length) {
  if (arr.length < arrLen || arr.length === 0) {
    return arr;
  }
  return delFirst(arr.slice(1), arrLen);
}

delFirst([6, 78, "n", 0, 1]);

//ex5
function nestedArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(nestedArr(arr[i]));
    } else {
      newArr = newArr.concat(arr[i]);
    }
  }
  return newArr;
}

nestedArr([14, [1, [[[3, []]]], 1], 0]);

//ex6
function rotate(arr, num) {
  num = num >= 0 ? num : arr.length + num;
  if (num === 0) {
    return arr;
  } else {
    arr.push(arr.shift());
    return rotate(arr, --num);
  }
}

rotate(["a", "b", "c", "d", "e", "f", "g", "h"], -2);

//ex7
function sum(num) {
  if (num < 10) {
    return num;
  }
  const lastDigit = num % 10;
  num = (num - lastDigit) / 10;
  let newSum = lastDigit + sum(num);
  if (Math.floor(newSum / 10) === 0) {
    return newSum;
  }
  return sum(newSum);
}

sum(29);
