const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-types]');


const typeColors = {
  electric: '#ffea70',
  normal:   '#b09398',
  fire:     '#ff675c',
  water:    '#0596c7',
  ice:      '#afeafd',
  rock:     '#999799',
}



const searchPokemon = event => {
  event.preventDefault();

  const { value } = event.target.pokemon;

  fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
  .then(data => data.json())
  .then(response => renderPokemonData(response))

}


const renderPokemonData = data => {
  const sprite = data.sprites.front_default;
  const { stats, types } = data;

  pokeName.textContent = data.name;
  pokeImg.setAttribute('src', sprite);
  pokeId.textContent = `N:${data.id}`;
  setCardColor(types);
}


const setCardColor = types => {
  const colorOne = typeColors[types[0].type.name];
  const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.rock;

  pokeImg.style.background = `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
  pokeImg.style.backgroundSize = '5px 5px'; 
}




