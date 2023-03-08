

class producto {
    constructor(id, nombre, precio, img, stock) {
        this.id = id,
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

const productoDos = new producto(1,"Mercurio", 500, "imagenes/OUTLET/lookO1.jpg", 50);
const productoTres = new producto(2,"Venus", 800, "imagenes/OUTLET/lookO2.jpg", 50);
const productoCuatro = new producto(3,"Tierra", 800, "imagenes/OUTLET/lookO3.jpg", 50);
const productoCinco = new producto(4,"Marte", 400, "imagenes/OUTLET/outfit3.jpg", 100);
const productoSeis = new producto(5,"Jupiter", 400, "imagenes/OUTLET/lookO5.jpg", 70);
const productoSiete = new producto(6,"Saturnro", 700, "imagenes/OUTLET/lookO6.jpg", 100);
const productoOcho = new producto(7,"Mercurio", 400, "imagenes/OUTLET/lookO7.jpg", 100);
const productoNueve = new producto(8,"Urano", 850, "imagenes/OUTLET/lookO8.jpg", 70);
const productoDiez = new producto(9,"Luna", 700, "imagenes/OUTLET/lookO9.jpg", 60);


const arrayProductos = [productoDos, productoTres, productoCuatro, productoCinco, productoSeis, productoSiete, productoOcho, productoNueve, productoDiez, ];
console.log("Mostramos los productos de la tienda: ");
console.log(arrayProductos);

//* INGRESO NUEVOS VALORES


productoTres.mostrarStock();
productoTres.sumaStock(40);
productoTres.mostrarStock();
productoDiez.mostrarStock();
productoDiez.sumaStock(50);
productoDiez.mostrarStock();

productoDos.mostrarVender(40);
productoDos.mostrarStock();


const contenedorProductosOutlet = document.getElementById("contenedorProductosOutlet");

arrayProductos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "caja2";
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
                  <button class="btn btn-outline-dark" type="submit">Agregar al carrito</button>
         </div>
         
       </div>
     
     `;
contenedorProductosOutlet.appendChild(div);
    })


//*  ARRAYS (FIND) *//
    const buscado = arrayProductos.find ( Producto => Producto.nombre === "Luna");
console.log("Metodo find: ");
console.log(buscado);

//* ARRAYS (MAP) *//

const arrayProductosDescuento = arrayProductos.map ( Producto =>{
    return {
        nombre: Producto.nombre,
        precio: Producto.precio - 100
    }
})

console.log("Utilizo MAP:");
console.log(arrayProductosDescuento);





