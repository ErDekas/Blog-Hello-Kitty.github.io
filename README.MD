# Hello Kitty & Friends Blog - Documentación del Proyecto

## 🎨 Paleta de Colores
Definida mediante variables CSS para facilitar la consistencia y mantenimiento:

- Color Primario: (Rosa vibrante)
- Color Secundario: (Rosa claro)
- Color Terciario: (Rosa intenso)
- Color Blanco
- Color Azul Claro

```css
:root {
    --pink-primary: #FF69B4;     /* Rosa vibrante principal */
    --pink-secondary: #FFB6C1;   /* Rosa claro para fondos */
    --white: #FFFFFF;             /* Blanco para contraste */
    --pink-terciary: #ff00bf;     /* Rosa intenso para detalles */
    --blue-light: #78e9f1;        /* Azul claro para efectos hover */
}
```

## 🔤 Tipografía
Se utilizó Quicksand, importada desde Google Fonts, con múltiples pesos para flexibilidad tipográfica:

- Familia de Fuente: Quicksand
- Pesos: 300, 400, 500, 600, 700
- Importada desde Google Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

body {
    font-family: 'Quicksand', sans-serif;
}
```

## 🔧 Componentes Bootstrap Personalizados

### Navbar
Transformación de la navbar estándar mediante efectos de transición y hover:

- Color de fondo personalizado
- Texto en blanco
- Efectos hover con transición y sombra de texto
- Responsive con menú colapsable

```css
.navbar-custom {
    background-color: var(--pink-primary);
    position: fixed;  /* Navbar siempre visible */
    width: 100%;
    top: 0;
    z-index: 1000;    /* Asegura visibilidad sobre otros elementos */
}

.navbar-brand:hover {
    transform: scale(1.05);           /* Ligero zoom al pasar cursor */
    text-shadow: 3px 3px 6px rgba(0,0,0,0.3);  /* Sombra de profundidad */
    color: var(--blue-light);         /* Cambio de color */
    text-decoration: underline;       /* Subrayado */
}
```

### Carrusel Dinámico
Implementación de un carrusel personalizado con transiciones y control de ciclo:

- Botones de navegación personalizados con forma circular
- Captions con fondo semitransparente y sombra de texto
- Transiciones de desvanecimiento personalizadas
- Ciclo automático con control de pausa

```javascript
function changeImage(direction) {
    imgElement.classList.add('fade-out');
    setTimeout(() => {
        // Lógica de cambio cíclico de imágenes
        currentImageIndex = (currentImageIndex + 
            (direction === 'next' ? 1 : -1) + 
            backgroundImages.length) % backgroundImages.length;
        
        imgElement.src = backgroundImages[currentImageIndex];
        imgElement.classList.remove('fade-out');
    }, 500);  // Tiempo de transición de desvanecimiento
}
```

### Tarjetas Interactivas
Diseño de tarjetas con efectos de profundidad y expansión:

- Bordes redondeados
- Efecto de elevación
- Botón "Leer más" con colapso de información adicional

```css
.card {
    border-radius: 15px;             /* Bordes redondeados */
    transition: transform 0.3s ease;  /* Transición suave */
}

.card:hover {
    transform: translateY(-5px);      /* Efecto de elevación */
}
```

### Botones Personalizados
Rediseño de botones con estados de interacción distintivos:

- Color de fondo personalizado 

```css
.btn-custom {
    background-color: var(--pink-primary);
    color: var(--white);
    border: none;
}

.btn-custom:hover {
    background-color: white;
    border: solid 1px var(--pink-terciary);
}
```

## Footer

- Acordeón para información adicional
- Fondo en color primario

## 🌐 Criterios de Usabilidad
- Navegación intuitiva con menú fijo
- Carrusel con control manual y automático
- Transiciones suaves
- Diseño totalmente responsive

## ♿ Criterios de Accesibilidad
- Uso de etiquetas semánticas HTML
- Texto alternativo en imágenes
- Contraste de color WCAG
- Navegación mediante teclado
- Estados focus claramente definidos

## 🚀 Tecnologías
- HTML5
- CSS3
- Bootstrap 5.3.2
- Vanilla JavaScript