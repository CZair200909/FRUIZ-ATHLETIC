/*======================================
FRUIZ ATHLETIC
CATÁLOGO DE MERCADERÍA
40 PARES - 15 MODELOS
======================================*/

const productosFruiz = [

    /* ZAPATILLAS PARA HOMBRE */

    {
        codigo: "KJ1735",
        nombre: "Response Runner 2",
        marca: "Adidas",
        categoria: "zapatillas",
        publico: "Hombre",
        tallas: ["7", "8", "8½"],
        unidades: 3
    },

    {
        codigo: "IH7966",
        nombre: "Break Start",
        marca: "Adidas",
        categoria: "zapatillas",
        publico: "Hombre",
        tallas: ["7", "8", "8½"],
        unidades: 3
    },

    {
        codigo: "JS4428",
        nombre: "Duramo RC2 M",
        marca: "Adidas",
        categoria: "zapatillas",
        publico: "Hombre",
        tallas: ["7", "8", "8½"],
        unidades: 3
    },

    {
        codigo: "JR3547",
        nombre: "Breaknet 3.0",
        marca: "Adidas",
        categoria: "zapatillas",
        publico: "Hombre",
        tallas: ["7", "8", "8½"],
        unidades: 3
    },

    {
        codigo: "JG8077",
        nombre: "Duramo RC2 M",
        marca: "Adidas",
        categoria: "zapatillas",
        publico: "Hombre",
        tallas: ["7", "8", "8½"],
        unidades: 3
    },

    {
        codigo: "JS4429",
        nombre: "Duramo RC2 M",
        marca: "Adidas",
        categoria: "zapatillas",
        publico: "Hombre",
        tallas: ["7½", "8", "8½"],
        unidades: 3
    },

    {
        codigo: "100261914",
        nombre: "Match Prime V2",
        marca: "Reebok",
        categoria: "zapatillas",
        publico: "Hombre",
        tallas: ["7.5", "8.5", "9"],
        unidades: 3
    },

    {
        codigo: "100259997",
        nombre: "Court Advance Vulc",
        marca: "Reebok",
        categoria: "zapatillas",
        publico: "Hombre",
        tallas: ["7.5", "8.5", "9"],
        unidades: 3
    },

    {
        codigo: "JQ9571",
        nombre: "Break Start",
        marca: "Adidas",
        categoria: "zapatillas",
        publico: "Hombre",
        tallas: ["8½", "9"],
        unidades: 2
    },

    /* ZAPATILLAS PARA MUJER */

    {
        codigo: "LA3899",
        nombre: "Rapidmove Go Trainer W",
        marca: "Adidas",
        categoria: "zapatillas",
        publico: "Mujer",
        tallas: ["5", "5½", "6"],
        unidades: 3
    },

    {
        codigo: "KK4286",
        nombre: "Response 2 W",
        marca: "Adidas",
        categoria: "zapatillas",
        publico: "Mujer",
        tallas: ["5", "5½", "6"],
        unidades: 3
    },

    {
        codigo: "IH9792",
        nombre: "Galaxy 8 W",
        marca: "Adidas",
        categoria: "zapatillas",
        publico: "Mujer",
        tallas: ["5½"],
        unidades: 1
    },

    {
        codigo: "KJ9185",
        nombre: "Rapidmove Go Trainer W",
        marca: "Adidas",
        categoria: "zapatillas",
        publico: "Mujer",
        tallas: ["5", "5½", "6"],
        unidades: 3
    },

    /* ZAPATILLAS DE FÚTBOL */

    {
        codigo: "JQ0947",
        nombre: "F50 Messi Club TF",
        marca: "Adidas",
        categoria: "futbol",
        publico: "Hombre",
        tallas: ["7½", "8", "8½"],
        unidades: 3
    },

{
    codigo: "IH2115",
    nombre: "Predator Club TF",
    marca: "Adidas",
    categoria: "futbol",
    publico: "Hombre",
    tallas: ["8½"],
    unidades: 1
},

{
    codigo: "PHANTOM-GX2",
    nombre: "Phantom GX II Club TF",
    marca: "Nike",
    categoria: "futbol",
    publico: "Hombre",
    tallas: ["9"],
    unidades: 1
}

];


/*======================================
NORMALIZAR TEXTO
======================================*/

function normalizar(texto){

    return String(texto)

        .normalize("NFD")

        .replace(/[\u0300-\u036f]/g, "")

        .toLowerCase();

}


/*======================================
CREAR TARJETA DEL PRODUCTO
======================================*/

