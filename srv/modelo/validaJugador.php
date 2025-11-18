<?php

require_once __DIR__ . "/../../lib/php/BAD_REQUEST.php";
require_once __DIR__ . "/../../lib/php/validaJson.php";
require_once __DIR__ . "/../../lib/php/ProblemDetails.php";
require_once __DIR__ . "/TABLA_JUGADOR.php";

function validaJugador($objeto)
{

 $objeto = validaJson($objeto);

 if (!isset($objeto->JUG_ID) || !is_string($objeto->JUG_ID))
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "El id debe ser texto.",
   type: "/error/idincorrecto.html",
  );

 if (!isset($objeto->JUG_NOMBRE) || !is_string($objeto->JUG_NOMBRE))
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "El nombre debe ser texto.",
   type: "/error/nombreincorrecto.html",
  );

 if (!isset($objeto->JUG_EQUIPO) || !is_string($objeto->JUG_EQUIPO))
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "El equipo debe ser texto.",
   type: "/error/equipoincorrecto.html",
  );
  
 if (!isset($objeto->JUG_POSICION) || !is_string($objeto->JUG_POSICION))
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "La posición debe ser texto.",
   type: "/error/posicionincorrecta.html",
  ); 

 if (!isset($objeto->JUG_MODIFICACION)  || !is_int($objeto->JUG_MODIFICACION))
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "La modificacion debe ser número.",
   type: "/error/modificacionincorrecta.html",
  );

  if (!isset($objeto->JUG_ELIMINADO) || !is_int($objeto->JUG_ELIMINADO))
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "El campo eliminado debe ser entero.",
   type: "/error/eliminadoincorrecto.html",
  );

 return [
  JUG_ID => $objeto->JUG_ID,
  JUG_NOMBRE => $objeto->JUG_NOMBRE,
  JUG_EQUIPO => $objeto->JUG_EQUIPO,
  JUG_POSICION => $objeto->JUG_POSICION,
  JUG_MODIFICACION => $objeto->JUG_MODIFICACION,
  JUG_ELIMINADO => $objeto->JUG_ELIMINADO
 ];
}
