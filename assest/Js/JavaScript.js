/* Comentarios */
/*--------------------*/
let Lv_Mensaje_1 = "Este es mi Cuarto mensaje Alert - Externo - Antes del Body";
alert(Lv_Mensaje_1);

/*--------------------*/

function mostrarAlert(){
    let Lv_Mensaje_2 = "Este mensaje se muestra al presionar el botón: Presioname2 - Script Externo";
    alert(Lv_Mensaje_2);
}

window.addEventListener('DOMContentLoaded', function() {
    //USO DE CONSTANTES PARA QUE EL VALOR DEL ID NO SEA MODIFICADO. 
    //DOCUMENT HACE REFERENCIA AL DOCUMENTO QUE LO ESTA LLAMANDO (HTML)
    const btn3 = document.getElementById("BtnPresioname3"); 
    btn3.addEventListener("click", function() {
        let Lv_Mensaje_3 = "Este mensaje se muestra al presionar el boton: presioname3";
        alert(Lv_Mensaje_3);
    });

    /*Modificar parrafo del html*/ 
    let mensaje = "Este texto ha sido modificado por JavaScript externo, no se modificaron las fuentes";
    const parrafo1 = document.getElementById("parrafo1");
    if(parrafo1){
        parrafo1.textContent = mensaje;
    }
    
    const btn4 = document.getElementById("BtnPresioname4");
    let caption = "Tu fuiste hackeado";
    let Lv_Mensaje_4 = "Este boton no tiene evento click - Script Externo";
    if(btn4){
        btn4.addEventListener("click", function() {
        btn4.textContent = caption;
        alert(Lv_Mensaje_4);
        });
    }

    const Lv_titulo = document.getElementById("idTitulo");
    Lv_titulo.textContent ="Esta valido cambio por medio del: document.getElementById";
    Lv_titulo.style.color ="red";

    const Lv_items = document.getElementsByClassName("item");
        for(let i=0; i< Lv_items.length; i++){
            Lv_items[i].textContent = `metodo numero 2: este es el parrafo #${i+1}`;
            Lv_items[i].style.fontWeight = 'bold';
    }

    const items = document.getElementsByTagName("p");
        for(let i=0; i< items.length; i++){
            items[i].style.border = '3px solid blue';
    }

    const ln_selector = document.querySelector("p");
    ln_selector.style.backgroundColor = "yellow";


    const ln_parrafos = document.querySelectorAll("div");
    ln_parrafos.forEach(function(parrafo) {
        parrafo.style.backgroundColor = "lightgray";
    });

});