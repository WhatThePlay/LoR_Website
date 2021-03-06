const menuButton = document.getElementById("menu")
const nav = document.getElementById("nav")
const headerHeight = document.getElementById("app").clientHeight
const bannerHeight = document.getElementsByTagName("img")[0].clientHeight
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
console.log(bannerHeight)

async function fetchPokemon(url) {
    let id = Math.floor(Math.random() * 898);
    let response = await fetch(url + id);
    let data = await response.json();
    const pokemon = document.createElement("p")
    pokemon.innerText = data.name[0].toUpperCase() + data.name.slice(1) + " is a cool Pokemon btw."
    document.getElementsByTagName("footer")[0].appendChild(pokemon)
}

fetchPokemon(url)