function crearTarjeta(producto){

    const mensaje = encodeURIComponent(

        "Hola, quiero consultar por " +

        producto.marca + " " +

        producto.nombre +

        " (código " + producto.codigo + "). " +

        "Tallas disponibles: " +

        producto.tallas.join(", ") +

        " US."

    );

    return `

        <article

            class="product-card producto-catalogo"

            data-marca="${normalizar(producto.marca)}"

            data-nombre="${normalizar(

                producto.marca + " " +

                producto.nombre + " " +

                producto.codigo

            )}"

        >

            <div class="producto-imagen-contenedor producto-placeholder">

                <span class="producto-distintivo">

                    DISPONIBLE

                </span>

                <div class="placeholder-contenido">

                    <strong>

                        ${producto.marca}

                    </strong>

                    <span>

                        FOTO PRÓXIMAMENTE

                    </span>

                    <small>

                        ${producto.codigo}

                    </small>

                </div>

            </div>


            <div class="producto-contenido">

                <p class="producto-marca">

                    ${producto.marca.toUpperCase()}

                </p>

                <h3>

                    ${producto.nombre}

                </h3>

                <p class="producto-tipo">

                    ${producto.publico}

                    · Código ${producto.codigo}

                </p>

                <p class="producto-talla">

                    <strong>Tallas disponibles:</strong>

                    ${producto.tallas.join(" · ")} US

                </p>

                <p class="producto-stock">

                    ${producto.unidades}

                    ${producto.unidades === 1

                        ? "par disponible"

                        : "pares disponibles"}

                </p>

                <a

                    class="buy-btn"

                    href="https://wa.me/51934105748?text=${mensaje}"

                    target="_blank"

                    rel="noopener noreferrer"

                >

                    Consultar por WhatsApp

                </a>

            </div>

        </article>

    `;

}


/*======================================
INICIAR CATÁLOGO
======================================*/

function iniciarCatalogoFruiz(){

    const contenedor =

        document.getElementById("catalogoProductos");

    if(!contenedor){

        return;

    }

    const categoria =

        contenedor.dataset.categoria || "todos";

    const inventario = productosFruiz.filter(

        (producto) =>

            categoria === "todos" ||

            producto.categoria === categoria

    );

    contenedor.innerHTML =

        inventario.map(crearTarjeta).join("");


    const buscador =

        document.querySelector(".search input");

    const filtros =

        document.querySelectorAll(".filtro");

    const contador =

        document.getElementById("contadorProductos");

    const sinResultados =

        document.getElementById("sinResultados");

    let marcaSeleccionada = "todos";


    function filtrarProductos(){

        const busqueda = normalizar(

            buscador

                ? buscador.value.trim()

                : ""

        );

        let visibles = 0;

        const tarjetas = contenedor.querySelectorAll(

            ".producto-catalogo"

        );

        tarjetas.forEach((tarjeta) => {

            const coincideMarca =

                marcaSeleccionada === "todos" ||

                tarjeta.dataset.marca ===

                marcaSeleccionada;

            const coincideBusqueda =

                tarjeta.dataset.nombre.includes(busqueda);

            const mostrar =

                coincideMarca && coincideBusqueda;

            tarjeta.hidden = !mostrar;

            if(mostrar){

                visibles++;

            }

        });


        if(contador){

            contador.textContent =

                visibles + " " +

                (visibles === 1

                    ? "producto"

                    : "productos");

        }


        if(sinResultados){

            sinResultados.style.display =

                visibles === 0

                    ? "block"

                    : "none";

        }

    }


    filtros.forEach((boton) => {

        boton.addEventListener("click", () => {

            filtros.forEach((filtro) => {

                filtro.classList.remove("activo");

            });

            boton.classList.add("activo");

            marcaSeleccionada =

                boton.dataset.marca;

            filtrarProductos();

        });

    });


    if(buscador){

        buscador.addEventListener(

            "input",

            filtrarProductos

        );

    }

    filtrarProductos();

}


/*======================================
ESTILOS DEL ESPACIO PARA LA FOTO
======================================*/

const estilosCatalogoFruiz =

    document.createElement("style");

estilosCatalogoFruiz.textContent = `

    .producto-placeholder{

        background:linear-gradient(

            145deg,

            #eeeeee,

            #d8d8d8

        );

        color:#111;

    }

    .placeholder-contenido{

        display:grid;

        gap:8px;

        text-align:center;

    }

    .placeholder-contenido strong{

        font-size:30px;

        text-transform:uppercase;

    }

    .placeholder-contenido span{

        color:#666;

        font-size:12px;

        font-weight:700;

        letter-spacing:1.5px;

    }

    .placeholder-contenido small{

        color:#333;

        font-size:14px;

        font-weight:700;

    }

    .producto-stock{

        margin-top:8px;

        color:#37b9ff !important;

        font-size:13px;

        font-weight:700;

    }

    .producto-catalogo[hidden]{

        display:none;

    }

`;

document.head.appendChild(

    estilosCatalogoFruiz

);


document.addEventListener(

    "DOMContentLoaded",

    iniciarCatalogoFruiz

);
