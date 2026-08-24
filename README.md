# Portfolio - Animaciones y Responsive

Tercera pre-entrega correspondiente al **Módulo 8: Animaciones** del curso de **Desarrollo Web de Coderhouse**.

Este proyecto continúa la evolución de mi portafolio personal desarrollado a lo largo de los módulos anteriores. En esta etapa se profundiza el uso de **SCSS**, se incorporan **animaciones nativas**, una **librería externa de animaciones** y se completa la **responsividad de las cinco páginas del sitio**.

---

## Descripción

El proyecto consiste en un portafolio personal compuesto por cinco páginas HTML:

- Inicio
- Sobre mí
- Proyectos
- Servicios
- Contacto

El sitio fue desarrollado siguiendo una estrategia **Mobile First**, utilizando **media queries** para adaptar el contenido a dispositivos móviles, tablets y computadoras de escritorio.

Además, los estilos están organizados mediante una arquitectura SCSS basada en **partials**, utilizando herramientas avanzadas de SASS como:

- Variables
- Nesting
- Mixins con parámetros
- `@extend`
- Placeholders
- Operadores
- `@use`
- Media Queries
- Transiciones
- Transformaciones
- Animaciones con `@keyframes`

---

## Tecnologías utilizadas

- HTML5
- CSS3
- SCSS / SASS
- Bootstrap 5.3
- AOS - Animate On Scroll
- CSS Grid
- Flexbox
- Media Queries
- JavaScript
- Git
- GitHub
- Node.js
- npm

---

## Estructura del proyecto

```text
portfolio-animaciones-responsive/
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
│
├── css/
│   └── style.css
│
├── img/
│   ├── imagen-principal.jpg
│   ├── imagen-sobre-mi.jpg
│   ├── imagen-proyectos.jpg
│   ├── imagen-servicios.jpg
│   ├── imagen-contacto.jpg
│   ├── galeria-1.jpg
│   ├── galeria-2.jpg
│   └── galeria-3.jpg
│
├── js/
│   └── main.js
│
├── pages/
│   ├── contacto.html
│   ├── proyectos.html
│   ├── servicios.html
│   └── sobre-mi.html
│
└── scss/
    ├── main.scss
    │
    ├── utilities/
    │   ├── _variables.scss
    │   ├── _mixins.scss
    │   └── _placeholders.scss
    │
    ├── base/
    │   ├── _base.scss
    │   └── _tipografia.scss
    │
    ├── layout/
    │   ├── _header.scss
    │   ├── _nav.scss
    │   ├── _layout.scss
    │   └── _footer.scss
    │
    └── components/
        ├── _buttons.scss
        ├── _cards.scss
        ├── _components.scss
        └── _animations.scss
```

---

## Arquitectura SCSS

El proyecto utiliza una estructura de archivos organizada mediante **partials**.

El archivo principal:

```text
scss/main.scss
```

se utiliza únicamente para importar los demás archivos utilizando `@use`.

Ejemplo:

```scss
@use "utilities/variables";
@use "utilities/mixins";
@use "utilities/placeholders";

@use "base/tipografia";
@use "base/base";

@use "layout/header";
@use "layout/nav";
@use "layout/layout";
@use "layout/footer";

@use "components/buttons";
@use "components/cards";
@use "components/components";
@use "components/animations";
```

Esta organización permite mantener los estilos separados según su responsabilidad y facilita la lectura y mantenimiento del código.

---

## Variables SCSS

Se utilizan variables para centralizar valores reutilizados en todo el sitio, por ejemplo:

- Colores
- Tipografía
- Espaciados
- Radios de borde
- Breakpoints
- Duraciones de transiciones
- Valores de transparencia

También se utilizan operadores de SASS para generar valores a partir de otras variables.

Ejemplo:

```scss
$espacio-20: 20px;
$espacio-40: $espacio-20 * 2;
```

---

## Mixins con parámetros

El proyecto utiliza mixins parametrizados para evitar repetir código.

Entre ellos se encuentran mixins para:

- Flexbox
- CSS Grid
- Cards
- Transiciones
- Estados de foco

Ejemplo:

```scss
@mixin grid-columnas(
    $columnas,
    $gap: $espacio-20
) {
    display: grid;
    grid-template-columns: repeat($columnas, 1fr);
    gap: $gap;
}
```

Esto permite reutilizar una misma estructura configurando distintos valores según cada componente.

---

## Uso de `@extend`

También se implementan placeholders reutilizables junto con `@extend`.

Ejemplo:

```scss
%elemento-interactivo {
    transition:
        transform $duracion-media $easing-suave,
        box-shadow $duracion-media $easing-suave,
        border-color $duracion-media $easing-suave;
}
```

Luego puede reutilizarse de esta forma:

```scss
.card-proyecto-bootstrap {
    @extend %elemento-interactivo;
}
```

