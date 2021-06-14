const myFunc1 = () => {
    console.log('inside myFunc1')
}

const myFunc2 = () => {
    console.log('inside myFunc2')
}
const myFunc3 = () => {
    return myFunc1
}

myFunc1(myFunc2)

// myFunc2 ==> callback function
// myFunc1, myFunc3 ==> higher order function


const radius = [1, 3, 5]
// output = > [2, 6, 10]



// const calcDia = (radius) => {
//     const output = []
//     for(let i =0; i<radius.length; i++) {
//         output.push(radius[i] * 2)
//     }
//     return output
// }
// const calcArea = (radius) => {
//     const output = []
//     for(let i =0; i<radius.length; i++) {
//         output.push(radius[i] * radius[i] * Math.PI)
//     }
//     return output
// }
// console.log(calcDia(radius))
// console.log(calcArea(radius))



const diameter = radius => radius * 2
const circum = radius => radius * Math.PI * 2
const area = radius => radius * radius * Math.PI

const calc = (radius, logic) => { // logic => dia, area, circum
    const output = []
    for(let i =0; i<radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}

Array.prototype.calc = (logic) => { // logic => dia, area, circum
    const output = []
    for(let i =0; i<this.length; i++) {
        output.push(logic(this[i]))
    }
    return output
}

calc(radius, diameter)
calc(radius, area)
calc(radius, circum)

radius.map(diameter)
radius.calc(diameter)