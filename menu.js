/*======================================
MENÚ MÓVIL FRUIZ
======================================*/

const botonMenu = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector(".nav");

if (botonMenu && menuPrincipal) {

    botonMenu.addEventListener("click", () => {

        const menuAbierto =

            menuPrincipal.classList.toggle("activo");

        botonMenu.classList.toggle(

            "activo",

            menuAbierto

        );

        botonMenu.setAttribute(

            "aria-expanded",

            menuAbierto

        );

    });


    menuPrincipal.querySelectorAll("a").forEach((enlace) => {

        enlace.addEventListener("click", () => {

            menuPrincipal.classList.remove("activo");

            botonMenu.classList.remove("activo");

            botonMenu.setAttribute(

                "aria-expanded",

                "false"

            );

        });

    });

}
