let n1 = document.getElementById('uno');
let n2 = document.getElementById('dos');
let resultado = document.getElementById('res');

function limpiar() {
    n1.value = '';
    n2.value = '';
}

function dividir() {
    let resultado = Number(n1.value) / Number(n2.value);
    limpiar();
    resultado.value = resultado;
}

document.getElementById('division').addEventListener('click', dividir);