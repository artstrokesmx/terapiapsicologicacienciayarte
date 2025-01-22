    const tecnicas = [
      {
        nombre: "Respiraciones",
        temas: ["Ansiedad", "Estrés"],
        descripcion: "La respiración es el punto clave en el control de la ansiedad...",
        materiales: ["Ninguno"],
        instrucciones: [
          "Buscar un sitio relajado, en el que puedas sentarte o recostarte.",
          "Asegura no cruzar ninguna extremidad.",
          "Inhala profundamente, debes de sentir que el pulmón llega a su máxima capacidad...",
        ],
      },
      {
        nombre: "Relajación muscular",
        temas: ["Ansiedad", "Depresión"],
        descripcion: "La relajación muscular sincroniza el cuerpo con la mente...",
        materiales: ["Ninguno"],
        instrucciones: [
          "Buscar un sitio relajado, en el que puedas sentarte o recostarte.",
          "Inhala profundamente, debes de sentir que el pulmón llega a su máxima capacidad...",
        ],
      },
      {
        nombre: "Relajación con grito",
        temas: ["Ansiedad", "Depresión"],
        descripcion: "El grito ayuda a liberar emociones contenidas...",
        materiales: [
            "1 almohada",
            "1 cuaderno",
            "1 lapiz"
        ],
        instrucciones: [
          "Realiza primero cualquiera de los siguientes ejercicios.",
          "Coloque la almohada en su boca tapando la salida del aire.",
          "Grite en la almohada. Asegure que el grito venga desde el estómago...",
        ],
      },
    ];

    document.getElementById("busqueda").addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const resultados = document.getElementById("resultados");
      resultados.innerHTML = ""; // Limpiar resultados previos

      const tecnicasFiltradas = tecnicas.filter(tecnica =>
        tecnica.temas.some(tema => tema.toLowerCase().includes(query))
      );

      tecnicasFiltradas.forEach(tecnica => {
        const tecnicaDiv = document.createElement("div");
        tecnicaDiv.classList.add("tecnica");
        tecnicaDiv.innerHTML = `<h4>${tecnica.nombre}</h4>`;

        const detalleDiv = document.createElement("div");
        detalleDiv.classList.add("detalle");
        detalleDiv.innerHTML = `
          <p><strong>Descripción:</strong> ${tecnica.descripcion}</p>
          <p><strong>Materiales:</strong> <ul>${tecnica.materiales.map(mat => `<li>${mat}</li>`).join("")}</ul></p>
          <p><strong>Instrucciones:</strong> <ol>${tecnica.instrucciones.map(instr => `<li>${instr}</li>`).join("")}</ol></p>
        `;

        tecnicaDiv.appendChild(detalleDiv);

        // Evento para desplegar/ocultar detalles al hacer clic
        tecnicaDiv.querySelector("h4").addEventListener("click", () => {
          detalleDiv.style.display = detalleDiv.style.display === "none" ? "block" : "none";
        });

        detalleDiv.style.display = "none";

        resultados.appendChild(tecnicaDiv);
      });
    });
