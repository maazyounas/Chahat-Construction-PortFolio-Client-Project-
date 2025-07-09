import { useEffect } from "react";
import "./chatbotStyles.css";
const Chatbot = () => {
  useEffect(() => {
    // Inject Botpress Webchat script
    const webchatScript = document.createElement("script");
    webchatScript.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    webchatScript.async = true;
    document.body.appendChild(webchatScript);

    // Inject Botpress bot configuration script
    const configScript = document.createElement("script");
    configScript.src = "https://files.bpcontent.cloud/2025/02/21/13/20250221135658-K6CLZ9QT.js";
    configScript.async = true;
    document.body.appendChild(configScript);

    return () => {
      // Cleanup scripts when the component unmounts
      document.body.removeChild(webchatScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return null; // No visible UI, just loading the chatbot
};

export default Chatbot;
