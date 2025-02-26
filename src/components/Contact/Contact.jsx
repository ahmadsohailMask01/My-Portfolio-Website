import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Basic Email Validation Function
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Validate Form Fields
  const validateForm = () => {
    const { name, email, message } = formData;
    let formValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!name) {
      formValid = false;
      newErrors.name = "Name is required.";
    }

    if (!email || !validateEmail(email)) {
      formValid = false;
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      formValid = false;
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);
    return formValid;
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Clear form on success
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6 mt-20">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
        Contact Me
      </h2>

      {submitted && (
        <div className="text-blue-500 text-center mb-4">
          Your message has been sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Your Message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300 focus:outline-none"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
