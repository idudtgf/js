let arabic = document.getElementById("arabic")
let english = document.getElementById("english")
let text = document.getElementById("title")
let about = document.getElementById("about-text")
let contact = document.getElementById("contact")
let about_me = document.getElementById("about-text")
let welcom = document.getElementById("welcom")

arabic.onclick = ()=>{
    setLaunguage("arabic")
    localStorage.setItem("lang" , "arabic")
}
english.onclick=()=>{
    setLaunguage("english")
    localStorage.setItem("lang" , "english")
}
onload = ()=>{
    setLaunguage(localStorage.getItem("lang"))
}
function setLaunguage(getLaunguage){
    if(getLaunguage ==="arabic"){
        text.innerHTML= "Said TY"
        about.innerHTML="أنا طالب في أكاديمية المبرمج الشيار"
        contact.innerHTML =" اتصل بنا "
        welcom.innerHTML = "مرحبا بكم في موقع الخاص بي"
    }
    else if(getLaunguage === "english"){
        text.innerHTML ="Said TY"
        about.innerHTML="I am a student of coder shiyar academy"
        contact.innerHTML =" Contact us"
        welcom.innerHTML = "Welcom to my website"
    }
}