import React from "react";
import { portfolioItems } from "@/constants";

const PortfolioIndex = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-gray-500 font-bold mb-8">
          PORTFOLIO
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item) => (
            <div key={item.id} className="w-full h-full">
              <div
                className={`aspect-square overflow-hidden flex items-center justify-center relative`}
              >
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioIndex;
