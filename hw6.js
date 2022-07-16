//ex1
function maxProduct(arr){
    let maxProd = arr[0] * arr[1]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] * arr[i+1] > maxProd){
            maxProd = arr[i] * arr[i+1]
        }
    }
    return maxProd
}

maxProduct([1,6,5,9,0,5,3,-1])

//ex2
function countMissings(arr){
    const {length} = arr
    let [minNum, maxNum] = [arr[0], arr[0]]
    for(let i = 1; i<length; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i]
        }
        if(arr[i] < minNum){
            minNum = arr[i]
        }
    }
    return (maxNum - minNum) + 1 - length
}

countMissings([4,8,3,1])

//ex3
function acronym(str){
    let newStr = `${str[0].toUpperCase()}`
    for(let i = 1; i < str.length; i++){
        if(str[i] === ' '){
            newStr += str[i+1].toUpperCase()
        }
    }
    return newStr
}

acronym('Have a good night')

//ex4
function subStrings(str, num){
    let newStr = '';
    for(let i = 0; i <= str.length - num; i++){
        newStr += str.substr(i, num)
        if(i < str.length-num){
            newStr += ','
        }
    }
    return newStr
}

subStrings('abcdfghz', 7)

//ex5

// function scrabble(word){
//     let score = 0
//     const letters = ['aeioulnrst','dg','bcmp','fhvwy','k','jx','qz']
//     for(let k = 0; k < word.length; k++){
//         for(let i = 0; i < letters.length; i++){
//             for(let j = 0; j < letters[i].length; j++){
//                 if(word[k] === letters[i][j]){
//                     score += 1 + i
//                 }
//             }
//         }
//     }
//     return score
// }

// scrabble('quick')

function scrabble(word){
    let score = 0
    const letters = ['aeioulnrst','dg','bcmp','fhvwy','k','jx','qz']
    for(let k = 0; k < word.length; k++){
        for(let i = 0; i < letters.length; i++){
            if(letters[i].indexOf(word[k]) > -1){
                    score += 1 + i
            }
        }
    }
    return score
}

scrabble('another')

//ex6

function squareCode(str){
    let codeStr = '';
    const removeFromStr = [' ', ',', '.', ':'];
    for(let i = 0; i < removeFromStr.length; i++){
        str = str.replaceAll(removeFromStr[i], '').toLowerCase()
    }
    const strLen = str.length;
    const columns = Math.ceil(Math.sqrt(strLen));
    const rows = Math.ceil(strLen / columns);
  
    for (let i = 0; i < rows; i ++) {
      for (let j = i * columns; j <  (i+1) * columns; j ++) {
        if( str[j] === undefined){
            continue
        }  
        codeStr += str[j];
      } 
      codeStr += '\n';
    }
    return codeStr
}
  
console.log(squareCode('If man was meant to stay on the ground, god would have given us roots.'))

//ex7
function caesar(plain){
    const key = Math.floor(Math.random() * 27);
    const len = plain.length
    let cipher = ''
	for (let i = 0; i < len; i++){
		let shift = (i + key) % len;
		cipher += plain[shift];
	}
    // console.log(key)
    return cipher
}

caesar('abcdefghijklmnopqrstuvwxyz')