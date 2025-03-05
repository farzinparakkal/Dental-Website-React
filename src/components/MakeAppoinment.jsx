import React from "react";

const MakeAppointment = () => {
  return (
    <div className="flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl  flex flex-col md:flex-row p-6 max-w-7xl gap-10 w-full">
        {/* Left Form Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {/* Date & Time Selection */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex items-center w-full">
              <input
                type="date"
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <select className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Select Time</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>02:00 PM</option>
            </select>
          </div>

          {/* Input Fields */}
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/*  Button */}
          <button className="w-full bg-teal-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-teal-600 transition">
            Make Appointment
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/img-2-3.png"
            alt="Doctor and Patient"
            className="w-full max-w-md h-auto rounded-xl shadow-[0px_8px_20px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
