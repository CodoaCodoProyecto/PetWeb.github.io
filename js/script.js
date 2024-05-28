
var opcion1 = document.getElementById("opcion1");
var opcion2 = document.getElementById("opcion2");
var tipoVacuna = document.getElementById("tipovacuna");

// porque ya tiene seleccionado por defecto el 'No'
if(opcion2.checked){
    tipoVacuna.disabled = true;
    tipoVacuna.style.backgroundColor = "#a1a19d";
}

// para cuando se selecciono 'Si'
opcion1.addEventListener("change", function() {
    tipoVacuna.disabled = !this.checked;
    tipoVacuna.style.backgroundColor = "white";
});

// para cuando se selecciono 'No'
opcion2.addEventListener("change", function() {
    tipoVacuna.disabled = this.checked;
    tipoVacuna.style.backgroundColor = "#a1a19d";
    tipoVacuna.value = ""; // para borrar el contenido del textarea
});



// para el menu
var nav = document.getElementById('menu');
function menuHamburguesa(){
    nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
}

// cuando vuelvo a hacer click en el menu para ocultar los items
// el contenedor 'menu' queda como 'none' y cuando se cambia el tamaño 
// de la pantalla no se muestra los items del menu.
// La siguiente funcion detecta el tamaño del dispositivo y vuelve a mostrar el menu (pasar de 'none' a 'block').
window.addEventListener('resize', function() {
    if(window.innerWidth > 560){ // si el ancho pantalla es mayor a 560
        nav.style.display = 'block';
    }
    else{
        nav.style.display = 'none';
    }
});
