import { useState } from "react";

const useFetchLoveStory = () => {
  const [loveStory, setLoveStory] = useState("");
  const [error, setError] = useState("");

  const fetchLoveStory = async (
    userCity: string,
    userName: string,
    userGender: string,
    userOrientation: string,
    userTaste: string,
    userTarget: string,
    isQueer: boolean,
    isHot: boolean
  ) => {
    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userCity,
          userName,
          userGender,
          userOrientation,
          userTaste,
          userTarget,
          isQueer,
          isHot,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setLoveStory(data.result);
    } catch (error) {
      console.error("Failed to fetch OpenAI response:", error);
      setError("Failed to fetch response.");
    }
  };

  return { fetchLoveStory, loveStory, error };
};

export default useFetchLoveStory;
