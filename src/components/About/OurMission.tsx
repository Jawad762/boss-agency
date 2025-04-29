import React from "react";

const OurMission = () => {
  return (
    <section className="bg-primaryBeige py-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl mb-8 flex">
              <span className="text-primaryPurple font-light flex"><span className="border-4 border-primaryPurple rounded-full w-32 mt-3 mb-1"></span>UR</span>
              <span className="text-primaryPurple font-bold">MISSION</span>
            </h2>
            <p className="text-primaryGray text-xl font-semibold leading-relaxed max-w-[40ch]">
              We help brands convey their creative messages through high-quality
              visual and marketing content built on strategic insights.
            </p>
          </div>
          <img src="/assets/about/selfie.png" alt="Our mission" className="w-full scale-90 lg:-mt-48" />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
