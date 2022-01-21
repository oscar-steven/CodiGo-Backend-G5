import express, { json, raw } from "express";

// const express = require("express");
const app = express();
const producto = [];
// middleware > es un intermediario entre todas las peticiones que se realicen a determinado endpoint o si no se indica a todas las peticiones de mi API
// que mi application de express podra entender toda la informacion enviada por el cliente siempre y cuando sea un json
app.use(json());
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

// se mantendra escuchando las consultas realizadas a este servidor mediante el puerto definido
app.listen(port, () => {
  // esto sucedera cuando se levate el servidor de express
  console.log(`Servidor levantado exitosamente! ${port}`);
});
