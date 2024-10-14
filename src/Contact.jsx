import React, { useState } from "react";
import image from "../src/assets/image2.jpg";
import image1 from "../src/assets/phone.jpg";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can send the formData to an API or handle it as needed
  };

  return (
    <>
      <div
        className="min-h-screen flex  "
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          // backgroundAttachment: "fixed",
        }}
      >
        <div className=" mt-36 mb-20  items-center w-full">
          <h2 className="text-6xl font-serif text-center mb-20 cursor-pointer">
            Contact Us
          </h2>

          <div className="flex  justify-center pl-32 space-x-36  w-full ">
            {/* Form Section */}
            <div className="w-80 mx-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black border border-black text-white p-2 rounded hover:bg-transparent font-semibold hover:text-black hover:border-black"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Contact Information Section */}
            <div className="  font-serif ">
              <h2 className="text-2xl font-bold mb-4  cursor-pointer">
                Contact Information
              </h2>
              <p>
                <strong>Name:</strong> John Doe
              </p>
              <p>
                <strong>Email:</strong> johndoe@example.com
              </p>
              <p>
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p>
                <strong>Address:</strong> 123 Main Street, Anytown, USA, 12345
              </p>

              <h3 className="text-xl font-bold mt-6">Business Hours</h3>
              <p>
                <strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM
              </p>
              <p>
                <strong>Saturday:</strong> 10:00 AM - 3:00 PM
              </p>
              <p>
                <strong>Sunday:</strong> Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
