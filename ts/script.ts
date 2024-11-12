let a:number=55;
console.log(a)
console.log(typeof a)
let b:string="pooja"
console.log(b)
let c:boolean=true
console.log(c)
let d:undefined=undefined
console.log(d)

let s:string|number|boolean=true
console.log(s)
console.log(typeof s)

let p:any="pppp"
p=55
p=true
console.log(p)
console.log(typeof p)

let arr:number[]= [20,30,40,50,60,70]
console.log(arr)

function sum(a:number, b:string, c?:boolean):string
{
 return a+b;
}
console.log(sum(20,"pooja"))

function sum2(a:number, b:string, c?:boolean):void
{
  console.log(a+b);
}
console.log(sum2(20,"john"))

//enum
enum days
{
  Sunday,
  Monday,
  Tuesday,
  Thursday,
  Friday,
  Saturday
}
console.log(days.Sunday)
console.log(days[6])

//interface
interface obje{
  name:string,
  age:number,
  salary:number
}

interface obj2 extends obje{
  email:string
}

class pp1 implements obj2{
  name;
   email;
   salary;
   age;
  constructor(n:string,e:string,s:number,a:number)
  {
    this.name=n;
    this.email=e;
    this.salary=s;
    this.age=a;
  }
}
let ss=new pp1("ppp","dd@ff.com",123,78)
console.log(ss)

function clicky(e: Event){
  console.log(e)
  const r = e.target as HTMLButtonElement
  console.log(r.textContent)
}

function sum3<s>(x:s,y:s)
{
   console.log(x,y) 
}
sum3("ppp","kkk")
sum3(2,5)
