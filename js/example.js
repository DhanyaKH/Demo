let obj=new String("Hello")
console.log(obj,typeof obj)
let obj1=obj.concat("world")
console.log("obj1=",obj)
console.log(obj1)
let s=new String("javascript")
let x=s.valueOf()
console.log(typeof x,x)
console.log(typeof s,s)
let i=new Number(123)
let i1=i.valueOf()
let s1="  javascript is interpreted  "
console.log("length=",s1.length)
let s2=s1.trim()
console.log(s2.length)
//console.log("after trim==",s1.length)
//for each loop
let word="hello world"
for(let letter of word)
{
    console.log(letter)
}
for(let letter in word)
{
    console.log(letter)
}
let sub_str=word.substring(0,5)
console.log(sub_str)
console.log(word.charAt(6))
console.log(word[6])
console.log(word.indexOf("l"))
console.log(word.lastIndexOf("l"))
console.log(word.indexOf("l",3))

//program practice
//console.log(document.getElementById("str1").value)
//document.getElementById("p1").innerText="hellooooooo"
/*function indexChk()
{
    let string1=document.getElementById("str1").value
let char1=document.getElementById("c1").value
let start=string1.indexOf(char1)
let last=string1.lastIndexOf(char1)
//document.getElementById("p1").innerText="hellooooooo"
if(start!=last)
{
let result_string=`letter ${char1} at index ${start},${last}`
let index_str
for(let i=start+1;start<last-1;i++)
{
    index_str=string1.indexOf(char1,i)
    if(index_str!=-1)
    {
        result_string+=index_str+`,${last}`
    }
    document.getElementById("p1").innerText=result_string
}
}
else
{
document.getElementById("p1").innerText=`letter ${char1} at index ${start}`
}
}*/
