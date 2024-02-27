"use client";

import React, { useState } from "react";
import Image from "next/image";
import InputField from "../components/InputField";
import Button from "../components/Button";
import useFetchLoveStory from "../hooks/useFetchLoveStory";

export default function Home() {
  const [userCity, setUserCity] = useState("");
  const [userName, setUserName] = useState("");
  const { fetchLoveStory, loveStory, error } = useFetchLoveStory();

  return (
    <div className="background-image-container">
      <Image
        src="/background_4.png"
        layout="fill"
        objectFit="cover"
        alt="Background Image"
      />
      <div className="p-6 backdrop-blur-sm bg-white-300/30 absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] rounded-lg border border-1 rgba(255, 255, 255, 0.1)">
        <div className="relative flex flex-col justify-center items-center bg-gradient-radial">
          <div className=" flex flex-col justify-center items-center bg-gradient-radial">
            <div className="project-description-container mt-10">
              <h1 className="text-3xl text-white font-bold mb-4">
                Aime-moi chez moi
              </h1>
              <p className="w-[500px]">
                Enter the name of your city to learn french while living your
                own love story.
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <InputField
                placeholder="Enter your city."
                value={userCity}
                onChange={(e) => setUserCity(e.target.value)}
              />
              <InputField
                placeholder="Enter your name."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <textarea
              className="bg-white bg-opacity-40 hover:bg-purple-100 hover:bg-opacity-20 w-[500px] p-4 text-base font-normal border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-pink-500 resize:none h-60 backdrop-blur-2xl"
              placeholder="Somebody is coming to fall in love with you"
              value={loveStory}
              readOnly
            />
            <Button onClick={() => fetchLoveStory(userCity, userName)}>
              Generate (OpenAI)
            </Button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div className="justify-center mb-8 mt-8">
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
