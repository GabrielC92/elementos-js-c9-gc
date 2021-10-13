console.log('index.js vinculado correctamente!');

const qs = q => document.querySelector(q);
const qsa = t => document.querySelectorAll(t);
const $ = id => document.getElementById(id);

window.onload = () => {
    let main = qs('main');
    let h2 = qs('h2');
    let a = qs('a');
    let parrafos = qsa('p');

    let nombre = prompt('Ingrese su nombre');

    if (!nombre) {
        h2.innerText += ' Invitado';
    } else{
        h2.innerText += ' ' + nombre;
    }
}