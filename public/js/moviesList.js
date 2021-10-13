console.log('moviesList.js vinculado correctamente!');

const qs = q => document.querySelector(q);
const qsa = t => document.querySelectorAll(t);
const $ = id => document.getElementById(id);

let body = qs('body');
let h1 = qs('h1');

let darkMode = confirm('¿Desea modo oscuro?');

if (darkMode) {
    body.style.backgroundColor = '#7f7f7f';
    body.classList.add('fondoMoviesList');
}

h1.innerText = 'LISTADO DE PELÍCULAS';
h1.style.color = 'white';
h1.style.backgroundColor = 'teal';
h1.style.padding = '20px';