test()
//add()
console.log(x)
//console.log(id)


function test()
{
    console.log("add func")
}
console.log(test,typeof test)
let add=function(a,b){
    console.log("test")
    alert(a+b)
}
console.log(add,typeof add)
var x=100
console.log(x)
let id=9
console.log(id)

add(2,3)
let getExpo=(msg)=>
{
    console.log("goodd morng",msg)
}
getExpo("helloooooooo")

let greetings=(msg,date)=>{
console.log("gd mprgng",new Date())
}
let getExponenr=num=>num**2
let r=getExponenr(10)
console.log(r)
console.log("*************************")


let nos=[1,2,3,9,7,5]
for(let n of nos)
{
    console.log(n)
}
    let display=(element)=>{console.log(element)}
    nos.forEach(display)
    console.log("------------------------")
    nos.forEach((element)=>{console.log(element)})    
let new_arry=nos.map((data)=>{return data**2})
console.log(new_arry)
let even_arry=nos.filter((i)=>{if(i%2==0){return i}})
console.log("..........even ary.......",even_arry)
console.log(";;;;;;;;;;;;")
let res=nos.reduce((x,y)=>{
    console.log(x,"'''''")
    console.log(y,"'''''")
    return x+y})
console.log("::::::::",res)
res=nos.reduceRight((x,y)=>{return x-y})
console.log("reduce right::::::::",res)
let names=["A","BD","AC","D","AE"]
let arr_start=names.filter((name)=>{if(name.startsWith("A")){return name}})
console.log(arr_start,"/////////")
res=nos.every((x)=>{if(x%2==0){return true}})
console.log(res)
res=nos.some((x)=>{if(x%2==0){return true}})
console.log(res)
res=names.find(name=>name=="D")
console.log(res)
res=names.includes("D")
console.log(res)
//function closure
function outer()
{
    let k=500
    console.log("inside outer")
    function inner()
    {
        console.log("inside inner",k)
    }
    inner()
}
outer()