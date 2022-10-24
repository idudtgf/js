let ruselt = document.getElementById("ruselt")
let play = document.getElementById("play")
let remove = document.getElementById("remove")
let code = document.getElementById("code")

function W_code()
{
    ruselt.innerHTML= code.value
    localStorage.setItem("CODE", code.value)
}
   function R_code()
{
    ruselt.innerHTML =""
}

     function storage()
{
    code.value = localStorage.setItem("CODE");
}
window.addEventListener('load' , function(){
    storage()
})
var name = d