import { bdEjecuta } from "../../lib/js/bdEjecuta.js"
import { exportaAHtml } from "../../lib/js/exportaAHtml.js"
import { validaId } from "../modelo/validaId.js"
import { validaEquipo } from "../modelo/validaEquipo.js"
import { validaPosicion } from "../modelo/validaPosicion.js"
import { validaNombre } from "../modelo/validaNombre.js"
import { ALMACEN_JUGADOR, Bd } from "./Bd.js"
import { jugadorBusca } from "./jugadorBusca.js"

/**
 * @param { import("../modelo/JUGADOR.js").JUGADOR } modelo
 */
export async function jugadorModifica(modelo) {
 validaNombre(modelo.JUG_NOMBRE)
 validaEquipo(modelo.JUG_EQUIPO)
 validaPosicion(modelo.JUG_POSICION)
 if (modelo.JUG_ID === undefined)
  throw new Error(`Falta JUG_ID de ${modelo.JUG_NOMBRE}.`)
 validaId(modelo.JUG_ID)
 const anterior = await jugadorBusca(modelo.JUG_ID)
 if (anterior !== undefined) {
  modelo.JUG_MODIFICACION = Date.now()
  modelo.JUG_ELIMINADO = 0
  return bdEjecuta(Bd, [ALMACEN_JUGADOR], transaccion => {
   const almacenJugador = transaccion.objectStore(ALMACEN_JUGADOR)
   almacenJugador.put(modelo)
  })
 }
}

exportaAHtml(jugadorModifica)