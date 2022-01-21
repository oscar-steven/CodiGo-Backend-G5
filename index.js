import express, { json, raw } from "express";
import cors from "cors";

// const express = require("express");
const app = express();
const producto = [
  {
    nombre: "Leche de almendas",
    precio: 9.5,
    estado: true,
  },
];
// middleware > es un intermediario entre todas las peticiones que se realicen a determinado endpoint o si no se indica a todas las peticiones de mi API
// que mi application de express podra entender toda la informacion enviada por el cliente siempre y cuando sea un json
app.use(json());

// para toda la aplicacion voy a utilizar la configuracion de los CORS
app.use(
  cors()
  //   { methods: ["GET", "POST"], origin: "http://127.0.0.1:5500/frontend" }
);
// app.use(raw());
const port = 3000;

app.get("/", (req, res) => {
  // req => es la informacion que me viene del liente
  // res > es la respuesta que le dare al cliente

  res.status(200).json({
    message: "Peticion realizada exitosamente",
  });
});

app.get("/producto", (req, res) => {
  // req => es la informacion que me viene del liente
  // res > es la respuesta que le dare al cliente

  //   res.status(200).json({
  //     message: "Peticion realizada exitosamente",
  //   });

  res.status(200).json({
    message: "Los productos son:",
    content: producto,
  });
});

app.post("/producto", (req, res) => {
  console.log(req.body);
  if (req.body) {
    producto.push(req.body);
    res.status(201).json({
      message: "Producto agregado exitosamente",
      producto: req.body,
    });
  } else {
    res.status(400).json({
      message: "Informacion incorrecta",
    });
  }
});

// mediate el endpoint /productos devolver todos los productos en el siguiente formato:
//{
//     message: 'los productos son:',
//     content:[]
// }

app
  .route("/producto/:id")
  .get((req, res) => {
    //destructuracion
    const { id } = req.params;

    //buscar ese producto por ese id (posicion del array) y si existe, retornar el producto 200
    // si no existe retornar un estado 200 e indicar en el message que el producto no existe

    console.log(req.params);
    if (producto[id - 1]) {
      //si existe
      return res.status(200).json({
        content: producto[id - 1],
      });
    } else {
      return res.status(404).json({
        message: "Producto no existe",
        content: null,
      });
    }
    // console.log(req.params);
    // res.json({
    //   message: null,
    // });
  })
  .put((req, res) => {
    const { id } = req.params;
    if (producto[id - 1]) {
      producto[id - 1] = req.body;
      return res.status(200).json({
        message: "Producto actualizado exitosamente",
        content: producto[id - 1],
      });
    } else {
      return res.status(400).json({
        message: "Producto no existe",
        content: null,
      });
    }
  })
  .delete((req, res) => {
    const { id } = req.params;
    if (producto[id - 1]) {
      const productos = producto[id - 1];
      producto.splice(id - 1, 1);
      return res.status(200).json({
        message: "Producto eliminado exitosamente",
        content: productos,
      });
    } else {
    }
  });

// se mantendra escuchando las consultas realizadas a este servidor mediante el puerto definido
app.listen(port, () => {
  // esto sucedera cuando se levate el servidor de express
  console.log(`Servidor levantado exitosamente! ${port}`);
});
