const cabecera = document.querySelector('header')
const compartir = document.querySelector('.compartir')
const botonwhatsart = document.querySelector('.botonwa')
const footer = document.querySelector('footer')

const barra = document.createElement('nav')
const lista = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li1a = document.createElement('a')
const li2a = document.createElement('a')

const p1 = document.createElement('p')
const p2 = document.createElement('p')
// const ac = document.createElement('a')
const divaim = document.createElement('span')
const imgac = document.createElement('img')

const botwa = document.createElement('button')
const imgwhat = document.createElement('img')
const awhat = document.createElement('a')

const pfooter = document.createElement('p')

li1a.href = "../inicio.html"
li1a.textContent = "Inicio"
li2a.href = "../blog.html"
li2a.textContent = "Blog"

p1.textContent = "¿Te gustó este artículo?"
p2.textContent = "¡Compártelo con tus amigos!"
imgac.src = "../media/iconos/facebook.png"
imgac.alt = "Compartir en Facebook"
imgac.className = "icof"

imgwhat.src = "../media/iconos/whatsapp.png"
imgwhat.alt = "Botón Whatsapp"
imgwhat.loading = "lazy"
awhat.href = "https://wa.me/525548549863?text=Hola,%20quiero%20%20más%20información%20de%20terapia"
awhat.textContent = "Agenda una cita con nosotros"

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


botonwhatsart.appendChild(botwa)
botwa.appendChild(imgwhat)
botwa.appendChild(awhat)

footer.appendChild(pfooter)

