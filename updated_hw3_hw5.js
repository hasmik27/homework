// 1․ մեկ ցիկլով լուծել
function getSecMaxIndex(arr) {
    const sortArr = [...arr].sort((a, b) => {
      return a - b;
    });
    const secMaxElem = sortArr[sortArr.length - 2];
    return arr.indexOf(secMaxElem);
  }
  
  getSecMaxIndex([-60, 2, 43, -18, 5, -19, 36, 7, 56]);

// 3․ առանց reg exp գրել
function validity(password) {
    let [checkNum, checkLower, checkUpper, checkSymb] = [false,false, false,false,];
    if (password.length >= 6 && password.length <= 16) {
      for (let i = 0; i < password.length; i++) {
        const charAscii = password[i].codePointAt();
        const char = password[i];
        if (Number(char)) {
          checkNum = true;
        }
        if (charAscii >= 65 && charAscii <= 90) {
          checkUpper = true;
        }
        if (charAscii >= 97 && charAscii <= 122) {
          checkLower = true;
        }
        if (char === "&" || char === "#" || char === "@") {
          checkSymb = true;
        }
      }
      if (checkNum && checkUpper && checkLower && checkSymb) {
        return "Valid";
      } else {
        return "Invalid";
      }
    }
    return "Invalid";
  }
  
  validity("Aaza1234566#");

// 4․ զանգվածի փոխարեն string օգտագործել,
function star(n) {
    let str = "";
    const len = 2 * n - 1;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (i === j || i + j === len - 1) {
          str += "*";
        } else {
          str += " ";
        }
      }
      str += "\n";
    }
    return str;
  }
  
star(5);


  // 1. 0֊ի դեպքում սխալ ա, մնացածը ճիշտ ա
function odd(num) {
    if (num === 0) {
      return false;
    }
    if (num > 0 && num < 10 && num % 2 === 1) {
      return true;
    }
    const lastDigit = num % 10;
    if (lastDigit % 2 === 0) {
      return false;
    }
    num = (num - lastDigit) / 10;
    return odd(num);
}

odd(4211133)

// 2. փորձել չօգտագործել maxN և slice
function minPosEl(arr, i = 0, minPos = -1){
  const {length} = arr
  if(length === i){
      return minPos
  }
  if(arr[i] >= 0 ){
      if(minPos === -1){
          minPos = arr[i]
      }
      else if(minPos > arr[i]){
          minPos = arr[i]
      }
  }
  return minPosEl(arr, ++i, minPos)
}

minPosEl([56, -9, 87, -23, 0, -105, 55, 1])

//4. չօգտագործել slice մեթոդը
function deleteFirst(arr,i = arr.length - 1, newArr = []) {
    if (i === 0 || arr.length === 0) {
      return newArr;
    }
    newArr = [arr[i]].concat(newArr);
    return deleteFirst(arr, --i, newArr);
}

deleteFirst([6, 78, 'n', 0, 1])


// 5. չօգտագործել ցիկլեր

// սա էլ առանց slice փորձեմ ? 
function nestedArr(arr, newArr = []) {
  if (arr.length === 0) {
    return newArr
  }
  if (Array.isArray(arr[0])) {
    return nestedArr(arr[0].concat(arr.slice(1)), newArr)
  }
  newArr.push(arr[0])
  return nestedArr(arr.slice(1), newArr)
}

nestedArr([14,[1,[[[3, []]],1]], 0])