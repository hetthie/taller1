
window.addEventListener('DOMContentLoaded', function() {





    const botonesCambiarFondo = document.querySelectorAll('.btn');
    
         botonesCambiarFondo.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const todasLasSecciones = document.querySelectorAll('.Descripcion');
            todasLasSecciones.forEach(function(seccion) {
                seccion.style.backgroundColor = '#73cdd5ff';
                seccion.style.transition = 'background-color 0.5s ease';
            });
        });
    });
    const botonesCambiaContenido = document.querySelectorAll('.btnCont');
    






        botonesCambiaContenido.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const todosLosContenidos = document.querySelectorAll('.contenidoDesc');
            
            todosLosContenidos.forEach(function(contenido) {
                if (contenido.textContent.trim() === '') {
                    contenido.textContent = contenido.getAttribute('data-texto-original');
                } else {
                    contenido.setAttribute('data-texto-original', contenido.textContent);
                    contenido.textContent = '';
                }
            });
        });
    });



    const botonLista = document.getElementById('btonLista');
    const campoTexto = document.getElementById('campoTexto');
    botonLista.addEventListener('click', AgregarALista);

    const campoInteractivo = document.getElementById('campoInteractivo');
    const areaVisualizacion = document.getElementById('areaVisualizacion');
    
    campoInteractivo.addEventListener('input', function() {
        const texto = campoInteractivo.value;
        areaVisualizacion.textContent = 'Escribiste: ' + texto;
    });






    const formulario = document.getElementById('frmDatos');
    formulario.addEventListener('submit', FncDatosUser);

    const btnCalcular = document.getElementById('btnCalcularDias');
    
    btnCalcular.addEventListener('click', function() {
        const fecha1 = document.getElementById('fecha1').value;
        const fecha2 = document.getElementById('fecha2').value;
        
        if (fecha1 && fecha2) {
            const dias = calcularDiferenciaEnDias(fecha1, fecha2);
            mostrarResultadoDias(dias);
        } else {
            mostrarResultadoDias(0);
        }
    });






});




function AgregarALista(){
    const textoIngresado = campoTexto.value;
    if (textoIngresado.trim() !== '') {
        const lista = document.querySelector('ul');
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = textoIngresado;
        lista.appendChild(nuevoElemento);
        campoTexto.value = '';
    } else {
        alert('Por favor, escribe algo en la caja de texto');
    }
}




function calcular(operacion) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const res = document.getElementById('resultado');
    
    if (isNaN(n1) || isNaN(n2)) {
        res.innerHTML = 'Error: Ingresa ambos números';
        return;
    }
    
    let resultado;
    
    switch(operacion) {
        case 'suma':
            resultado = n1 + n2;
            res.innerHTML = `Resultado: ${n1} + ${n2} = ${resultado}`;
            break;
        case 'resta':
            resultado = n1 - n2;
            res.innerHTML = `Resultado: ${n1} - ${n2} = ${resultado}`;
            break;
        case 'multiplicacion':
            resultado = n1 * n2;
            res.innerHTML = `Resultado: ${n1} × ${n2} = ${resultado}`;
            break;
        case 'division':
            if (n2 === 0) {
                res.innerHTML = 'Error: No se puede dividir entre cero';
                return;
            }
            resultado = n1 / n2;
            res.innerHTML = `Resultado: ${n1} ÷ ${n2} = ${resultado}`;
            break;
    }
}





function FncDatosUser(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('TxtNombre').value.trim();
    const apellido = document.getElementById('TxtApellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('passwordUS').value;
    

    if (nombre === '' || apellido === '' || email === '' || password === '') {
        alert('Todos los campos son obligatorios');
    }
    
    if (nombre.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres');
        
    }
    
    if (apellido.length < 3) {
        alert('El apellido debe tener al menos 3 caracteres');
    }
    
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Ingrese un correo electrónico válido');
    }
    
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
    }
    
    alert('Formulario enviado correctamente');
    console.log('Datos del usuario:', {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password
    });
}





function calcularDiferenciaEnDias(fecha1, fecha2) {
    const primeraFecha = new Date(fecha1);
    const segundaFecha = new Date(fecha2);
    
    const diferenciaMilisegundos = Math.abs(segundaFecha.getTime() - primeraFecha.getTime());
    
    const dias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    
    return dias;
}






function mostrarResultadoDias(dias) {
    const resultado = document.getElementById('resultadoFechas');
    resultado.textContent = `Diferencia: ${dias} días`;
}

