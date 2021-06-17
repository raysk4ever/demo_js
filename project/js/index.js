const list = document.getElementById('users-list')
const [refresh] = document.getElementsByClassName('refresh')

const randomUsers = []

function getFullName(name = {}) {
    return `${name.title} ${name.first} ${name.last}`
}


function loadUsers(users) {
    if(users.length) {
        list.innerHTML = ``
        users.forEach(user => {
            const card = document.createElement('div')
            card.className = 'card'
            const fullName = getFullName(user.name)
            card.innerHTML = `<img src=${user.picture.large} /> <p>Name: ${fullName}</p> <p>Gender: ${user.gender}</p>`
            list.appendChild(card)
        })
    } else {
        const para = document.createElement('p')
        para.innerText = `No User Found`
        list.appendChild(para)
    }
}

function fetchUsers(pageNumber = 1){
    const url = `https://randomuser.me/api?results=10&page=${pageNumber}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        loadUsers(data.results)
    })
}

fetchUsers()

console.log('refresh', refresh)

refresh.addEventListener("click", () => {
    const pageNumber = 2
    fetchUsers(pageNumber)
})
// function refresh() {
//     console.log('hey')
// }