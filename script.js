// DECLARO CONSTRUCTOR
class Stock{
    constructor(id, prod, marca, precio){
        this.id = id;
        this.prod = prod;
        this.marca = marca;
        this.precio = precio;
    }
    imprimeMostrar(){
        console.log("Mostrar")
    }
}


// DECLARO FUNCIONES


//FUNCION PARA AGREGAR PRODUCTOS
function agregar(){
    let desicion = Number(prompt("Para ingresar un array de objetos de ejemplo (con elementos ya pre-cargados) ponga 1. Para ingresarlos manualmente, ponga CANCELAR:"))
    if (desicion == 1) {
        for (const iterator of arrayEjemplo) {
        productos.push(iterator)
        }
        console.log("Se ha cargado la lista aleatoria de elementos")
    }else{
    let flag=true;
    let opcion2=true;
    let opcion3=true;
    let opcion4=true;
    let opcion5=true;
    let opcion6=true;
    let controlDeID=[];
    let controlDePrecio=[];
    do {
        if (flag) {

            // Do while para que no ingresen un ID invalido
            let id;
            do {
                id = Number(prompt("Ingrese el ID del producto (no se pueden repetir)"));
                if(!id || isNaN(id)){
                    alert("Ingresó un ID inválido, intente nuevamente!")
                    opcion4=true;
                }else{
                    controlDeID.push(id);
                    opcion4=false;
                }
            } while (opcion4);

            let prod = prompt ("Ingrese el nombre del producto").toUpperCase();
            let marca = prompt("Ingrese la marca del producto").toUpperCase();

            // Do while para que no ingresen un precio invalido
            let precio;
            do {
                precio = Number(prompt("Ingrese el precio del producto"));
                if(!precio || isNaN(precio)){
                    alert("Ingresó un precio inválido, intente nuevamente!")
                    opcion5=true;
                }else{
                    controlDePrecio.push(precio);
                    opcion5=false;
                }
            } while (opcion5);

            productos.push(new Stock(id, prod, marca, precio));
            console.log("Producto agregado");
            flag=false;
        } else {
            let opcion = confirm("Desea agregar otro producto?");
            if (opcion) {
                let id;
                    // Do while para que no ingresen un ID invalido ni repetido
                    do {
                        id = Number(prompt("Ingrese el siguiente ID del producto (no se pueden repetir)"));
                        if(controlDeID.includes(id) || isNaN(id) || !id){
                            alert("Ingresó un ID existente o inválido, intente nuevamente!")
                            opcion3=true;
                        }else{
                            controlDeID.push(id);
                            opcion3=false;
                        }
                    } while (opcion3);

                let prod = prompt ("Ingrese el nombre del producto").toUpperCase();
                let marca = prompt("Ingrese la marca del producto").toUpperCase();

                // Do while para que no ingresen un precio invalido
                let precio;
                do {
                    precio = Number(prompt("Ingrese el precio del producto"));
                    if(isNaN(precio) || !precio){
                        alert("Ingresó un precio inválido, intente nuevamente!")
                        opcion6=true;
                    }else{
                        controlDePrecio.push(precio);
                        opcion6=false;
                    }
                } while (opcion6);
                productos.push(new Stock(id, prod, marca, precio))
                console.log("Producto agregado")
        } else{
            opcion2=false;
            break;
        }
        }
    } while (opcion2);
}
}


// FUNCION PARA MOSTRAR ARRAY
function mostrar(){
    if(productos.length==0){
        alert("Aun no ha cargado ningún producto a la lista de stock")
    }else{
    console.log("El stock cargado al sistema hasta el momento es el siguiente: \n\n");
    productos.forEach(element => {
        console.log(
        "- ID del producto: " + element.id + "\n" + 
        "- Nombre del producto: " + element.prod + "\n" + 
        "- Marca del producto: " + element.marca + "\n" + 
        "- Precio del producto: $" + element.precio + "\n\n");
    });
    }
}


