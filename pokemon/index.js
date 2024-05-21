const fetchPokemon = fetch("https://pokeapi.co/api/v2/pokemon/");
const pokemonNameInput = document.querySelector("#pokemon-name-input");
const searchBtn = document.querySelector("#search-btn");
const pokemonInfo = document.querySelector("#pokemon-info");
fetchPokemon.then((response) => response.json()).then(showPokemon);

/**
 * show pokemons
 * @param {{count: number; results: {name: string; url: string}[]}} data
 */
function showPokemon(data) {
  const pokemonList = data.results;
  for (i = 0; i < pokemonList.length; i++) {
    const urlPokemon = pokemonList[i].url;
    const getPokemonInfo = fetch(urlPokemon);
    getPokemonInfo
      .then((response) => response.json())
      .then((info) => {
        const imgPokemon = document.createElement("img");
        const namePokemon = document.createElement("p");
        imgPokemon.src = info.sprites.other["official-artwork"].front_default;
        namePokemon.innerText = info.name;
        pokemonInfo.appendChild(imgPokemon);
        pokemonInfo.appendChild(namePokemon);
      });
  }
}

searchBtn.addEventListener("click", showPokemon);
