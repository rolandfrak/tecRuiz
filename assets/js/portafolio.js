// ===============================
// CATEGORÍAS DINÁMICAS
// ===============================

const categorias = {
    software: [
        {
            title: "Administración de Usuarios - TUPA",
            img: "GESTION DE USUARIOS TUPA.png",
            tag: "SOFTWARE"
        },
        {
            title: "Gestión de Recursos Institucionales",
            img: "GESTION DE RECURSOS TUPA.png",
            tag: "SOFTWARE"
        },
        {
            title: "Módulo de Ventas y Atención",
            img: "venta-Tupa.jpg",
            tag: "SOFTWARE"
        },
        {
            title: "Gestión de Clientes TUPA",
            img: "GESTION DE CLIENTES TUPA.png",
            tag: "SOFTWARE"
        },
        {
            title: "Boletería de Recursos TUPA",
            img: "BOLETERIA DE RECURSOS TUPA.png",
            tag: "SOFTWARE"
        },
        {
            title: "Panel de Inicio Sistema",
            img: "Inicio-Tupa.jpg",
            tag: "SOFTWARE"
        }
    ],

    diseno: [
        {
            title: "Poster DJ ELECTRO",
            img: "Electro-1.jpg",
            tag: "DISEÑO"
        },
        {
            title: "Poster DJ ELECTRO",
            img: "Electro-2.jpg",
            tag: "DISEÑO"
        },
        {
            title: "Diseño Publicitario 3",
            img: "inicio-Tupa.jpg",
            tag: "DISEÑO"
        },
        {
            title: "Diseño Publicitario 4",
            img: "diseno-4.jpg",
            tag: "DISEÑO"
        }
    ]
};

// ===============================
// VARIABLES
// ===============================

const track = document.getElementById('tupaTrack');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

let categoriaActual = 'software';
let currentIndex = 0;

// ===============================
// CREAR CARRUSEL
// ===============================

function buildCarousel() {

    const proyectos = categorias[categoriaActual];

    track.innerHTML = '';

    proyectos.forEach((proj) => {

        const card = document.createElement('div');

        card.className = 'tupa-card';

        card.innerHTML = `
            <div class="card-content">

                <div class="card-top">
                    <img src="assets/imgs/portf/${proj.img}" alt="${proj.title}">
                    <img src="assets/imgs/diseño/${proj.img}" alt="${proj.title}">
                </div>

                <div class="card-bottom">

                    <span class="tupa-tag">${proj.tag}</span>

                    <h3>${proj.title}</h3>

                    <button 
                        class="btn-open"
                        onclick="irADetalle(
                            '${proj.title}',
                            'assets/imgs/portf/${proj.img}'
                        )">
                        ↗
                    </button>

                </div>

            </div>
        `;

        track.appendChild(card);

    });

    updateSlider();
}

// ===============================
// CAMBIAR CATEGORÍA
// ===============================

function cargarCategoria(categoria, boton) {

    categoriaActual = categoria;

    currentIndex = 0;

    // QUITAR ACTIVE A TODOS
    document.querySelectorAll('.submenu-btn')
        .forEach(btn => btn.classList.remove('active'));

    // AGREGAR ACTIVE AL ACTUAL
    boton.classList.add('active');

    // EFECTO FADE
    track.style.opacity = 0;

    setTimeout(() => {

        buildCarousel();

        track.style.opacity = 1;

    }, 200);
}

// ===============================
// BOTONES NEXT Y PREV
// ===============================

function checkButtons() {

    const proyectos = categorias[categoriaActual];

    const cardsInView = window.innerWidth > 800 ? 2 : 1;

    const maxIndex = proyectos.length - cardsInView;

    btnPrev.classList.toggle('hidden', currentIndex <= 0);

    btnNext.classList.toggle('hidden', currentIndex >= maxIndex);

}

function updateSlider() {

    const card = document.querySelector('.tupa-card');

    if (!card) return;

    const cardWidth = card.offsetWidth;

    track.style.transform =
        `translateX(-${currentIndex * cardWidth}px)`;

    checkButtons();
}

// ===============================
// NAVEGACIÓN
// ===============================

btnNext.onclick = () => {

    const proyectos = categorias[categoriaActual];

    const cardsInView = window.innerWidth > 800 ? 2 : 1;

    if (currentIndex < proyectos.length - cardsInView) {

        currentIndex++;

        updateSlider();

    }

};

btnPrev.onclick = () => {

    if (currentIndex > 0) {

        currentIndex--;

        updateSlider();

    }

};

// ===============================
// DETALLE
// ===============================

function irADetalle(titulo, imagen) {

    const tituloCodificado = encodeURIComponent(titulo);

    const imagenCodificada = encodeURIComponent(imagen);

    window.location.href =
        `foto-info.html?titulo=${tituloCodificado}&img=${imagenCodificada}`;

}

// ===============================
// RESPONSIVE
// ===============================

window.onresize = updateSlider;

// ===============================
// INICIAR
// ===============================

buildCarousel();


