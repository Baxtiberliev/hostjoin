const inp = document.querySelector("#inp")
const inp2 = document.querySelector("#inp2")

const topChat = document.querySelector("#topChat")
const topChat2 = document.querySelector("#topChat2")

const newChat = document.createElement("p")
const newChat2 = document.createElement("p")


function btn() {
    newChat2.innerHTML = inp.value
    newChat2.className = "par2"
    topChat2.appendChild(newChat2)
}

function btn2() {
    newChat.innerHTML = inp2.value
    newChat.className = "par"
    topChat.appendChild(newChat)
}