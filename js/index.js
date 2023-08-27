function eliminarElemento() {

}
var ide = 1;
function RegistrarProducto() {

    var codigo = document.getElementById("codigo").value;
    var descripcion = document.getElementById("descripcion").value;
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;

    var tbody = document.getElementById("cuerpotabla");
    var tr = document.createElement("tr");
    tr.id = "tr" + codigo;

    var celdaId = document.createElement("td");
    celdaId.innerHTML = ide++;
    var celdaCodigo = document.createElement("td");
    celdaCodigo.innerHTML = codigo;
    var celdaDescripcion = document.createElement("td");
    celdaDescripcion.innerHTML = descripcion;
    var celdaPrecio = document.createElement("td");
    celdaPrecio.innerHTML = precio;
    var celdaCantidad = document.createElement("td");
    celdaCantidad.innerHTML = cantidad;

    var celdaAccion = document.createElement("td");

    var btnEliminar = document.createElement("button");
    btnEliminar.value = "tr" + codigo;
    btnEliminar.innerHTML = "Eliminar";
    btnEliminar.value = "tr" + codigo;
    btnEliminar.addEventListener("click",
        (e) => { if(confirm("Esta Seguro de Eliminar")){
            eliminarElemento(e.target.value); }},
        false);
    celdaAccion.appendChild(btnEliminar);

    var btnIncrementar = document.createElement("button");
    btnIncrementar.value = "tr" + codigo;
    btnIncrementar.innerHTML = "+";
    btnIncrementar.value = "tr" + codigo;
    btnIncrementar.addEventListener("click",
        (e) => {
            var cantidad = celdaCantidad.innerHTML;
            cantidad = parseInt(cantidad);
            cantidad++;
            celdaCantidad.innerHTML = cantidad;
        },
        false);
    celdaAccion.appendChild(btnIncrementar);

    var btnDisminuir = document.createElement("button");
    btnDisminuir.value = "tr" + codigo;
    btnDisminuir.innerHTML = "-";
    btnDisminuir.value = "tr" + codigo;
    btnDisminuir.addEventListener("click",
        (e) => {
            var cantidad = celdaCantidad.innerHTML;
            cantidad = parseInt(cantidad);
            if (cantidad > 0) {
                cantidad--;
                celdaCantidad.innerHTML = cantidad;
            }
        },
        false);
    celdaAccion.appendChild(btnDisminuir);

    tr.appendChild(celdaId);
    tr.appendChild(celdaCodigo);
    tr.appendChild(celdaDescripcion);
    tr.appendChild(celdaPrecio);
    tr.appendChild(celdaCantidad);
    tr.appendChild(celdaAccion);
    tbody.appendChild(tr);



}
function eliminarElemento(valor) {
    var tr = document.getElementById(valor);
    var tbody = document.getElementById("cuerpotabla");
    tbody.removeChild(tr);
}