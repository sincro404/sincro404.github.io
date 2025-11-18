<?php

require_once __DIR__ . "/../../lib/php/validaNombre.php";
require_once __DIR__ . "/../../lib/php/validaEquipo.php";
require_once __DIR__ . "/../../lib/php/validaPosicion.php";
require_once __DIR__ . "/../../lib/php/update.php";
require_once __DIR__ . "/Bd.php";
require_once __DIR__ . "/../modelo/TABLA_JUGADOR.php";
require_once __DIR__ . "/../modelo/validaId.php";

/**
 * @param array{
 *   JUG_ID: string,
 *   JUG_NOMBRE: string,
 *   JUG_EQUIPO: string,
 *   JUG_POSICION: string,
 *   JUG_MODIFICACION: int,
 *   JUG_ELIMINADO: int
 *  } $modelo
 */
function jugadorModifica(array $modelo)
{
 validaId($modelo[JUG_ID]);
 validaNombre($modelo[JUG_NOMBRE]);
 validaEquipo($modelo[JUG_EQUIPO]);
 validaPosicion($modelo[JUG_POSICION]);
 update(
  pdo: Bd::pdo(),
  table: JUGADOR,
  set: $modelo,
  where: [JUG_ID => $modelo[JUG_ID]]
 );
}
