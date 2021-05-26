let data = {
    name: "amit",
    age: 20,
    country: "India",
}

// add new key
data.lastName = 'singh'

// update key
data.name = 'amit'

// del key
delete data.age

// read key

// const name = data.name
const key = 'name'
const name = data[key]

// methods objects
const keys = Object.keys(data)
const values = Object.values(data)
const entries = Object.entries(data)
console.log({ keys });

// if key present in the obj
const result = "address" in data
console.log({result})






