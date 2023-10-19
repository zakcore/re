var btn =document.getElementById("btn")
var fn=()=>new Promise((resolve) => {
    resolve ("sssss")
})
var meth=(s)=>{

console.log(s+"aaa")

}
var btnfunc=()=>{
     
    fn().then(meth)
 
 }

btn.onclick=btnfunc