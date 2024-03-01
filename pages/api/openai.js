export default async function handleGenerateClick(req, res) {
  // Extract both the city and name from the request body
  const {
    userCity,
    userName,
    userGender,
    userOrientation,
    userTaste,
    userTarget,
    isQueer,
    isHot,
  } = req.body;

  // Update the prompt to include specific details about the city and the user's name
  let loveRequest = `Write a story (around 50 words) strictly in ${userTarget} language: a young ${userOrientation} (write at first person) arrives in ${userCity} and falls in love with ${userName} (a "${userGender}" who likes "${userTaste}"). personalize the story with really specific details about "${userCity}" (known places, local events...).`;

  if (isQueer) {
    loveRequest += ` Include queer elements in the story.`;
  }
  if (isHot) {
    loveRequest += ` and Make it hot.`;
  }

  console.log("Sending prompt to OpenAI:", loveRequest); // Log the prompt being sent to OpenAI

  // Create the initial message for OpenAI
  const messages = [{ role: "user", content: loveRequest }];

  try {
    // Call OpenAI API with the prepared message
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Use environment variable for security
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Adjust model as necessary
        messages: messages,
        temperature: 0.9,
      }),
    });

    // Check for successful response and handle accordingly
    if (response.ok) {
      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        const loveStory = data.choices[0].message.content;
        res.status(200).json({ result: loveStory });
      } else {
        res.status(404).json({ error: "No story found from OpenAI." });
      }
    } else {
      const error = await response.text();
      console.error("Error calling OpenAI API:", error);
      res
        .status(500)
        .json({ error: "An error occurred while processing your request." });
    }
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An internal error occurred. Please try again later." });
  }
}
