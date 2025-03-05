import React, { useState, useEffect } from 'react';

const FrameTwo = () => {
  const [isFrontImage1, setIsFrontImage1] = useState(true);
  const [isFrontImage2, setIsFrontImage2] = useState(true);

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

  const backImageSrc1 = isFrontImage1 ? "/img-2-6.png" : "/img-2-4.png";
  const frontImageSrc1 = isFrontImage1 ? "/img-2-4.png" : "/img-2-6.png";

  const backImageSrc2 = isFrontImage2 ? "/img-2-7.png" : "/img-2-5.png";
  const frontImageSrc2 = isFrontImage2 ? "/img-2-5.png" : "/img-2-7.png";
  return(
    <div className="mb-10  mt-10">
      <div className="text-center text-[48px] leading-[60px] font-semibold">
        Why Choose Us?
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
        <div className="w-full lg:w-[763px] h-auto lg:h-[378px] text-center lg:text-left mt-6 lg:mt-[87px]">
          <p className="text-gray-700 text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-medium leading-[35px] sm:leading-[40px] md:leading-[45px]">
            <strong className="text-[#20B4A9]">Expert Care</strong> – Our
            skilled professionals provide top-quality treatments using the
            latest techniques.
          </p>
          <p className="text-gray-700 text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-medium leading-[35px] sm:leading-[40px] md:leading-[45px]">
            <strong className="text-[#20B4A9]">Advanced Technology</strong> – We
            use state-of-the-art equipment for precise, painless, and effective
            treatments.
          </p>
          <p className="text-gray-700 text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-medium leading-[35px] sm:leading-[40px] md:leading-[45px]">
            <strong className="text-[#20B4A9]">Personalized Approach</strong> –
            Every patient receives customized care tailored to their specific
            needs.
          </p>
        </div>
      </div>
      <br />
      <div className="w-full max-w-[1328.96px] gap-16 flex flex-col-reverse lg:flex-row items-center lg:justify-between px-4 md:px-8 py-10 mt-[40px] mx-auto">
        <div className="w-full lg:w-[763px] h-auto lg:h-[378px] text-center lg:text-left mt-6 lg:mt-[87px]">
          <p className="text-gray-700 text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-medium leading-[35px] sm:leading-[40px] md:leading-[45px]">
            <strong className="text-[#20B4A9]">Comfort & Safety</strong> – A
            stress-free, hygienic, and friendly environment for the best dental
            experience.
          </p>
          <p className="text-gray-700 text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-medium leading-[35px] sm:leading-[40px] md:leading-[45px]">
            <strong className="text-[#20B4A9]">
              Affordable & Transparent Pricing
            </strong>{" "}
            – Quality dental care at fair prices with no hidden costs.
          </p>
          <p className="text-gray-700 text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-medium leading-[35px] sm:leading-[40px] md:leading-[45px]">
            <strong className="text-[#20B4A9]">Proven Results</strong> –
            Thousands of happy smiles and satisfied patients trust our
            expertise.
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
      </div>
    </div>
  );
};

export default FrameTwo;
