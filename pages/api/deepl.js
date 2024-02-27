import * as deepl from "deepl-node";

export default async function translate(req, res) {
  const { text, targetLang = "EN-US" } = req.body;

  const apiKey = process.env.DEEPL_API_KEY;
  if (!apiKey) {
    return res
      .status(500)
      .json({ error: "DEEPL_API_KEY environment variable not defined" });
  }

  const serverUrl = process.env.DEEPL_SERVER_URL;
  const translator = new deepl.Translator(
    apiKey,
    serverUrl ? { serverUrl } : undefined
  );

  try {
    const result = await translator.translateText(text, null, targetLang);
    res.status(200).json({ translatedText: result.text });
  } catch (error) {
    console.error("Translation error:", error);
    res.status(500).json({ error: "Translation failed." });
  }
}
