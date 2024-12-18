document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Cargar el archivo JSON con los datos de los artículos
        const response = await fetch("../artijson/articulos.json");
        const articles = await response.json();

        // Obtener el título del artículo actual
        const currentTitle = document.querySelector("h1").textContent;

        // Filtrar para excluir el artículo actual de las recomendaciones
        const recommendations = articles.filter(article => article.title !== currentTitle);

        if (recommendations.length > 0) {
            // Seleccionar tres artículos aleatorios para recomendar
            const selectedRecommendations = recommendations
                .sort(() => 0.5 - Math.random()) // Mezclar aleatoriamente
                .slice(0, 3); // Seleccionar los tres primeros

            // Crear el contenedor de recomendaciones
            const recommendationDiv = document.createElement("div");
            recommendationDiv.className = "recomendaciones";
            recommendationDiv.innerHTML = `<h3>Te puede interesar:</h3>`;

            // Generar las recomendaciones
            selectedRecommendations.forEach(article => {

                // Eliminar 'articulos/' si ya está presente al principio
                article.link = article.link.replace(/^articulos\//, '');

                // Ahora agregar 'articulos/' al principio
                //article.link = 'articulos/' + article.link;
                const articleDiv = document.createElement("div");
                articleDiv.className = "recomendado";
                articleDiv.innerHTML = `
                    <img src="${article.image}" alt="${article.title}" loading="lazy">
                    <div>
                        <h4>${article.title}</h4>
                        <p>${article.description}</p>
                        <a href="${article.link}">Leer más</a>
                    </div>
                `;
                recommendationDiv.appendChild(articleDiv);
            });

            // Insertar las recomendaciones al final del contenido del artículo
            const articleContainer = document.getElementById("recomendaciones");
            articleContainer.appendChild(recommendationDiv);
        }
    } catch (error) {
        console.error("Error al cargar las recomendaciones:", error);
    }
});

