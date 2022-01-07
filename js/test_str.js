function indexChk()
{
    let str1=document.getElementById("str1").value
    let c1=document.getElementById("c1").value
    console.log(str1)
    console.log(c1)
    let s=new String("javascript")
let x=s.valueOf()
console.log(typeof x,x)
console.log(typeof s,s)
let index1=str1.indexOf(c1)
console.log(index1)
if(index1!=-1)
{
let res_str=`Character present in the ${str1} at indexes `
let len=str1.length

for(let i=0;i<len;i++)
{
   
if(str1.charAt(i)==c1)
{
       res_str+=` ${i},`
}
}
document.getElementById("p1").innerText=` ${res_str}`
}
else
{
    document.getElementById("p1").innerText=`Character is not present in the ${str1}`
}
   
    
}