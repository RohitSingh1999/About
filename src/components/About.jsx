import React from 'react';
import img from '../assets/pic.jpg';

function About() {
  return (
    <div className='bg-black text-white '>
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center italic text-white relative">
          <span className="inline-block relative">
            Meet Reggie Gardener
            <span className="absolute bottom-[-14px]  left-[90px]  w-20 h-1  bg-fuchsia-600  "></span>
          </span>
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="text-center md:text-right ">
            <p className="mb-4  text-lg md:text-2xl line-clamp-5  text-justify font-bold">
              Mr. Reginald Gardner worked at NASA as a communication specialist. For the past
              12 years, he learned and was trained in excellence when performing mission-critical
              jobs in the space program.
            </p>
            <p className="mb-4  line-clamp-7 text-lg md:text-2xl  text-justify ">
              While at NASA, Mr. Reggie Gardner assisted Engineers in building software
              programs to support training, configured equipment and hardware in the SVMF
              Facility for Astronaut training, and troubleshoot and repair electronics,
              mechanical components, and hardware for the Space Shuttle and Space Station
              Mockups. Mr. Reginald Gardner's knowledge and experience at NASA pursuing
              excellence gave Reggie the entrepreneurial spirit, ethics, and drive for this
              venture to succeed.
            </p>
          </div>
          <div className="text-center md:text-right">
            <img
              src={img}
              alt="Reggie Gardener"
              className="h-60 md:h-[400px] w-60 md:w-[400px] border-white border-[8px] mx-auto md:ml-auto md:mr-0 lg:mr-[100%]"
            />
          </div>
        </div>

        <div className="mt-10 text-center w-full ">
          <p className="text-lg md:text-2xl line-clamp-7 text-justify">
            His continual pursuit of excellence gave Reggie Gardner the management
            skills needed as well as insight into hiring people with the same mindset
            of excellence and the pursuit of perfection as found in NASA. This mindset
            will give WORLD MODEL HUNT the cutting edge and the competitive advantage to
            thrive. This spirit of pursuing excellence and perfection that was built into
            Reggie drove him to ultimately create WORLD MODEL HUNT.
          </p>
        </div>

        <div className="text-3xl font-bold mt-12">
          <h1 className=" text-white relative">
            <span className="inline-block relative">
              Achievements and Accomplishments
              <span className="absolute bottom-[-13px] left-0 w-[180px] h-1 bg-fuchsia-600"></span>
            </span>
          </h1>
        </div>


        <div className="bg-zinc-900 mt-10  h-[80px] px-5 flex items-center lg:mr-36 ">
          <a href="#" className=" hover:text-red-500 font-bold text-lg md:text-4xl  text-white relative">
            <span className="absolute bottom-[-24px]  left-0 right-0 h-1  bg-fuchsia-600"></span>
            2009
          </a>
          <span className="text-white ml-4 md:ml-10 text-[13px] sm:text-lg">
            Certificate of Appreciation for The Transformation of The International Space Station (ISS) to Six-Person Crew Capabilities
          </span>
        </div>




        <div className="bg-zinc-900 mt-6 md:mt-12  h-[80px] lg:ml-36 px-5 flex items-center">
          <a href="#" className=" hover:text-red-500 font-bold text-lg md:text-4xl  text-white relative">
            <span className="absolute bottom-[-24px]  left-0 right-0 h-1  bg-fuchsia-600"></span>
            2007,2009
          </a>
          <span className="text-white ml-4 md:ml-10 text-[13px] sm:text-lg">
            Awarded for Outstanding Professionalism Performance and Teamwork


          </span>
        </div>

        <div className="bg-zinc-900 mt-6 md:mt-12  h-[80px]  px-5 flex items-center lg:mr-36 ">
          <a href="#" className=" hover:text-red-500 font-bold text-lg md:text-4xl text-white relative">
            <span className="absolute bottom-[-24px]  left-0 right-0 h-1  bg-fuchsia-600"></span>
            2005
          </a>
          <span className="text-white ml-4 md:ml-10 text-[13px] sm:text-lg">
            Public Service Group Achievement Award -2006 Raytheon Six Sigma Specialist Qualification
          </span>
        </div>



        <div className="bg-zinc-900 mt-6 md:mt-12  h-[80px] px-5 flex items-center lg:ml-36">
          <a href="#" className="hover:text-red-500 font-bold text-lg md:text-4xl text-white relative">
            <span className="absolute bottom-[-24px]  left-0 right-0 h-1  bg-fuchsia-600"></span>
            2004
          </a>
          <span className="text-white ml-4 md:ml-10 text-[13px] sm:text-lg">
            Employee of The Month: For Outstanding Professionalism Performance and Teamwork.
          </span>
        </div>

        <div className="bg-zinc-900 mt-6 md:mt-12   h-[80px]  px-5 flex items-center lg:mr-36 ">
          <a href="#" className=" hover:text-red-500 font-bold text-lg md:text-4xl  text-white relative">
            <span className="absolute bottom-[-24px]  left-0 right-0 h-1  bg-fuchsia-600"></span>
            2003
          </a>
          <span className="text-white ml-4 md:ml-10 text-[14px] sm:text-lg ">
            Employee of The Month: For Excellence in Performance Teamwork and Safety.
          </span>
        </div>

        <div className=' mt-[100px]'>
          <h1 className="font-bold text-4xl">
            <span className="relative">
              Education
              <span
                className="absolute bottom-[-8px] left-0 w-full h-1 bg-fuchsia-600"
                style={{ marginTop: "5px" }}
                aria-hidden="true"
              ></span>
            </span>
          </h1>
          <p className='line-clamp-2 text-lg mb:text-2xl text-white mt-[15px]'>Texas Southern University. Majored in Telecommunications; Minored in</p>
        </div> Electronics


        <div className=' mt-[50px]'>
          <h1 className='font-bold text-4xl'>Previous Carrers</h1>

          <p className='line-clamp-2 text-lg mb:text-2xl text-white '>Manager/Lead Field Installation Technician: Karl Storz Endoscope:
            project at Walter Reed National Military Medical Center
            in Bethesda, MD; 5-million-dollar project. MD Anderson Cancer Center – Media Service Department</p>
        </div>


        <div className=' mt-[50px]'>
          <h1 className='font-bold text-4xl'>Worked with various Hip-Hop/R&B artists/producers:</h1>

          <p className='line-clamp-2 text-lg mb:text-2xl text-white '>RBX (DeathRow Records), CandyMan, Kiotti, Billy Cook,
            DaGoldenChild, Marq-La, BigBoo, Psyco Sid,
            Hardattak, Dedd Tho, Texas Most Wanted, Pain Killa, Cle'che, Marlin Demby, Gene Bogany, Rakesh, TLee.</p>
        </div>





        <div className=' mt-[50px]'>
          <h1 className="font-bold text-4xl">
            <span className="relative">
              Produce and directed Projects
              <span
                className="absolute bottom-[-8px] left-0 w-full h-1 bg-fuchsia-600"
                aria-hidden="true"
              ></span>
            </span>
          </h1>
          <p className='mt-[20px] text-lg mb:text-2xl text-white'>Produced and Co-directed projects with Mr. BoomTown (Director/Producer)</p>

        </div>

        <div className='grid md:grid-cols-2 mx-auto'>
          <div className='py-4'>
            <h1 className='text-2xl font-bold'>Executive <br /> Producer</h1>
            <p>for the movie "Hyphen"</p>
            <iframe src="https://www.youtube.com/embed/B-mSRliAzaE?si=gc6em9otjZbm3MFE" frameborder="0" width="320" height="240" className='mt-4'></iframe>
          </div>

          <div>
            <h1 className='text-2xl font-bold'>Executive Producer/<br /> Co-Director - Music Video
            </h1>
            <p>DaGoldenChild - "Gametime"</p>
            <iframe src="blob:https://www.youtube.com/9a2f8cee-de4c-483d-bb8a-7731b1ddf288" frameborder="0" width="320" height="240" className='mt-4'></iframe>
          </div>
        </div>






      </div>
    </div>
  );
}

export default About;
