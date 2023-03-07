//* INCORPORO ,MODIFICO Y AGREGO CLASES A NODOS **//

const titulo = document.getElementById("tituloNewarrivals");
console.log(titulo);

console.log("Modificamos titulo con innerText : ");
titulo.innerText = "NEW SEASON 2023"

titulo.className = "titulo_newArrivals";


class Producto {
    constructor(id, nombre, precio, img,) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }


    
};

const productoUno = new Producto(1, "Vestido PRICK", 1000, "imagenes/NEW_ARRIVALS/look1.jpg", );
const productoDos = new Producto(2, "Mameluco Green", 1500, "imagenes/NEW_ARRIVALS/look2.jpg", );
const productoTres = new Producto(3, "Campera White bird", 1800, "imagenes/NEW_ARRIVALS/look3.jpg", );
const productoCuatro = new Producto(4, "Campera Black bird", 1800, "imagenes/NEW_ARRIVALS/look4.jpg", );
const productoCinco = new Producto(5, "Vestido Fall", 1400, "imagenes/NEW_ARRIVALS/look5.jpg", );
const productoSeis = new Producto(6, "Campera Vampire", 1400, "imagenes/NEW_ARRIVALS/look6.jpg", );
const productoSiete = new Producto(7, "Campera Snake", 1700, "imagenes/NEW_ARRIVALS/look7.jpg", );
const productoOcho = new Producto(8, "Vestido TK", 1400, "imagenes/NEW_ARRIVALS/look8.jpg", );
const productoNueve = new Producto(9, "Vestido NUD", 1850, "imagenes/NEW_ARRIVALS/look9.jpg", );
const productoDiez = new Producto(10, "Mameluco JOD", 1700, "imagenes/NEW_ARRIVALS/look10.jpg", );
const productoOnce = new Producto(11, "Vestido KETA", 1700, "imagenes/NEW_ARRIVALS/look11.jpg", );
const productoDoce = new Producto(12, "Vestido CICI", 1900, "imagenes/NEW_ARRIVALS/look12.jpg", );


const productos = [productoUno, productoDos, productoTres, productoCuatro, productoCinco, productoSeis, productoSiete, productoOcho, productoNueve, productoDiez, productoOnce, productoDoce];

let carrito = [];
console.log(productos);

const contenedorProductos = document.getElementById("contenedorProductos")

//Mostrar productos

const mostrarProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-4", "col-sm-12");
        card.innerHTML = `
             <div class = "card">
                <img src = "${producto.img}" class = "img-fluid rounded-start"
             <div class = "card-body">
                <h3> ${producto.nombre}</h3>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
         <p>€${producto.precio} </p>
         <button class = "btn btn-secondary" id="boton${producto.id}"> Agregar al carrito</button>
</div>
</div>`
        contenedorProductos.appendChild(card);
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
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
        const producto = productos.find(producto => producto.id === id);
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
             <div class = "card">
                <img src = "${producto.img}" class = "card-img-tom imgProductos"
             <div class = "card-body">
                <h3> ${producto.nombre}</h3>
         <p>€${producto.precio} </p>
         <p>${producto.cantidad}</p>
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

    //LocalStorage: 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Vaciamos todo el carrito de compras. 

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
    total.innerHTML = `Total €${totalCompra}`;
}