//FUNCION PARA ORDENAR
function ordenar (){
    if(productos.length==0){
        alert("Aun no ha cargado ningún producto a la lista de stock")
    }else{
        let menuOrden = Number(prompt(
            "- Ingrese el numero, segun como desea ordenar la lista: \n \n \
                1) Por numeros de ID. \n \
                2) Alfabetiicamente por nombres. \n \
                3) Alfabeticamente por marcas. \n \
                4) Por precios. \n \
                0) Volver."
            ));
            switch (menuOrden) {
                case 1:
                    productos.sort(function (a, b) {
                        if (a.id > b.id) {
                        return 1;
                        }
                        if (a.id < b.id) {
                        return -1;
                        }
                        return 0;
                    });
                    console.log("Los elementos ordenados segun su ID, quedan asi: \n\n");
                    productos.forEach(element => {
                        console.log(
                        "- ID del producto: " + element.id + "\n" + 
                        "- Nombre del producto: " + element.prod + "\n" + 
                        "- Marca del producto: " + element.marca + "\n" + 
                        "- Precio del producto: $" + element.precio + "\n\n");
                    });
                break;
                case 2:
                    productos.sort(function (a, b) {
                        if (a.prod > b.prod) {
                        return 1;
                        }
                        if (a.prod < b.prod) {
                        return -1;
                        }
                        return 0;
                    });
                    console.log("Los elementos ordenados segun su nombre, quedan asi: \n\n");
                    productos.forEach(element => {
                        console.log(
                        "- ID del producto: " + element.id + "\n" + 
                        "- Nombre del producto: " + element.prod + "\n" + 
                        "- Marca del producto: " + element.marca + "\n" + 
                        "- Precio del producto: $" + element.precio + "\n\n");
                    });
                break;
                case 3:
                    productos.sort(function (a, b) {
                        if (a.marca > b.marca) {
                        return 1;
                        }
                        if (a.marca < b.marca) {
                        return -1;
                        }
                        return 0;
                    });
                    console.log("Los elementos ordenados segun su marca, quedan asi: \n\n");
                    productos.forEach(element => {
                        console.log(
                        "- ID del producto: " + element.id + "\n" + 
                        "- Nombre del producto: " + element.prod + "\n" + 
                        "- Marca del producto: " + element.marca + "\n" + 
                        "- Precio del producto: $" + element.precio + "\n\n");
                    });
                break;
                case 4:
                    productos.sort(function (a, b) {
                        if (a.precio > b.precio) {
                        return 1;
                        }
                        if (a.precio < b.precio) {
                        return -1;
                        }
                        return 0;
                    });
                    console.log("Los elementos ordenados segun su precio, quedan asi: \n\n");
                    productos.forEach(element => {
                        console.log(
                        "- ID del producto: " + element.id + "\n" + 
                        "- Nombre del producto: " + element.prod + "\n" + 
                        "- Marca del producto: " + element.marca + "\n" + 
                        "- Precio del producto: $" + element.precio + "\n\n");
                    });
                break;
                case 0:
                break;
                default:
                    console.log("\n No ingresó ninguno de los numeros de la lista. Ingrese nuevamente por favor \n");
                break;
            }
    }
}


//FUNCION PARA FILTRAR
function filtrar(){
    if(productos.length==0){
        alert("Aun no ha cargado ningún producto a la lista de stock")
    }else{
let filtro = Number(prompt(
    "- Ingrese el numero, segun lo que desea hacer: \n \n \
        1) Ver por consola solo los nombres de los productos. \n \
        2) Ver por consola solo los marcas. \n \
        3) Ver por consola solo las precios. \n \
        0) Volver."
    ));
    switch (filtro) {
        case 1:
            console.log("Los nosmbres cargados al sistema hasta el momento son los siguientes: \n\n");
            const soloNombres =  productos.map((element)=>element.prod)
            for (const key in soloNombres) {
                console.log("- " + soloNombres[key] + "\n");
                }
            break;
            case 2:
                console.log("Las marcas de los elementos cargados, hasta el momento, son las siguientes: \n\n");
                const soloMarcas =  productos.map((element)=>element.marca)
                for (const key in soloMarcas) {
                console.log("- " + soloMarcas[key] + "\n");
                }
            break;
            case 3:
                let totalPrecios=0;
                console.log("Los precios de los elementos cargados hasta el momento, son los siguientes: \n\n");
                const soloPrecios =  productos.map((element)=>element.precio)
                for (const key in soloPrecios) {
                totalPrecios += soloPrecios[key];
                console.log("- $" + soloPrecios[key] + "\n");
                }
                console.log("* El total que lleva gastado es de: $" + totalPrecios + "\n\n");
                break;
                case 0:
            break;
            default:
                console.log("\n No ingresó ninguno de los numeros de la lista. Ingrese nuevamente por favor \n");
            break;
    }
}
}


