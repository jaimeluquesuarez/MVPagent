import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint de prueba (Render lo usa para verificar que está vivo)
app.get("/", (req, res) => {
  res.send("🤖 Agente de reservas IA activo");
});

// Endpoint de Twilio (aquí llegará la llamada)
app.post("/twilio", (req, res) => {
  console.log("📞 Llamada entrante de Twilio:", req.body);

  // Por ahora, solo respondemos con voz estática
  const twiml = `
    <Response>
      <Say voice="Polly.Conchita">Hola, soy el asistente de reservas. En breve podré tomar tu reserva.</Say>
    </Response>
  `;
  res.type("text/xml");
  res.send(twiml);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Servidor escuchando en puerto ${port}`));
