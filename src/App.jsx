import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurDoctors from "./pages/OurDoctors";
import OurServices from "./pages/OurServices";
import Appointment from "./pages/Appointment";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 hidden sm:block"> {/* Hide on extra small screens */}
      {/* Centering the container */}
      <div className="max-w-8xl mx-auto px-5 text-center">
        {/* Logo and Title */}
        <div className="mb-8 flex flex-col items-center">
          {/* Image and Text in a row */}
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
            <div className="w-[120px] sm:w-[162px] h-[120px] sm:h-[160px]">
              <img
                src="/logo-1.png"
                alt="Dr. Shibila’s Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-teal-400 text-center sm:text-left">
              Multi Speciality Dental Care
            </h2>
          </div>

          {/* Horizontal Line Below */}
          <hr className="w-3/4 mx-auto mt-4 border-gray-500" />
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-20 text-left w-full max-w-[2000px] px-5 sm:px-10 mx-auto">
          {/* About Us Section */}
          <div className="w-full sm:w-[300px]">
            <h3 className="text-base sm:text-lg font-semibold text-center sm:text-left">About Us</h3>
            <p className="mt-2 text-gray-300 text-sm sm:text-base">
              <span className="font-bold">Dr Shibila’s Dental Clinic</span>, we
              are dedicated to providing top-quality dental care with a focus on
              comfort, innovation, and patient satisfaction.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="w-full sm:w-[340px]">
            <h3 className="text-base sm:text-lg font-semibold text-center sm:text-left">Contact Us</h3>
            <p className="mt-2 text-gray-300 text-sm sm:text-base">
              <span className="font-bold">Address -</span> Sudharma Clinic
              Building, Pengattiri
            </p>
            <p className="mt-2 text-gray-300 text-sm sm:text-base">
              <span className="font-bold">Email -</span>{" "}
              shibilasdentacare@gmail.com
            </p>
            <p className="mt-2 text-gray-300 text-sm sm:text-base">
              <span className="font-bold">Phone -</span> 8921085744
            </p>
          </div>

          {/* Links Section */}
          <div className="text-center sm:text-right pr-0 sm:pr-20">
            <h3 className="text-base sm:text-lg font-semibold">Links</h3>
            <ul className="mt-2 space-y-1 sm:space-y-2">
              <li>
                <a href="#" className="text-gray-300 text-sm sm:text-base hover:text-teal-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm sm:text-base hover:text-teal-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm sm:text-base hover:text-teal-400">
                  Our Doctors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm sm:text-base hover:text-teal-400">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm sm:text-base hover:text-teal-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/doctors" element={<OurDoctors />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/appointment" element={<Appointment />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
