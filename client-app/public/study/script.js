var btn =document.getElementById("btn")
var fn=()=>new Promise((resolve) => {
    console.log(resolve)
})

var btnfunc=()=>{
     
    fn().then()
 
 }

btn.onclick=btnfunc