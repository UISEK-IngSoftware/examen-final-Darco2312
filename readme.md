[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/gVKptNec)
# Examen Final - Aplicación Ionic Futurama

## Datos del estudiantes
- Nombre: ______________________

## 📋 Objetivo

Desarrollar una aplicación móvil utilizando Ionic + React que muestre una lista de personajes de Futurama consumiendo datos de una API REST externa.

## 🎯 Requisitos del Proyecto

### Funcionalidad Principal

Los estudiantes deberán implementar una aplicación que:

1. **Consuma la API de Futurama** para obtener la lista de personajes
2. **Muestre los personajes** en una lista ordenada

### API a Utilizar

**Endpoint Base:** `https://futuramaapi.com/api/characters`

#### Parámetros Requeridos

La consulta a la API debe incluir los siguientes parámetros:

| Parámetro | Valor | Descripción |
|-----------|-------|-------------|
| `orderBy` | `id` | Ordenar por ID del personaje |
| `orderByDirection` | `asc` | Dirección ascendente |
| `page` | `1` | Número de página |
| `size` | `50` | Cantidad de resultados por página |

#### Ejemplo de URL completa:
```
https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=1&size=50
```

#### Estructura de la Respuesta

La API retorna un objeto con la siguiente estructura:

```json
{
  "items": [
    {
      "id": 1,
      "name": "Philip J. Fry",
      "gender": "MALE",
      "status": "ALIVE",
      "species": "HUMAN",
      "createdAt": "2023-12-02T18:32:33.122015Z",
      "image": "https://futuramaapi.com/static/img/human/philip-j_-fry.webp"
    },
    {
      "id": 2,
      "name": "Morgan Proctor",
      "gender": "FEMALE",
      "status": "ALIVE",
      "species": "HUMAN",
      "createdAt": "2023-12-02T18:32:33.122015Z",
      "image": "https://futuramaapi.com/static/img/human/morgan-proctor.webp"
    }
  ]
}
```

#### Campos Disponibles

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | number | Identificador único del personaje |
| `name` | string | Nombre del personaje |
| `gender` | string | Género (MALE, FEMALE, OTHER) |
| `status` | string | Estado vital (ALIVE, DEAD, UNKNOWN) |
| `species` | string | Especie (HUMAN, ROBOT, ALIEN, etc.) |
| `createdAt` | string | Fecha de creación en la base de datos |
| `image` | string | URL de la imagen del personaje |

## 🛠️ Requisitos Técnicos

### Tecnologías Obligatorias
- **Framework:** Ionic 8.5.0 (ya instalado)
- **Librería UI:** React 19.0.0 (ya instalado)
- **Lenguaje:** TypeScript 5.9 (ya configurado)
- **HTTP Client:** Axios (**OBLIGATORIO** - debe instalarse)

### Instalación de Axios

**IMPORTANTE:** Antes de empezar, instala Axios ejecutando:

```bash
npm install axios
```

### Componentes Ionic Recomendados
- `IonList` / `IonItem` - Para la lista de personajes
- `IonCard` - Para mostrar información del personaje
- `IonAvatar` - Para la imagen del personaje
- `IonHeader` / `IonToolbar` - Para el encabezado
- `IonContent` - Para el contenido principal
- `IonLoading` - Para indicar carga de datos

## 📱 Funcionalidades Esperadas

### 1. Modificar Vista Home (`src/pages/Home.tsx`)

**IMPORTANTE:** Debes modificar la página Home existente para que cargue y muestre los personajes de Futurama desde la API.

#### Requisitos de la Vista Home:
- **Consumir la API** con los parámetros especificados al cargar el componente
- **Mostrar una lista** de los personajes obtenidos
- Cada ítem de la lista debe mostrar:
  - **Imagen** del personaje
  - **Nombre** del personaje
  - **Género** (MALE, FEMALE, OTHER)
  - **Estado vital** (ALIVE, DEAD, UNKNOWN)
- Los datos deben provenir del array `items` de la respuesta de la API

#### Ejemplo de estructura de ítem:
```
┌─────────────────────────────┐
│ [Imagen]  Philip J. Fry     │
│           Género: MALE       │
│           Estado: ALIVE      │
└─────────────────────────────┘
```

### 2. Manejo de Estados
- Estado de carga (loading)
- Estado de error (si la API falla)
- Estado vacío (si no hay datos)

## 🎨 Criterios de Evaluación

**Total: 90 puntos**

| Criterio | Puntos |
|----------|--------|
| Consumo correcto de la API con Axios y parámetros solicitados desde Home | 28 pts |
| Visualización en Home: imagen, nombre, género y estado vital | 29 pts |
| Manejo de estados (loading, error, vacío) | 18 pts |
| Diseño UI/UX con componentes Ionic | 9 pts |
| Calidad de código (TypeScript) | 6 pts |
| **TOTAL** | **90 pts** |

## 🚀 Instrucciones de Inicio

### Instalación
```bash
npm install
```

### Ejecutar en Desarrollo
```bash
ionic serve
```


## 📝 Notas Importantes

1. **Instalación de Axios:** Lo primero es instalar Axios con `npm install axios`
2. **Tiempo de desarrollo:** [Especificar duración del examen]
3. **Entrega:** Subir proyecto a repositorio Git (GitHub/GitLab)
4. **Documentación:** Incluir comentarios en el código TypeScript
5. **Testing:** Bonus points por implementar pruebas unitarias
6. **Uso de Axios:** Todas las llamadas a la API deben hacerse con Axios, no con Fetch API

## 🆘 Recursos de Ayuda

- [Documentación Ionic](https://ionicframework.com/docs)
- [Documentación React](https://react.dev)
- [Futurama API Docs](https://futuramaapi.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

