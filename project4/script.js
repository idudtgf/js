let hours = new Date().getHours()
let munites = new Date().getMinutes()
let seconds = new Date().getSeconds()
let clock = document.getElementById("setTime")
let date = document.getElementById("setDate")
let days = new Date().getUTCDate()
let month = new Date().getUTCMonth()
let year = new Date().getFullYear()
let body = document.getElementsByTagName('body')
setInterval(function(){
  clock.innerHTML=`${hours}:${munites}:${new Date().getSeconds()}`
  date.innerHTML=`${days}:0${month}:${year}`
  if(month >= 10){
    date.innerHTML=`${days}:${month}:${year}`
  }
  else if(new Date().getSeconds() < 10){
    clock.innerHTML=`${hours}:${munites}:0${new Date().getSeconds()}`
  }
},100)
setInterval( function(){ 
  let Vcolor = document.getElementById('setcolor').value
    localStorage.setItem("Color", Vcolor)
    document.getElementById('body').style.backgroundColor = localStorage.getItem("Color")
    document.getElementById("setTime").style.backgroundColor = localStorage.getItem("Color")  
},100)
