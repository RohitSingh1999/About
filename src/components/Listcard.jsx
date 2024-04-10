import React from 'react';
import img from '../assets/pic.jpg';
import './Listcard.css';

function Listcard() {
  return (
    <div className='container mx-auto'>
      <div className='scroll-container'>
        <ul className='scroll-list'>
          <li><img className='card-image' src={img} alt="" /></li>
          <li><img className='card-image' src={img} alt="" /></li>
          <li><img className='card-image' src={img} alt="" /></li>
          <li><img className='card-image' src={img} alt="" /></li>
          {/* Add more list items with images as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Listcard;
