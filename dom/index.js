const [body] = document.getElementsByTagName('body')
const p1 = document.getElementById('para1')

totalBox = 4
totalBox = totalBox + boxPerLvl // 8

totalBox = totalBox + boxPerLvl // 12

totalBox = totalBox + boxPerLvl
let basic  = 2
let boxPerLvl = 4 + 4 + 4 + 4
let point = currentLvl * basic
const totalBox = 8
const names = ['anish', 'ravi']
Array.from({length: totalBox}).forEach((v, i) => {
    const myDiv = document.createElement('div')
    const p = document.createElement('p')
    p.innerText = names[i] ? names[i] : i
    myDiv.className = names[i] ? 'namesBox' : 'box'
    myDiv.appendChild(p)
    body.appendChild(myDiv)
})

// lvl ==> score ==> 0-10 ==> 1 ==> 1 * 4 ==> 4
// lvl ==> score ==> 11-30 ==> 2 ==> 2 * 4 ===> 8
// lvl ==> score ==> 30-50 ==> 3 ===> 3 * 4 ===> 12


