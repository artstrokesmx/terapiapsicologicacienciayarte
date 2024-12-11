// async function obtenerInformacionArticulos() {
//     const articulosDiv = document.getElementById('articulos'); 
//     const indice = document.getElementById('indice'); 
//     const listaIndice = document.createElement('ul');
  
//     try {
//       const response = await fetch('articulos/');
//       const text = await response.text();
//       const parser = new DOMParser();
//       const htmlDoc = parser.parseFromString(text, 'text/html');
//       const links = htmlDoc.querySelectorAll('a[href$=".html"]'); 1 
  
//       links.forEach(async (link) => {
//         const articleUrl = link.href;
//         const articleResponse = await fetch(articleUrl);
//         const articleText = await articleResponse.text();
//         const articleDoc = parser.parseFromString(articleText, 'text/html');

//         const li = document.createElement('li');
//         const a = document.createElement('a');
       
  
//         const titulo = articleDoc.querySelector('h1').textContent;
//         const idArticulo = titulo.toLowerCase().replace(/ /g, '-')
//         const introduccion = articleDoc.querySelector('p').textContent.slice(0, 120) + '...';
//         const imagen = articleDoc.querySelector('img').src;

//         a.href = `#${idArticulo}`; // Crear un ancla suave
//         a.textContent = titulo;
//         li.appendChild(a);
//         listaIndice.appendChild(li);
  
//         const articleDiv = document.createElement('div');
//         articleDiv.innerHTML = `
//         <article id="${idArticulo}">
//             <h2>${titulo}</h2>
//             <div class="cajablog">
//                 <p>${introduccion}</p>
//                 <img src="${imagen}" alt="${titulo}" loading="lazy">
//             </div>
//             <a href="${articleUrl}">Leer más</a>
//         </article>
//         `;
//         articulosDiv.appendChild(articleDiv);
//       });
//       indice.appendChild(listaIndice)
//     } catch (error) {
//       console.error('Error al obtener información:', error);
//     }
//   }
  
//   obtenerInformacionArticulos();

// Archivo: jsarticulos/generateBlogIndex.js

// document.addEventListener("DOMContentLoaded", async () => {
//   const blogContainer = document.getElementById("articulos");

//   try {
//       // Llama al servidor o usa un método para obtener los archivos dentro de la carpeta "artículos"
//       const articles = await fetchArticles();

//       for (const article of articles) {
//           // Crea un contenedor para cada artículo
//           const articleElement = document.createElement("article");

//           // Título del artículo
//           const titleElement = document.createElement("h2");
//           titleElement.textContent = article.title;

//           // Resumen del artículo (primeros 120 caracteres)
//           const summaryElement = document.createElement("p");
//           summaryElement.textContent = article.description;

//           // Imagen del artículo
//           const imgElement = document.createElement("img");
//           imgElement.src = article.image;
//           imgElement.alt = article.title;
//           imgElement.loading = "lazy";

//           // Enlace al artículo
//           const linkElement = document.createElement("a");
//           linkElement.href = article.link;
//           linkElement.textContent = "Leer más";

//           // Añade los elementos al contenedor del artículo
//           articleElement.appendChild(titleElement);
//           articleElement.appendChild(imgElement);
//           articleElement.appendChild(summaryElement);
//           articleElement.appendChild(linkElement);

//           // Añade el artículo al contenedor principal
//           blogContainer.appendChild(articleElement);
//       }
//   } catch (error) {
//       console.error("Error al generar el índice del blog:", error);
//   }
// });

// // Simulación de fetch para obtener los metadatos de los artículos
// async function fetchArticles() {
//   // Lista simulada. En producción, podrías obtenerla desde un backend o un archivo JSON.
//   return [
//       {
//           title: "¿Cómo manejar la ansiedad en situaciones cotidianas?",
//           description: "La ansiedad es un tema que cada día convive con nosotros, sea con presión o con depresión...",
//           image: "https://images.pexels.com/photos/5542968/pexels-photo-5542968.jpeg",
//           link: "articulos/ansiedad.html"
//       },
//       // Agrega más artículos aquí.
//   ];
// }


document.addEventListener("DOMContentLoaded", async () => {
  const articulosDiv = document.getElementById('articulos');
  const indice = document.getElementById('indice');
  const listaIndice = document.createElement('ul');

  try {
      const response = await fetch('./artijson/articulos.json');
      const articles = await response.json();

      articles.forEach(article => {
          const idArticulo = article.title.toLowerCase().replace(/ /g, '-');
          
          // Índice
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = `#${idArticulo}`;
          a.textContent = article.title;
          li.appendChild(a);
          listaIndice.appendChild(li);

          // Artículo
          const articleDiv = document.createElement("div");
          articleDiv.innerHTML = `
              <article id="${idArticulo}">
                  <h2>${article.title}</h2>
                  <div class="cajablog">
                      <p>${article.description}</p>
                      <img src="${article.image}" alt="${article.title}" loading="lazy">
                  </div>
                  <a href="${article.link}">Leer más</a>
              </article>
          `;
          articulosDiv.appendChild(articleDiv);
      });

      indice.appendChild(listaIndice);
  } catch (error) {
      console.error("Error al obtener los artículos:", error);
  }
});
