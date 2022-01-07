let arr=[]
console.log(arr,typeof arr)
let arr1= new Array()
console.log(arr1,typeof arr1)
let arr2=["A","B","C"]
console.log(arr2)
console.table(arr2)
for(let names of arr2)
{
    console.log(names)
}
for(let index in arr2)
{
    console.log(index)
    console.log(arr2[index])
}
arr2.push("D")
arr2.push("E")
console.log(arr2)
let d=arr2.pop()
console.log(d)
console.log(arr2)
arr2.unshift("F")
console.log(arr2)
arr2.push("G")
let new_arr=arr2.concat(["H","I","J"])
console.log(new_arr)
new_arr.splice(7,1)//remove 1 element
console.log(new_arr)
new_arr.splice(5,1,"K")
console.log(new_arr)
new_arr[7]="L"
new_arr[8]="M"
console.log(new_arr)
console.log(new_arr.indexOf("A"))
console.log(new_arr.includes("K"))
console.log(new_arr.reverse())
console.log(new_arr.sort())
console.log(new_arr.reverse())
let arr3=["o","P"]
console.log(arr3.join("-"))