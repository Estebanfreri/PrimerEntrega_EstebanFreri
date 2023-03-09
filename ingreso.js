const botonIngreso = document.getElementById("botonIngreso")

const usuarioAutorizado = "esteban";
const passwordAutorizado = "1234";

botonIngreso.addEventListener("click", () => {
    Swal.fire({
        title: "Inicio de Sesion",
        html: `<input type="text" id="usuario" class="swal2-imput" placeholder="Usuario">
        <input type="text" id="password" class="swal2-imput" placeholder="Password">`,
        confirmButtonText: "Enviar",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            const usuario = document.getElementById("usuario").value;
            const password = document.getElementById("password").value;

            if (usuario === usuarioAutorizado && password === passwordAutorizado) {
                window.location.href = "index.html";
            }
        }
    })
})