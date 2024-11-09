import express from "express";
import { productos } from "./productos.js";

const app = express();
const PORT = 3000;

app.use(express.json());

let currentId = 4;

app.get("/productos", (req, res) => {
    res.json(productos);
});

app.post("/productos", (req, res) => {
    const { nombre, cantidad, unidad, categorias, precio } = req.body;

    if (cantidad <= 0 || precio <= 0) {
        return res.status(400).json({ error: "Cantidad y precio deben ser mayores a 0" });
    }

    const nuevoProducto = {
        id: currentId++,
        nombre,
        cantidad,
        unidad,
        categorias,
        precio
    };

    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

app.get("/productos/:id", (req, res) => {
    const producto = productos.find(p => p.id === parseInt(req.params.id));

    if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(producto);
});

app.put("/productos/:id", (req, res) => {
    const index = productos.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    const { nombre, cantidad, unidad, categorias, precio } = req.body;
    const productoActualizado = {
        ...productos[index],
        nombre,
        cantidad,
        unidad,
        categorias,
        precio
    };

    productos[index] = productoActualizado;
    res.json({ message: "Producto actualizado correctamente", producto: productoActualizado });
});

app.delete("/productos/:id", (req, res) => {
  const index = productos.findIndex(p => p.id === parseInt(req.params.id));

  if (index === -1) {
      return res.status(404).json({ error: "Producto no encontrado" });
  }

  productos.splice(index, 1);
  res.status(200).json({ message: "Producto eliminado correctamente" }); // Cambiado a 200 OK y un mensaje
});

app.get("/productos/total", (req, res) => {
    const total = productos.reduce((sum, producto) => sum + (producto.cantidad * producto.precio), 0);
    res.json({ total });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


