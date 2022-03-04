const menuButton = document.getElementById("menu")
const nav = document.getElementById("nav")

let menuIsOpen = false

menuButton.addEventListener("click", () => {
    menuIsOpen = !menuIsOpen

    if(menuIsOpen) {
        menuButton.innerText = "✖"
        nav.classList.add("visible")
    } else {
        menuButton.innerText = "☰"
        nav.classList.remove("visible")
    }
})











