import * as deepl from "deepl-node";

const apiKey = process.env.DEEPL_API_KEY;
if (!apiKey) {
  throw new Error("DEEPL_API_KEY environment variable not defined");
}

// Optionally, specify the DeepL server URL via environment variables
const serverUrl = process.env.DEEPL_SERVER_URL;

// Create a translator instance
const translator = new deepl.Translator(
  apiKey,
  serverUrl ? { serverUrl } : undefined
);

// Function to translate text using the DeepL API
export const translateTextWithDeepL = async (text, targetLang = "EN-US") => {
  try {
    // Perform the translation
    const result = await translator.translateText(text, null, targetLang);

    // Return the translated text
    return result.text;
  } catch (error) {
    console.error("Translation error:", error);
    return "Translation failed.";
  }
};

(async () => {
  try {
    // Replace 'Hello, world!' with  source text and 'FR' with your target language code
    const translatedText = await translateTextWithDeepL("Hello, world!", "FR");
    console.log(translatedText); // Outputs translated text
  } catch (error) {
    console.error(error);
  }
})();
