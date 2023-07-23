function abrirregalo() {
    var contenedor = document.querySelector(".contenedor");
    var tapa = document.querySelector(".tapa");
    var listonCaja = document.querySelector(".liston-superior");
    var sombraCaja = document.querySelector(".sombra-caja");
    var fondo = document.querySelector(".fondo");
    tapa.style.animation = "moverArriba 1s forwards";
    listonCaja.style.animation = "moverArriba 1s forwards";
    sombraCaja.style.animation = "moverArriba 1s forwards";
    setTimeout(function() {
        fondo.style.animation = "aparecerfondo 2s forwards";
    }, 750)
    setTimeout(function() {
        contenedor.removeChild(tapa);
        contenedor.removeChild(listonCaja);
        contenedor.removeChild(sombraCaja);
    }, 1000);
}