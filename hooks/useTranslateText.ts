import { useState } from "react";

const useTranslateText = () => {
  const [translatedText, setTranslatedText] = useState<string>("");
  const [translationError, setTranslationError] = useState<string>("");
  const [accumulatedTranslations, setAccumulatedTranslations] = useState("");

  const translateText = async (text: string, targetLang: string = "EN-US") => {
    try {
      const response = await fetch("/api/deepl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, null: targetLang }), //null is for the source language
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTranslatedText(data.translatedText);
      const newTranslation = data.translatedText + "\n";
      setAccumulatedTranslations(
        (prevTranslations) => prevTranslations + newTranslation
      );
    } catch (error) {
      console.error("Failed to fetch DeepL response:", error);
      setTranslationError("Failed to fetch translation.");
    }
  };

  return {
    translateText,
    translatedText,
    translationError,
    accumulatedTranslations,
  };
};

export default useTranslateText;
