import React, { useState } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://frenchezleo.us18.list-manage.com/subscribe/post?u=78c0ad5362b2cb0b6678423a4&amp;id=b4b4c73250&amp;f_id=002b10e1f0";

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
		<input type="email" name="email" placeholder="Your email" required />
		<button type="submit" disabled={subscriptionStatus === "success"}>{buttonText}</button>
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
