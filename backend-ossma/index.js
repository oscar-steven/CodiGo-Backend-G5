import express from "express";
import sql from "mssql";

const app = express();
const PORT = process.env.PORT ?? 3000;

// Configuración de conexión a SQL Server
const config = {
  user: "sa",
  password: process.env.PASSWORD,
  server: process.env.SERVER, // o el nombre del servidor
  database: process.env.BD,
  options: {
    encrypt: false, // para Azure
  },
};

// Ruta para obtener todos los registros de la tabla
app.get("/inventorylpn", async (req, res) => {
  try {
    const lpn = req.query.lpn; // obtener el valor del parámetro de consulta 'lpn'

    if (!lpn) {
      return res
        .status(400)
        .send({ message: "El parámetro 'lpn' es necesario." });
    }

    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input("lpnValue", sql.NVarChar, lpn) // agregar el valor del parámetro como input
      .query(
        "SELECT * FROM VIEWS_API_OSSMA_PICKING_NUEVOLPN_INVENTARIO WHERE LPNINVENTORY=@lpnValue"
      ); // utilizar el input en la consulta

    // Verificar si el resultado está vacío
    if (result.recordset.length === 0) {
      return res
        .status(404)
        .send({ message: `ERROR: El LPN ingresado ${lpn} no existe.` });
    }

    res.json(result.recordset);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

//nuevo

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
