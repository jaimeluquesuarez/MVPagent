# Voice Agent MVP

Este proyecto es un prototipo de agente de reservas por voz para restaurantes.

## 🚀 Cómo desplegar

1. Sube este repositorio a GitHub.
2. En Render:  
   - Crea un **Web Service**  
   - Conecta tu cuenta de GitHub  
   - Selecciona este repositorio  
   - Configura:
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
     - **Instance Type:** Free plan
3. Configura tus variables de entorno:
   - `OPENAI_API_KEY`
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
4. En Twilio, configura tu número:
   - Voice → "A Call Comes In" → URL:
     `https://<tu-app>.onrender.com/twilio`
   - Método: `POST`
