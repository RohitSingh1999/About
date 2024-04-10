import React, { useState } from 'react';
import img from '../assets/pic.jpg';
import './Aboutcard.css';

function Aboutcard() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div
          className={`card ${isHovered ? 'paused' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img className='card-image' src={img} alt="" />
          <h1 className='card-title'>Card 1</h1>
        </div>
        <div
          className={`card ${isHovered ? 'paused' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img className='card-image' src={img} alt="" />
          <h1 className='card-title'>Card 2</h1>
        </div>
        <div
          className={`card ${isHovered ? 'paused' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img className='card-image' src={img} alt="" />
          <h1 className='card-title'>Card 3</h1>
        </div>
        <div
          className={`card ${isHovered ? 'paused' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img className='card-image' src={img} alt="" />
          <h1 className='card-title'>Card 4</h1>
        </div>

        <div
          className={`card ${isHovered ? 'paused' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img className='card-image' src={img} alt="" />
          <h1 className='card-title'>Card 4</h1>
        </div>
        <div
          className={`card ${isHovered ? 'paused' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img className='card-image' src={img} alt="" />
          <h1 className='card-title'>Card 4</h1>
        </div>
        <div
          className={`card ${isHovered ? 'paused' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img className='card-image' src={img} alt="" />
          <h1 className='card-title'>Card 4</h1>
        </div>
        <div
          className={`card ${isHovered ? 'paused' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img className='card-image' src={img} alt="" />
          <h1 className='card-title'>Card 4</h1>
        </div>
      </div>
    </div>
  );
}

export default Aboutcard;
