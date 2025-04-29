import React from "react";
import { IoMdEye } from "react-icons/io";

const OurVision = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center justify-center">
          <div className="relative lg:w-1/3">
            <img
              src="/assets/about/idea.png"
              alt="Creative vision"
              className="w-full max-h-full"
            />
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl text-center mb-8 flex items-center justify-center">
              <span className="text-primaryGray font-light">OUR</span>
              <span className="text-primaryGray font-bold flex items-center">VISI<IoMdEye className="text-primaryPurple mt-1" />N</span>
            </h2>
            <p className="text-primaryGray font-semibold text-lg leading-relaxed text-center">
              To be the leading company in marketing and media content creation
              in Saudi Arabia, the Gulf region, and globally, by providing
              innovative solutions that meet our clients' aspirations and
              reflect their identity in the best possible way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
