console.log('moviesAdd.js vinculado correctamente!');

const qs = q => document.querySelector(q);
const qsa = t => document.querySelectorAll(t);
const $ = id => document.getElementById(id);

let h1 = qs('h1');
let section = qs('section');
let article = qs('article');

h1.innerText = 'AGREGAR PELÍCULAS';
h1.classList.add('titulo');

article.classList.add('fondoTransparente');

section.classList.add('fondoCRUD');