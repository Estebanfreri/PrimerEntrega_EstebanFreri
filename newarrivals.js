//* INCORPORO ,MODIFICO Y AGREGO CLASES A NODOS **//

const titulo = document.getElementById("tituloNewarrivals");
console.log(titulo);

console.log("Modificamos titulo con innerText : ");
titulo.innerText = "NEW SEASON 2023"

titulo.className = "titulo_newArrivals";

/////////////////////////////////////////////////////


//* Creo objetos y unifico Arrays con SPREAD *//

//OBJETOS 1

class Producto {
    constructor(id, nombre, precio, img, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.stock = stock;
        this.cantidad = 1;
    }


    
};

const productoUno = new Producto(1, "Vestido PRICK", 200, "imagenes/NEW_ARRIVALS/look1.jpg",20 );
const productoDos = new Producto(2, "Mameluco Green", 150, "imagenes/NEW_ARRIVALS/look2.jpg",24 );
const productoTres = new Producto(3, "Campera White bird", 180, "imagenes/NEW_ARRIVALS/look3.jpg",33 );
const productoCuatro = new Producto(4, "Campera Black bird", 180, "imagenes/NEW_ARRIVALS/look4.jpg",13 );
const productoCinco = new Producto(5, "Vestido Fall", 140, "imagenes/NEW_ARRIVALS/look5.jpg",15 );
const productoSeis = new Producto(6, "Campera Vampire", 140, "imagenes/NEW_ARRIVALS/look6.jpg",4 );
const productoSiete = new Producto(7, "Campera Snake", 170, "imagenes/NEW_ARRIVALS/look7.jpg",30 );
const productoOcho = new Producto(8, "Vestido TK", 140, "imagenes/NEW_ARRIVALS/look8.jpg",12 );
const productoNueve = new Producto(9, "Vestido NUD", 150, "imagenes/NEW_ARRIVALS/look9.jpg",23 );
const productoDiez = new Producto(10, "Mameluco JOD", 170, "imagenes/NEW_ARRIVALS/look10.jpg",20 );
const productoOnce = new Producto(11, "Vestido KETA", 170, "imagenes/NEW_ARRIVALS/look11.jpg",50 );
const productoDoce = new Producto(12, "Vestido CICI", 190, "imagenes/NEW_ARRIVALS/look12.jpg",30 );


const productos = [productoUno, productoDos, productoTres, productoCuatro, productoCinco, productoSeis, productoSiete, productoOcho, productoNueve, productoDiez, productoOnce, productoDoce];


//OBJETOS 2

class ProductoBolso {
    constructor(id, nombre, precio, img, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.stock = stock;
        this.cantidad = 1;
    }


    
};

const productoBolsoUno = new Producto(21, "Bolso Conejo", 100, "imagenes/bolso1.jpeg",10 );
const productoBolsoDos = new Producto(22, "Bolso Tortuga", 120, "imagenes/bolso2.jpeg",14 );
const productoBolsoTres = new Producto(23, "Bolso Tubo", 80, "imagenes/bolso3.jpeg",13 );
const productoBolsoCuatro = new Producto(24, "Bolso Diamante", 140, "imagenes/bolso4.jpeg",13 );

const productosDos = [productoBolsoUno,productoBolsoDos,productoBolsoTres,productoBolsoCuatro];

//SPREAD

const nuevoArrayCombinado = [...productos, ...productosDos];


//Desestructuracion de ARRAY
let [,,,,quinto,sexto,octavo,noveno] = productos;
console.log(sexto, "Solicitar mas stock");
console.log(noveno, "Pasarlo a Outlet");

let carrito = [];
console.log(productos);

const contenedorProductos = document.getElementById("contenedorProductos")

//Mostrar productos

const mostrarProductos = () => {
    nuevoArrayCombinado.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-4", "col-sm-12");
        card.innerHTML = `
        <div class = "card" style="width: 18rem;">
        <img src = "${producto.img}" class = "card-img-top" alt= "imgProductos">
     <div class = "card-body">
        <h5> ${producto.nombre}</h5>
        <p class="card-text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
         <p>$${producto.precio} </p>
         <button class = "botonStyle bg-dark" id="boton${producto.id}"> Agregar al carrito</button>
</div>
</div>`
        contenedorProductos.appendChild(card);
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id),
                Toastify({
                    text: "Agregado al carrito",
                    duration: 2000,
                    style: {
                        background: "linear-gradient(to right,#0e0640, #7a778f)",
                      }
                }).showToast()
        }) 
       

    })
}
mostrarProductos();



//Agregar al carrito

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        const producto = nuevoArrayCombinado.find(producto => producto.id === id);
        carrito.push(producto);
    }
    console.log(carrito);
    calcularTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
        <div class = "card" style="width: 18rem;">
        <img src = "${producto.img}" class = "card-img-top" alt= "imgProductos">
     <div class = "card-body">
        <h5> ${producto.nombre}</h5>
        <p class="card-text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
         <p>${producto.cantidad} </p>
         <button class = "btn btn-secondary" id="eliminar${producto.id}"> Eliminar</button>
</div>
</div>`

        contenedorCarrito.appendChild(card);

        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
    Swal.fire({
        title:"¿Estas seguro de eliminar este producto?",
        icono: "danger",
        confirmButtonText: "Aceptar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        }).then((result) => {
            if(result.isConfirmed){
                carrito = carrito.filter(producto => producto !== "fideos")
                console.log(carrito);
                Swal.fire({
                    title:"Producto Eliminado",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                })
            }
        })
        

    //LocalStorage: 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Vaciar carrito de compras. 

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
    
})

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    //LocalStorage: 
    localStorage.clear();
}

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
        //+= es igual a poner totalCompra = totalCompra + producto.precio * producto.cantidad. 
    })
    total.innerHTML = `Total $${totalCompra}`;
}

//FETCH

const dolar = document.getElementById ("dolar");

const url = "https://criptoya.com/api/dolar";

setInterval (() => {
    fetch(url)
     .then ((response)=> response.json())
     .then (({blue,oficial,solidario,mep,ccl,ccb})=>{
        dolar.innerHTML = `<p> Dolar Blue $${blue} - Dolar Oficial $${oficial} - Dolar Solidario $${solidario} - Dolar MEP $${mep} - Dolar CCL $${ccl} - Dolar CCB $${ccb} -</p>`
     })

},4000);


