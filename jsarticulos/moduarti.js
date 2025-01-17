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

p1.textContent = ""
p2.textContent = ""
imgac.src = "../media/iconos/facebook.webp"
imgac.alt = "Compartir en Facebook"
imgac.className = "icof"

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


compartir.appendChild(p1)
compartir.appendChild(imgac)
compartir.appendChild(p2)
compartir.appendChild(divaim)



botonwhatsart.appendChild(awhat)
awhat.appendChild(imgwhat)
awhat.appendChild(pwhat)

footer.appendChild(pfooter)

