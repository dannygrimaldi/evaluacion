export function initializeNavbar(toggleId, navId, bodyId, headerId) {
    const showNavbar = () => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId);

        // Validar que todas las variables existan
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                // mostrar el navbar
                nav.classList.toggle('show');
                // cambiar el ícono
                toggle.classList.toggle('bx-x');
                // agregar padding al cuerpo
                bodypd.classList.toggle('body-pd');
                // agregar padding al encabezado
                headerpd.classList.toggle('body-pd');
            });
        }
    };

    showNavbar();

    /*===== ENLACE ACTIVO c =====*/
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    }

    linkColor.forEach(l => l.addEventListener('click', colorLink));
}