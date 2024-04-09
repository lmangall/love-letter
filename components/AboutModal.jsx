import React from 'react';
import Modal from 'react-modal';
import { MailSubscribe } from './MailchimpSubscribe'; // Make sure the path is correct

const customStyles = {
  content: {
    display: 'flex', // Use flexbox for content alignment
    flexDirection: 'column', // Align content vertically
    backgroundColor: 'rgba(255, 192, 203, 0.4)', // Semi-transparent pink
    backdropFilter: 'blur(5px)', // Apply a blur effect to the background
    border: '1px solid rgba(255, 255, 255, 0.1)', // Light border
    borderRadius: '12px', // Rounded corners
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
  },
  overlay: {
    display: 'flex', // Flex display to center the modal box
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
  },
};

const AboutModal = ({ isOpen, onClose }) => {
  // Assuming your project's 'public' directory is served at the root URL
  const techStackImages = [
    { src: "/tech_stack_picture/openai.png", alt: "OpenAI" },
    { src: "/tech_stack_picture/DeepL.png", alt: "Deepl" },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="About Modal"
      style={customStyles}
    >
      <h2 style={{ textAlign: 'center' }}>About This App</h2>
      <h2 style={{ textAlign: 'center' }}>🥖 + 🍑 = 💌</h2>
      <p style={{ textAlign: 'center' }}>This app is designed to help users learn new languages through the power of AI-generated love letters.</p>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        This app marries my background in French education with my new coding skills.
      </p>
      <p style={{ textAlign: 'center' }}>
      I got more language learning apps in the making: fun one and usefull ones. Stay updated by signing up for our newsletter.
      </p>
      <p style={{ textAlign: 'center' }}>
        The tech stack (my first time with all of those) Node.js, Next.js, JavaScript, React, and Tailwind CSS.
      </p>
      <p style={{ textAlign: 'center' }}>
        This application integrates two APIs: OpenAI for text creation and text-to-speech functionality, and DeepL for translating text.
      </p>
      
      {/* Tech Stack Images */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {techStackImages.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} style={{ maxWidth: '40px', maxHeight: '40px' }} />
        ))}
      </div>

      <MailSubscribe />
      <button onClick={onClose} style={{
        backgroundColor: 'rgba(255, 255, 255, 0.75)', 
        color: 'rgba(0, 0, 0, 0.7)', 
        border: '2px solid rgba(255, 0, 0, 0.5)', 
        borderRadius: '8px',
        padding: '8px 16px',
        cursor: 'pointer',
        marginTop: '20px',
      }}>
        Close
      </button>
    </Modal>
  );
};

export default AboutModal;
