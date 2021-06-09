const box1 = document.getElementById('box1')
const p = document.createElement('p')
const player = document.createElement('img')
const [body] = document.getElementsByTagName('body')

box1.appendChild(p)

box1.addEventListener('mouseover', (event) => {
    console.log('mouseover')
})
box1.addEventListener('mouseenter', (event) => {
    player.src = 'player.png'
    // player.style.position = 'fixed'
    // player.height = '10px'
    // player.width = '10px'
    box1.appendChild(player)
})

box1.addEventListener('mousemove', (event) => {
    const {x, y} = event
    p.innerText = `x: ${x} y: ${y}`
    box1.style.background = `rgb(${x},${y},${x+y})`
    // box1.style.borderRadius = `${x}px`;
})