import React, { useState } from 'react';
import img from '../assets/pic.jpg';

function AboutCard() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className={`card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <img className="h-48 w-full rounded-md" src={img} alt="" />
          <h1 className="bg-red-600 w-full text-center text-white py-2">Card 1</h1>
        </div>
        <div className={`card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <img className="h-48 w-full rounded-md" src={img} alt="" />
          <h1 className="bg-red-600 w-full text-center text-white py-2">Card 2</h1>
        </div>
        <div className={`card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <img className="h-48 w-full rounded-md" src={img} alt="" />
          <h1 className="bg-red-600 w-full text-center text-white py-2">Card 3</h1>
        </div>
        <div className={`card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <img className="h-48 w-full rounded-md" src={img} alt="" />
          <h1 className="bg-red-600 w-full text-center text-white py-2">Card 4</h1>
        </div>
      </div>
      <button onClick={toggleVisibility} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Toggle Cards
      </button>
    </div>
  );
}

export default AboutCard;
