<?php

class Bd
{
 private static ?PDO $pdo = null;

 static function pdo(): PDO
 {
  if (self::$pdo === null) {

   self::$pdo = new PDO(
    // cadena de conexión
    "sqlite:sincronizacion.db",
    // usuario
    null,
    // contraseña
    null,
    // Opciones: pdos no persistentes y lanza excepciones.
    [PDO::ATTR_PERSISTENT => false, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
   );

   self::$pdo->exec(
    'CREATE TABLE IF NOT EXISTS JUGADOR (
      JUG_ID TEXT NOT NULL,
      JUG_NOMBRE TEXT NOT NULL,
      JUG_EQUIPO TEXT NOT NULL,
      JUG_POSICION TEXT NOT NULL,
      JUG_MODIFICACION INTEGER NOT NULL,
      JUG_ELIMINADO INTEGER NOT NULL,
      CONSTRAINT JUG_PK
       PRIMARY KEY(JUG_ID),
      CONSTRAINT JUG_NOM_UNQ
       UNIQUE(JUG_NOMBRE),
      CONSTRAINT JUG_NOM_NV
       CHECK(LENGTH(JUG_NOMBRE) > 0),
      CONSTRAINT JUG_EQ_NV CHECK(LENGTH(JUG_EQUIPO) > 0),
      CONSTRAINT JUG_POS_NV CHECK(LENGTH(JUG_POSICION) > 0),
      CONSTRAINT JUG_ID_NV
       CHECK(LENGTH(JUG_ID) > 0)
     )'
   );
  }

  return self::$pdo;
 }
}
