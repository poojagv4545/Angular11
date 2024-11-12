// arr=[2,3,4,5,6]
// for(let i=0; i<arr.length; i++)
// {
//     console.log(arr[i])
// }

// for(let i of arr){
//     console.log(i)
// }
// arr.map((i)=> console.log(i))

// const p=arr.map((i)=>
// {
//     console.log(i)
//     return i
// })

// filter
// arr=[2,3,5,8,7,9]
// const q=arr.filter((i)=>
// {
//     console.log(i)
//     return i%2==0
// })
// console.log(q)


// lexical scoping
// let a={
//     name:"pooja",
//     age:20,
// }  
// function print(x,y)
// {
//     console.log(this.name,this.age,x,y)
// }

// // print.call(a,5,6)
// // print.apply(a,[5,6])
// let p=print.bind(a)
// console.log(p)
// p()


//fetch-promises - await-async


// fetch("https://dummyjson.com/recipes")
// .then((res) => res.json())
// .then((data) => console.log(data))

// async function fetchdata()
// {
//     const res =await fetch("https://dummyjson.com/recipes")
//     const data =await res.json()
//     console.log(data)
// }

///==Clasess

class Iphone
{
    name
    constructor(name)
    {
        this.name=name
    }
print ()
{
    console.log(this.name)
}

}
class iphone2 extends Iphone
{
    constructor(name)
    {
        super(name)
    }
}
export default Iphone
export {iphone2}