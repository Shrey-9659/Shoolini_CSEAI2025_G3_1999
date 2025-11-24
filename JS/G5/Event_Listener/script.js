let btn = document.getElementById("btn")
let heading = document.getElementById("heading")
let input = document.getElementById("input")

btn.addEventListener("click", function(){
    heading.innerText = "Welcome " + input.value
})