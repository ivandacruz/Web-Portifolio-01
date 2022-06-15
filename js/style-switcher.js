/* ========= toggle style switcher | alternador de estilo =========== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler"); 
styleSwitcherToggle.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

/* ========= hide style - switcher on scroll |  ocultar estilo - alternador na rolagem  =========== */
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/* ========= theme colors | theme colors =========== */
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    localStorage.setItem("color",color);
    changeColor();
}
function changeColor(){
    alternateStyle.forEach((style) =>{
        if(localStorage.getItem("color") === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}

/********888888 theme light and dark mode |  tema claro e modo escuro 888888*********/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{  //inicio da interação do botão dia noite
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

