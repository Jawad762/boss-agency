import React from 'react';

const ConceptToScreenSection = () => {
  return (
    <div className="w-full bg-primaryPurple text-white py-8">
      <div className="w-full max-w-[1000px] px-5 mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-thin tracking-wider">FROM CONCEPT</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-wider">TO SCREEN,</h3>
          <h2 className="text-4xl md:text-6xl font-thin tracking-wider">FROM STRATEGY</h2>
          <h3 className="text-4xl md:text-6xl font-bold leading-tight tracking-wider">TO SUCCESS!</h3>
        </div>
            <img 
              src="/assets/home/ladder.png" 
              alt="Person with lightbulb" 
              className="object-contain md:w-full max-w-[400px]"
            />
      </div>
    </div>
  );
};

export default ConceptToScreenSection; 