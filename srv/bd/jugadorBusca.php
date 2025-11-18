<?php

require_once __DIR__ . "/../../lib/php/selectFirst.php";
require_once __DIR__ . "/Bd.php";
require_once __DIR__ . "/../modelo/TABLA_JUGADOR.php";

/**
 * @return false | array{
 *   JUG_ID: string,
 *   JUG_NOMBRE: string,
 *   JUG_EQUIPO: string,
 *   JUG_POSICION: string,
 *   JUG_MODIFICACION: int,
 *   JUG_ELIMINADO: int
 *  }
 */
function jugadorBusca(string $id): false|array
{
 return selectFirst(
  pdo: Bd::pdo(),
  from: JUGADOR,
  where: [JUG_ID => $id]
 );
}
