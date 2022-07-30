// Class

class Person {
    constructor(firstName, lastName, gender, age){
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
    }

    get firstName(){
        return this._firstName
    }
    set firstName(value){
        this._firstName = value
    }

    get lastName(){
        return this._lastName
    }
    set lastName(value){
        this._lastName = value
    }

    get gender(){
        return this._gender
    }
    set gender(value){
        this._gender = value
    }

    get age(){
        return this._age
    }
    set age(value){
        this._age = value
    }
}


class Student extends Person {
    constructor(firstName, lastName, gender, age, program, year, fee){
        super(firstName, lastName, gender, age)
        this.program = program
        this.year = year
        this.fee = fee
        this.data = this.program.reduce((acc, item) =>{
            acc[item] = 0
            return acc
        }, {})
    }

    get program(){
        return this._program
    }
    set program(value){
        this._program = value
    }

    get year(){
        return this._year
    }
    set year(value){
        this._year = value
    }

    get fee(){
        return this._fee
    }
    set fee(value){
        this._fee = value
    }

    passExam(program, grade){
        if(this.data.hasOwnProperty(program)){
            this.data[program] = grade
        } else {
            throw new Error('This subject not in your program')
        }
    }

    nextYear(){
        this.year = this.year + 1
    }

    isAllPassed(){
        for(let key in this.data){
            if(this.data[key] < 50){
                throw new Error('You do not pass the exam')
            }
        }
        return true
    }

    nextGrade(){
        if(this.isAllPassed){
            this.nextYear()
            for(let key in this.data){
                this.data[key] = 0
            }
            return 'Congratulations'
            }
        }
    }

class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay){
        super(firstName, lastName, gender, age)
        this.program = program
        this.pay = pay

    }

    get program(){
        return this._program
    }
    set program(value){
        this._program = value
    }

    get pay(){
        return this._pay
    }
    set pay(value){
        this._pay = value
    }

    toString(){
        return JSON.stringify(this.program)
    }
}


let person = new Person('John', 'Smith', 'm', 30)
let teacher = new Teacher('Lisa', 'Kudrow', 'w', 36, 'English', 500)
let student = new Student('Hasmik', 'Margaryan', 'w', 24, ['Math', 'English'], 2022, 300)


// Function Constructor

function PersonFn(firstName, lastName, gender, age){
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.age = age
}

function StudentFn(firstName, lastName, gender, age, program, year, fee){
    PersonFn.call(this, firstName, lastName, gender, age)
    this.program = program
    this.year = year
    this.fee = fee
    this.data = this.program.reduce((acc, item) =>{
        acc[item] = 0
        return acc
    }, {})
}    

StudentFn.prototype = Object.create(PersonFn.prototype)

StudentFn.prototype.passExam = function(program, grade){
    if(this.data.hasOwnProperty(program)){
        this.data[program] = grade
    } else {
        throw new Error('This subject not in your program')
    }
}

StudentFn.prototype.nextYear = function(){
    this.year = this.year + 1
}

StudentFn.prototype.isAllPassed = function(){
    for(let key in this.data){
        if(this.data[key] < 50){
            throw new Error('You do not pass the exam')
        }
    }
    return true
    
}

StudentFn.prototype.nextGrade = function(){
    if(this.isAllPassed){
        this.nextYear()
        for(let key in this.data){
            this.data[key] = 0
        }
        return 'Congratulations'
        }
}

function TeacherFn(firstName, lastName, gender, age, program, pay) {
        PersonFn.call(this, firstName, lastName, gender, age)
        this.program = program
        this.pay = pay
}

TeacherFn.prototype = Object.create(PersonFn.prototype)

TeacherFn.prototype.toString = function(){
    return JSON.stringify(this.program)
}


let personFn = new PersonFn('John', 'Smith', 'm', 30)
let teacherFn = new TeacherFn('Lisa', 'Kudrow', 'w', 36, 'English', 500)
let studentFn = new StudentFn('Hasmik', 'Margaryan', 'w', 24, ['Math', 'English'], 2022, 300)