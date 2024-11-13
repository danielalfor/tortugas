//Crear una funcion inicial
window.onload = function(){
    //1. Seleccionar el elemento de control (Imagen de Rafa)
    let imgRafa = document.querySelector("#rafa");
    //2. crear un evento que realizara la imagen al recibir un clic
    imgRafa.addEventListener("click",fraseDeRafa);

    //1. Seleccionar el elemento de control (Imagen de Donnie)
    let imgDonnie = document.querySelector("#donnie");
    //2. crear un evento que realizara la imagen al recibir un clic
    imgDonnie.addEventListener("click",textoDonnie);
}

function textoDonnie(){
    //console.log("Donnie is ready!");
    //Seleccionar el nombre de Donnie
    let nombreDeDonnie = document.querySelector("#donnieName");

    //Seleccionar el elemento a mostrar / ocultar
    let descripcionDonnie = document.querySelector(".descripcionDonnie");

    //Logica para mostrar u ocultar
    if(nombreDeDonnie.style.display == "none")
    {
        nombreDeDonnie.style.display = "inline";
        descripcionDonnie.style.display = "none";
    }
    else
    {
        nombreDeDonnie.style.display = "none";
        descripcionDonnie.style.display = "block"
    }
    
}

//3. Crear la funcion fraseDeRafa
function fraseDeRafa(){
    //Seleccionar el texto que voy a modificar
    let nombreRafa = document.querySelector("#rafaName");

    //logica para mostrar / ocultar
    if(nombreRafa.innerHTML == 'Rafael')
    {
        //realizar estas acciones
        nombreRafa.innerHTML = 'No somos ranas kun fu ¡somos tortugas ninja! - Frase de Raphael.';
    }
    else
    {
        nombreRafa.innerHTML = 'Rafael';
    }

}