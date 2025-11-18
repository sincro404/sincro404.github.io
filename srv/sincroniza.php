<?php

require_once __DIR__ . "/../lib/php/ejecutaServicio.php";
require_once __DIR__ . "/../lib/php/recuperaJson.php";
require_once __DIR__ . "/../lib/php/devuelveJson.php";
require_once __DIR__ . "/../lib/php/ProblemDetails.php";
require_once __DIR__ . "/../lib/php/devuelveProblemDetails.php";
require_once __DIR__ . "/../lib/php/devuelveErrorInterno.php";
require_once __DIR__ . "/modelo/TABLA_JUGADOR.php";
require_once __DIR__ . "/modelo/validaJugador.php";
require_once __DIR__ . "/bd/jugadorAgrega.php";
require_once __DIR__ . "/bd/jugadorBusca.php";
require_once __DIR__ . "/bd/jugadorConsultaNoEliminados.php";
require_once __DIR__ . "/bd/jugadorModifica.php";

ejecutaServicio(function () {

 $lista = recuperaJson();

 if (!is_array($lista)) {
  $lista = [];
 }

 foreach ($lista as $modelo) {
  $modeloEnElCliente = validaJugador($modelo);
  $modeloEnElServidor = jugadorBusca($modeloEnElCliente[JUG_ID]);

  if ($modeloEnElServidor === false) {

   /* CONFLICTO: El modelo no ha estado en el servidor.
    * AGREGARLO solamente si no está eliminado. */
   if ($modeloEnElCliente[JUG_ELIMINADO] === 0) {
    jugadorAgrega($modeloEnElCliente);
   }
  } elseif (
   $modeloEnElServidor[JUG_ELIMINADO] === 0
   && $modeloEnElCliente[JUG_ELIMINADO] === 1
  ) {

   /* CONFLICTO: El registro está en el servidor, donde no se ha eliminado, pero
    * ha sido eliminado en el cliente.
    * Gana el cliente, porque optamos por no revivir lo eliminado. */
   jugadorModifica($modeloEnElCliente);
  } else if (
   $modeloEnElCliente[JUG_ELIMINADO] === 0
   && $modeloEnElServidor[JUG_ELIMINADO] === 0
  ) {

   /* CONFLICTO: Registros en el servidor y en el cliente. Pueden ser
    * diferentes.
    * GANA FECHA MÁS GRANDE. Cuando gana el servidor, no se hace nada. */
   if (
    $modeloEnElCliente[JUG_MODIFICACION] >
    $modeloEnElServidor[JUG_MODIFICACION]
   ) {
    // La versión del cliente es más nueva y prevalece.
    jugadorModifica($modeloEnElCliente);
   }
  }
 }

 $lista = jugadorConsultaNoEliminados();

 devuelveJson($lista);
});
