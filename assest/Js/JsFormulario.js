//alert("hola");
/*window.addEventListener("DOMContentLoaded",Function(){
	conts Btn = document.getElementById("TxtName");
	Btn.addEventListener("click",Function(){
		let Lv_Mensaje_3 = "este mensaje se muestra al presionar el boton: presioname3";
		alert(Lv_Mensaje_3);
	});
});*/

window.addEventListener("DOMContentLoaded", function() {
    const Btn = document.getElementById("TxtName");
    Btn.addEventListener("click", function() {
        let Lv_Mensaje_3 = "este mensaje se muestra al presionar el boton: presioname3";
        alert(Lv_Mensaje_3);
    });
});

window.addEventListener("DOMContentLoaded", function() {
    const Btn1 = document.getElementById("TxtEmail");
    Btn1.addEventListener("click", function() {
		const fieldset = document.getElementById("field");
        fieldset.style.backgroundColor = "#ffeb3b"; 
        fieldset.style.borderColor = "#ff5722"; 
        fieldset.style.borderWidth = "3px";

    });
});

window.addEventListener("DOMContentLoaded", function() {
    const Btn2 = document.getElementById("sltPais");
    Btn2.addEventListener("change", function() {
        const paisSeleccionado = this.value;
        const fieldset = document.getElementById("field");
        
        // Cambia el color de fondo según el país
        switch(paisSeleccionado) {
            case "ecuador":
                fieldset.style.backgroundColor = "#FFD700"; 
                fieldset.style.borderColor = "#0000FF"; 
                break;
            case "mexico":
                fieldset.style.backgroundColor = "#90EE90"; 
                fieldset.style.borderColor = "#FF0000"; 
                break;
            case "colombia":
                fieldset.style.backgroundColor = "#FFFFE0"; 
                fieldset.style.borderColor = "#0000CD"; 
                break;
            default:
                fieldset.style.backgroundColor = ""; 
                fieldset.style.borderColor = "";
        }
        fieldset.style.borderWidth = "3px";
    });
});
//TxtName
//TxtEmail
//sltPais