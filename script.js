// typing effect
const text = [
"Estudante de Informática",
"Desenvolvedor Web",
"Futuro Hacker Ético",
"Amante de Automação"
]

let count = 0
let index = 0
let currentText = ""
let letter = ""

function type(){
if(count === text.length){
count = 0
}
currentText = text[count]
letter = currentText.slice(0, ++index)
document.getElementById("typing").textContent = letter
if(letter.length === currentText.length){
count++
index = 0
}

setTimeout(type,100)
}
type()

// dark mode

const button = document.getElementById("darkmode")
button.addEventListener("click",()=>{
  const body=document.body
  body.classList.toggle("light")
})

const toggle = document.getElementById("menu-toggle")
const menu = document.getElementById("menu")
toggle.onclick = function(){
menu.classList.toggle("active")
}
