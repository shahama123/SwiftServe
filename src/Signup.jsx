import React, { useState } from "react";
import image from "../src/assets/signup.jpg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can send the formData to an API or handle it as needed
  };
  return (
    <div
      className="min-h-screen max-h-screen flex overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-xs items-center mx-auto p-4   ">
        <h2 className="text-6xl font-serif text-center mt-10 cursor-pointer mb-10">
          Sign In
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Username
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
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              onClick={() => navigate("/home")}
              className=" flex justify-center bg-black mt-5 text-white p-2 rounded w-32 hover:bg-slate-800"
            >
              sign in
            </button>
          </div>

          <p className="text-lg mt-5 text-blacktext-center">
            Don't have an account?{" "}
            <a href="sign up" className="hover:underline">
              sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
