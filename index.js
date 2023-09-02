const toggle = document.querySelector(".toggleCont")


function changeTheme(){
    document.body.classList.toggle("dark-Theme")
    if(document.body.classList.contains("dark-Theme")){
        localStorage.setItem("theme" , "dark")
    }
    else{
        localStorage.setItem("theme","light")
    }

}
function setTheme(){
    const theme = localStorage.getItem("theme")
    if(theme==="dark"){
        document.body.classList.add("dark-Theme")
        toggle.classList.add("active")
        toggle.style.cssText="background-color:white"
    }
}
function setToggle(){
    toggle.classList.toggle("active")
    if(toggle.classList.contains("active")){
        toggle.style.cssText="background-color:white"
    }
    else{
        toggle.style.cssText="background-color:black"
    }
}

setTheme()
toggle.addEventListener("click",()=>{
    changeTheme()
    setToggle()
})