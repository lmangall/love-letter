"use client";

import React, { useState } from "react";
import Image from "next/image";
import InputField from "../components/InputField";
import Button from "../components/Button";
import useFetchLoveStory from "../hooks/useFetchLoveStory";
import useTranslateText from "../hooks/useTranslateText";
import SettingsModal from "../components/SettingsModal"; // Import the modal component

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [userCity, setUserCity] = useState("");
  const [userName, setUserName] = useState("");
  const { fetchLoveStory, loveStory, error } = useFetchLoveStory();
  const [userGender, setUserGender] = useState("woman");
  const [userOrientation, setUserOrientation] = useState("a man");
  const [userTaste, setUserTaste] = useState("");
  const [userTarget, setTargetLanguage] = useState("");
  const [isQueer, setIsQueer] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const stripHtml: (html: string) => string = (html) => {
    // A simple way to remove HTML tags from a string
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const { translateText, translations, translationError } = useTranslateText();

  const handleTextSelection = async () => {
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      const text = selection.toString();
      await translateText(text, "FR"); // Or any target language code
    }
  };

  const handleEmailTranslations = () => {
    const emailBody = translations
      .map(stripHtml)
      .join("\n")
      .replace(/#/g, "%23");
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

  return (
    <div className="background-image-container">
      <Image
        src="/background_4.png"
        layout="fill"
        objectFit="cover"
        alt="Background Image"
      />
      <div className="grid grid-cols-2 w-2/3 gap-4 content-center	m-auto p-24 justify-center ">
        <div className="flex p-6 backdrop-blur-sm bg-white-300/30 rounded-lg border border-1 rgba(255, 255, 255, 0.1) h-[80vh]">
          <div className=" flex flex-col items-center overflow-hidden h-full">
            <div className="flex flex-col items-center bg-gradient-radial ">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl text-white font-bold mb-4">
                  Gimme love
                </h1>
                <p className="mb-8 bold">
                  Enter the name of your city to learn french while living your
                  own love story.
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
                />
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
              <button
                onClick={handleOpenModal}
                className=" m-1 mb-4 w-full bg-pink-500 bg-opacity-70 hover:bg-pink-500 px-4 py-2 text-white font-bold rounded hover:bg-pink-600  mt-4"
              >
                Preferences
              </button>
              <div
                className="flex bg-white w-full min-h-[200px] max-h-[30vh] bg-opacity-40 hover:bg-purple-100 hover:bg-opacity-20 p-4 text-base font-normal border-2 border-gray-300 rounded-lg shadow-sm resize-none overflow-y-auto"
                aria-readonly="true"
                onMouseUp={handleTextSelection} // This ensures text selection triggers the translation
              >
                {loveStory || "Somebody is on his way..."}
              </div>
              <Button
                onClick={() =>
                  fetchLoveStory(
                    userCity,
                    userName,
                    userGender,
                    userOrientation,
                    userTaste,
                    userTarget,
                    isQueer
                  )
                }
              >
                Generate (be patient)
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
            {/* Display translated text here */}
          </div>
        </div>
        {/* New column with two rows */}
        {/* <div className="flex p-6 fixed top-[10%] right-1/2 rounded-lg border border-1 rgba(255, 255, 255, 0.1) h-[80vh] overflow-hidden space-x-4"> */}
        <div className="flex flex-col top-[10%] backdrop-blur-sm bg-white-300/30 space-y-4">
          {/* Cell 1 */}
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
            className="m-1 mb-4 bg-pink-500 bg-opacity-70 hover:bg-pink-500 px-4 py-2 text-white font-bold rounded hover:bg-pink-600 mt-4"
          >
            Copy translations
          </button>
          <button
            onClick={handleEmailTranslations}
            className="m-1 mb-4 bg-pink-500 bg-opacity-70 hover:bg-pink-500 px-4 py-2 text-white font-bold rounded hover:bg-pink-600 mt-4"
          >
            Email translations
          </button>
        </div>
      </div>
    </div>
  );
}
