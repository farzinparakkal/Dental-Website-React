import React, { useState, useEffect } from "react";
import './Animation.css'

import { Link } from "react-router-dom";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFrontImage1, setIsFrontImage1] = useState(true);
  const [isFrontImage2, setIsFrontImage2] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
    
      useEffect(() => {
        window.scrollTo(0, 0);
    
        // Trigger animation after load
        setTimeout(() => {
          setIsLoaded(true);
        }, 100); // Delay for animation
      }, []);

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setIsFrontImage1((prev) => !prev);
    }, 4000);

    const intervalId2 = setInterval(() => {
      setIsFrontImage2((prev) => !prev);
    }, 4000);

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
    };
  }, []);

  const backImageSrc1 = isFrontImage1 ? "/img-2-8.png" : "/img-2-2.png";
  const frontImageSrc1 = isFrontImage1 ? "/img-2-2.png" : "/img-2-8.png";

  const backImageSrc2 = isFrontImage2 ? "/img-2-9.png" : "/img-2-1.png";
  const frontImageSrc2 = isFrontImage2 ? "/img-2-1.png" : "/img-2-9.png";
  return (
    <div>
      <div className={`relative w-full overflow-hidden h-[850px] ${isLoaded ? "fade-in" : "fade-out"}`}>
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
                className="hover:text-teal-500 underline underline-offset-4 decoration-teal-500 decoration-2 transition-all duration-300"
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
                className="hover:text-teal-500 hover:underline decoration-teal-500"
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
            About Us
          </h1>
          <h3 className="text-[24px] leading-[30px] font-bold">
            Home &gt; About Us
          </h3>
        </div>
      </div>
      <div className="mb-10">
        <div className="px-10 md:px-20 py-12 max-w-[1440px] mx-auto">
          <div className="px-4 md:px-10 lg:px-16 text-center md:text-left">
            <h3 className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-medium leading-tight pl-20">
              Respected greetings from,
            </h3>
            <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold leading-tight mt-2 text-[#00A99D]">
              Dr Shibila’s Multispeciality Dental Care
            </h1>
            <p className="text-[20px] sm:text-[28px] md:text-[35px] lg:text-[40px] font-medium leading-tight mt-2 text-black text-right pr-0 sm:pr-[50px] md:pr-[80px] lg:pr-[120px]">
              - Grow Up With Smiling....!
            </p>
          </div>

          <div className="w-full max-w-[1328.96px] gap-16 flex flex-col-reverse lg:flex-row items-center lg:justify-between px-4 md:px-8 py-10 mt-[40px]">
            <div className="w-full lg:w-[763px] h-auto lg:h-[378px] text-center lg:text-left mt-6 lg:mt-[87px]">
              <p className="text-gray-700 text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-medium leading-[35px] sm:leading-[40px] md:leading-[45px]">
                <span>At Dr Shibila’s Multispeciality Dental Care</span>, we are
                dedicated to providing top-quality dental care with a focus on
                comfort, innovation, and patient satisfaction. Our team of
                experienced dentists and specialists use advanced technology to
                offer comprehensive treatments, from routine check-ups to
                specialized procedures.
              </p>
            </div>

            <div className="relative flex justify-center mb-8 lg:mb-0">
              {/* Back Image 1*/}
              <div
                className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] rounded-[30px] sm:rounded-[45px] border-[10px] sm:border-[15px] bg-white overflow-hidden"
                style={{
                  transform: "rotate(21deg)",
                  borderColor: "#20B4A9",
                }}
              >
                <img
                  src={backImageSrc1}
                  alt="Dental Clinic"
                  className="w-full h-full object-cover rounded-[30px] sm:rounded-[45px]"
                />
              </div>

              {/* Front Image 1*/}
              <div
                className="absolute top-[-80px] sm:top-[-50px] md:top-[-80px] lg:top-[-100px] left-2 sm:left-4 md:left-6 lg:left-8 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] rounded-[20px] sm:rounded-[30px] shadow-lg bg-white overflow-hidden mt-[150px] border shadow-black/40"
                style={{
                  transform: "rotate(21deg)",
                }}
              >
                <img
                  src={frontImageSrc1}
                  alt="Dental Clinic"
                  className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1328.96px] gap-16 flex flex-col-reverse lg:flex-row items-center lg:justify-between px-4 md:px-8 py-10 mt-[40px] mx-auto">
          <div className="relative flex justify-center mb-8 lg:mb-0">
            {/* Back Image 1*/}
            <div
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] rounded-[30px] sm:rounded-[45px] border-[10px] sm:border-[15px] bg-white overflow-hidden"
              style={{
                transform: "rotate(21deg)",
                borderColor: "#20B4A9",
              }}
            >
              <img
                src={backImageSrc2}
                alt="Dental Clinic"
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[45px]"
              />
            </div>

            {/* Front Image 1*/}
            <div
              className="absolute top-[-80px] sm:top-[-50px] md:top-[-80px] lg:top-[-100px] left-2 sm:left-4 md:left-6 lg:left-8 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] rounded-[20px] sm:rounded-[30px] shadow-lg bg-white overflow-hidden mt-[150px] border shadow-black/40"
              style={{
                transform: "rotate(21deg)",
              }}
            >
              <img
                src={frontImageSrc2}
                alt="Dental Clinic"
                className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px]"
              />
            </div>
          </div>
          <div className="w-full lg:w-[763px] h-auto lg:h-[378px] text-center lg:text-left mt-6 lg:mt-[87px]">
            <p className="text-gray-700 text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-medium leading-[35px] sm:leading-[40px] md:leading-[45px]">
              We believe in a patient-first approach, ensuring personalized care
              in a friendly and relaxing environment. Whether you need
              preventive care, cosmetic enhancements, or restorative treatments,
              we are here to help you achieve a healthy, beautiful smile.Your
              oral health is our priority, and we strive to make every visit a
              positive experience. Book an appointment today and experience
              world-class dental care with us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
