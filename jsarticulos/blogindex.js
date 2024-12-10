async function obtenerInformacionArticulos() {
    const articulosDiv = document.getElementById('articulos'); 
    const indice = document.getElementById('indice'); 
    const listaIndice = document.createElement('ul');
  
    try {
      const response = await fetch('articulos/');
      const text = await response.text();
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(text, 'text/html');
      const links = htmlDoc.querySelectorAll('a[href$=".html"]'); 1 
  
      links.forEach(async (link) => {
        const articleUrl = link.href;
        const articleResponse = await fetch(articleUrl);
        const articleText = await articleResponse.text();
        const articleDoc = parser.parseFromString(articleText, 'text/html');

        const li = document.createElement('li');
        const a = document.createElement('a');
       
  
        const titulo = articleDoc.querySelector('h1').textContent;
        const idArticulo = titulo.toLowerCase().replace(/ /g, '-')
        const introduccion = articleDoc.querySelector('p').textContent.slice(0, 120) + '...';
        const imagen = articleDoc.querySelector('img').src;

        a.href = `#${idArticulo}`; // Crear un ancla suave
        a.textContent = titulo;
        li.appendChild(a);
        listaIndice.appendChild(li);
  
        const articleDiv = document.createElement('div');
        articleDiv.innerHTML = `
        <article id="${idArticulo}">
            <h2>${titulo}</h2>
            <div class="cajablog">
                <p>${introduccion}</p>
                <img src="${imagen}" alt="${titulo}" loading="lazy">
            </div>
            <a href="${articleUrl}">Leer más</a>
        </article>
        `;
        articulosDiv.appendChild(articleDiv);
      });
      indice.appendChild(listaIndice)
    } catch (error) {
      console.error('Error al obtener información:', error);
    }
  }
  
  obtenerInformacionArticulos();

  