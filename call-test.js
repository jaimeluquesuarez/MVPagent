import twilio from "twilio";

const accountSid = "ACd520a9209d5a012e09859cc2bf00d250";
const authToken = "c2bce8ca2bba5e02b01d970cb538c25a";
const client = twilio(accountSid, authToken);

client.calls
  .create({
    url: "https://mvpagent.onrender.com/twilio", // tu endpoint
    to: "+34646786504",              // tu móvil verificado
    from: "+15416954468"          // tu número Twilio (EEUU)
  })
  .then(call => console.log("Llamada iniciada:", call.sid))
  .catch(err => console.error("Error:", err));
