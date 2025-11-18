import { exportaAHtml } from "../lib/js/exportaAHtml.js"
import { htmlentities } from "../lib/js/htmlentities.js"

/**
 * @param {HTMLUListElement} lista
 * @param {import("./modelo/JUGADOR.js").JUGADOR[]} jugadores
 */
export function renderiza(lista, jugadores) {
 let render = ""
 for (const modelo of jugadores) {
  if (modelo.JUG_ID === undefined)
   throw new Error(`Falta JUG_ID de ${modelo.JUG_NOMBRE}.`)
  const nombre = htmlentities(modelo.JUG_NOMBRE)
  const equipo = htmlentities(modelo.JUG_EQUIPO)
  const posicion = htmlentities(modelo.JUG_POSICION)
  const searchParams = new URLSearchParams([["id", modelo.JUG_ID]])
  const params = htmlentities(searchParams.toString())
  render += /* html */
   `<li class="md-two-line icon">
      <span class="material-symbols-outlined">person</span>
      <a href="navTabFixed.html?${params}"><span class="headline">${nombre}</span></a>
      <span class="supporting">${equipo} - ${posicion}</span>
    </li>`
 }
 lista.innerHTML = render
}

exportaAHtml(renderiza)
