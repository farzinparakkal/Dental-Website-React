import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Animation.css'

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Trigger animation after load
    setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Delay for animation
  }, []);

  return (
    <div>
      <div className={`relative w-full overflow-hidden h-[850px] ${
          isLoaded ? "fade-in" : "fade-out"
        }`}>
        {/* Navbar */}
        <nav className="relative w-[90%] mx-auto bg-white bg-opacity-90 shadow-md px-4 flex justify-between items-center z-50 rounded-[20px] top-3">
          {/* Logo */}
          <img
            src="/logo-1.png"
            alt="Dr. Smile's Logo"
            className="w-[60px] md:w-[72px] h-auto"
          />

          {/* Desktop Navigation (Hidden on Small Screens) */}
          <ul className="hidden md:flex space-x-6 text-[#00A99D] font-medium text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-teal-500 hover:underline decoration-teal-500"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-teal-500 hover:underline decoration-teal-500"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/doctors"
                className="hover:text-teal-500 hover:underline decoration-teal-500"
              >
                OUR DOCTORS
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-teal-500 hover:underline decoration-teal-500"
              >
                OUR SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-teal-500 underline underline-offset-4 decoration-teal-500 decoration-2 transition-all duration-300"
              >
                CONTACT US
              </Link>
            </li>
          </ul>

          {/* Button (Hidden on Small Screens) */}
          <Link to="/appointment" className="hidden md:block">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-full font-medium text-sm md:text-base lg:text-lg shadow-md hover:bg-teal-600">
              MAKE APPOINTMENT
            </button>
          </Link>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-teal-600 text-2xl sm:text-3xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Mobile Navigation Menu */}
          <div
            className={`absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <Link
              to="/"
              className="text-gray-700 text-base sm:text-lg md:text-xl hover:text-teal-500"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-gray-700 text-base sm:text-lg md:text-xl hover:text-teal-500"
            >
              ABOUT US
            </Link>
            <Link
              to="/doctors"
              className="text-gray-700 text-base sm:text-lg md:text-xl hover:text-teal-500"
            >
              OUR DOCTORS
            </Link>
            <Link
              to="/services"
              className="text-gray-700 text-base sm:text-lg md:text-xl hover:text-teal-500"
            >
              OUR SERVICES
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 text-base sm:text-lg md:text-xl hover:text-teal-500"
            >
              CONTACT US
            </Link>
            <Link to="/appointment">
              <button className="bg-teal-500 text-white px-4 py-2 rounded-full font-medium text-base sm:text-lg md:text-xl shadow-md hover:bg-teal-600">
                MAKE APPOINTMENT
              </button>
            </Link>
          </div>
        </nav>

        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full min-h-screen bg-cover bg-center transition-all ease-out duration-1000"
          style={{ backgroundImage: `url('/bg-img-1.png')` }}
        ></div>

        {/* Content Box */}
        <div className="relative z-10 flex flex-col items-start justify-center text-white w-full max-w-[90%] sm:max-w-[550px] h-auto sm:h-[287px] rounded-[40px] border border-[#20B4A9] bg-[#20B4A961] px-4 sm:pl-10 mt-20 sm:mt-40 mx-auto">
          <h1 className="text-[36px] sm:text-[46px] font-bold leading-[50px] sm:leading-[70px]">
            Contact Us
          </h1>
          <h3 className="text-[24px] leading-[30px] font-bold">
            Home &gt; Contact Us
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
        {/* Heading Section */}
        <h2 className="text-3xl font-bold text-teal-600">Send a Message</h2>
        <p className="text-lg text-gray-700 mt-1 mb-6">
          Send a Message We Are Here to Help You
        </p>

        {/* Form */}
        <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
          {/* Name & Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full p-3 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 mt-4 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 mt-4 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 mt-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-bold py-3 mt-6 rounded-full shadow-md hover:bg-teal-600 transition"
          >
            Send Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
