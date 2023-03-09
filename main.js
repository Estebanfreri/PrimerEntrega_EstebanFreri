



//* MOUSEDOWN , para llevar un control de visitas en ambos sitios.
outlet.onmousedown = () => {
    console.log("clicks para Outlet Osiris")
}

nuevacoleccion.onmousedown = () => {
    console.log("clicks para la nueva coleccion Osiris")
}

///////////SWEET ALERT////////////////
const descuento = document.getElementById("descuento");

descuento.addEventListener("click", () => {
    Swal.fire({
        title: "Obten €100 de Descuento",
        text: "Code: SweEtOsIriS",
        background: "bisque",
        backdrop: "black"
    })
})



