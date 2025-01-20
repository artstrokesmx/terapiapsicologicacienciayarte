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
// const compartirDivs = document.querySelectorAll('.compartir');

// compartirDivs.forEach(compartir => {
//     const pcompartir = document.createElement('p');
//     pcompartir.textContent = 'Comparte en: ';

//     const aFacebook = document.createElement('a');
//     aFacebook.href = "";
//     aFacebook.target = "_blank";
//     aFacebook.innerHTML = '<img src="../media/iconos/facebook.webp" alt="Compartir en Facebook">';
//     aFacebook.classList.add('share-facebook');

//     const aWhatsapp = document.createElement('a');
//     aWhatsapp.href= "";
//     aWhatsapp.target = "_blank";
//     aWhatsapp.innerHTML = '<img src="../media/iconos/whatsapp.webp" alt="Compartir en WhatsApp">';
//     aWhatsapp.classList.add('share-whatsapp');

//     compartir.appendChild(pcompartir);
//     compartir.appendChild(aFacebook);
//     compartir.appendChild(aWhatsapp);
// });

// Botón WhatsApp
const botonwhatsart = document.querySelector('.botonwa');
const imgwhat = document.createElement('img');
const awhat = document.createElement('a');
const pwhat = document.createElement('p');

imgwhat.src = "../media/iconos/whatsapp.webp";
imgwhat.alt = "Botón Whatsapp";
imgwhat.loading = "lazy";
awhat.href = "https://wa.me/525548549863?text=Hola,%20quiero%20%20más%20información%20de%20terapia";
pwhat.textContent = "Agenda una cita";

botonwhatsart.appendChild(awhat);
awhat.appendChild(imgwhat);
awhat.appendChild(pwhat);

// Footer
const footer = document.querySelector('footer');
const pfooter = document.createElement('p');
pfooter.textContent = "© 2024 Terapia Psicológica; Ciencia y Arte";
footer.appendChild(pfooter);

