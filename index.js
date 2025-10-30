import express from "express";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Agente IA activo ✅");
});

app.post("/twilio", (req, res) => {
  console.log("📞 Llamada entrante de Twilio:", req.body);
  res.send("<Response><Say>Hola, soy el asistente de reservas</Say></Response>");
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Servidor escuchando...")
);
