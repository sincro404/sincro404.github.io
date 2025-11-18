import { bdEjecuta } from "../../lib/js/bdEjecuta.js"
import { creaIdCliente } from "../../lib/js/creaIdCliente.js"
import { ALMACEN_JUGADOR, Bd } from "./Bd.js"
import { validaNombre } from "../modelo/validaNombre.js"
import { validaEquipo } from "../modelo/validaEquipo.js"
import { validaPosicion } from "../modelo/validaPosicion.js"
import { exportaAHtml } from "../../lib/js/exportaAHtml.js"

/**
 * @param {import("../modelo/JUGADOR.js").JUGADOR} modelo
 */
export async function jugadorAgrega(modelo) {
 validaNombre(modelo.JUG_NOMBRE)
 validaEquipo(modelo.JUG_EQUIPO)
 validaPosicion(modelo.JUG_POSICION)
 modelo.JUG_MODIFICACION = Date.now()
 modelo.JUG_ELIMINADO = 0
 // Genera id único en internet.
 modelo.JUG_ID = creaIdCliente(Date.now().toString())
 return bdEjecuta(Bd, [ALMACEN_JUGADOR], transaccion => {
  const almacenJugador = transaccion.objectStore(ALMACEN_JUGADOR)
  almacenJugador.add(modelo)
 })
}

exportaAHtml(jugadorAgrega)