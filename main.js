 //* Usario + contrasena + Operador logico OR

let usuarioAutorizado1 = "Esteban";
 let passwordAutorizado1 = "1234";
 let usuarioAutorizado2 = "Pepe";
 let passwordAutorizado2 = "5678";
 let usuarioAutorizado3 = "Monica";
 let passwordAutorizado3 = "1234";

 let usuarioIngresado = prompt ("Ingrese su usuario");
 console.log (usuarioIngresado || "invitado")
 let passwordIngresado = prompt ("Ingrese su password");
 


 if (usuarioIngresado === usuarioAutorizado1 && passwordIngresado === passwordAutorizado1,
     usuarioIngresado === usuarioAutorizado2 && passwordIngresado === passwordAutorizado2, 
     usuarioIngresado === usuarioAutorizado3 && passwordIngresado === passwordAutorizado3 ){
     alert ("Bienvenido a OSIRIS")
 } else {
     alert ("Usuario o Password incorrectos")
 }

 
 
 
//* MOUSEDOWN , para llevar un control de visitas en ambos sitios.
 outlet.onmousedown = () => {
    console.log("clicks para Outlet Osiris" )
 }

 nuevacoleccion.onmousedown = () => {
    console.log("clicks para la nueva coleccion Osiris" )
 }

///////////SWEET ALERT////////////////
 const descuento = document.getElementById ("descuento");

 descuento.addEventListener("click", ()=>{
    Swal.fire({
        title: "Obten €100 de Descuento",
        text: "Code: SweEtOsIriS",
    background:"bisque",
backdrop: "black"
 } )})

 

