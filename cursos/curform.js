//header
const cabecera = document.querySelector('header')

const barra = document.createElement('nav')
const lista = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li1a = document.createElement('a')
const li2a = document.createElement('a')

li1a.href = "../inicio.html"
li1a.textContent = "Inicio"
li2a.href = "../blog.html"
li2a.textContent = "Blog"

//Catalogo de cursos

// Suponiendo que tienes tu array de cursos en un archivo llamado cursos.js
import cursos from './elencocursi.js'; // Importa el array de cursos

const catalogoCursos = document.querySelector('.catalogoCursos');

cursos.forEach(curso => {
  const cursoElement = document.createElement('div');
  cursoElement.classList.add('curso');

  cursoElement.innerHTML = `
    <h2>${curso.titulo}</h2>
    <figure>
      <img src="${curso.imagen}" alt="${curso.titulo}">
      <figcaption>${curso.fuenteImagen}</figcaption>
    </figure>
    <p>${curso.descripcion}</p>

    <div class="temario">
                    <h3>Temario</h3>
                        ${curso.temario}
                </div>
    `;

  catalogoCursos.appendChild(cursoElement);
});


//Footer
const footer = document.querySelector('footer')
const pfooter = document.createElement('p')

pfooter.textContent = "© 2024 Terapia Psicológica; Ciencia y Arte"


cabecera.appendChild(barra)
barra.appendChild(lista)
lista.appendChild(li1)
lista.appendChild(li2)
li1.appendChild(li1a)
li2.appendChild(li2a)

footer.appendChild(pfooter)




/* <div class="curso">
                <h2>Manejo de la Ansiedad</h2>
                <figure>
                    <img src="https://images.pexels.com/photos/3656855/pexels-photo-3656855.jpeg" alt="Curso manejo de la ansiedad" loading="lazy">
                    <figcaption>Foto de Suzy Hazelwood de Pexels: https://www.pexels.com/es-es/foto/azulejos-de-madera-blancos-y-marrones-3656855/</figcaption>
                </figure>
                <h3>Sinopsis</h3>
                <p>En este curso revisamos algunas de las causas de la ansiedad y de qué manera las podemos contrarestar</p>
                <div class="temario">
                    <h3>Temario</h3>
                    <ol>
                        <li>¿Qué es la ansiedad?</li>
                        <li>¿Cómo se cuando es la ansiedad</li>
                        <li>Técnicas de respiración.</li>
                        <li>Importancia de la visualización</li>
                        <li>Tecnicas de visualización</li>
                    </ol>
                </div>
                <p>Impartido por: <b>Psic. Arturo Miranda</b></p>
                <p>Duración 45 min.</p>
            </div> */