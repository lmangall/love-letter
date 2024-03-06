export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { text } = req.body;
      const openai = new OpenAI(process.env.OPENAI_API_KEY);

      const response = await openai.audio.speech.create({
        model: "tts-1",
        voice: "nova",
        input: text,
      });

      console.log("API Response Status:", response.status);
      console.log("API Response Text:", await response.text()); // Log response body for debugging

      const buffer = Buffer.from(await response.arrayBuffer());
      console.log("Buffer Size:", buffer.length); // Check buffer size for validity

      // You can optionally send a success response with the buffer data here (e.g., res.status(200).json({ buffer }))
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
