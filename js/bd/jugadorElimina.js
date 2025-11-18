import { bdEjecuta } from "../../lib/js/bdEjecuta.js"
import { exportaAHtml } from "../../lib/js/exportaAHtml.js"
import { ALMACEN_JUGADOR, Bd } from "./Bd.js"
import { jugadorBusca } from "./jugadorBusca.js"

/**
 * @param { string } id
 */
export async function jugadorElimina(id) {
 const modelo = await jugadorBusca(id)
 if (modelo !== undefined) {
  modelo.JUG_MODIFICACION = Date.now()
  modelo.JUG_ELIMINADO = 1
  return bdEjecuta(Bd, [ALMACEN_JUGADOR], transaccion => {
   const almacenJugador = transaccion.objectStore(ALMACEN_JUGADOR)
   almacenJugador.put(modelo)
  })
 }
}

exportaAHtml(jugadorElimina)