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
