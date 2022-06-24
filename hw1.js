// ex1
function checkNum(num){
    if(num % 2 === 0){
        return 'even'
    }
    return 'odd'
}

console.log(checkNum(3)) 

// ex2
function divisible(num1, num2){
    if(num1 % num2 === 0 || num2 % num1 === 0){
        return 1
    } 
    return 0
}

console.log(divisible(7,21))

// ex3
function triangle(ang1, ang2){
    return 180-(ang1 + ang2)
}

console.log(triangle(75,25))

// ex4
function sum(num){
    const str = String(num);
    return num + Number(str+str) + Number(str+str+str)
}

console.log(sum(100))

// ex5
function lastDigit(num){
    const str = String(num);
    const lastChar = str[str.length-1];
    if(lastChar === '0'){
        return num
    }
        return Number(lastChar + str.substring(0,str.length-1))   
}

console.log(lastDigit(1002))

// ex6

function avg(n1, n2, n3, n4, n5){
    return (n1 + n2 + n3 + n4 + n5) / 5 
}

// function avg(){
//     let sum = 0;
//     for (let i = 0; i<arguments.length; i++){
//         sum+=arguments[i];
//     }
//     return sum / arguments.length
// }


console.log(avg(7,52,-23,9,-81))
console.log(avg(45,-12,0,3,-15))


// ex7
function multiple(num) {
    if(num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
        console.log(`${num} is a multiple of 3,5 and 7.`)
    } else if(num % 3 === 0 && num % 5 === 0){
        console.log(`${num} is a multiple of 3 and 5.`)
    } else if(num % 3 === 0 && num % 7 === 0){
        console.log(`${num} is a multiple of 3 and 7.`)
    } else if(num % 5 === 0 && num % 7 === 0){
        console.log(`${num} is a multiple of 5 and 7.`)
    } else if(num % 3 === 0){
        console.log(`${num} is a multiple of 3.`)
    } else if(num % 5 === 0){
        console.log(`${num} is a multiple of 5.`)
    } else if(num % 7 === 0){
        console.log(`${num} is a multiple of 7.`)
    } else {
        console.log(`${num} is not a multiple of 3,5 or 7.`)
    }
}

multiple(21)

// ex8
function statusPerson(age, str){
    if(str === 'months' && 1<=age && age<=12){
        console.log('baby')
    } else if(str === 'years'){
        if(1<=age && age<=2){
            console.log('toddler')
        } else if(3<=age && age<=12){
            console.log('child')
        } else if(13<=age && age<=17){
            console.log('teenager')
        } else{
            console.log('adult')
        }
    }
}

statusPerson(8, 'months')



// ex9
function sort(x,y,z){
    if (x<y && x<z){
        if (y<z){
            console.log(x + ", " + y + ", " +z);
        } else {
            console.log(x + ", " + z + ", " +y);
        }
} else if (y<x && y<z) {
        if (x<z){
            console.log(y + ", " + x + ", " +z);
        } else{
            console.log(y + ", " + z + ", " +x);
        }
} else if (z<x && z<y) {
        if (x<y){
            console.log(z + ", " + x + ", " +y);
        } else {
            console.log(z + ", " + y + ", " +x);
        }
}       
}

sort(-23,-456,0)


// ex10

function examResult(ex1,ex2,ex3){
    if(ex1 >= 40 && ex2 >= 40 && ex3 >= 40){
        return 'Passed'
    } else if(ex1 >= 40 && ex2 >= 40 && (ex1+ex2+ex3)/3 >= 50 ||
    ex2 >= 40 && ex3 >= 40 && (ex1+ex2+ex3)/3 >= 50 || ex2 >= 40 && ex3 >= 40 && (ex1+ex2+ex3)/3 >= 50) {
        return 'Passed'
    }
    return 'Not passed'
}

console.log(examResult(10,85,75))


// ex11
function findSign(a,b,c){
    if(a === 0 || b ===0 || c === 0){
        console.log('unsigned')
    } else if(a>0 && b>0 && c>0 || a>0 && b<0 && c<0 || a<0 && b<0 && c>0 || a<0 && b>0 && c<0 ){
        console.log('+')
    } else {
        console.log('-')
    }
}

findSign(4,19,-2)

// ex12
function quadratic(a,b,c){
    const discriminant  = Math.pow(b,2) - 4*a*c
    if(a !== 0){
        if (discriminant > 0) {
            root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            console.log(`Solutions are ${root1} and ${root2}`)
        } else if (discriminant == 0) {
            root1 = root2 = -b / (2 * a);
            console.log(`Solution is ${root1}`)
        } else {
            console.log('Solution does not exists')
        }
    } else {
        console.log('Enter valid constants')
    }
}

quadratic(5,-13,6)

// ex13
var n = +prompt();
var i = 0;
var j = 0;
if(n % 2 === 0 && !Math.floor(n/10)){
    i += 1;
}

if(n % 3 === 0 && n % 10 === 1) {
    j += 1;
}

// ex14 
function incNumber(digit, num){
    const strOfNum =String(num);
    if(strOfNum.indexOf(String(digit)) !== -1){
        console.log('Yes')
    } else {
        console.log('No')
    }
}

incNumber(8,4569)


// ex15
function swap(num){
    let arr = String(num).split('');
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return Number(arr.join(''))
}

console.log(swap(12314))

// ex17
function area(shape, a, b){
    if(a > 0 && b > 0){
        if(shape === 'triangle'){
            return `Square of the triangle is ${a * b / 2}`
        } else if(shape === 'rectangle'){
            return `Square of the rectangle is ${a * b}`
        }
    } else {
        return 'Please enter only positives'
    }
    
}

console.log(area(prompt('Please enter the shape: rectangle or triangle'), 8,5))


// ex18
function diff(n){
    let arr = []
    while(n){
        let r = n % 10;
        n = parseInt(n / 10);
        arr.push(r)
    }
    return Math.max(... arr) - Math.min(... arr)
}

console.log(diff(4593653))