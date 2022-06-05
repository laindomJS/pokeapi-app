// INPUT CONSTANTS
const form = document.getElementById('form');
const submit = document.getElementById('btn');


// CARD CONSTANTS
const card = document.getElementById('card');
const image = document.getElementById('img');
const pkmName = document.getElementById('name');
const num = document.getElementById('num');
const type = document.getElementById('type');



// FETCH
form.addEventListener('submit', (e) => {

  e.preventDefault();

   // GET POKEMON NAME
   const input = document.getElementById('pkm').value;
   let pokemon = input;

  // URL
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`; 

  // FETCH
  try {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        image.setAttribute('src', data.sprites.back_default),
        pkmName.innerText = data.name,
        num.innerHTML = data.order,
        type.innerText = data.types[0].type.name
      });
  } catch (err) {
    console.log(err);
  }

})