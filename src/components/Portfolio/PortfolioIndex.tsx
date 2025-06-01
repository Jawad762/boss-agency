"use client";
import React, { useState } from "react";
import Image from "next/image";

const ALL_IMAGES = Array(76)
  .fill(0)
  .map((_x, i) => i + 1);

const PortfolioIndex = () => {
  const [pagesToShow, setPagesToShow] = useState(10);

  const handleLoadMore = () => {
    setPagesToShow(Math.min(ALL_IMAGES.length, pagesToShow + 10))
  }

  return (
    <div className="w-full bg-white">
      <div className="space-y-2">
        {ALL_IMAGES.slice(0, pagesToShow).map((num) => (
          <Image
            key={num}
            src={`/portfolio/pdf-pages/${num}.png`}
            alt={`Portfolio Page ${num}`}
            width={2480}
            height={3508}
            quality={100}
            className="w-full h-auto object-contain"
            priority={num < 3}
            loading={num < 3 ? "eager" : "lazy"}
          />
        ))}
        {pagesToShow < ALL_IMAGES.length && (
          <div className="flex flex-col items-center my-8">
            <p className="text-gray-600 mb-4">Showing {pagesToShow} of {ALL_IMAGES.length} pages</p>
            <button onClick={handleLoadMore} className="bg-primaryPurple text-white px-8 py-3 rounded-full font-bold">
              Show More
            </button>
          </div>
        )}
      </div>

      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-primaryPurple text-white p-3 rounded-full shadow-lg hover:bg-primaryPurple/90 transition-colors"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
      {/* <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primaryPurple mx-auto mb-4"></div> */}
    </div>
  );
};

export default PortfolioIndex;
