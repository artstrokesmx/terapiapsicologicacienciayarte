document.addEventListener("DOMContentLoaded", async () => {
    const articulosDiv = document.getElementById('articulos');
    const indice = document.getElementById('indice');
    const listaIndice = document.createElement('ul');

    try {
        const response = await fetch('./artijson/articulos.json');
        const articles = await response.json();

        // Obtener temas únicos
        const temasUnicos = new Set();
        articles.forEach(article => {
            article.tema.forEach(t => temasUnicos.add(t));
        });

        // Crear índice con temas
        temasUnicos.forEach(tema => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#";
            a.textContent = tema;
            a.dataset.tema = tema; // Guardar el tema en un atributo
            li.appendChild(a);
            listaIndice.appendChild(li);
        });

        indice.appendChild(listaIndice);

        // Función para mostrar los artículos (filtrados o todos)
        function mostrarArticulos(filtroTema = null) {
            articulosDiv.innerHTML = ""; // Limpiar contenido antes de actualizar

            articles.forEach(article => {
                if (!filtroTema || article.tema.includes(filtroTema)) {
                    const articleDiv = document.createElement("div");
                    articleDiv.innerHTML = `
                        <article class="articleblog">
                            <h2>${article.title}</h2>
                            <div class="cajablog">
                                <p>${article.description}</p>
                                <img src="${article.image}" alt="${article.title}" loading="lazy">
                            </div>
                            <a href="${article.link}">Leer más</a>
                        </article>
                    `;
                    articulosDiv.appendChild(articleDiv);
                }
            });
        }

        // Mostrar todos los artículos al inicio
        mostrarArticulos();

        // Manejar clic en temas
        listaIndice.addEventListener("click", (event) => {
            event.preventDefault();
            if (event.target.tagName === "A") {
                const temaSeleccionado = event.target.dataset.tema;
                mostrarArticulos(temaSeleccionado);
            }
        });

    } catch (error) {
        console.error("Error al obtener los artículos:", error);
    }
});
