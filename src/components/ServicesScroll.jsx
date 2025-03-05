import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const cardSets = [
  [
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
  ],
  [
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
      title: 'Periodontal Surgery',
      description:
        "Periodontal surgery treats gum disease by restoring gum health and protecting teeth from further damage.",
      image: "/services/service-7.png",
    },
    {
      title: "Pediatric Clinic",
      description:  "A pediatric dental clinic provides specialized care for children, ensuring healthy smiles with gentle and friendly treatments.",
      image: "/services/service-8.png",
    },
  ],
  [
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
      description: "Laser dental treatment is a modern, painless procedure used for gum therapy, whitening, and precise dental care.",
      image: "/services/service-12.png",
    },
  ],
  [
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
      description:"Dental extraction is the removal of a tooth to relieve pain, prevent infection, or make space for orthodontic treatment.",
      image: "/services/service-16.png",
    },
  ],
  [
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
  ],
];

const ServicesScroll = () => {
  const [activeSet, setActiveSet] = useState(0);
  const scrollRef = useRef(null);

  const nextSet = () => {
    if (activeSet < cardSets.length - 1) {
      setActiveSet(activeSet + 1);
    }
  };

  const prevSet = () => {
    if (activeSet > 0) {
      setActiveSet(activeSet - 1);
    }
  };

  return (
    <div>
      <div className="text-center text-[28px] sm:text-[32px] md:text-[35px] font-medium leading-[36px] sm:leading-[40px] md:leading-[43px]">
        Our Services
      </div>
      <div className="text-center text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-[42px] sm:leading-[50px] md:leading-[60px] mt-6 sm:mt-8 md:mt-10">
        "We push boundaries to bring your vision to reality"
      </div>

      <div className="relative flex flex-col items-center py-10 px-4">
        {/* Top-Right Arrows */}
        <div className="absolute top-[-40px] right-0 flex gap-2 ">
          <button
            onClick={prevSet}
            className="p-3 rounded-full shadow-lg hover:bg-gray-100 transition disabled:opacity-50 bg-[#20B4A9]"
            disabled={activeSet === 0}
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
            onClick={nextSet}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition disabled:opacity-50 border-2 border-[#20B4A9]"
            disabled={activeSet === cardSets.length - 1}
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

        {/* Card Container */}
        <div className="relative flex items-center w-full max-w-6xl">
          {/* Cards */}
          <div className="overflow-hidden w-full">
            <div
              ref={scrollRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSet * 100}%)` }}
            >
              {cardSets.map((set, index) => (
                <div key={index} className="flex min-w-full gap-4 justify-center flex-wrap sm:flex-nowrap"> 
                {set.map((card, i) => (
                  <Link to="/services" key={i} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg text-center relative overflow-hidden">
                    {/* Image Section */}
                    <div className="relative h-[250px] sm:h-[280px] md:h-[300px] lg:h-[330px]">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover rounded-[20px]"
                      />
              
                      {/* logo */}
                      <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                        <img
                          src="logo-1.png"
                          alt="Dental implant icon"
                          className="w-8 h-8 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
              
                    {/* Text Section */}
                    <div className="py-6 px-4 transform -translate-y-[42%] bg-white w-full max-w-[233px] sm:max-w-[233px] md:max-w-[233px] lg:max-w-[233px] xl:max-w-[233px] min-h-[214px] mx-auto rounded-[20px] shadow-lg shadow-black">
                      <h3 className="font-medium text-[18px] sm:text-[20px] md:text-[22px] leading-[25px]">
                        {card.title}
                      </h3>
                      <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[21px] font-normal text-gray-600 mt-2 pt-3 sm:pt-5">
                        {card.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 mt-10">
          {cardSets.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeSet ? "bg-teal-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesScroll;