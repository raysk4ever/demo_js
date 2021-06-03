console.log('Hey1')
// create a promise

const p = new Promise((resolve, reject) => {
    const username = "ravi"
    if(username === "ravi") {
        resolve(newPromise)
    }else {
        reject("Username Mismatched")
    }
})
console.log('Hey2')


// use/call a promise
p.then((data) => {
    console.log("data", data)
    // inside then if promise is success
}).catch((error) => {
    // inside catch if promise is failed
    console.log("failed", error)
})

console.log('Hey3')




// p.then().catch()