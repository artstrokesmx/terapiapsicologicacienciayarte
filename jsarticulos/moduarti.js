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


//Compartir
const compartir = document.querySelector('.compartir')


const p1 = document.createElement('p')
const p2 = document.createElement('p')
const divaim = document.createElement('span')
const imgac = document.createElement('img')

p1.textContent = "¿Te gustó este artículo?"
p2.textContent = "¡Compártelo con tus amigos!"
imgac.src = "../media/iconos/facebook.png"
imgac.alt = "Compartir en Facebook"
imgac.className = "icof"

//sugerencia

const sugerencia = document.getElementById('sugerencia')

const cuadsuger1 = document.createElement('a')
const h3suger1 = document.createElement('h3')
const texsuger1 = document.createElement('p')
const imgsuger1 = document.createElement('img')

h3suger1.textContent = "Ansiedad"
texsuger1.textContent = "Veremos como quitar la ansiedad"
imgsuger1.src = "https://images.pexels.com/photos/5542968/pexels-photo-5542968.jpeg"
cuadsuger1.href = "https://artstrokesmx.github.io/terapiapsicologicacienciayarte/articulos/ansiedad.html"
/////


//boton whats
const botonwhatsart = document.querySelector('.botonwa')

const botwa = document.createElement('button')
const imgwhat = document.createElement('img')
const awhat = document.createElement('a')

imgwhat.src = "../media/iconos/whatsapp.png"
imgwhat.alt = "Botón Whatsapp"
imgwhat.loading = "lazy"
awhat.href = "https://wa.me/525548549863?text=Hola,%20quiero%20%20más%20información%20de%20terapia"
awhat.textContent = "Agenda una cita con nosotros"

//Footer
const footer = document.querySelector('footer')
const pfooter = document.createElement('p')

pfooter.textContent= "© 2024 Terapia Psicológica; Ciencia y Arte"


cabecera.appendChild(barra)
barra.appendChild(lista)
lista.appendChild(li1)
lista.appendChild(li2)
li1.appendChild(li1a)
li2.appendChild(li2a)

compartir.appendChild(imgac)
compartir.appendChild(p1)
compartir.appendChild(p2)
compartir.appendChild(divaim)

sugerencia.appendChild(cuadsuger1)
cuadsuger1.appendChild(h3suger1)
cuadsuger1.appendChild(texsuger1)
cuadsuger1.appendChild(imgsuger1)

botonwhatsart.appendChild(botwa)
botwa.appendChild(imgwhat)
botwa.appendChild(awhat)

footer.appendChild(pfooter)

