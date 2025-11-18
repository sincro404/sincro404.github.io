<?php

require_once __DIR__ . "/BAD_REQUEST.php";
require_once __DIR__ . "/ProblemDetails.php";

function validaPosicion(false|string $posicion)
{

 if ($posicion === false)
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "Falta la posición.",
   type: "/error/faltaposicion.html",
   detail: "La solicitud no tiene el valor de posición."
  );

 $trimPosicion = trim($posicion);

 if ($trimPosicion === "")
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "Posición en blanco.",
   type: "/error/posicionenblanco.html",
   detail: "Pon texto en el campo posición.",
  );

 return $trimPosicion;
}