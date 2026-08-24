# Portfolio - SEO y Servidores

Entrega correspondiente al Módulo 9: SEO, Dominios y Servidores del curso de Desarrollo Web de Coderhouse.

Este proyecto continúa la evolución del portfolio desarrollado en los módulos anteriores. En esta etapa se optimizó el sitio para mejorar su posicionamiento en buscadores, su semántica HTML y su accesibilidad.

---

## Descripción

El proyecto consiste en un portfolio personal compuesto por cinco páginas HTML:

- Inicio
- Sobre mí
- Proyectos
- Servicios
- Contacto

El sitio utiliza HTML5, CSS3, SCSS, Bootstrap, Flexbox, CSS Grid, Media Queries, animaciones nativas y AOS.

En el Módulo 9 se incorporaron optimizaciones relacionadas con SEO On-Page, SEO Técnico, accesibilidad, palabras clave y preparación para despliegue.

---

## SEO On-Page

Se optimizaron los cinco documentos HTML mediante:

- títulos específicos para cada página;
- un único `h1` por documento;
- jerarquía correcta de encabezados;
- etiquetas HTML5 semánticas;
- contenido relacionado con la intención de cada página;
- palabras clave integradas de forma natural;
- eliminación de textos excesivamente genéricos;
- enlaces internos descriptivos.

---

## Meta description

Cada documento incluye una etiqueta:

```html
<meta name="description" content="...">
```

La descripción fue redactada específicamente según el contenido de cada página.

---

## Keywords

Cada documento posee keywords relacionadas con su contenido mediante:

```html
<meta name="keywords" content="...">
```

También se integraron palabras clave de forma natural dentro de títulos, encabezados y párrafos para evitar el uso excesivo de términos.

Entre las principales keywords se encuentran:

- portfolio desarrollo web
- desarrollo web
- desarrollo web Argentina
- proyectos desarrollo web
- servicios desarrollo web
- HTML5
- CSS3
- SCSS
- Bootstrap
- diseño responsive

---

## SEO Local

Las páginas principales, Servicios y Contacto incorporan referencias geográficas a Argentina para definir el área local relacionada con los servicios de desarrollo web.

Las keywords locales se utilizan de forma natural, evitando repeticiones innecesarias.

---

## Accesibilidad

Todas las imágenes poseen textos alternativos mediante el atributo `alt`.

Ejemplo:

```html
<img
    src="./img/espacio-trabajo-desarrollo-web.jpg"
    alt="Computadora portátil en un espacio de trabajo utilizado para aprender y practicar desarrollo web">
```

También se revisó:

- jerarquía de encabezados;
- navegación mediante teclado;
- atributos ARIA de Bootstrap;
- contraste entre texto y fondo;
- textos descriptivos para botones y enlaces.

---

## Contraste

La paleta principal utiliza colores de fondo y texto que permiten mantener una correcta legibilidad.

Se evitaron combinaciones de bajo contraste en:

- botones;
- enlaces;
- navegación;
- carousel;
- estados hover y focus;
- footer.

Las correcciones específicas se encuentran en:

```text
scss/components/_accessibility.scss
```

---

## Nombres de imágenes optimizados

Los nombres genéricos fueron reemplazados por nombres descriptivos.

Ejemplos:

```text
imagen-principal.jpg
→ espacio-trabajo-desarrollo-web.jpg

imagen-proyectos.jpg
→ proyectos-desarrollo-web.jpg

galeria-1.jpg
→ diseno-web-responsive.jpg
```

Esto permite que los nombres de archivo aporten contexto adicional al contenido.

---

## SEO Técnico

Se incorporaron:

```text
robots.txt
sitemap.xml
```

`robots.txt` permite indicar a los motores de búsqueda qué contenido puede ser rastreado.

`sitemap.xml` contiene las URLs principales del sitio para facilitar su descubrimiento e indexación.

---

## SEO Off-Page

El portfolio se conecta con perfiles y repositorios públicos de GitHub.

Como estrategia Off-Page, el sitio publicado puede enlazarse desde el perfil público de GitHub para generar una referencia externa hacia el portfolio.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- SCSS / Sass
- Bootstrap 5.3
- AOS - Animate On Scroll
- CSS Grid
- Flexbox
- Media Queries
- JavaScript
- Git
- GitHub
- GitHub Pages
- Node.js
- npm

---

## Estructura del proyecto

```text
portfolio-seo-servidores/
│
├── index.html
├── robots.txt
├── sitemap.xml
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
│
├── css/
│   └── style.css
│
├── img/
│   ├── espacio-trabajo-desarrollo-web.jpg
│   ├── formacion-desarrollo-web.jpg
│   ├── proyectos-desarrollo-web.jpg
│   ├── servicios-desarrollo-web.jpg
│   ├── contacto-desarrollo-web.jpg
│   ├── diseno-web-responsive.jpg
│   ├── codigo-desarrollo-web.jpg
│   └── planificacion-interfaz-web.jpg
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
        ├── _animations.scss
        └── _accessibility.scss
```

---

## Compilación de SCSS

Instalar las dependencias:

```bash
npm install
```

Compilar SCSS:

```bash
npm run sass
```

El comando compila:

```text
scss/main.scss
```

en:

```text
css/style.css
```

---

## Despliegue

El sitio puede publicarse mediante GitHub Pages desde la rama `main`.

URL del sitio:

```text
https://silvajd.github.io/portfolio-seo-servidores/
```

---

## Objetivos cumplidos

- SEO On-Page
- Meta description en los cinco HTML
- Meta keywords en los cinco HTML
- Keywords específicas por página
- SEO local
- HTML5 semántico
- Un único `h1` por página
- Jerarquía correcta de títulos
- Textos alternativos en todas las imágenes
- Nombres descriptivos de imágenes
- Contraste accesible
- SEO Técnico
- robots.txt
- sitemap.xml
- Preparación para SEO Off-Page
- Diseño responsive
- SCSS
- Bootstrap
- Animaciones
- Repositorio público en GitHub

---

## Repositorio

El proyecto se encuentra disponible públicamente en:

```text
https://github.com/silvajd/portfolio-seo-servidores
```

---

## Autor

Josefina Silva

GitHub:

```text
https://github.com/silvajd
```