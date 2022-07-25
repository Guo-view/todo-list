// 在TS中类的声明

// class Perara{
//     name:string;
//     age:number;
//     constructor(name: string,age: number){
//         this.age=age
//         this.name=name
//     }
//     Sahai():string{
//         return this.name
//     }
// }
// let Pss=new Perara('郭俊',50)
// console.log(Pss);

// class Prara{
//     name:string;
//     age:number;
//     sex:boolean;
//     constructor(name,age,sex){

//     }
// }

// class Perara{
//     name:string;
//     age:number
//     constructor(name: string,age: number){
//         this.age=age
//         this.name=name
//     }
//     Sahai(){
//         console.log('我在跑');
        
//     }
// }
// class Dog extends Perara {
//     constructor(props: string,age:number){
//         super(props,age)
//     }
// }
// let Pss=new Dog('郭俊',50)
// console.log(Pss.name);
// console.log(Pss.age);
// console.log(Pss.Sahai);


interface IA {
    name:string
    eat():string
}

class Aniaa implements IA {
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    eat():string{
        return ""
    }
}

let P5=new Aniaa('郭俊',15)
console.log(P5.name);
