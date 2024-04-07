import React from 'react';
import Modal from 'react-modal';
import { MailSubscribe } from './MailchimpSubscribe'; // Make sure the path is correct

const customStyles = {
  content: {

    display: 'flex', // Use flexbox for content alignment
    flexDirection: 'column', // Align content vertically
    // overflowY: 'auto', // Scrollable content
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
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="About Modal"
      style={customStyles}
    >
      <h2 style={{ textAlign: 'center' }}>About This App</h2>
      <p style={{ textAlign: 'center' }}>This app is designed to help users learn new languages through the power of AI-generated love letters.</p>
      {/* Here we include the MailSubscribe component for newsletter subscription */}
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
