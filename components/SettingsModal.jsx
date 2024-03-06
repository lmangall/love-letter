import React, { useState, useEffect, useRef } from 'react'; // Add useRef here
import SelectField from './SelectField';


function SettingsModal({
  isOpen,
  onClose,
  userGender,
  setUserGender,
  userOrientation,
  setUserOrientation,
  userTaste,
  setUserTaste,
  userTarget,
  setTargetLanguage,
  isQueer,
  setIsQueer,
  isHot,
  setIsHot,
}) {
  

  // Add the `contains` method within the component:
  //call this function in a click event listener to see if the clicked element (target) is outside the modal (!contains(target))
  const contains = (target) => {
    const modalNode = document.getElementById("settings-modal");
    return modalNode && modalNode.contains(target);
  }

  // Create a ref for the modal container
  const modalRef = useRef(null);
  //useRef hook allows to create a mutable reference object that persists throughout the component's lifecycle
  //Unlike state (useState), the value stored in useRef doesn't trigger a re-render when updated.

  // Handle click outside the modal to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      //Checks if the modal is currently open && if the clicked element (event.target) is not inside the modal container.
      if (isOpen && !modalRef.current?.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener on mount, remove on unmount
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, onClose, modalRef]); // Update effect when isOpen, onClose, or modalRef change

  // Handle escape key press to close
  useEffect(() => {
    const handleEscape = (event) => {
      if (isOpen && event.key === 'Escape') {
        onClose();
      }
    };

    // Add event listener on mount, remove on unmount
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]); // Update effect when isOpen or onClose change  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div ref={modalRef} className="p-6 bg-pink-300 bg-opacity-50 fixed top-[10%] left-1/2 transform -translate-x-1/2 rounded-lg border border-1 overflow-hidden">
        <h2 className="text-xl text-center font-bold mb-4">Settings</h2>
        {/* Gender Select */}
        <div className="">
          <SelectField
            value={userGender}
            onChange={(e) => setUserGender(e.target.value)}
            options={[
              { value: "woman", label: "I identify as a woman" },
              { value: "man", label: "I identify as a man" },
              { value: "non-binary person", label: "I am Non-binary" },
            ]}
          />
        </div>
        {/* Orientation Select */}
        <div className="">
          <SelectField
            value={userOrientation}
            onChange={(e) => setUserOrientation(e.target.value)}
            options={[
              { value: "man", label: "I am attracted to men" },
              { value: "woman", label: "I am attracted to women" },
              { value: "bisexual", label: "I am bisexual" },
            ]}
          />
</div>
          {/* Target language*/}
            <div className="">
          <SelectField
            value={userTarget}
            onChange={(e) => setTargetLanguage(e.target.value)}
            options={[
              { value: "french", label: "I want to learn french" },
              { value: "german", label: "I want to learn german" },
              { value: "spanish", label: "I want to learn spanish" },
              { value: "italian", label: "I want to learn italian" },
              { value: "polish", label: "I want to learn polish" },
            ]}
          />
        </div>
          {/* Queer Checkbox */}
<div className="mb-4">
  <label className="inline-flex items-center">
    <input
      type="checkbox"
      className="form-checkbox"
      checked={isQueer}
      onChange={(e) => setIsQueer(e.target.checked)}
    />
    <span className="ml-2">I am queer ️‍🏳️‍🌈 <span className="font-semibold ">#MadeInBerlin</span></span>
  </label>

          {/* Hot Checkbox */}
          <label className="inline-flex items-center">
    <input
      type="checkbox"
      className="form-checkbox"
      checked={isHot}
      onChange={(e) => setIsHot(e.target.checked)}
    />
    <span className="ml-2">Make it  <span className="text-red-500 font-bold">🔥HOT🔥 </span></span>
  </label>

        {/* Taste Input */}
        <div className="mt-4 ">
          <input
    className="bg-white h-[30px] w-full bg-opacity-40 hover:bg-purple-100 hover:bg-opacity-20 font-normal border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 resize-none"
    type="text"
            placeholder="Enter stuff you like..."
            value={userTaste}
            onChange={(e) => setUserTaste(e.target.value)}
            />
        </div>
        {/* Close Button */}
        <div className="text-center">
          <button
            onClick={onClose}
      className="bg-red-500 bg-opacity-70 hover:bg-red-500 px-4 py-2 text-white font-bold rounded hover:bg-red-700 transition duration-300 mt-4"
      >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SettingsModal;
