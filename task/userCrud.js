const users = []

function createUser(newUser){
    users.push(newUser)
}

// function deleteUser(rollNo) {
//     // find user with this rollNo and get index
//     for(let i=0; i<users.length; i++) {
//         if(rollNo == users[i].roll) {
//             // splice with this fetched index
//             users.splice(i, 1)
//         }
//     }
// }

function deleteUser(rollNo) {
    // find user with this rollNo and get index
    const index = users.findIndex((currentValue) => rollNo == currentValue.roll)
    users.splice(index, 1)
}

const user1 = {
    roll: 1,
    name: 'ABC',
    age: 10,
    country: 'INDIA'
}
const user2 = {
    roll: 2,
    name: 'EFG',
    age: 20,
    country: 'USA'
}

createUser(user1)
createUser(user2)

// console.log('users', users)


// deleteUser(2)
// console.log('users', users)


// const updateVal = users.filter(currentValue => {
//     if (currentValue.roll == 1) {
//         return currentValue.name = 'newName'
//     }
// })

// console.log('users', users)







