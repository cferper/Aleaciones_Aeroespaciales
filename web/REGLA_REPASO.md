# La regla de repaso de esta versión

Después de pensar y revelar la respuesta, eliges una valoración. Es una regla sencilla y transparente para practicar; todavía no es un algoritmo adaptativo que aprenda tus hábitos.

| Valoración | Primer repaso o después de «No lo sabía» | Si ya había un intervalo de días |
|---|---|---|
| No lo sabía (`again`) | Dentro de 10 minutos | Dentro de 10 minutos |
| Me costó (`hard`) | Dentro de 2 días | Intervalo anterior × 1,2, redondeado hacia arriba |
| Bien (`good`) | Dentro de 3 días | Intervalo anterior × 2, redondeado hacia arriba |
| Muy fácil (`easy`) | Dentro de 7 días | Intervalo anterior × 3, redondeado hacia arriba |

«Me costó» aplica `ceil(max(intervaloAnterior, 1) × 1,2)`, con un mínimo de un día. Por eso el primer intervalo es de **dos días**. Ningún intervalo supera 365 días. Después de «No lo sabía», el intervalo de días queda en cero y se usan de nuevo los valores iniciales.

Cada valoración cuenta como un repaso. El siguiente plazo empieza cuando pulsas la valoración; si repasas tarde, se calcula desde el momento actual. Aquí un día significa 24 horas transcurridas, incluso al cambiar el horario de verano. Las fechas se guardan en UTC y la pantalla puede mostrarlas en tu hora local.

Por ejemplo, «Bien» por primera vez programa 3 días. Si la siguiente vez eliges «Bien», pasa a 6 días. Si eliges «No lo sabía», vuelve a 10 minutos. Después, «Muy fácil» lo programa para 7 días.

## Qué se guarda y qué se puede recuperar

`dist/progreso.js` tiene un módulo independiente de la pantalla, `StudyProgress`. El navegador guarda su información con la clave `aleaciones-progreso-v1` en `localStorage`. Cada tarjeta conserva valoración, número de repasos, intervalo, fecha del último repaso y fecha del próximo. Casos y mapas conservan respuestas y fecha de realización.

Una copia exportada incluye la aplicación, la versión, la fecha de exportación y todos los registros. Al importar, se comprueba primero el archivo completo; una actividad inválida cancela toda la importación. Después se fusionan las actividades por su identificador: gana la realizada más recientemente y, en un empate, se conserva la copia actual. También se conservan identificadores válidos que pertenezcan a temas aún no presentes en la web.

Un dato guardado que no se pueda leer se mantiene intacto. La interfaz debe impedir sobrescribirlo hasta importar una copia válida o confirmar un reinicio. Si el navegador bloquea el almacenamiento o se llena, el módulo devuelve un aviso para que la pantalla pueda explicarlo y ofrecer la exportación.

El progreso admite hasta 5.000 actividades, dos millones de caracteres en total y 2.000 caracteres por respuesta escrita. La copia completa admite 2.100.000 caracteres para dejar espacio a su cabecera. La interfaz exporta JSON compacto y admite archivos de hasta 8.400.000 bytes al importar: un carácter puede ocupar varios bytes en UTF-8, como ocurre con los acentos. Así una copia exportada por esta versión puede recuperarse en ella. Se rechazan campos desconocidos, claves que puedan alterar prototipos, fechas incoherentes y propiedades que ejecuten código al leerlas.

## Comprobar el módulo

Desde la carpeta del proyecto, con Node.js ya disponible en este entorno:

```powershell
node web/pruebas-progreso.cjs
```

Las pruebas comprueban los intervalos, el cambio de hora, la persistencia, los errores de almacenamiento y la importación completa y atómica. No necesitan instalar paquetes.
