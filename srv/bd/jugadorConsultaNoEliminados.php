<?php

require_once __DIR__ . "/../../lib/php/select.php";
require_once __DIR__ . "/Bd.php";
require_once __DIR__ . "/../modelo/TABLA_JUGADOR.php";

/**
 * @return array{
 *   JUG_ID: string,
 *   JUG_NOMBRE: string,
 *   JUG_EQUIPO: string,
 *   JUG_POSICION: string,
 *   JUG_MODIFICACION: int,
 *   JUG_ELIMINADO: int
 *  }[]
 */
function jugadorConsultaNoEliminados()
{
 return select(
  pdo: Bd::pdo(),
  from: JUGADOR,
  where: [JUG_ELIMINADO => 0],
  orderBy: JUG_NOMBRE
 );
}
