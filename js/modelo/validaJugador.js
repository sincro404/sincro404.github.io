/**
 * @param { any } objeto
 * @returns {import("./JUGADOR.js").JUGADOR}
 */
export function validaJugador(objeto) {

 if (typeof objeto.JUG_ID !== "string")
  throw new Error("El id debe ser texto.")

 if (typeof objeto.JUG_NOMBRE !== "string")
  throw new Error("El nombre debe ser texto.")

 if (typeof objeto.JUG_POSICION !== "string")
  throw new Error("La posición debe ser texto.")

 if (typeof objeto.JUG_EQUIPO !== "string")
  throw new Error("El equipo debe ser texto.")

 if (typeof objeto.JUG_MODIFICACION !== "number")
  throw new Error("El campo modificacion debe ser número.")

 if (typeof objeto.JUG_ELIMINADO !== "number")
  throw new Error("El campo eliminado debe ser número.")

 return objeto

}