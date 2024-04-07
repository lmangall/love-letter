import React from 'react';
import Modal from 'react-modal';


const customStyles = {
  content: {
    backgroundColor: 'rgba(255, 192, 203, 0.4)', // Semi-transparent pink
    backdropFilter: 'blur(5px)', // Apply a blur effect to the background
    border: '1px solid rgba(255, 255, 255, 0.1)', // Light border
    borderRadius: '12px', // Rounded corners
  },
};


const AboutModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="About Modal"
      style={customStyles} // Use custom styles
    >
      <h2>About This App</h2>
      <p>This app is designed to help users learn new languages through the power of AI-generated love letters.</p>
      <button onClick={onClose} style={{
        backgroundColor: 'rgba(255, 255, 255, 0.75)', // Light background for the button
        color: 'rgba(0, 0, 0, 0.7)', // Slightly dim text color
        border: '2px solid rgba(255, 0, 0, 0.5)', // Reddish border
        borderRadius: '8px', // Rounded corners for the button
        padding: '8px 16px', // Padding inside the button
        cursor: 'pointer', // Cursor to pointer on hover
        marginTop: '20px', // Space above the button
      }}>
        Close
      </button>
    </Modal>
  );
};

export default AboutModal;
