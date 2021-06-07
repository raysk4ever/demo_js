// let data = {
//     name: "amit",
//     age: 20,
//     country: "India",
// }

// // add new key
// data.lastName = 'singh'

// // update key
// data.name = 'amit'

// // del key
// delete data.age

// // read key

// // const name = data.name
// const key = 'name'
// const name = data[key]

// // methods objects
// const keys = Object.keys(data)
// const values = Object.values(data)
// const entries = Object.entries(data)
// console.log({ keys });

// // if key present in the obj
// const result = "address" in data
// console.log({result})








// let data = {
//     name: "amit",
//     age: 20,
//     country: "India",
//     address: {
//         city: 'Rudrapur',
//         state: 'Uttrakhand'
//     },
//     a: {
//         b: {
//             b: {
//                 e: [{a: '12'}]
//             }
//         }
//     }
// }
// let newDataObj = data

// // copy/clone obj to newone (doesn't make deepcopy)
// let newDataObj = Object.assign({}, data) // copy by another obj => store in diff ref other then obj

// // newDataObj.age = 200
// // newDataObj.address.city = 'Agra'
// console.log({data, newDataObj})


// const str = JSON.stringify(data) // obj ==> string (Valid Json)
// const newDataObj = JSON.parse(str) // string (valied json) ==> obj



// Destructing ==> Object, Array

const data = {
    todo: 'Lern JS',
    rating: 10,
    timing: '4:PM',
    other: {
        one: 'more'
    }
}

// console.log(data.todo)
// console.log(data.timing)

const todo = 'other data'
// const { timing, todo : otherOther, rating: r, country='INDIA' } = data // object order

// console.log(otherOther)
// console.log(timing)
// console.log(r)
// console.log(country)

// spread/rest opreator

const {timing, ...rest} = data //rest



// let newDataObj = Object.assign({}, data)

let cloneData = { ...data } //spread
// console.log(cloneData)
// 
cloneData.todo = 'two'
cloneData.other.one = 'two'


const a = {
    a: '1',
    b: 'asd'
}
const b = {
    b: 2
}

const c = {
    c: 3
}

const d ={
    ...a,
    ...b
}
console.log(d)

