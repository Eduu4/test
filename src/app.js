// src/app.js
import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Ejemplo de endpoint simple
app.get("/", (req, res) => {
  res.json({ mensaje: "API funcionando correctamente 🚀" });
});

// Endpoint para obtener usuarios
app.get("/usuarios", async (req, res) => {
  const result = await pool.query("SELECT * FROM usuarios");
  res.json(result.rows);
});

export default app;