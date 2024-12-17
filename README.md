# Eivissa Solidaria - Mapa de Puntos de Recogida

Este repositorio contiene el código fuente de la página web informativa sobre los puntos de recogida de donaciones en Ibiza y Formentera, con el fin de ayudar a los afectados por las DANA en Valencia.

## Descripción

La página muestra diferentes puntos de recogida (colegios, centros cívicos, comercios, ayuntamientos, etc.) donde se pueden donar alimentos, ropa, productos de higiene, herramientas, comida para animales, entre otros bienes necesarios. Además, incluye un mapa interactivo donde se visualizan las ubicaciones geográficas de estos puntos.

## Características

- **Listado de puntos de recogida por localidad:** Organizamos los puntos por municipios (San Antonio, San Rafael, San José, Ibiza, Santa Eulària, San Juan y Formentera) facilitando así la búsqueda.
- **Mapa interactivo con Leaflet:** Permite ubicar rápidamente los puntos de donación gracias a los marcadores geolocalizados en el mapa.
- **Información de contacto:** Se incluyen teléfonos, direcciones, horarios y otra información relevante para cada punto de recogida.
- **Formulario de contacto:** Un sencillo formulario para enviar mensajes o consultas directamente, así como un enlace al perfil de Instagram.

## Tecnologías utilizadas

- **HTML5, CSS3 & JavaScript:** Estructura, estilo y funcionalidad del sitio.
- **Leaflet:** Librería de JavaScript para mapas interactivos basados en OpenStreetMap.
- **Font Awesome:** Iconos visualmente atractivos para representar diferentes categorías de donación.
- **Formspree:** Gestión rápida del formulario de contacto a través de un backend sin necesidad de programación adicional.
- **OpenStreetMap:** Fuente de datos cartográfica para el mapa.

## Estructura del proyecto

```
.
├── index.html            # Página principal que contiene el listado y descripción de los puntos de recogida
├── css/
│   └── styles.css        # Hojas de estilo personalizadas para la página
├── images/
│   └── favicon.ico       # Ícono favicon del sitio
└── js/
    └── script.js         # Script principal para inicializar y configurar el mapa interactivo
```

## Contribución

Si deseas contribuir:

1. Haz un fork del repositorio
2. Crea una rama con tu funcionalidad o corrección
3. crea un Pull Request explicando tus cambios

## Créditos

- **Jordi Sevilla Mari**
- **Iconos**: Font Awesome
- **Mapas**: Leaflet y OpenStreetMap

