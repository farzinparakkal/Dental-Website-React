import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Animation.css'

const services = [
  {
    title: "Root Canal Treatment",
    description:
      "A root canal is a treatment to remove infection from a tooth and save it from further damage.",
    image: "/services/service-1.png",
  },
  {
    title: "Dental Scaling",
    description:
      "Dental scaling is a cleaning procedure that removes plaque and tartar to keep your teeth and gums healthy.",
    image: "/services/service-2.png",
  },
  {
    title: "All Types Of Dentures",
    description:
      "Dentures are custom-made replacements for missing teeth, designed to restore your smile and improve chewing and speech.",
    image: "/services/service-3.png",
  },
  {
    title: "Dental Implants",
    description:
      "Dental implants are permanent, natural-looking replacements for missing teeth that restore function and confidence.",
    image: "/services/service-4.png",
  },
  {
    title: "Dental Veneers",
    description:
      "Dental veneers are thin, custom-made shells that enhance the appearanc of your teeth by improving their shape, color, and alignment.",
    image: "/services/service-5.png",
  },
  {
    title: "Dental Filing",
    description:
      "Dental fillings restore damaged or decayed teeth, helping to protect and strengthen them for long-term health.",
    image: "/services/service-6.png",
  },
  {
    title: "Periodontal Surgery",
    description:
      "Periodontal surgery treats gum disease by restoring gum health and protecting teeth from further damage.",
    image: "/services/service-7.png",
  },
  {
    title: "Pediatric Clinic",
    description:
      "A pediatric dental clinic provides specialized care for children, ensuring healthy smiles with gentle and friendly treatments.",
    image: "/services/service-8.png",
  },
  {
    title: "Dental Bleaching",
    description:
      "Dental bleaching is a whitening treatment that removes stains and brightens your smile.",
    image: "/services/service-9.png",
  },
  {
    title: "Desensitization",
    description:
      "Dental bleaching is a whitening treatment that removes stains and brightens your smile.",
    image: "/services/service-10.png",
  },
  {
    title: "Crown And Bridge",
    description:
      "Crowns and bridges restore damaged or missing teeth, improving both function and appearance.",
    image: "/services/service-11.png",
  },
  {
    title: "Laser Treatment",
    description:
      "Laser dental treatment is a modern, painless procedure used for gum therapy, whitening, and precise dental care.",
    image: "/services/service-12.png",
  },

  {
    title: "Invicible Aligner",
    description:
      "Invisible aligners are clear, removable trays that straighten teeth discreetly and comfortably.",
    image: "/services/service-13.png",
  },
  {
    title: "Ortho Dontic Treatment",
    description:
      "Orthodontic treatment straightens teeth and corrects bite issues for a healthier, more confident smile.",
    image: "/services/service-14.png",
  },
  {
    title: "Dental Impaction",
    description:
      "Dental impaction occurs when a tooth fails to fully emerge, often requiring treatment to prevent pain and complications.",
    image: "/services/service-15.png",
  },
  {
    title: "Dental Extraction",
    description:
      "Dental extraction is the removal of a tooth to relieve pain, prevent infection, or make space for orthodontic treatment.",
    image: "/services/service-16.png",
  },
  {
    title: "Myo Functional And Habit Breaking Treatment",
    description:
      "These treatments help correct oral habits and improve jaw function for better dental health.",
    image: "/services/service-17.png",
  },
  {
    title: "Dental Composite",
    description:
      "Dental composite is a tooth-colored filling material used to repair cavities and improve tooth appearance.",
    image: "/services/service-18.png",
  },
];

const OurServices = () => {
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
                className="hover:text-teal-500 underline underline-offset-4 decoration-teal-500 decoration-2 transition-all duration-300"
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
            Our Services
          </h1>
          <h3 className="text-[24px] leading-[30px] font-bold">
            Home &gt; Our Services
          </h3>
        </div>
      </div>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-xs  rounded-lg  text-center relative overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-[250px] sm:h-[280px] md:h-[300px] lg:h-[330px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-[20px]"
                />

                {/* Dental Implant Icon Positioned in the Top Right Corner */}
                <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                  <img
                    src="logo-1.png"
                    alt="Dental implant icon"
                    className="w-8 h-8"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="py-6 px-4 transform -translate-y-[42%] bg-white w-full max-w-[233px] sm:max-w-[233px] md:max-w-[233px] lg:max-w-[233px] xl:max-w-[233px] h-auto min-h-[214px] mx-auto rounded-[20px] shadow-lg shadow-black">
                <h3 className="font-medium text-[20px] leading-[25px]">
                  {service.title}
                </h3>
                <p className="text-[17px] leading-[21px] font-normal text-gray-600 mt-2 pt-5">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
