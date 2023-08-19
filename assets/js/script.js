/*******************************************************************************************************************************************/

/* Funcion 1 IMG Border*/

/*obtener img*/

img = document.getElementById('img-1');

/*Funcion border*/

function add_border(){
    img.style.border == "" ? img.style.border = "7px solid red" : img.style.border = "";
}

/*******************************************************************************************************************************************/

/* Funcion 2 Sticker*/

const sticker01 = document.getElementById("sticker01");
const sticker02 = document.getElementById("sticker02");
const sticker03 = document.getElementById("sticker03");

const alertMsj = document.getElementById("alert-msj");

// Funciones

function sendOrder(){
    const total = Number(sticker01.value) + Number(sticker02.value) + Number(sticker03.value);
    if ( total > 10) {
        alertMsj.innerHTML = "Llevas demasiados stickers";
        alertMsj.style.color = "red";
        alertMsj.style.fontSize = "20px";
    } else {
        alertMsj.innerHTML = `Llevas ${total} Sticker(s)`;
        alertMsj.style.color = "green";
        alertMsj.style.fontSize = "20px";
    }
}

/******************************************************************************************************************************************/

/*Funcion 3 Password*/

/// Sección Contraseña
// Variables

const digit01 = document.getElementById("digit01");
const digit02 = document.getElementById("digit02");
const digit03 = document.getElementById("digit03");

const passwordMsj = document.getElementById("password-msj");

let password01 = "911";
let password02 = "714";

// Funciones

function sendPassword(){
    let passwordIn = digit01.value + digit02.value + digit03.value;

    if (passwordIn == password01) {
        passwordMsj.innerHTML = "Password 1 correcta";
        passwordMsj.style.color = "green";
        passwordMsj.style.fontSize = "20px"
    } else if (passwordIn == password02){
        passwordMsj.innerHTML = "Password 2 correcta";
        passwordMsj.style.color = "green";
        passwordMsj.style.fontSize = "20px"
    } else {
        passwordMsj.innerHTML = "Password incorrecta";
        passwordMsj.style.color = "red";
        passwordMsj.style.fontSize = "20px"
    }
}