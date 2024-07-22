## Función Anónima

### `onSelect={() => handleSelect('components')}`

Se pasa una **función anónima** que se invoca cuando el evento ocurre. Esta forma es útil para:

- **Pasar parámetros a la función manejadora**.
- **Asegurarse de que la función se ejecute en el momento adecuado** (es decir, en respuesta al evento).

Es la forma correcta en la mayoría de los casos cuando necesitas pasar argumentos a una función en respuesta a eventos.

### `onSelect={handleSelect('components')}`

En este caso, **`handleSelect('components')`** se ejecuta inmediatamente durante la renderización del componente. El resultado de esa ejecución (que probablemente no sea una función) se pasa al prop `onSelect`. Esto generalmente:

- **No es lo que deseas**.
- Puede llevar a **errores** o **comportamientos inesperados**.

### Resumen

Cuando quieras pasar una función con parámetros a un prop de evento, **siempre debes usar una función anónima** o **lambda** (`() => ...`) para asegurarte de que la función se ejecute en el contexto adecuado (es decir, en respuesta al evento).
