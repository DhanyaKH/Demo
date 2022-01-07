let d=123
if(d>100)
{
    let k=d/2
    console.log("k=",k)
}
console.log("value of d=",d)
let num=121
if(num%2==0)
{
    alert("even no")
}
else
{
    alert("odd no")
}
let time=prompt("enter time : ")
if(time<10)
{
    alert("morning")
}
else if(time>10 && time<12)
{
    alert("have a good day")
}
else if(time>12){
alert("its time to study")
}
else{
    alert("good night")
}
let x1=20;let x2=40;let x3=90;
if(x1>x2 && x1>x3)
{
alert(`${x1} is the largest`)
}

else if(x2>x3)
{
    alert(`${x2} is the largest`)
}
else
{
    alert(`${x3} is the largest`)
}