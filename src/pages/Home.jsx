import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MakeAppointment from "../components/MakeAppoinment";
import FrameOne from "../components/FrameOne";
import ServicesScroll from "../components/ServicesScroll";
import FrameTwo from "../components/FrameTwo";
import './Animation.css'

const images = ["/slide-s1.png", "/slide-s2.png", "/slide-s3.png"];

const doctors = [
  {
    image: "/doctors/doctor-1.jpeg",
  },
  {
    image: "/doctors/doctor-2.jpeg",
  },
  {
    image: "/doctors/doctor-3.jpeg",
  },
  {
    image: "/doctors/doctor-4.jpeg",
  },
  {
    image: "/doctors/doctor-5.jpeg",
  },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const doctorsPerPage = 4;
  const [isLoaded, setIsLoaded] = useState(false);
      
        useEffect(() => {
          window.scrollTo(0, 0);
      
          // Trigger animation after load
          setTimeout(() => {
            setIsLoaded(true);
          }, 100); // Delay for animation
        }, []);

  const nextSlide = () => {
    if (startIndex + doctorsPerPage < doctors.length) {
      setStartIndex(startIndex + doctorsPerPage);
    }
  };

  const prevSlide = () => {
    if (startIndex - doctorsPerPage >= 0) {
      setStartIndex(startIndex - doctorsPerPage);
    }
  };

  useEffect(() => {
    const cycleImages = () => {
      setTimeout(() => setCurrentImage(1), 3000);
      setTimeout(() => setCurrentImage(2), 4000);
      setTimeout(() => setCurrentImage(0), 7000);
    };
    cycleImages();
    const interval = setInterval(cycleImages, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

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
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content Box */}
        <div className="relative z-10 flex flex-col items-start justify-center text-white w-full max-w-[90%] sm:max-w-[650px] h-auto sm:h-[287px] rounded-[40px] border border-[#20B4A9] bg-[#20B4A961] px-4 sm:pl-10 mt-20 sm:mt-40 mx-auto">
          <h1 className="text-[36px] sm:text-[46px] font-bold italic leading-[50px] sm:leading-[70px]">
            Caring for Your <span className="text-[#FFF01B]">Smile</span>, One
            Visit at a Time!
          </h1>
          <Link to="/services">
            <button className="mt-4 px-6 py-3 bg-teal-500 rounded-full text-white font-semibold shadow-lg hover:bg-teal-600">
              Explore our services
            </button>
          </Link>
        </div>

        {/* Navigation Arrows - Adjusted for Small Screens */}
        <div className="absolute top-24 right-4 md:right-8 flex space-x-4 z-50">
          <button
            onClick={handlePrev}
            className="text-black p-3 rounded-full shadow-lg hover:bg-gray-200 bg-[#20B4A9]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.75 7.74978H1M1 7.74978L6.15625 1M1 7.74978L6.15625 14.4996"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full shadow-lg hover:bg-gray-200 border-2 border-[#20B4A9]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7.74978H14.75M14.75 7.74978L9.59375 1M14.75 7.74978L9.59375 14.4996"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <FrameOne />

      <ServicesScroll />
      <div className="relative flex flex-col items-center py-10 px-4 bg-gray-50">
        <div className="text-[35px] font-medium leading-[43px] text-center">
          Our Doctor's Team
        </div>
        <div className="text-[48px] font-bold leading-[60px] text-[#63BEB8] text-center mt-10">
          Check Out Our Experienced Doctors
        </div>

        {/* Image Container */}
        <div className="flex flex-col items-center text-center mt-10 px-4">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto">
            {/* Background Image */}
            <img
              src="" // Replace with actual path
              alt=""
              className="absolute bottom-6 sm:bottom-8 w-full h-full rounded-[30px] sm:rounded-[45px] shadow-lg rotate-[-5deg]"
              style={{ border: "10px solid #20B2AA" }}
            />
            {/* Foreground Image */}
            <img
              src="/doctors/doctor-m1.jpeg"
              alt="Dr. Ayshathul Shibila"
              className="relative w-full h-auto rounded-xl shadow-xl"
            />
          </div>

          {/* Doctor's Name */}
          <h2 className="mt-4 text-xl sm:text-2xl font-bold text-black">
            DR. AYSHATHUL SHIBILA (BDS)
          </h2>

          {/* Position */}
          <p className="text-lg sm:text-xl font-semibold text-[#63BEB8]">
            CHIEF DENTAL SURGEON
          </p>
        </div>

        {/* Navigation Arrows (Positioned Correctly) */}
        <div className="w-full flex justify-end mt-4 px-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full shadow-lg hover:bg-gray-100 transition  bg-[#20B4A9]"
            disabled={startIndex === 0}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.75 7.74978H1M1 7.74978L6.15625 1M1 7.74978L6.15625 14.4996"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition disabled:opacity-50 ml-2 border-2 border-[#20B4A9]"
            disabled={startIndex + doctorsPerPage >= doctors.length}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7.74978H14.75M14.75 7.74978L9.59375 1M14.75 7.74978L9.59375 14.4996"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Doctor Cards (Only show 4 at a time) */}
        <div className="relative flex items-center w-full max-w-7xl overflow-hidden mt-4">
          <div className="flex gap-4 transition-transform duration-300 ease-in-out overflow-x-auto md:overflow-hidden flex-wrap justify-center">
            {doctors
              .slice(startIndex, startIndex + doctorsPerPage)
              .map((doctor, index) => (
                <Link
                  to="/doctors"
                  key={index}
                  className="bg-teal-500 rounded-2xl flex flex-col items-center justify-center shadow-lg"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-[400px] h-[267px] rounded-[30px] object-cover sm:w-[300px] sm:h-[200px] xs:w-[250px] xs:h-[180px]"
                  />
                </Link>
              ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 mt-4">
          {[0, doctorsPerPage].map((index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                startIndex === index ? "bg-teal-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <FrameTwo />
      <div>
        <div className="text-center text-[35px] leading-[43px] font-semibold">
          Make an Appointment
        </div>
        <div className="text-center text-[48px] font-bold leading-[60px] text-[#20B4A9]">
          Make an Appointment to visit the Doctor
        </div>
        <MakeAppointment />
      </div>
    </div>
  );
};

export default Home;
