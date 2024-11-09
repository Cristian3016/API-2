# 2° Examen Parcial (parte práctica)

## Enunciado

Se pide desarrollar el módulo principal de una aplicación de lista de compras que permite a los usuarios gestionar sus productos. El objetivo es crear una API básica con **Express** que permita realizar operaciones CRUD (Create, Read, Update, Delete) sobre los productos de la lista.

## Requerimientos

- Implementar un servidor básico con **Express** que permita realizar las operaciones CRUD sobre los productos de la lista de compras.
- La persistencia de datos puede ser en memoria o grabando un archivo local.
- Cada producto debe tener los siguientes campos:
  - `id` (number, generado automáticamente, único)
  - `nombre` (string, el nombre del producto)
  - `cantidad` (number, la cantidad deseada)
  - `unidad` (string, unidad de medida, por ejemplo: "kg", "litro", "paquete")
  - `categorias` (array de strings, categorías a las que pertenece el producto, por ejemplo: `["lácteos", "bebidas"]`)
  - `precio` (number, precio por unidad).
- Las operaciones que deben ser implementadas son:
  - **Agregar un producto a la lista**: usar el método `POST` en la ruta `/productos`. Validar que `cantidad` y `precio` sean mayores a 0.
  - **Obtener un producto por id**: usar el método `GET` en la ruta `/productos/:id`. Si no se encuentra, debe devolver un error 404.
  - **Actualizar un producto por id**: usar el método `PUT` en la ruta `/productos/:id`. Debe permitir modificar cualquiera de los campos del producto. Validar que el producto a actualizar existe. Si no se encuentra el producto, debe devolver un error 404.
  - **Eliminar un producto por id**: usar el método `DELETE` en la ruta `/productos/:id`. Validar que el producto a eliminar existe. Si no se encuentra el producto, debe devolver un error 404.

## Requerimiento “bonus”

**Obtener total a pagar**: usar el método `GET` en la ruta `/productos/total`. Esta ruta debe calcular el total a pagar de todos los productos cargados en la lista.

## Ejemplo de objeto `Producto`

```json
{
  "id": 1,
  "nombre": "Leche",
  "cantidad": 2,
  "unidad": "litro",
  "categorias": ["lácteos", "desayuno"],
  "precio": 150
}
```
