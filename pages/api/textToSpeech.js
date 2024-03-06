import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { text } = req.body;
      const openai = new OpenAI(process.env.OPENAI_API_KEY);

      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: text,
      });

      const buffer = Buffer.from(await mp3.arrayBuffer());
      // Instead of saving the file, directly send the audio buffer as a response
      res.setHeader("Content-Type", "audio/mpeg");
      res.send(buffer);
    } catch (error) {
      console.error("Error generating speech:", error);
      res.status(500).json({ error: "An internal error occurred." });
    }
  } else {
    // Handle any requests that aren't POST
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
