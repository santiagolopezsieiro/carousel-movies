const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// Event listener para la flecha derecha //

flechaDerecha.addEventListener("click", () => {
    fila.scrollLeft +=fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    
})

// Event listener para la flecha izquierda //

flechaIzquierda.addEventListener("click", () => {
    fila.scrollLeft -=fila.offsetWidth
});

// ------------------- Paginacion -------------------- //

const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');

    if(i == 0){
        indicador.classList.add('activo')
    }
    document.querySelector('.indicadores').appendChild(indicador)
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo')
        e.target.classList.add('activo');
    })
}

