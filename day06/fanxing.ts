// const getArray=(value:any,times:number=5):any[]=>{
//     return new Array(times).fill(value)
// }

// getArray([1],2).forEach(item=>{
//     console.log(item.length);
    
// })

// getArray(2,3).forEach(item=>{
//     console.log(item.length);
    
// })


const getArray = <T> (value:T,times:number=5) : T[] =>{
    return new Array(times).fill(value)
}


getArray<number[]>([2,3],5).forEach(item=>{
    console.log(item.length);
})

// getArray<number>(2,3).forEach(item=>{
//     console.log(item.length);//类型“number”上不存在属性“length”
    
// })

// const getArray=<T,P>(param1:T,param2:P,times:number):[T,P][]=>{
//     return new Array(times).fill([param1,param2])
// }