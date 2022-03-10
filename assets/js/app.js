const menuButton = document.getElementById("menu")
const nav = document.getElementById("nav")
const headerHeight = document.getElementById("app").clientHeight
const url = "https://pokeapi.co/api/v2/pokemon/"

let menuIsOpen = false

menuButton.addEventListener("click", () => {
    menuIsOpen = !menuIsOpen

    if (menuIsOpen) {
        menuButton.innerText = "✖"
        nav.classList.add("visible")
    } else {
        menuButton.innerText = "☰"
        nav.classList.remove("visible")
    }
})

document.getElementById("banner").style.marginTop = headerHeight.toString() + "px";

async function fetchPokemon (url) {
    let id = Math.floor(Math.random()*898);
    let response = await fetch(url + id);
    let data = await response.json();
    const pokemon = document.createElement("p")
    pokemon.innerText = data.name + " is a cool Pokemon btw."
    document.getElementsByTagName("footer")[0].appendChild(pokemon)
}

fetchPokemon(url)








