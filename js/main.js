class Producto{
    constructor(id,nombre,precio,){
        this.id = id;
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
        this.stock = 10
    }
}

class Productocontroller{
    constructor(){
        this.listaProductos = []
    }

    agregar(producto){
        this,this.listaProductos.push(producto)
    }

    obtenerProductosDesdeAPI(){
        this.listaProductos = [
            new Producto(1, "Buzo" ,1500),
            new Producto(2, "Remera" ,1000),
            new Producto(3, "Pantalon" ,1000),
            new Producto(4, "Campera" ,1500),
            new Producto(5, "Gorro" ,500)
        ]
    }

    mostrarProductos(){
        let acumulador = ""
        this.listaProductos.forEach( producto => {
            acumulador += "\nid: " + producto.id + " \nnombre: " + producto.nombre + " \nprecio: " + producto.precio 
        })
        return acumulador
    }

    buscar(id){
        return this.listaProductos.find(el => el.id == id)
    }
}

class CarritoController{
    constructor(){
        this.listaCarrito = []
    }

    agregar(producto){
        this.listaCarrito.push(producto)
    }

    calcularTotal(){
        let acumulador = 0

        this.listaCarrito.forEach( producto => {
            acumulador += producto.precio * producto.cantidad
        })
        return acumulador;
    }
}


//Controladores
const controladorProductos = new Productocontroller()
const controladorCarrito = new CarritoController()

//Obtenemos los productos 
controladorProductos.obtenerProductosDesdeAPI()

let nombreUsuario = prompt("Ingresar nombre de usuario");
let rta = ""

if (nombreUsuario == "") {
    alert("No ingresaste un nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado: " + nombreUsuario);
}


do{
    alert(controladorProductos.mostrarProductos())

    let id = prompt("Ingrese el ID del producto que quiera comprar")
    const producto = controladorProductos.buscar(id)

    if(producto){
        controladorCarrito.agregar(producto)
    }else{
        alert("El ID que ingreso no es valido")
    }
    rta = prompt("Ingrese ESC para finalizar la compra o ingrese otra tecla para seguir comprando").toUpperCase()

}while (rta != "ESC")

alert("Gracias por comprar en nuestra pagina, el total de su compra es: $"+controladorCarrito.calcularTotal())
