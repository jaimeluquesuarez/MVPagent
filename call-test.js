import twilio from "twilio";

const accountSid = "TU_ACCOUNT_SID";
const authToken = "TU_AUTH_TOKEN";
const client = twilio(accountSid, authToken);

client.calls
  .create({
    url: "https://mvpagent.onrender.com/twilio", // tu endpoint
    to: "+34TU_NUMERO_VERIFICADO",              // tu móvil verificado
    from: "+15673714886",                       // tu número Twilio (EEUU)
  })
  .then(call => console.log("Llamada iniciada:", call.sid))
  .catch(err => console.error("Error:", err));
