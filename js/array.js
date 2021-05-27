const names = ["ravi", "amit", "vishal", 1, true, {name: "abc"}]
// console.log(names["0"])

// looping
// for while do-while
// for-in for-of
// map filter forEach


// functions ==> callback function

// function run(value, callback) {
//     console.log('inside run', value)
//     callback()
// }

// run(10, function() {
//     // callback function
//     console.log('inside callback')
// })

// arrow function 

// function display(value) {
//     console.log('Hey, inside display', value)
// }

// const displayArrowFunc = value1 => console.log('Hey, inside arrow display', value)

// display(10)
// displayArrowFunc(20, 30)
// console.log('length', names.length)

// const names = ["ravi", "amit", "vishal", 1, true, {name: "abc"}]

// map loop function

// const result = names.map(function (value, index, array) {
//     // console.log('value', value, 'index', index)
//     // console.log('array', array)
//     if(index > 2) {
//         return index
//     }
// })

// console.log({resultMap: result})

// filter
// const result = names.filter(function (value, index, array) {
//     // console.log('value', value, 'index', index)
//     // console.log('array', array)
//     if(index > 2) {
//         return index
//     }
// })

// console.log({resultFilter: result})

// for each

// const result = names.forEach(function (value, index, array) {
//     // console.log('value', value, 'index', index)
//     // console.log('array', array)
//     if(index > 2) {
//         return index
//     }
// })

// console.log({resultforEach: result})


// names.push("newValue")
// names.unshift("newValue")

// const removedItem = names.pop()
// names.shift()
// console.log(names);

// const splice = names.splice(1, 2) // change in actual data
// const slice = names.slice(1, 2) // no change in actual data

// console.log({names})



// searching items in an array

// const students = ["ravi", "amit", "vishal"]
// const find = "amit"
// // const result = students.includes(find)

// const index = students.indexOf(find)
// console.log('index', index)

// const students = [
//     {rollNo: 1, name: 'ABC1', class: 1},
//     {rollNo: 2, name: 'ABC2', class: 1},
//     {rollNo: 3, name: 'ABC3', class: 1},
//     {rollNo: 4, name: 'ABC4', class: 1},
//     {rollNo: 5, name: 'ABC5', class: 1}
// ]
// const find = {rollNo: 3, name: 'ABC3', class: 1}
// const index = students.indexOf(find)

// const index = students.findIndex(function(value){
//     if(value.rollNo == find.rollNo) {
//         return true
//     }
// })
// const index = students.findIndex(student => student.rollNo == find.rollNo)

// console.log('index', index)


const students = ["ravi", "amit", "vishal"]

const str = students.join("*")

console.log(str, 'str')

const arr = str.split("*")
console.log(arr, 'arr')

