
import React from 'react';
import SelectField from './SelectField';

const SettingsModal = ({ isOpen, onClose, userGender, setUserGender, userOrientation, setUserOrientation, userTaste, setUserTaste, userTarget, setTargetLanguage, isQueer, setIsQueer, isHot, setIsHot}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="p-6 bg-pink-300 bg-opacity-80 fixed top-[10%] left-1/2 transform -translate-x-1/2 rounded-lg border border-1 overflow-hidden">
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
        <div className="mb-4">
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
            <div className="mb-4">
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
    <span className="ml-2">I identify as queer <span className="text-purple-300">#berlin</span></span>
  </label>

          {/* Hot Checkbox */}
          <label className="inline-flex items-center">
    <input
      type="checkbox"
      className="form-checkbox"
      checked={isHot}
      onChange={(e) => setIsHot(e.target.checked)}
    />
    <span className="ml-2">Make it <span className="text-red-500">hot</span></span>
  </label>

        {/* Taste Input */}
        <div className="">
          <input
    className="bg-white h-[60px] w-full bg-opacity-40 hover:bg-purple-100 hover:bg-opacity-20 font-normal border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 resize-none"
    type="text"
            placeholder="Enter your taste."
            value={userTaste}
            onChange={(e) => setUserTaste(e.target.value)}
          />
        </div>
        {/* Close Button */}
        <div className="text-center">
          <button
            onClick={onClose}
			className="bg-pink-500 bg-opacity-70 hover:bg-pink-500 px-4 py-2 text-white font-bold rounded hover:bg-pink-700 transition duration-300 mt-4"
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
