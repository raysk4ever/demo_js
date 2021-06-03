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








let data = {
    name: "amit",
    age: 20,
    country: "India",
    address: {
        city: 'Rudrapur',
        state: 'Uttrakhand'
    },
    a: {
        b: {
            b: {
                e: [{a: '12'}]
            }
        }
    }
}
// let newDataObj = data

// // copy/clone obj to newone (doesn't make deepcopy)
let newDataObj = Object.assign({}, data) // copy by another obj => store in diff ref other then obj

// newDataObj.age = 200
// newDataObj.address.city = 'Agra'
console.log({data, newDataObj})


const str = JSON.stringify(data) // obj ==> string (Valid Json)
const newDataObj = JSON.parse(str) // string (valied json) ==> obj





