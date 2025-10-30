import twilio from "twilio";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 10000;

// === TU ENDPOINT EXISTENTE ===
app.post("/twilio", (req, res) => {
  res.set("Content-Type", "text/xml");
  res.send(`
    <Response>
      <Say voice="Polly.Conchita">Hola, soy el asistente de reservas. En breve podré tomar tu reserva.</Say>
    </Response>
  `);
});

// === NUEVO ENDPOINT /callme ===
app.get("/callme", async (req, res) => {
  try {
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    const call = await client.calls.create({
      url: "https://mvpagent.onrender.com/twilio",  // tu endpoint de respuesta
      to: process.env.MY_VERIFIED_PHONE,            // tu móvil verificado
      from: process.env.TWILIO_PHONE_NUMBER,        // tu número Twilio
    });

    console.log("📞 Llamada iniciada:", call.sid);
    res.send(`Llamada iniciada correctamente: ${call.sid}`);
  } catch (error) {
    console.error("❌ Error al iniciar llamada:", error);
    res.status(500).send("Error al iniciar llamada");
  }
});

// === INICIO DEL SERVIDOR ===
app.listen(port, () => console.log(`✅ Servidor escuchando en puerto ${port}`));
