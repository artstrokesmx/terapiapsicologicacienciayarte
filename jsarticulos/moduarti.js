//header
const cabecera = document.querySelector('header');
const barra = document.createElement('nav');
const lista = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li1a = document.createElement('a');
const li2a = document.createElement('a');

li1a.href = "../inicio.html";
li1a.textContent = "Inicio";
li2a.href = "../blog.html";
li2a.textContent = "Blog";

cabecera.appendChild(barra);
barra.appendChild(lista);
lista.appendChild(li1);
lista.appendChild(li2);
li1.appendChild(li1a);
li2.appendChild(li2a);

// Obtener todos los divs compartir
const compartirDivs = document.querySelectorAll('.compartir');

compartirDivs.forEach(compartir => {

    const divCompartirContenido = document.createElement('div');
    divCompartirContenido.classList.add('icocontenido');

    const pcompartir = document.createElement('p');
    pcompartir.textContent = 'Comparte en: ';

    const aFacebook = document.createElement('a');
    aFacebook.href = "";
    aFacebook.target = "_blank";
    aFacebook.innerHTML = '<img src="../media/iconos/facebook.webp" alt="Compartir en Facebook">';
    aFacebook.classList.add('share-facebook');

    const aWhatsapp = document.createElement('a');
    aWhatsapp.href= "";
    aWhatsapp.target = "_blank";
    aWhatsapp.innerHTML = '<img src="../media/iconos/whatsapp.webp" alt="Compartir en WhatsApp">';
    aWhatsapp.classList.add('share-whatsapp');

    divCompartirContenido.appendChild(pcompartir);
    divCompartirContenido.appendChild(aFacebook);
    divCompartirContenido.appendChild(aWhatsapp);

    compartir.appendChild(divCompartirContenido);
});
// Botón de WhatsApp

const contenedoresBotones = document.querySelectorAll('.botonwa'); // Ajusta el selector según tu HTML

contenedoresBotones.forEach(contenedor => {
  const imgwhat = document.createElement('img');
  const awhat = document.createElement('a');
  const pwhat = document.createElement('p');

  imgwhat.src = "../media/iconos/whatsapp.webp";
  imgwhat.alt = "Botón Whatsapp";
  imgwhat.loading = "lazy";
  awhat.href = "https://wa.me/525548549863?text=Hola,%20quiero%20más%20información%20de%20terapia";
  pwhat.textContent = "Agenda una cita";

  awhat.appendChild(imgwhat);
  awhat.appendChild(pwhat);
  contenedor.appendChild(awhat);
});

// Footer
const footer = document.querySelector('footer');
const pfooter = document.createElement('p');
pfooter.textContent = "© 2025 Terapia Psicológica; Ciencia y Arte";
footer.appendChild(pfooter);

window.onload = function() {
    console.log("DOM completamente cargado");

    const metaOgUrl = document.querySelector('meta[property="og:url"]').content;
    const metaOgImage = document.querySelector('meta[property="og:image"]').content;

    compartirDivs.forEach(compartir => {
        const facebookShareLink = compartir.querySelector('.share-facebook');
        if (facebookShareLink) {
            facebookShareLink.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(metaOgUrl)}`;
            console.log("Enlace de Facebook actualizado.",metaOgUrl);
        } else {
            console.log("Enlace de Facebook no encontrado en este div.");
        }

        const whatsappShareLink = compartir.querySelector('.share-whatsapp');
        if (whatsappShareLink) {
            whatsappShareLink.href = `https://wa.me/?text=${encodeURIComponent("¡Echa un vistazo a este artículo!")} %0A${encodeURIComponent(metaOgUrl)} %0A${encodeURIComponent("# ¡No te lo pierdas!")} &image=${encodeURIComponent(metaOgImage)}`;
            console.log("Enlace de WhatsApp actualizado.");
        } else {
            console.log("Enlace de WhatsApp no encontrado en este div.");
        }
    });
};
