console.log('index.js vinculado correctamente!');

const qs = q => document.querySelector(q);
const qsa = t => document.querySelectorAll(t);
const $ = id => document.getElementById(id);

let main = qs('main');
main.style.display = 'block';

window.onload = () => {
    
    let h2 = qs('h2');
    let a = qs('a');
    let parrafos = qsa('p');

    let nombre = prompt('Ingrese su nombre');

    if (!nombre) {
        h2.innerText += ' Invitado';
    } else{
        h2.innerText += ' ' + nombre;
    }

    h2.style.textTransform = 'uppercase';
    a.style.color = '#E51B3E'

    let response = confirm('¿Desea colocar un fondo de pantalla?');

    if (response) {
        document.body.classList.add('fondo');
    }

    for (let i = 0; i < parrafos.length; i++) {

        if (i%2 == 0) {
            parrafos[i].classList.add('destacadoPar');
        } else{
            parrafos[i].classList.add('destacadoImpar');
        }
    }
}