//FUNCION PARA ELIMINAR ELEMENTOS
function eliminar(){
    if(productos.length==0){
        alert("Aun no ha cargado ningún producto a la lista de stock")
    }else{
        productos.sort(function (a, b) {
            if (a.id > b.id) {
            return 1;
            }
            if (a.id < b.id) {
            return -1;
            }
            return 0;
        });
        console.log("Los elementos hasta el momento son los siguientes: \n\n");
                    productos.forEach(element => {
                        console.log(
                        "- ID del producto: " + element.id + "\n" + 
                        "- Nombre del producto: " + element.prod + "\n" + 
                        "- Marca del producto: " + element.marca + "\n" + 
                        "- Precio del producto: $" + element.precio + "\n\n");
                    });
    let barridoDeId = [];
    const idEliminar = Number(prompt("Elija de la lista mostrada por consola, el ID del elemento a eliminar"));
    barridoDeId =  productos.map((element)=>element.id)

    if(barridoDeId.includes(idEliminar)){
        let indice = productos.map(producto => producto.id).indexOf(idEliminar)
        productos.splice(indice, 1);
        console.log("- Ha eliminado el producto de ID " + idEliminar + " exitosamente \n\n");
        alert("- Ha eliminado el producto de ID " + idEliminar + " exitosamente");
    }else{
        alert("El ID que ingresó no corresponde a ningun elemento de la lista.")
    }
}
}



// FUNCION PARA REINICIAR ARRAY
function limpiar() {
    if(productos.length==0){
        alert("Aun no ha cargado ningún producto a la lista de stock")
    }else{
    let opcion = confirm("Si confirma, borrará todo lo que ha ingresado");
    
    if (opcion) {
        productos.splice(0,productos.length)
        console.clear();
        alert("\n\n Borró todo, debe volver a empezar :) \n\n");
    } else {
        alert("\n\n No se borró nada, puede seguir ingresando :) \n\n");
    }
    }
}

//ARRAY DE OBJETOS PARA USAR DE EJEMPLO
const arrayEjemplo = [
    {id: 5, prod: "Arroz", marca: "Sancor",  precio: 500},
    {id: 8, prod:"Harina", marca: "Ilolay", precio: 300},
    {id: 12, prod:"Papa", marca: "Serenisima", precio: 800},
    {id: 16, prod:"Harina", marca: "Adidas", precio: 1000},
    {id: 1, prod:"Harina", marca: "Pringles", precio: 20000},
    {id: 25, prod:"Harina", marca: "Morena", precio: 650},
    {id: 4, prod:"Harina", marca: "Pepito", precio: 980},
    ]


// EMPIEZA CODIGO


//DECLARO ARRAY 
let productos = [];

//MENU PARA QUE EL USUARIO ELIJA QUE HACER
do {
    menu = Number(prompt(
        "- Ingrese el numero, segun lo que desea hacer: \n \n \
            1) Agregar productos al listado de stock. \n \
            2) Mostrar listado. \n \
            3) Ordenar listado \n \
            4) Filtrar producto por una de sus propiedades. \n \
            5) Eliminar productos \n \
            6) Borrar listado completo. \n \
            0) Salir del programa."
        ));
    
    switch (menu) {
        case 1:
            agregar();
        break;
        case 2:
            mostrar();
        break;
        case 3:
            ordenar();
        break;
        case 4:
            filtrar()
        break;
        case 5:
            eliminar()
        break;
        case 6:
            limpiar()
        break;
            case 0:
            alert("Gracias por utilizar nuestro programa!")
        break;
        default:
            alert("\n No ingresó ninguno de los numeros de la lista. Ingrese nuevamente por favor \n");
        break;
      }
    } while (menu != 0);

