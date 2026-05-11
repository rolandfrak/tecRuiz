// Datos de los proyectos
const proyectos = {
    software: [
        { titulo: "Sistema de Ventas Laravel", img: "assets/imgs/software-1.jpg", tag: "Desarrollo" },
        { titulo: "App de Escritorio C#", img: "assets/imgs/software-2.jpg", tag: "Software" },
        { titulo: "Gestor de Base de Datos", img: "assets/imgs/software-3.jpg", tag: "SQL" }
    ],
    diseno: [
        { titulo: "Logotipo Chawis-Tec", img: "assets/imgs/diseno-1.jpg", tag: "Branding" },
        { titulo: "UI Dashboard Restaurante", img: "assets/imgs/diseno-2.jpg", tag: "UI/UX" },
        { titulo: "Avatar Anime Custom", img: "assets/imgs/diseno-3.jpg", tag: "Ilustración" },
        { titulo: "Banner Publicitario", img: "assets/imgs/diseno-4.jpg", tag: "Diseño Gráfico" }
    ]
};

function cargarCategoria(categoria, btn) {
    const contenedor = document.getElementById('tupaTrack');
    if (!contenedor) return;

    // 1. Limpiar contenedor
    contenedor.innerHTML = "";

    // 2. Cambiar estado activo de botones
    document.querySelectorAll('.submenu-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 3. Generar tarjetas
    proyectos[categoria].forEach(proy => {
        // Codificamos los datos para la URL de la página de detalle
        const urlDetalle = `detalle.html?titulo=${encodeURIComponent(proy.titulo)}&img=${encodeURIComponent(proy.img)}`;
        
        const card = `
            <div class="tupa-card">
                <div class="card-content">
                    <div class="card-top">
                        <img src="${proy.img}" alt="${proy.titulo}">
                    </div>
                    <div class="card-bottom">
                        <span class="tupa-tag">${proy.tag}</span>
                        <h3>${proy.titulo}</h3>
                        <a href="${urlDetalle}" class="btn-open">→</a>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += card;
    });

    // Resetear el carrusel a la posición inicial si es necesario
    contenedor.style.transform = "translateX(0%)";
}

// Cargar por defecto al iniciar
document.addEventListener("DOMContentLoaded", () => {
    const btnSoftware = document.querySelector('.submenu-btn');
    if(btnSoftware) cargarCategoria('software', btnSoftware);
});