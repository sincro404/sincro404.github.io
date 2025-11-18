import { validaJugador } from "./validaJugador.js"

/**
 * @param { any } objetos
 * @returns {import("./JUGADOR.js").JUGADOR[]}
 */
export function validaJugadores(objetos) {
 if (!Array.isArray(objetos))
  throw new Error("no se recibió un arreglo.")
 /**
  * @type {import("./JUGADOR.js").JUGADOR[]}
  */
 const arreglo = []
 for (const objeto of objetos) {
  arreglo.push(validaJugador(objeto))
 }
 return arreglo
}