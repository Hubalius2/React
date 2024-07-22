## Resumen de Diferencias.
### onSelect={() => handleSelect('components')}
Se pasa una función que se invoca cuando el evento ocurre. 
Es útil para pasar parámetros a la función manejadora y es la forma correcta en la mayoría de los casos 
cuando necesitas pasar argumentos a una función en respuesta a eventos.

### onSelect={handleSelect('components')}
La función handleSelect se ejecuta inmediatamente durante 
la renderización, y el resultado de esa ejecución (no una función) se pasa al prop onSelect. 
Esto generalmente no es lo que deseas y puede llevar a errores.

### Resumen
Cuando quieras pasar una función con parámetros a un prop de evento, 
siempre debes usar una función anónima o lambda (() => ...) para asegurarte de que la función 
se ejecute en el contexto adecuado (es decir, en respuesta al evento).