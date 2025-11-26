// console.log("I am running...")

// 1. Selecting an element
// console.log(document.getElementById("heading"))
// let heading = document.getElementById("heading")
// console.log(heading)

// console.log(document.getElementsByClassName("btn"))

// console.log(document.querySelector("#heading"))
// console.log(document.querySelectorAll(".btn"))
// console.log(document.querySelector("p"))

// 2. Getting the value -- .innerText
// console.log(heading.innerText)
// 3. Setting the value
// heading.innerText = "Welcome to Shoolini University"
// 4. Event Listeners

let eventBtn = document.getElementById("eventBtn")
let heading = document.getElementById("heading")
let userName = document.getElementById("userName")
// eventBtn.addEventListener("click", function(){
//     // console.log("Button clicked")
//     heading.innerText = "Welcome to my website, User"
// })

// reading input value
eventBtn.addEventListener("click", function(){
    if(userName.value == ""){
        heading.innerText = "Welcome to my website, User"
    }else{
        heading.innerText = "Welcome to my website, " + userName.value
        userName.value = ""
    }
})