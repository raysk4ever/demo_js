


// // sync ==> wait result ==> block
// // async ==> doesn't wait for the result ==> non block

// console.log('Hey 1')

// let a = 0
// let cb = function () {
//     console.log('hey inside cb')
//     // return 10
// }
// // setTimeout(cb, 1000)

// // const result = cb()
// // console.log('result', result)

// try{
//     let name = "ABC"
//     name = "XYZ"
//     if (name === "ABC") {
//         console.log('Hey its done!')
//     }  else {
//         console.log('Hey its done! 2')
//     }
// }catch(error) {
//     console.log(error)
// }




// try {
//     console.log('Hey 1')
//     setTimeout(function () {
//         try{
//             const a = "ABC"
//             a = "XYZ"
//             console.log('a', a)
//         }catch(error) {
//             console.log('Something went wrong')
//         }
//     }, 10000)
//     console.log('Hey 2')
// } catch (error) {
//     console.log('Something went wrong')
// }
// console.log('hey 3')







// setTimeout(, 1000)

// function () {
//     try{
//         const a = "ABC"
//         a = "XYZ"
//         console.log('a', a)
//     }catch(error) {
//         console.log('Something went wrong')
//     }
// }