const titulo = document.getElementById ("supportTitle");
//Modificare el titulo

titulo.innerText ="Welcome to OSIRIS'S support";

//* Formulario *//

class Cliente {
    constructor (nombre,apellido,email,mensaje){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.consulta = mensaje;
    }
}

const arrayClientes = [];

const formulario = document.getElementById ("formulario")

formulario.addEventListener ("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById ("nombre");
    const apellido = document.getElementById ("apellido");
    const email = document.getElementById ("email");
    const mensaje = document.getElementById ("mensaje");
    console.log("El nombre ingresado es: " + nombre.value);
    console.log("El apellido ingresado es: " + apellido.value);
    console.log("El email ingresado es: " + email.value);
    console.log("La observacion ingresado es: " + mensaje.value);

const cliente = new Cliente (nombre.value,apellido.value,email.value,mensaje.value);
arrayClientes.push(cliente);

console.log(arrayClientes);
    formulario.reset();
})