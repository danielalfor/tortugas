// Funcion Inicial Una vez se ha cargado el contenido.
window.onload = function(){

    //Seleccionar el elemento de control (Imagen de Donnie)
    let donnie = document.querySelector("#donnie");

    //Configurar el evento que realizara la imagen de Donnie, llama una funcion
    donnie.addEventListener("click",mostrarNombreDonnie);

    //Seleccionar el elemento de control - (Imagen de Rafa)
    let imgRafa = document.querySelector("#rafa");
    //crear el evento que realizara la imagen de Rafa, llama una funcion
    imgRafa.addEventListener("click",fraseDeRafa)
}

    //Crea la funcion que corresponde al evento anterior
function mostrarNombreDonnie(){
    //alert('Donnie is ready!');

    //Selecciona elemento a modificar! El nombre de donnie
    let nombreDeDonnie = document.querySelector("#donnieName");

    //Selecciona elemento a modificar! La descripcion de donnie
    let descripcionDonnie = document.querySelector(".descripcionDonnie");

    //logica para mostrar u ocultar
    if(nombreDeDonnie.style.display == "none")
    {
        nombreDeDonnie.style.display = "inline";
        descripcionDonnie.style.display = "none";
    }
    else
    {
        nombreDeDonnie.style.display = "none";
        descripcionDonnie.style.display = "block";
    }

}

function fraseDeRafa() {
    //Seleccionar el elemento a modificar
    let textoRafa = document.querySelector("#rafaName");

    //logica para mostrar / ocultar
    if(textoRafa.innerHTML == "Rafael")
    {
        textoRafa.innerHTML = "No somos ranas kun fu ¡somos tortugas ninja! - Frase de Raphael.";
    }
    else
    {
        textoRafa.innerHTML = "Rafael";
    }
}