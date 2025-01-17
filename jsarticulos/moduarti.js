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

//comnpoartir
 
const compartir = document.querySelector('.compartir');

const pcompartir = document.createElement('p')

pcompartir.textContent = 'Comparte en: '

const aFacebook = document.createElement('a');
aFacebook.href = "";
aFacebook.target = "_blank";
aFacebook.innerHTML = '<img src="../media/iconos/facebook.webp" alt="Compartir en Facebook">';
aFacebook.classList.add('share-facebook');



const aWhatsapp = document.createElement('a')
aWhatsapp.href= "";
aWhatsapp.target = "_blank"
aWhatsapp.innerHTML = '<img src="../media/iconos/whatsapp.webp" alt= "Compartir en whatsapp">';
aWhatsapp.classList.add('share-whatsapp');



//boton whats
const botonwhatsart = document.querySelector('.botonwa')

const imgwhat = document.createElement('img')
const awhat = document.createElement('a')
const pwhat = document.createElement('p')

imgwhat.src = "../media/iconos/whatsapp.webp"
imgwhat.alt = "Botón Whatsapp"
imgwhat.loading = "lazy"
awhat.href = "https://wa.me/525548549863?text=Hola,%20quiero%20%20más%20información%20de%20terapia"
pwhat.textContent = "Agenda una cita"


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

compartir.appendChild(pcompartir)
compartir.appendChild(aFacebook)
compartir.appendChild(aWhatsapp)

botonwhatsart.appendChild(awhat)
awhat.appendChild(imgwhat)
awhat.appendChild(pwhat)

footer.appendChild(pfooter)



// Función para actualizar los enlaces de compartir
// function actualizarEnlacesCompartir() {
//     const divsCompartir = document.querySelectorAll('.compartir');
//     console.log('Elementos:',divsCompartir)
  
//     divsCompartir.forEach(div => {
//       const urlActual = window.location.href;
//       const enlaces = div.querySelectorAll('a');
//       console.log('enlaces encontrados:',enlaces)
  
//       enlaces.forEach(enlace => {
//         // Actualizar el atributo href de cada enlace
//         enlace.href = enlace.href.replace(/https:\/\/artstrokesmx\.github\.io\/terapiapsicologicacienciayarte\/articulos\/ansiedad\.html/g, urlActual);
//         console.log('Enlaces actualizados:',enlace)
//         console.log('Nuevo href: ',enlace.href)
//       });
//     });
//   }
  
//   // Ejecutar la función al cargar la página
//   window.onload = actualizarEnlacesCompartir;

window.onload = function() {
    console.log("DOM completamente cargado");

    const metaOgUrl = document.querySelector('meta[property="og:url"]').content;
    const metaOgImage = document.querySelector('meta[property="og:image"]').content;

    // Actualizar el enlace de compartir en Facebook
    const facebookShareLink = compartir.querySelector('.share-facebook');
    if (facebookShareLink) {
        facebookShareLink.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(metaOgUrl)}`;
        console.log("Enlace de Facebook actualizado.");
    } else {
        console.log("Enlace de Facebook no encontrado.");
    }

    // Actualizar el enlace de compartir en WhatsApp
    const whatsappShareLink = compartir.querySelector('.share-whatsapp');
    if (whatsappShareLink) {
        whatsappShareLink.href = `https://wa.me/?text=${encodeURIComponent("¡Echa un vistazo a este artículo!")} %0A${encodeURIComponent(metaOgUrl)} %0A${encodeURIComponent("# ¡No te lo pierdas!")} &image=${encodeURIComponent(metaOgImage)}`;
        console.log("Enlace de WhatsApp actualizado.");
    } else {
        console.log("Enlace de WhatsApp no encontrado.");
    }
};

  