import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object to send as POST data

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    console.log(formData);
    // Send data to Google Apps Script Web App URL
    fetch(
      "https://script.google.com/macros/s/AKfycbxuUledksoyE3d2jJYuGIRKZm5pbTCKvcYKeZLrscfLroRKfFiNTDJZAQHDEpzneqx3/exec",
      {
        // Replace with your actual Google Apps Script URL
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.text())
      .then((data) => {
        setResponseMessage(data); // Show the response message from Google Apps Script
        // Clear form fields
        setName("");
        setEmail("");
        setMessage("");
        // alert
        alert(responseMessage);
      })
      .catch((error) => {
        console.error("Error:", error);
        setResponseMessage("There was an error submitting your form.");
      });
  };

  return (
    <>
      <div className="contact-container">
        <section id="contact-about">
          <h1 className="text-orange-800 uppercase text-3xl font-extrabold">
            Contact Me
          </h1>
          <hr />

          <form onSubmit={handleSubmit} className="mt-9">
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Contact;
