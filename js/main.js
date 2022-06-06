// INPUT CONSTANTS
const form = document.getElementById('form');

// CARD CONSTANTS
const image = document.getElementById('img');
const pkmName = document.getElementById('name');
const num = document.getElementById('num');
const pkmType = document.getElementById('type');
const pkmStats = document.getElementById('stats');

// COLORS
const typeColors = {
  electric: '#FFEA70',
  normal: '#B09398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  default: '#2A1A1F',
};

// FETCH
form.addEventListener('submit', e => {
  e.preventDefault();

  // GET POKEMON NAME
  const { value } = e.target.pokemon;

  // URL
   const url = `https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`; 

  // FETCH

    fetch(url)
      .then(response => response.json())
      .then(data => renderPokemon(data))
      .catch(err => notFound());
})

const renderPokemon = (data) => {
  
  const sprite = data.sprites.front_default;
  const { stats, types } = data;

  pkmName.innerText = data.name;
  image.setAttribute('src', sprite);
  num.innerText = `Nº ${data.id}`;

  includeTypes(types)
  includeStats(stats);
}

const includeTypes = (types) => {
  
  pkmType.innerHTML = '';
  
  types.forEach(type => {
    const typeText = document.createElement("div");
    typeText.textContent = type.type.name;
    pkmType.appendChild(typeText);
  });

}


const includeStats = (stats) => {
  pkmStats.innerHTML = '';

  stats.forEach(stat => {
    const statDiv = document.createElement("div");
    const statName = document.createElement("div");
    const statAmount = document.createElement("div");

    statName.textContent = stat.stat.name;
    statAmount.textContent = stat.base_stat;

    statDiv.appendChild(statName);
    statDiv.appendChild(statAmount);
    pkmStats.appendChild(statDiv);
  })

}

const notFound = () => {
  pkmName.textContent = 'The specified Pokemon not exists';
  num.innerHTML = '';
  pkmType.innerHTML = ''; 
  pkmStats.innerHTML = '';
}