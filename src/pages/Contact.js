import React, { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !email) {
      setErrorMessage("Email is either black or invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!userName) {
      setErrorMessage("Name cannot be left blank");
      return;
    }
    if (!message) {
      setErrorMessage("Message cannon be left blank");
      return;
    }
     // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <>
    <div className="container text-center mt-5">
      <h1>Contact</h1>
    </div>
    <div className="error-messages-container container text-center">
    <p className="error-text">{errorMessage}</p>
    </div>
    <div className="container d-flex justify-content-center">
      <h2>keegananglim@gmail.com</h2>
      {/* <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          className="form-control"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          className="form-control"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="message"
          rows="4"
          cols="50"
          className="form-control"
        ></textarea>

        <button className="btn contact-btn mt-2" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form> */}
    </div>
    </>
  );
}

export default Contact;