De esta manera se evita duplicar estilos que son comunes entre distintos componentes.

---

## Nesting

SCSS permite organizar selectores relacionados dentro de un mismo bloque.

El proyecto utiliza nesting especialmente en:

- Navbar
- Cards
- Botones
- Formularios
- Accordion
- Carousel
- Modales
- Footer

---

## Animaciones nativas

El proyecto implementa animaciones realizadas directamente desde SCSS mediante `transition`, `transform` y `@keyframes`.

### Animación de entrada

```scss
@keyframes aparecer-suave {

    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

Esta animación se aplica a los títulos principales de las páginas.

### Animación de pulso

También se utiliza una animación sutil mediante:

```scss
@keyframes pulso-suave {

    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.035);
    }

    100% {
        transform: scale(1);
    }
}
```

---

## Transiciones y transformaciones

Además de los `@keyframes`, se aplican transiciones en distintos componentes del sitio.

Por ejemplo:

- Botones
- Navbar
- Enlaces
- Cards
- Imágenes
- Formularios
- Carousel
- Accordion

Entre los efectos utilizados se encuentran:

- `translateY()`
- `scale()`
- Cambios de color
- Cambios de sombra
- Cambios de borde

---

## Librería externa de animaciones

El proyecto utiliza **AOS - Animate On Scroll**.

AOS permite ejecutar animaciones cuando los elementos ingresan al área visible de la pantalla durante el scroll.

Se incorpora mediante CDN:

```html
<link
    href="https://unpkg.com/aos@2.3.1/dist/aos.css"
    rel="stylesheet">
```

y:

```html
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

Los elementos utilizan atributos como:

```html
data-aos="fade-up"
```

```html
data-aos="fade-right"
```

```html
data-aos="fade-left"
```

```html
data-aos="zoom-in"
```

La configuración principal se encuentra en:

```text
js/main.js
```

---

## Responsividad

El proyecto utiliza una estrategia **Mobile First**.

Los estilos base están pensados para dispositivos móviles y posteriormente se modifica la distribución mediante Media Queries.

Los principales breakpoints utilizados son:

- 576px
- 768px
- 1024px

El diseño se adapta progresivamente a:

- Mobile
- Tablet
- Desktop

---

## Responsividad de las cinco páginas

La responsividad fue aplicada a todas las páginas del sitio.

### Inicio

En dispositivos pequeños el contenido se organiza principalmente en una sola columna.

En pantallas más grandes se utilizan layouts de dos columnas y grids para aprovechar mejor el espacio disponible.

### Sobre mí

La información y la imagen se presentan apiladas en dispositivos pequeños y se reorganizan en desktop.

### Proyectos

Las tarjetas cambian su cantidad de columnas según el ancho disponible.

### Servicios

Las tarjetas de servicios pasan de una sola columna en dispositivos móviles a varias columnas en pantallas mayores.

### Contacto

El bloque de información y el formulario aparecen uno debajo del otro en mobile y pasan a dos columnas en desktop.

---

## Bootstrap

El proyecto utiliza Bootstrap 5.3 para diferentes componentes:

- Navbar responsive
- Grid
- Cards
- Carousel
- Accordion
- Modales
- Formularios
- Botones

Los estilos propios definidos en SCSS complementan y personalizan estos componentes.

---

## Compilación de SCSS

Para trabajar con el proyecto se debe tener instalado Node.js.

Luego, desde la carpeta raíz del proyecto, instalar las dependencias:

```bash
npm install
```

Para compilar SCSS:

```bash
npm run sass
```

Este comando compila:

```text
scss/main.scss
```

en:

```text
css/style.css
```

---

## Compilación automática

Durante el desarrollo se puede utilizar:

```bash
npm run sass:watch
```

Esto mantiene SASS observando los archivos SCSS y actualiza automáticamente el CSS ante cada modificación.

Para detener el proceso:

```text
Ctrl + C
```

---

## Objetivos cumplidos

En esta tercera pre-entrega se implementaron los siguientes requisitos:

- Arquitectura completa de partials SCSS.
- Importación mediante `@use`.
- Variables SCSS.
- Nesting.
- Mixins con parámetros.
- Uso de `@extend`.
- Placeholders.
- Operadores SASS.
- Animaciones nativas.
- Transiciones.
- Transformaciones.
- Animaciones mediante `@keyframes`.
- Librería externa AOS.
- Responsividad mobile.
- Responsividad tablet.
- Responsividad desktop.
- Responsividad en los cinco archivos HTML.
- Bootstrap 5.3.
- Repositorio Git con commits correspondientes a las distintas etapas del desarrollo.

---

## Repositorio

El proyecto se encuentra disponible públicamente en GitHub:

**https://github.com/silvajd/portfolio-animaciones-responsive**

---

## Autor

**Josefina Silva**

GitHub:

**https://github.com/silvajd**