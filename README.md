# PinApp Challenge

## Descripción

Este proyecto es una aplicación web desarrollada con Next.js, utilizando TypeScript, TailwindCSS, Material UI, JSON Server para mockear datos, y React Query. La aplicación permite buscar productos por SKU o nombre y muestra detalles de cada producto.

## Requisitos

- Node.js
- npm

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/luciaaldana/pinapp-challenge.git
```

2. Navega al directorio del proyecto:

```bash
cd pinapp-challenge
```

3. Instala las dependencias:

```bash
npm install
```

4. Variables de entorno:

Copiar el archivo `.env.example` a `.env` y ajustar las variables de entorno según sea necesario.

5. Inicia el servidor de datos:

```bash
npm run mock-api
```

6. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## Uso

- La aplicación se encuentra en la ruta raíz (`/`).
- Puedes buscar productos por SKU o nombre en el campo de entrada de texto.
- Cada resultado de búsqueda incluye un botón "Ver Detalle" que redirige a la página de detalle del producto.
- La página de detalle del producto muestra información básica del producto, incluyendo nombre, SKU, foto principal, categoría, marca, precio de lista y especificaciones.

## Tecnologías utilizadas

- Next.js
- TypeScript
- TailwindCSS
- Material UI
- JSON Server
- React Query

---

## Description

This project is a web application developed with Next.js, using TypeScript, TailwindCSS, Material UI, JSON Server for mocking data, and React Query. The application allows users to search for products by SKU or name and displays details of each product.

## Requirements

- Node.js
- npm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/luciaaldana/pinapp-challenge.git
```

2. Navigate to the project directory:

```bash
cd pinapp-challenge
```

3. Install the dependencies:

```bash
npm install
```

4. Enviornment variables:

Copy the `.env.example` file to `.env` and update the values as needed.

5. Start the data server:

```bash
npm run mock-api
```

6. Start the development server:

```bash
npm run dev
```

## Usage

- The application is located at the root path (/).
- You can search for products by SKU or name in the text input field.
- Each search result includes a "View Details" button that redirects to the product detail page.
- The product detail page displays basic product information, including name, SKU, main photo, category, brand, list price, and specifications.

## Technologies Used

- Next.js
- TypeScript
- TailwindCSS
- Material UI
- JSON Server
- React Query
