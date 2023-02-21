//* INCORPORO ,MODIFICO Y AGREGO CLASES A NODOS **//

const titulo = document.getElementById ("tituloNewarrivals");
console.log(titulo);

console.log("Modificamos titulo con innerText : ");
titulo.innerText = "NEW SEASON 2023"

titulo.className= "titulo_newArrivals";


//* OBJETOS Y ARRAYS DE FORMA DINAMICA de "New Colection"

class producto {
    constructor(id, nombre, precio, img, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.stock = stock;

    }

    sumaStock(cantidad){
        this.stock = this.stock + cantidad
    }

    mostrarStock(){
        console.log(" El stock de: " + this.nombre + " es igual a " + this.stock);
    }
    mostrarVender (cantidad){
        if (this.stock >= cantidad){
            this.stock -= cantidad;
            console.log(" Se vendieron " + cantidad + " unidad de " + this.nombre)
        }
        else {
            console.log("No hay mas productos de " + this.nombre);
        }
    }
    
}

const productoUno = new producto(1, "Dress PRICK", 1000, "imagenes/NEW_ARRIVALS/look1.jpg", 50);
const productoDos = new producto(2, "Mameluke Green", 1500, "imagenes/NEW_ARRIVALS/look2.jpg", 50);
const productoTres = new producto(3, "Jacket White bird", 1800, "imagenes/NEW_ARRIVALS/look3.jpg", 50);
const productoCuatro = new producto(4, "Jacket Black bird", 1800, "imagenes/NEW_ARRIVALS/look4.jpg", 50);
const productoCinco = new producto(5, "Dress Fall", 1400, "imagenes/NEW_ARRIVALS/look5.jpg", 100);
const productoSeis = new producto(6, "Jacket Vampire", 1400, "imagenes/NEW_ARRIVALS/look6.jpg", 70);
const productoSiete = new producto(7, "Covered Snake", 1700, "imagenes/NEW_ARRIVALS/look7.jpg", 100);
const productoOcho = new producto(8, "Covered TK", 1400, "imagenes/NEW_ARRIVALS/look8.jpg", 100);
const productoNueve = new producto(9, "Dress NUD", 1850, "imagenes/NEW_ARRIVALS/look9.jpg", 70);
const productoDiez = new producto(10, "Mameluke JOD", 1700, "imagenes/NEW_ARRIVALS/look10.jpg", 60);
const productoOnce = new producto(11,"Dress KETA", 1700, "imagenes/NEW_ARRIVALS/look11.jpg", 20);
const productoDoce = new producto(12,"Dress CICI", 1900, "imagenes/NEW_ARRIVALS/look12.jpg", 20);
const productoTrece = new producto(13,"Dress PEPA", 1700, "imagenes/NEW_ARRIVALS/look13.jpg", 20);
const productoCatorce = new producto(14,"Dress PIG", 1700, "imagenes/NEW_ARRIVALS/look14.jpg", 20);

const arrayProductos = [productoUno, productoDos, productoTres, productoCuatro, productoCinco, productoSeis, productoSiete, productoOcho, productoNueve, productoDiez, productoOnce, productoDoce, productoTrece, productoCatorce];
console.log("Mostramos los productos de la tienda: ");
console.log(arrayProductos);

//* INGRESO NUEVOS VALORES

productoUno.mostrarStock ();
productoUno.sumaStock(20);
productoUno.mostrarStock();
productoTres.mostrarStock ();
productoTres.sumaStock(40);
productoTres.mostrarStock();
productoDiez.mostrarStock ();
productoDiez.sumaStock(50);
productoDiez.mostrarStock();

productoDos.mostrarVender(40);
productoDos.mostrarStock();

const contenedorProductos = document.getElementById("contenedorProductos");


arrayProductos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "caja";
    div.innerHTML = `<div class="card" style="max-width: 540px;">
                    <div class="row g-0">
                    <div class="col-md-4">
                   <img src=${producto.img} class="img-fluid rounded-start" alt="...">
                    </div>
                  <div class="col-md-8">
                  <div class="card-body">
                  <h5 class="card-title"> ${producto.nombre}</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   <p class="card-price">€${producto.precio}</p>
                  <button id="agregar $(producto.id)" class="boton-agregar">Agregar <i class="fa-duotone fa-cart-shopping"></i></button>
         </div>
         
       </div>
     
     `;
contenedorProductos.appendChild(div);
const boton = document.getElementById (`agregar $(producto.id)`)
boton.addEventListener ("click",()=>{
    agregarAlCarrito(producto.id)
})
    })






//* Carrito *//(Estoy trabajando en el carrito mirando videos en youtube.)
    let carrito = []

    const agregarAlCarrito = (prodId)=>{
        const item = arrayProductos.find ((prod)=> producto.id === prodId)
        carrito.push(item)
        actualizarCarrito()
        console.log(carrito)
    }

    const actualizarCarrito = () => {

        carrito.forEach ((producto) => {
            const div = document.createdElement ("div")
            div.className = ("productoEnCarrito")
            div.innerHTML =`
            <p> ${producto.nombre}</p>
            <p> ${producto.precio} </p>
            <p> cantidad: <span id="cantidad">${producto.cantidad}</span></p>
<button onclick = "eliminarDelCarrito(${producto.id})" class= "boton-eliminar"></button> <i class="fa-regular fa-trash"></i>
            `;
        contenedorCarrito.appendChild(div)
        })
    }

 