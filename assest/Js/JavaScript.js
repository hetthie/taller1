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
/**************************************** */ 
window.addEventListener('load', function() {
    console.log("¡Todo listo!");
    
    const statusCarga = document.getElementById('statusLoad');
    statusCarga.textContent = "contenido cargado";
    
});


/**************************************** */ 
window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    e.returnValue = '';
});  

/**************************************** */ 
window.addEventListener('unload', function() {
    console.log("Evento unload ejecutado (puede que no lo veas)");
    descargarArchivo();
});


function descargarArchivo() {
    let contenido = "Contenido de prueba para el unload.";
    let blob = new Blob([contenido], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.href = url;
    link.download = 'archivoUnload.txt';
    link.click();
    URL.revokeObjectURL(url);
}

/**************************************** */ 
let contador = 0;
document.addEventListener('visibilitychange', function() {
    const pVisibility = document.getElementById("Pvisibilitychange");
    if (document.hidden) {
        contador++;
        if(contador == 1){
            pVisibility.textContent = ` El usuario ha salido ${contador} vez`;
        }else{
            pVisibility.textContent = ` El usuario ha salido ${contador} veces`;
        }
        
    }
});


/**************************************** */ 
document.addEventListener('readystatechange', function() {
    console.log('Estado actual:', document.readyState);
    const estadoP = document.getElementById("idreadystatechange");
    
    if (document.readyState === 'loading') {
        estadoP.textContent = 'La página se está cargando';
    }
    else if (document.readyState === 'interactive') {
        estadoP.textContent = 'DOM listo, recursos aún cargando';
    }
    else if (document.readyState === 'complete') {
        estadoP.textContent = 'La página está completamente cargada';
    }
});


/**************************************** */ 
document.addEventListener('selectionchange', function() {

    let textoSeleccionado = window.getSelection().toString();
    const idSeleccion = document.getElementById('idSeleccion');
    console.log('Texto seleccionado:', textoSeleccionado);
    idSeleccion.textContent = `Texto seleccionado: ${textoSeleccionado}`;
});

let estado = document.getElementById('estado');

document.getElementById('btn').onclick = function() {
    document.body.requestFullscreen();
};

document.addEventListener('fullscreenchange', function() {
    if (document.fullscreenElement) {
        console.log('Entraste a pantalla completa');
        estado.textContent = 'Estado: PANTALLA COMPLETA';
        estado.style.color = 'green';
        estado.style.fontSize = '30px';
    } else {
        console.log('Saliste de pantalla completa');
        estado.textContent = 'Estado: Normal';
        estado.style.color = 'red';
        estado.style.fontSize = '20px';
    }
});

document.addEventListener('fullscreenerror', function() {
    console.error(' ERROR: No se pudo activar');
    estado.textContent = 'Estado: ERROR';
    estado.style.color = 'red';
});

let info = document.getElementById('info');
let texto = document.getElementById('texto');



texto.addEventListener('copy', function(e) {
    info.innerHTML += '<p>Copiaste texto</p>';
    console.log('Texto copiado:', window.getSelection().toString());
});

texto.addEventListener('cut', function(e) {
    info.innerHTML += '<p>Cortaste texto</p>';
    console.log('Texto cortado:', window.getSelection().toString());
});

texto.addEventListener('paste', function(e) {
    info.innerHTML += '<p>Pegaste texto</p>';
    console.log('Texto pegado:', e.clipboardData.getData('text'));
});





/**************************************** */ 
let juego = document.getElementById('juego');
let estadoPointer = document.getElementById('estado');

juego.addEventListener('click', function() {
    juego.requestPointerLock();
});
document.addEventListener('pointerlockchange', function() {
    if (document.pointerLockElement === juego) {
        estadoPointer.textContent = 'Cursor BLOQUEADO (presiona ESC para salir)';
        estadoPointer.style.color = 'green';
        juego.style.background = 'lightgreen';
        juego.innerHTML = '<p>Cursor bloqueado! Mueve el mouse</p>';
    } else {
        estadoPointer.textContent = 'Cursor LIBRE';
        estadoPointer.style.color = 'red';
        juego.style.background = 'lightblue';
        juego.innerHTML = '<p>Haz clic aquí para bloquear el cursor</p>';
    }
});



/**************************************** */ 
let contadorScroll = 0;

window.addEventListener('scroll', function() {
    contadorScroll++;
    document.getElementById('contador').textContent = contadorScroll;
});