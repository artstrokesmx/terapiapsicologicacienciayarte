const cabecera = document.head

const meta1 = document.createElement('meta')
const meta2 = document.createElement('meta')
const meta3 = document.createElement('meta')
const meta4 = document.createElement('meta')
const meta5 = document.createElement('meta')
const meta6 = document.createElement('meta')
const meta7 = document.createElement('meta')
const meta8 = document.createElement('meta')
const link1 = document.createElement('link')
const link2 = document.createElement('link')

meta1.charset = "UTF-8"
meta2.name = "viewport"
meta2.content ="width=device-width, initial-scale=1.0"
meta3.property ="og:type"
meta3.content = "article"
meta4.property ="og:site_name"
meta4.content = "Psicologo Arturo"
meta5.property ="og:locale"
meta5.content = "es_MX"
meta6.property ="og:article:author"
meta6.content = "Arturo Miranda"
meta7.property ="og:article:section"
meta7.content = "articulos"
meta8.property ="fb:app_id"
meta8.content = "1793839234687499"


link1.rel = "shortcut icon"
link1.href = "https://artstrokesmx.github.io/terapiapsicologicacienciayarte/media/imagen/logopca.png"
link1.type = "image/x-icon"
link2.rel = "stylesheet"
link2.href = "../estilos.css"

cabecera.appendChild(meta1)
cabecera.appendChild(meta2)
cabecera.appendChild(meta3)
cabecera.appendChild(meta4)
cabecera.appendChild(meta5)
cabecera.appendChild(meta6)
cabecera.appendChild(meta7)
cabecera.appendChild(meta8)

cabecera.appendChild(link1)
cabecera.appendChild(link2)