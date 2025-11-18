import { bdConsulta } from "../../lib/js/bdConsulta.js"
import { exportaAHtml } from "../../lib/js/exportaAHtml.js"
import { validaJugador } from "../modelo/validaJugador.js"
import { ALMACEN_JUGADOR, Bd } from "./Bd.js"

/**
 * @param {string} id
 */
export async function jugadorBusca(id) {

 return bdConsulta(Bd, [ALMACEN_JUGADOR],
  /**
   * @param {(resultado: import("../modelo/JUGADOR.js").JUGADOR|undefined)
   *                                                            => any} resolve 
   */
  (transaccion, resolve) => {

   /* Pide el primer objeto de ALMACEN_JUGADOR que tenga como llave
    * primaria el valor del parámetro id. */
   const consulta = transaccion.objectStore(ALMACEN_JUGADOR).get(id)

   // onsuccess se invoca solo una vez, devolviendo el objeto solicitado.
   consulta.onsuccess = () => {
    /* Se recupera el objeto solicitado usando
     *  consulta.result
     * Si el objeto no se encuentra se recupera undefined. */
    const objeto = consulta.result
    if (objeto !== undefined) {
     const modelo = validaJugador(objeto)
     if (modelo.JUG_ELIMINADO === 0) {
      resolve(modelo)
      return
     }
    }
    resolve(undefined)

   }

  })

}

exportaAHtml(jugadorBusca)