// forEach

function forEach(arr, cb) {
  const arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    cb(arr[i], i, arr);
  }
}

forEach([1, 2, 3], (el) => console.log(el));

//map

function map(arr, cb) {
  const arrLen = arr.length;
  const newArr = [];
  for (let i = 0; i < arrLen; i++) {
    newArr[i] = cb(arr[i], i, arr);
    //newArr.push(cb(arr[i], i, arr))
  }
  return newArr;
}

map([1, 2, 3], (el) => el * 3);

//filter

function filter(arr, cb) {
  const arrLen = arr.length;
  const newArr = [];
  for (let i = 0; i < arrLen; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

filter([1, 2, 3, 4, 5, 6], (el, i) => el + i > 5);

//every

function every(arr, cb) {
  const arrLen = arr.length;
  let result = true;
  for (let i = 0; i < arrLen; i++) {
    if (!cb(arr[i], i, arr)) {
      result = false;
    }
  }
  return result;
}
every([10, 5, 6], (el, i) => el + i > 5);

//some

function some(arr, cb) {
  const arrLen = arr.length;
  let result = true;
  for (let i = 0; i < arrLen; i++) {
    if (cb(arr[i], i, arr)) {
      result = true;
      break;
    }
  }
  return result;
}
some([1, 10, 0], (el, ind) => el + ind > 5);

//find

function find(arr, cb) {
  const arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    if (cb(arr[i], i, arr)) {
      return arr[i];
    }
  }
}
find([1, 2, 3, 4, 5], (el) => el > 2);

//flat
// Լուծումը հասկացել եմ, բայց այս մեթոդը գրելու համար օգտվել եմ ինտերնետից

function flat(array, depth = 1) {
  const result = [];

  (function flattener(list, dp) {
    for (let el of list) {
      if (Array.isArray(el) && dp) {
        flattener(el, dp - 1);
      } else {
        result.push(el);
      }
    }
  })(array, depth);

  return result;
}

flat([1, 2, 3, [4, [5, [6]]]], 2);

//indexOf

function indexOf(arr, el, pos = 0) {
  const arrLen = arr.length;

  if (pos < 0) {
    pos = arrLen + pos;
  }

  for (let i = pos; i < arrLen; i++) {
    if (arr[i] === el) {
      return i;
    }
  }

  return -1;
}

indexOf([1, 2, 4, 2, 6, 5, 6, 2], 2, 2);

//pop
function pop(arr) {
  if (arr.length > 0) {
    const delEl = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return delEl;
  }
  return undefined;
}

pop([1, 2, 3, 4]);

//reduce

function reduce(arr, cb, initValue) {
  const arrLen = arr.length;
  let startIndex = 0;
  let accum = initValue;
  if (initValue === undefined) {
    startIndex = 1;
    accum = arr[0];
  }

  for (let i = startIndex; i < arrLen; i++) {
    accum = cb(accum, arr[i], i, arr);
  }

  return accum;
}
reduce([1, 2, 3], (acc, el) => acc + el, 5);

//splice

function splice(arr, start, count, ...elem) {
  const delItems = [];
  const result = [];

  if (start < 0) {
    start = arr.length + start;
  }
  const endIndex = start + count;

  for (let i = start; i < endIndex; i++) {
    delItems.push(arr[i]);
  }

  for (let i = 0; i < start; i++) {
    result[i] = arr[i];
  }

  for (let i = 0; i < elem.length; i++) {
    result.push(elem[i]);
  }

  for (let i = endIndex; i < arr.length; i++) {
    result.push(arr[i]);
  }

  arr.length = 0;
  for (let i = 0; i < result.length; i++) {
    arr[i] = result[i];
  }

  return delItems;
}
splice([1, 2, 3, 4], 1, 2, "added", "elements");

//join

function join(arr, sep = ",") {
  let str = "";
  const arrLen = arr.length;

  if (arrLen > 0) {
    for (let i = 0; i < arrLen - 1; i++) {
      str += arr[i] + sep;
    }

    str += arr[arr.length - 1];
    return str;
  }

  return "";
}
join(["a", "b", "c", "d"], "-");

//slice

function slice(arr, start = 0, end = arr.length) {
  const newArr = [];
  start = start < 0 ? arr.length + start : start;
  end = end < 0 ? arr.length + end : end;
  if (arr.length > 0) {
    for (let i = start; i < end; i++) {
      if (i < arr.length) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  return newArr;
}
slice([1, 2, 3, 4], 1, 2);

//fill
function fill(arr, value, start = 0, end = arr.length) {
  for (let i = start; i < end; i++) {
    if (i < arr.length) {
      arr[i] = value;
    }
  }
  return arr;
}
fill([1, 2, 3, 4], "fill", 2);
