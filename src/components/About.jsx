import React from 'react';
import img from '../assets/pic.jpg';

function About() {
  return (
    <div className='bg-black text-white'>
    <div className="container mx-auto max-w-6xl px-4">
      <h1 className="text-3xl md:text-4xl font-bold underline underline-offset-[12px] mb-6 text-center italic text-red-950">
        Meet Reggie Gardener
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="text-center md:text-right ">
          <p className="mb-4 leading-relaxed text-lg md:text-2xl line-clamp-3  text-justify ">
            Mr. Reggie Gardener worked at NASA as a communication specialist. For
            the past 12 years, he learned and was trained in excellence when
            performing mission-critical jobs in the space program.
          </p>
          <p className="mb-4 leading-relaxed line-clamp-3 text-lg md:text-2xl  text-justify text-pretty ">
            While at NASA, Mr. Reggie Gardner assisted engineers in building
            software programs to support training and configured equipment. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Hic molestias fugit
            dolor eius quasi minus molestiae mollitia adipisci repellat doloremque
            aperiam quam, ullam reprehenderit ea maiores ducimus in blanditiis
            suscipit?
          </p>
        </div>
        <div className="text-center md:text-right">
          <img
            src={img}
            alt="Reggie Gardener"
            className="h-60 md:h-[400px] w-60 md:w-[400px] border-red-700 border-[8px] mx-auto md:ml-auto md:mr-0 lg:mr-[100%]"
          />
        </div>
      </div>

      <div className="mt-10 text-center w-full md:w-11/12 mx-auto">
        <p className="text-lg md:text-2xl leading-relaxed line-clamp-4 ">
          His continual pursuit of excellence gave Reggie Gardner the management
          skills needed as well as insight into hiring people with the same mindset
          of excellence and the pursuit of perfection as found in NASA. This
          mindset will give WORLD MODEL HUNT the cutting edge and the competitive
          advantage to thrive. This spirit of pursuing excellence and perfection
          that was built into Reggie drove him to ultimately create WORLD MODEL
          HUNT.
        </p>
      </div>

      <div className="text-3xl font-bold mt-12 underline text-center">
        <h2 className='text-amber-700'>Achievements and Accomplishments</h2>
      </div>

    
      <div className="bg-current mt-6 md:mt-12 w-full md:w-[600px] h-[80px] mx-auto px-5 flex items-center justify-center">
        <a href="#" className=" hover:text-red-500 font-bold text-lg md:text-4xl underline text-lime-900">
          2019
        </a>
        <span className="text-black ml-4 md:ml-10 text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          adipisci?
        </span>
      </div>

      <div className="bg-current mt-6 md:mt-12 w-full md:w-[600px] h-[80px] mx-auto px-5 flex items-center justify-center lg:mr-[100px]">
        <a href="#" className=" hover:text-red-500 font-bold text-lg md:text-4xl underline text-lime-900">
          2022
        </a>
        <span className="text-black ml-4 md:ml-10 text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          adipisci?
        </span>
      </div>

      <div className="bg-current mt-6 md:mt-12 w-full md:w-[600px] h-[80px] mx-auto px-5 flex items-center justify-center">
        <a href="#" className=" hover:text-red-500 font-bold text-lg md:text-4xl underline text-lime-900">
          2020
        </a>
        <span className="text-black ml-4 md:ml-10 text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          adipisci?
        </span>
      </div>

      <div className="bg-current mt-6 md:mt-12 w-full md:w-[600px] h-[80px] mx-auto px-5 flex items-center justify-center lg:mr-[100px]">
        <a href="#" className=" hover:text-red-500 font-bold text-lg md:text-4xl underline text-lime-900">
          2019
        </a>
        <span className="text-black ml-4 md:ml-10 text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          adipisci?
        </span>
      </div>

      <div className="bg-current mt-6 md:mt-12 w-full md:w-[600px] h-[80px] mx-auto px-5 flex items-center justify-center">
        <a href="#" className=" hover:text-red-500 font-bold text-lg md:text-4xl underline text-lime-900">
          2019
        </a>
        <span className="text-black ml-4 md:ml-10 text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          adipisci?
        </span>
      </div>

      <div className=' mt-[100px]'><h1 className='font-bold text-4xl'>Education</h1>
      <p className='line-clamp-2 text-2xl text-sky-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, corporis.</p>
      </div>
      <div className=' mt-[50px]'><h1 className='font-bold text-4xl'>Previous Carrers</h1>
      <p className='line-clamp-2 text-2xl text-sky-400 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae animi
       reprehenderit similique qui, maxime autem officiis non tenetur temporibus?</p>
      </div>
      <div className=' mt-[50px]'><h1 className='font-bold text-4xl'>Produce and directed project</h1>
      <p className='mt-[10px] text-xl text-sky-400'>Produce And Directed Projects</p>
      
      </div>

      <div className='lg:flex gap-4 mb-10 '>
        <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4"/>
  <source src="movie.ogg" type="video/ogg"/>
  
</video>

<video width="320" height="240" controls className=''>
  <source src="movie.mp4" type="video/mp4"/>
  <source src="movie.ogg" type="video/ogg"/>
  
</video>
</div>



    
    </div>
    </div>
  );
}

export default About;
