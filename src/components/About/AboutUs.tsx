import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-primaryPurple text-white flex flex-col lg:flex-row">
      <div className="container mx-auto px-4 relative z-10 py-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-wide flex flex-col md:flex-row">
            ABOUT{" "}
            <span className="flex">
              <span className="inline-block w-24 sm:w-32 md:w-48 mt-2 sm:mt-3 mb-1 border-b-4 border-x-4 rounded-b-lg border-white pb-2 md:ml-4 mr-2"></span>
              <span className="font-light">S</span>
            </span>
          </h1>
          <p className="text-lg">
            BOSS is a leading company specializing in digital marketing, film
            production, and advertising, operating with high creative and
            professional standards to deliver impactful visual content that
            strengthens brand identity and maximizes audience engagement.
          </p>
        </div>
      </div>

      <img src="/assets/about/hands.png" className="w-full lg:w-1/2" />
    </section>
  );
};

export default AboutUs;
