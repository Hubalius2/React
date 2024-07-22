## ¿Qué es un Componente en React?

En React, los componentes son las unidades básicas de construcción para interfaces de usuario. Representan una parte de la interfaz y encapsulan tanto la lógica como el diseño para esa parte. A continuación, se ofrece una explicación detallada sobre los componentes en React:

Un **componente** en React es una pieza independiente y reutilizable de la interfaz de usuario que puede ser una parte pequeña o grande de la aplicación. Los componentes permiten dividir la interfaz de usuario en partes pequeñas y manejables, cada una con su propio estado y lógica.

### Tipos de Componentes

#### Componentes Funcionales

Los **componentes funcionales** son funciones de JavaScript que aceptan `props` como argumento y devuelven elementos React. Son el tipo de componente más simple y moderno en React.

**Ejemplo de Componente Funcional:**

```jsx
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```