alert("Hello world")
let a=123;let b=345
let s=a+b
console.log("s======",s)
s=b-a
console.log("s======",s)
s=a%b
console.log("s======",s)
console.log("b**2 =====",b**2)
a+=5
console.log("a+=  ====",a)
a++
console.log("a++  =====",a)
//relational operators
let n1=100;let n2=50;let n3=100
console.log(n1==n3)
console.log(n1===n3)
console.log(n1!=n3)
console.log(n1<=n2)
//logical operators
console.log(!n1===n3)
console.log(n1!=n3 && n1>n2)
console.log(n1==n3 && n1>n2)
console.log(n1==n3 && n1>n2)
//conditional operators
let age=prompt("enter your age : ")
alert(age)
let result=age>=18?"Eligible to vote":"Ineligible"
alert(result)
console.log(result)