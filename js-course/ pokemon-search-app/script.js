const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const sprite = document.getElementById("stats-container");

const getPokemon = async () => {
  try {
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`,
    );
    const data = await res.json();
    getPokeInfo(data);
  } catch (err) {
    alert("Pokémon not found");
    console.log(err);
  }
};

const getPokeInfo = (data) => {
  const { name, id, weight, height, types, sprites, stats } = data;

  pokemonName.textContent = `${name.toUpperCase()}`;

  pokemonId.textContent = `#${id}`;
  pokemonWeight.textContent = `Weight: ${weight}`;
  pokemonHeight.textContent = `Height: ${height}`;
  pokemonTypes.textContent = `Type(s): ${types}`;

  sprite.innerHTML =
    `<img id="sprite" src="${sprites.front_default}" alt="${name}">`;

  hp.textContent = stats[0].base_stat;
  attack.textContent = stats[1].base_stat;
  defense.textContent = stats[2].base_stat;
  specialAttack.textContent = stats[3].base_stat;
  specialDefense.textContent = stats[4].base_stat;
  speed.textContent = stats[5].base_stat;

  pokemonTypes.innerHTML = "";
  types.forEach((typeObj) => {
    const typeElement = document.createElement("span"); // Create a new span
    typeElement.textContent = typeObj.type.name.toUpperCase(); // Set text
    pokemonTypes.appendChild(typeElement);
  });
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getPokemon();
});
