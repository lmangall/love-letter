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
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-radial">
      <div className="relative h-screen w-full">
        {/* <Image
          src="/background.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        /> */}
        {/* Content goes here */}
      </div>
      <div className="gradient-background relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial from-white to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic from-sky-100 via-blue-100 to-sky-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-500 before:dark:opacity-20 after:dark:from-sky-700 after:dark:via-[#69b3ff] after:dark:opacity-50 before:lg:h-[360px] z-[-1]">
        <Image
          // className="relative dark:drop-shadow-[0_0_0.5rem_#ffffffa0] dark:invert"
          src="/logo.png"
          alt="Frenchez Leo Logo"
          width={50} // Adjust width as needed
          height={25} // Adjust height as needed
          priority
        />
      </div>

      <div className="project-description-container mt-40">
        {/* Project Description */}
        <h1 className="text-3xl font-bold mb-4">API project two</h1>
        <p>
          Enter the name of your city to learn french with your own love story.
        </p>
      </div>
      {/* Forms */}
      <div className="flex items-center justify-center">
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
            className="w-[500px] p-4 text-base font-normal border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-pink-500 resize: none h-40"
            placeholder="Enter text to correct with OpenAI..."
            value={loveStory}
            onChange={(e) => setApiResponse(e.target.value)}
          />
          <button
            onClick={handleGenerateClick}
            className="w-full px-4 py-2 bg-pink-500 text-white font-bold rounded hover:bg-pink-700 transition duration-300 mt-4"
          >
            {" "}
            Generate (OpenAI)
          </button>
        </div>
      </div>

      <div className=" justify-center mt-auto mb-8">
        <a
          href="https://frenchezleo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logo.png"
            alt="Frenchez Leo Logo"
            width={50} // Adjust width as needed
            height={25} // Adjust height as needed
            priority
          />{" "}
        </a>
      </div>
    </div>
  );
}
