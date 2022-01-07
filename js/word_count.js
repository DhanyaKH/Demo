function wordCnt()
{
    let s1=document.getElementById("s1").value
    console.log(s1)
    let s2=s1.trim()
    console.log(s2)
    const ary=s2.split(" ")
    document.getElementById("p1").innerText="word count="+ary.length
}