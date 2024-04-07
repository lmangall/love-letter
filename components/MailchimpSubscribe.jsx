import React, { useState } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://frenchezleo.us18.list-manage.com/subscribe/post?u=78c0ad5362b2cb0b6678423a4&amp;id=b4b4c73250&amp;f_id=002b10e1f0";

// Inside MailchimpSubscribe.jsx or wherever the SimpleForm is defined
const buttonStyle = {
	backgroundColor: 'rgba(255, 255, 255, 0.75)',
	color: 'rgba(0, 0, 0, 0.7)',
	// border: '2px solid rgba(255, 0, 0, 0.5)',
	borderRadius: '8px',
	padding: '4px 4px',
	cursor: 'pointer',
	margin: '20px',
  };

  
const SimpleForm = ({ onFormSubmit, subscriptionStatus }) => {
	const handleSubmit = (event) => {
	  event.preventDefault();
	  const formData = new FormData(event.target);
	  const email = formData.get('email');
	  onFormSubmit({ EMAIL: email });
	};
  
	const buttonText = subscriptionStatus === "success" ? "Subscribed" : "Subscribe";
  
	return (
	  <form onSubmit={handleSubmit}>
		<input className="bg-white h-[30px] bg-opacity-40 hover:bg-purple-100 hover:bg-opacity-20 font-normal border-2 border-white-600 rounded-lg focus:outline-none focus:border-red-100 resize-none"type="email" name="email" placeholder="Your email" required />
		<button type="submit" style={buttonStyle} disabled={subscriptionStatus === "success"}>
		  {buttonText}
		</button>
	  </form>
	);
  };
  
  
// use the render prop and your custom form
const MailSubscribe = () => {
  const [buttonText, setButtonText] = useState("Subscribe");

  const handleSubscribe = (formData) => {
    // Update button text to "sending..." when form is submitted
    setButtonText("sending...");
    // Assuming subscribe is a function passed from the MailchimpSubscribe component
    subscribe(formData);
  }

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
      <div>
        {/* Pass the subscribe function and button text to SimpleForm */}
        <SimpleForm onFormSubmit={formData => handleSubscribe(formData)} buttonText={buttonText} />
        {status === "error" && <div dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "Thank you" && setButtonText("Subscribed!") && <div>Signed in</div>}
      </div>
      )}
    />
  );
};

export { MailSubscribe };
