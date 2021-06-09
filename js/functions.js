// "use strict"
// // types of function in js ==> 
// // - normal function (have there own this keyword)
// // - arrow function (don't have there own this keyword)
// syntax
// this


// eg problem with this
// t = {
// 	value: 'ravi',
// 	tags: [1, 2, 3],
// 	run: function() {
// 		const a  = 10
// 		const tt = this
// 		this.tags.forEach(function(tag) {
// 			console.log(tag, this.value)
// 		}, this)
// 	}
// }

// // normal functions
// function functionName(name, age) {
//    return name + age
// }

// // arrow function
// [].map( (name, age) => name + age )

// // // myFunction()

// // [].forEach()

// // 
// // anoynomus function
// const myFunc = function () {

// }

// this ==> current object
// console.log('this1', this) // global obj (browser ==> window obj (undefined in case "strict mode on"), node ==> global obj)

// function a () {
//     const a = 10
//     console.log(this)
// }

// a()

// function myFunction () {
//     const name = 'abc'
//     this
//     function a () {
//         const age = 10
//         this
//     }
// }


// function name() {
//     console.log('aruguments', aruguments)
// }

// name(10, 20)


// constructor function ==> object create
function Student(name, age) {
    this.name = name
    this.age = age
}
// new => 
// 1 -> empty {} 
// 2 -> {} ===> this
// 3 -> return this
const s1 = new Student('ravi', 10) // {}

console.log(s1)
const s2 = new Student('anish', 12) // {}
console.log(s2)



// factory function ==> object create
function student(name, age) {
   return {
        name: name,
        age: age
    }
}

const s3 = student('ravi', 10)
const s4 = student('anish', 10)

console.log(s3, s4)