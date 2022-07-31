// function setName () {
//     console.log('get setName')
//     return function (target:any) {
//         console.log('setName')
//     }
// }
// function setAge () {
//     console.log('get setAge')
//     return function (target:any) {
//         console.log('setAge')
//     }
// }
// @setName()
// @setAge()
// class Test {} 
// function setName () {
//     console.log('get setName')
//     return function (target:any) {
//         console.log('setName')
//     }
// }
// function setAge () {
//     console.log('get setAge')
//     return function (target:any) {
//         console.log('setAge')
//     }
// }
// @setName()
// @setAge()
// class Test {} 
function setName () {
    console.log('get setName')
    return function (target:any) {
        console.log('setName')
    }
}
function setAge () {
    console.log('get setAge')
    return function (target:any) {
        console.log('setAge')
    }
}
@setName()
@setAge()
class Test {} 