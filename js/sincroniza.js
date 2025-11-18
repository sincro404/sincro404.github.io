import { enviaJson } from "../lib/js/enviaJson.js"
import { exportaAHtml } from "../lib/js/exportaAHtml.js"
import { muestraError } from "../lib/js/muestraError.js"
import { jugadorConsultaTodos } from "./bd/jugadorConsultaTodos.js"
import { jugadoresReemplaza } from "./bd/jugadoresReemplaza.js"
import { esperaUnPocoYSincroniza } from "./esperaUnPocoYSincroniza.js"
import { validaJugadores } from "./modelo/validaJugadores.js"
import { renderiza } from "./renderiza.js"

/**
 * @param {HTMLUListElement} lista
 */
export async function sincroniza(lista) {
 try {
  if (navigator.onLine) {
   const todos = await jugadorConsultaTodos()
   const respuesta = await enviaJson("srv/sincroniza.php", todos)
   const jugadores = validaJugadores(respuesta.body)
   await jugadoresReemplaza(jugadores)
   renderiza(lista, jugadores)
  }
 } catch (error) {
  muestraError(error)
 }
 esperaUnPocoYSincroniza(lista)

}

exportaAHtml(sincroniza)