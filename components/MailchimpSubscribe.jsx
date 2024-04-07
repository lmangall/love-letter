import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://frenchezleo.us18.list-manage.com/subscribe/post?u=78c0ad5362b2cb0b6678423a4&amp;id=b4b4c73250&amp;f_id=002b10e1f0";

// Updated SimpleForm to accept and handle form submission
const SimpleForm = ({ onFormSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email'); // Assuming the input's name is 'email'
    onFormSubmit({ EMAIL: email }); // The format expected by Mailchimp
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Your email" required />
      <button type="submit">Subscribe</button>
    </form>
  );
};

// use the render prop and your custom form
const MailSubscribe = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        {/* Pass the subscribe function to SimpleForm */}
        <SimpleForm onFormSubmit={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
);

export { MailSubscribe };
