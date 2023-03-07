 //* Usario + contrasena



let usuarioAutorizado1 = "Esteban";
 let passwordAutorizado1 = "1234";
 let usuarioAutorizado2 = "Pepe";
 let passwordAutorizado2 = "5678";
 let usuarioAutorizado3 = "Monica";
 let passwordAutorizado3 = "1234";

 let usuarioIngresado = prompt ("Ingrese su usuario");
 let passwordIngresado = prompt ("Ingrese su password");


 if (usuarioIngresado === usuarioAutorizado1 && passwordIngresado === passwordAutorizado1,
     usuarioIngresado === usuarioAutorizado2 && passwordIngresado === passwordAutorizado2, 
     usuarioIngresado === usuarioAutorizado3 && passwordIngresado === passwordAutorizado3 ){
     alert ("Bienvenido a OSIRIS")
 } else {
     alert ("Usuario o Password incorrectos")
 }

 let valorUno = parseInt (prompt ("Ingrese el primer valor"));
 let operacion = prompt ("Ingrese la operacion a relizar");
 let valorDos = parseInt (prompt ("Ingrese el segundo valor"));
 
 
 
 switch (operacion){
     case "+":
         console.log (valorUno + valorDos);
         break;
         case "-":
         console.log (valorUno - valorDos);
         break;
         case "*":
         console.log (valorUno * valorDos);
         break;
         case "/":
         console.log (valorUno / valorDos);
         break;
         default:
             console.log("Escribi bien tinki guinki");
             break;
 }
 
//* MOUSEDOWN , para llevar un control de visitas.
 outlet.onmousedown = () => {
    console.log("clicks para Outlet Osiris" )
 }

 nuevacoleccion.onmousedown = () => {
    console.log("clicks para la nueva coleccion Osiris" )
 }
