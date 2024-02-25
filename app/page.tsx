"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function Home() {
  const [apiResponse, setApiResponse] = useState("");
  const [loveStory, setloveStory] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userName, setUserName] = useState("");

  async function handleGenerateClick() {
    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: userCity,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setloveStory(data.result);
    } catch (error) {
      console.error("Failed to fetch OpenAi response:", error);
      setApiResponse("Failed to fetch response.");
    }
  }

  return (
    <div className="background-image-container">
      <Image
        src="/background_4.png"
        layout="fill"
        objectFit="cover"
        alt="Background Image"
      />
      <div
        className={`backdrop-blur-sm bg-white-300/30 absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rounded-lg border border-1 rgba(255, 255, 255, 0.5)`}
      >
        <div className="relative flex flex-col justify-center items-center bg-gradient-radial">
          <div className=" flex flex-col justify-center items-center bg-gradient-radial">
            {/* Background Image */}
            <div className="project-description-container mt-10">
              {/* Project Description */}
              <h1 className="text-3xl text-white font-bold mb-4">
                Aime-moi chez moi
              </h1>
              <p>
                Enter the name of your city to learn french while living your
                own love story.
              </p>
            </div>
            {/* Forms */}
            {/* OpenAI Form and Button */}
            <div className="flex flex-col items-center mr-8">
              {/* City input field */}
              <textarea
                className="w-[500px] p-4 text-base font-normal border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-pink-500 resize: none h-15 mb-4"
                placeholder="Enter your city name and country."
                value={userCity}
                onChange={(e) => setUserCity(e.target.value)}
              />
              {/* OpenAI output field */}
              <textarea
                className="w-[500px] p-4 text-base font-normal border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-pink-500 resize: none h-40 backdrop-blur-2xl"
                placeholder="Somebody is coming to fall in love with you"
                value={loveStory}
                onChange={(e) => setloveStory(e.target.value)}
              />
              <button
                onClick={handleGenerateClick}
                className="w-full px-4 py-2 bg-pink-500 text-white font-bold rounded hover:bg-pink-700 transition duration-300 mt-4"
              >
                Generate (OpenAI)
              </button>
            </div>
          </div>

          <div className="justify-center mt-auto mb-8 mt-8">
            <a
              href="https://frenchezleo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo.png"
                alt="Frenchez Leo Logo"
                width={50}
                height={25}
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
