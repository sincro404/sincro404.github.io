<?php

require_once __DIR__ . "/BAD_REQUEST.php";
require_once __DIR__ . "/ProblemDetails.php";

function validaEquipo(false|string $equipo)
{

 if ($equipo === false)
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "Falta el equipo.",
   type: "/error/faltaequipo.html",
   detail: "La solicitud no tiene el valor de equipo."
  );

 $trimEquipo = trim($equipo);

 if ($trimEquipo === "")
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "Equipo en blanco.",
   type: "/error/equipoenblanco.html",
   detail: "Pon texto en el campo equipo.",
  );

 return $trimEquipo;
}