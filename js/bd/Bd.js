export const ALMACEN_JUGADOR = "JUGADOR"
export const JUG_ID = "JUG_ID"
export const INDICE_NOMBRE = "INDICE_NOMBRE"
export const JUG_NOMBRE = "JUG_NOMBRE"
export const JUG_EQUIPO = "JUG_EQUIPO"
export const JUG_POSICION = "JUG_POSICION"
const BD_NOMBRE = "sincronizacion"
const BD_VERSION = 1

/** @type { Promise<IDBDatabase> } */
export const Bd = new Promise((resolve, reject) => {

 /* Se solicita abrir la base de datos, indicando nombre y
  * número de versión. */
 const solicitud = indexedDB.open(BD_NOMBRE, BD_VERSION)

 // Si se presenta un error, rechaza la promesa.
 solicitud.onerror = () => reject(solicitud.error)

 // Si se abre con éxito, devuelve una conexión a la base de datos.
 solicitud.onsuccess = () => resolve(solicitud.result)

 // Si es necesario, se inicia una transacción para cambio de versión.
 solicitud.onupgradeneeded = () => {

  const bd = solicitud.result

  // Como hay cambio de versión, borra el almacén si es que existe.
  if (bd.objectStoreNames.contains(ALMACEN_JUGADOR)) {
   bd.deleteObjectStore(ALMACEN_JUGADOR)
  }

  // Crea el almacén "jugador" con el campo llave "JUG_ID".
  const almacenJugador =
   bd.createObjectStore(ALMACEN_JUGADOR, { keyPath: JUG_ID })

  // Crea un índice ordenado por el campo "JUG_NOMBRE" que no acepta duplicados.
  almacenJugador.createIndex(INDICE_NOMBRE, "JUG_NOMBRE")
 }

})