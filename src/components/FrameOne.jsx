import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Frame = () => {
  const [isFrontImage, setIsFrontImage] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFrontImage((prev) => !prev);
    }, 4000); // 4000 milliseconds = 4 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const backImageSrc = isFrontImage ? "/img-2-1.png" : "/img-2-2.png";
  const frontImageSrc = isFrontImage ? "/img-2-2.png" : "/img-2-1.png";
  return (
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
        <div className="w-full lg:w-[763px] h-auto lg:h-[610px] text-center lg:text-left mt-6 lg:mt-[87px]">
          <p className="text-gray-700 text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-medium leading-[35px] sm:leading-[40px] md:leading-[45px]">
            <span>At Dr Shibila’s Multispeciality Dental Care</span>, we are
            dedicated to providing top-quality dental care with a focus on
            comfort, innovation, and patient satisfaction. Our team of
            experienced dentists and specialists use advanced technology to
            offer comprehensive treatments, from routine check-ups to
            specialized procedures.
          </p>
          <Link to="/about">
            <button className="text-[20px] font-semibold leading-[25px] bg-[#20B4A9] text-white rounded-[20px] px-[20px] py-[10px]">
              Learn about Us
            </button>
          </Link>
        </div>

        <div className="relative flex justify-center mb-8 lg:mb-0">
      {/* Back Image*/}
      <div
        className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] rounded-[30px] sm:rounded-[45px] border-[10px] sm:border-[15px] bg-white overflow-hidden"
        style={{
          transform: "rotate(21deg)",
          borderColor: "#20B4A9",
        }}
      >
        <img
          src={backImageSrc}
          alt="Dental Clinic"
          className="w-full h-full object-cover rounded-[30px] sm:rounded-[45px]"
        />
      </div>

      {/* Front Image*/}
      <div
        className="absolute top-[-80px] sm:top-[-50px] md:top-[-80px] lg:top-[-100px] left-2 sm:left-4 md:left-6 lg:left-8 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] rounded-[20px] sm:rounded-[30px] shadow-lg bg-white overflow-hidden mt-[150px] border shadow-black/40"
        style={{
          transform: "rotate(21deg)",
        }}
      >
        <img
          src={frontImageSrc}
          alt="Dental Clinic"
          className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px]"
        />
      </div>
    </div>
      </div>
    </div>
  );
};

export default Frame;
