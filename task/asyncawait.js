const axios = require('axios')


// axios.get(url)
// .then(data => {
//     console.log('data', data)
//     axios.get(url)
//     .then(data => {
//         console.log('data', data)
//         axios.get(url)
//         .then(data => {
//             console.log('data', data)
            
//         })  
//     })  
// })
// .catch(error => {
//     console.log('error', error)
// })

// async/await: aysnc ==> sync

const url = 'https://randomuser.me/api/'

await axios.get(url)

// async function display(){
// }

// display()