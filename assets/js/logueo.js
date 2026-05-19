let ojito = document.getElementById("ojo");
let contraseña = document.getElementById("pass");

function mostrar(){
    contraseña.type = "text";
    ojito.src = "./assets/img/openeye.png";
}

function ocultar(){
    contraseña.type = "password";
    ojito.src = "./assets/img/closeeye.png";
}

ojito.addEventListener("mousedown", mostrar);
ojito.addEventListener("mouseup", ocultar);