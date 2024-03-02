"use client";

import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import InputField from "../components/InputField";
import useFetchLoveStory from "../hooks/useFetchLoveStory";
import useTranslateText from "../hooks/useTranslateText";
import SettingsModal from "../components/SettingsModal";
import stripHtml from "../utils/stripHtml";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchLoveStory, loveStory, error } = useFetchLoveStory();
  const [userCity, setUserCity] = useState("");
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("woman");
  const [userOrientation, setUserOrientation] = useState("a man");
  const [userTaste, setUserTaste] = useState("");
  const [userTarget, setTargetLanguage] = useState("french");
  const [isQueer, setIsQueer] = useState(false);
  const [isHot, setIsHot] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { translateText, translations, translationError } = useTranslateText();

  const handleTextSelection = async () => {
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      const text = selection.toString();
      await translateText(text);
    }
  };

  const handleEmailTranslations = () => {
    const emailBody =
      translations.map(stripHtml).join("\n").replace(/#/g, "%23") +
      "\n\n\n" +
      "If you like the app, subscribe to the newsletter (in 'About') - there's more to come,\nlove,\nLeo ❤️"; // Your message

    const subject = "My Translations";
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyNotes = async () => {
    const textToCopy = translations.map(stripHtml).join("\n");
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Translations copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy:", error);
      alert("Failed to copy translations.");
    }
  };

  const readText = async (text: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/textToSpeech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) throw new Error("Failed to convert text to speech");

      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
      const url = URL.createObjectURL(blob);

      // Play the audio
      const audio = new Audio(url);
      audio.play();
    } catch (error) {
      console.error("Error reading text:", error);
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  const audioRef = useRef<HTMLAudioElement>(null);
  const togglePlayPause = () => {
    if (audioRef.current) {
      console.log("Before Pause:", audioRef.current.paused); // Log paused state before pause

      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.src = loveStory; //  source
        audioRef.current.play();
      }

      console.log("After Pause:", audioRef.current.paused); // Log paused state after pause

      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="background-image-container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/background_4.png"
        layout="fill"
        objectFit="cover"
        alt="Background Image"
      />
      <div className="grid  grid-cols-2 w-2/3 gap-4 content-center	m-auto p-24 justify-center ">
        <div className="p-6 backdrop-blur-sm bg-white bg-opacity-40 rounded-lg border border-1 rgba(255, 255, 255, 0.1) h-[80vh]">
          <h1 className="text-3xl text-white font-bold">
            Love letter, love language{" "}
          </h1>
          <p className="mb-8 font-bold">
            An AI powered tool to get some luv while learning a foreign language
            🧠.
          </p>
          <p className="mb-8">
            Fill the fields and click on the button to get your love letter 💌,
            then,
            <span className="rounded-lg">highlight the text</span> to check the
            translation on the right panel 👉
          </p>
          {/* Settings Modal */}
          <SettingsModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            userGender={userGender}
            setUserGender={setUserGender}
            userOrientation={userOrientation}
            setUserOrientation={setUserOrientation}
            userTaste={userTaste}
            setUserTaste={setUserTaste}
            userTarget={userTarget}
            setTargetLanguage={setTargetLanguage}
            isQueer={isQueer}
            setIsQueer={setIsQueer}
            isHot={isHot}
            setIsHot={setIsHot}
          />
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
          <button
            onClick={handleOpenModal}
            className="mb-4 h-10 w-full bg-gray-50 bg-opacity-30  text-slate-400 border border-1  rounded hover:bg-pink-600 mt-4"
          >
            Preferences
          </button>
          <div
            className="bg-white w-full h-full max-h-80 bg-opacity-40 hover:bg-purple-100 hover:bg-opacity-20 p-4 text-base font-normal border-2 border-gray-300 rounded-lg shadow-sm resize-none overflow-auto"
            aria-readonly="true"
            onMouseUp={handleTextSelection}
          >
            {loveStory || "Somebody is on his way..."}
          </div>
          <div className="flex justify-between gap-2">
            <button
              onClick={() => {
                setIsLoading(true); // Trigger loading state
                fetchLoveStory(
                  userCity,
                  userName,
                  userGender,
                  userOrientation,
                  userTaste,
                  userTarget,
                  isQueer,
                  isHot
                ).finally(() => setIsLoading(false)); // Reset loading state
              }}
              className="w-full mt-2 bg-pink-500 hover:bg-pink-500 py-2 text-white font-bold rounded shadow-sm transition duration-150 flex justify-center items-center"
            >
              {isLoading && (
                <div className="spinner"></div> // Spinner appears next to the text
              )}
              Generate {/* Text remains visible */}
            </button>
            <button
              onClick={() => readText(loveStory)}
              className="w-full mt-2 bg-pink-500 hover:bg-pink-500 py-2 text-white font-bold rounded shadow-sm transition duration-150"
            >
              Read Text
            </button>
          </div>
          <audio id="audioPlayer" src="" hidden></audio>{" "}
          {/* Hidden until a source is set */}
          <button onClick={togglePlayPause}>Play/Pause</button>
        </div>
        {/* New column with two rows */}
        <div className="flex flex-col top-[10%] backdrop-blur-sm bg-white-300/30 space-y-4">
          {/* right column*/}
          <div className="flex-1 bg-white bg-opacity-40 rounded-lg p-4 rounded-lg border border-1 whitespace-pre-wrap">
            <div>
              {translations.map((translation, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: translation }}
                />
              ))}
              {translationError && (
                <p className="text-red-500">{translationError}</p>
              )}
            </div>
          </div>
          <button
            onClick={handleCopyNotes}
            className="bg-pink-500 hover:bg-pink-500 py-2 text-white font-bold rounded shadow-sm transition duration-150"
          >
            Copy Translations
          </button>
          <button
            onClick={handleEmailTranslations}
            className="bg-blue-500 hover:bg-blue-600 py-2 text-white font-bold rounded shadow-sm transition duration-150"
          >
            Email Translations
          </button>
        </div>
      </div>
      <div
        className="logo-container"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
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
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
