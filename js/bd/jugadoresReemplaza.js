import { bdEjecuta } from "../../lib/js/bdEjecuta.js"
import { ALMACEN_JUGADOR, Bd } from "./Bd.js"

/**
 * Borra el contenido del almacén JUGADOR y guarda nuevos jugadores.
 * @param {import("../modelo/JUGADOR.js").JUGADOR[]} nuevosJugadores
 */
export async function jugadoresReemplaza(nuevosJugadores) {
 return bdEjecuta(Bd, [ALMACEN_JUGADOR], transaccion => {
  const almacenJugador = transaccion.objectStore(ALMACEN_JUGADOR)
  almacenJugador.clear()
  for (const objeto of nuevosJugadores) {
   almacenJugador.add(objeto)
  }
 })
}