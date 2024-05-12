const fetchPokemon = fetch("https://pokeapi.co/api/v2/pokemon/");
const pokemonNameInput = document.querySelector("#pokemon-name-input");
const searchBtn = document.querySelector("#search-btn");
const pokemonInfo = document.querySelector("#pokemon-info");
fetchPokemon.then((response) => response.json()).then(showPokemon);
function showPokemon(data) {
  const searchValue = pokemonNameInput.value;
  for (i = 0; i < data.length; i++)
    if (searchValue === data[i].name) {
      const urlPokemon = data[i].url;
      const getPokemonInfo = fetch(urlPokemon);
      const imgPokemon = document.createElement("img");
      const namePokemon = document.createElement("p");

      imgPokemon.src =
        getPokemonInfo.sprites.other["official-artwork"].front_default;
      namePokemon.innerText = data[i].name;
      pokemonInfo.appendChild(imgPokemon);
      pokemonInfo.appendChild(namePokemon);
      console.log(getPokemonInfo);
    } else {
      const empty = document.createElement("p");
      empty.innerText = "not found";
    }

  console.log(searchValue);
  console.log(data);
}

searchBtn.addEventListener("click", showPokemon);
