const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mssql");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Configuración de conexión a SQL Server
const config = {
  user: "sa",
  password: "A630RG1A*2017",
  server: "10.100.1.149", // o el nombre del servidor
  database: "OSF",
  options: {
    encrypt: false, // para Azure
  },
};

// Ruta para obtener todos los registros de la tabla
app.get("/record", async (req, res) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query("SELECT TOP 1 * FROM VENTA");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.post("/insertVenta", async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const details = req.body.DETAILS;

    let outputMessage = ""; // Inicializa la variable aquí

    // console.log(req.body);

    for (let detail of details) {
      const request = pool.request();

      request.input("CODIGO_DOCPAGO", sql.VarChar(2), req.body.CODIGO_DOCPAGO);
      request.input(
        "NRO_DOCIDEN_CLIENTE",
        sql.VarChar(15),
        req.body.NRO_DOCIDEN_CLIENTE
      );
      request.input(
        "NRO_DOCIDEN_VENDEDOR",
        sql.VarChar(15),
        req.body.NRO_DOCIDEN_VENDEDOR
      );
      request.input("BRUTO", sql.Decimal(12, 2), req.body.BRUTO);
      request.input("DSCTO", sql.Decimal(12, 2), req.body.DSCTO);
      request.input("SUBTOTAL", sql.Decimal(12, 2), req.body.SUBTOTAL);
      request.input("IMPUESTO", sql.Decimal(12, 2), req.body.IMPUESTO);
      request.input("TOTAL_SP", sql.Decimal(12, 2), req.body.TOTAL_SP);
      request.input(
        "MONTO_PERCEPCION",
        sql.Decimal(12, 2),
        req.body.MONTO_PERCEPCION
      );
      request.input("TOTAL", sql.Decimal(12, 2), req.body.TOTAL);
      request.input("CODIGO_USUARIO", sql.Int, req.body.CODIGO_USUARIO);
      request.input("TARJETAS", sql.Decimal(12, 2), req.body.TARJETAS);
      request.input(
        "SAP_CODIGO_ALMACEN",
        sql.VarChar(8),
        req.body.SAP_CODIGO_ALMACEN
      );
      request.input("ITEM_DETAILS", sql.Int, detail.ITEM_DETAILS);
      request.input("CODIGO_PRODUCTO", sql.VarChar(35), detail.CODIGO_PRODUCTO);
      request.input("CANTIDAD_DETAILS", sql.Int, detail.CANTIDAD_DETAILS);
      request.input(
        "PRECIO_DETAILS",
        sql.Decimal(12, 2),
        detail.PRECIO_DETAILS
      );
      request.input("DSCTO_DETAILS", sql.Decimal(12, 2), detail.DSCTO_DETAILS);
      request.input("TOTAL_DETAILS", sql.Decimal(12, 2), detail.TOTAL_DETAILS);

      request.output("OUTPUTMESSAGE", sql.NVarChar(1000)); // Aquí definimos el parámetro de salida

      const result = await request.execute(
        "PROCEDURE_EJE_INSERT_TEMP_@API_VENTA"
      );
      outputMessage = result.output.OUTPUTMESSAGE; // Actualiza outputMessage aquí

      console.log(outputMessage);

      if (outputMessage.startsWith("ERROR:")) {
        res.status(400).send({ message: outputMessage });
        return; // Si hay un error, se detiene el proceso y se envía el mensaje
      }
    }

    res.send({ message: outputMessage }); // Usa outputMessage aquí para enviar la respuesta
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
