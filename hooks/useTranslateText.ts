import { useState } from "react";

const useTranslateText = () => {
  const [translatedText, setTranslatedText] = useState<string>("");
  const [translationError, setTranslationError] = useState<string>("");

  const translateText = async (text: string, targetLang: string = "EN-US") => {
    try {
      const response = await fetch("/api/deepl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, targetLang }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (error) {
      console.error("Failed to fetch DeepL response:", error);
      setTranslationError("Failed to fetch translation.");
    }
  };

  return { translateText, translatedText, translationError };
};

export default useTranslateText;
