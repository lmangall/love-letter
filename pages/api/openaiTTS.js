import fs from "fs";
import path from "path";
import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { text } = req.body;
      const openai = new OpenAI(process.env.OPENAI_API_KEY);

      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "nova", // Or any desired voice
        input: text,
      });

      const buffer = Buffer.from(await mp3.arrayBuffer());

      const speechFile = path.resolve("./speech.mp3"); // Replace with your desired path
      console.log("Saving audio to:", speechFile);

      await fs.promises.writeFile(speechFile, buffer);

      // You can optionally send a success response here (e.g., res.status(200).json({ message: "Audio generated successfully" }))
    } catch (error) {
      console.error("Error generating speech:", error.message);
      res
        .status(500)
        .json({ error: error.message || "An internal error occurred." });
    }
  } else {
    // Handle any requests that aren't POST
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
