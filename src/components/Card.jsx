import React from 'react'

function Card() {
  return (
<>
<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className="container mx-auto"> {/* Center the grid horizontally */}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 md:bg-rose-500 gap-10 grid-cols-2 bg-cyan-300 place-items-center">
                
                    <img
                        src="https://random.imagecdn.app/500/50"
                        className="h-[170px] w-[170px] rounded-[7px]"
                        alt="Image 1"
                    />
                
               
                    <img
                        src="https://random.imagecdn.app/500/150"
                        className="h-[170px] w-[170px] rounded-[7px]"
                        alt="Image 2"
                    />
               
               
                    <img
                        src="https://random.imagecdn.app/500/10"
                        className="h-[170px] w-[170px] rounded-[7px]"
                        alt="Image 3"
                    />
               
               
                    <img
                        src="https://random.imagecdn.app/500/150"
                        className="h-[170px] w-[170px] rounded-[7px]"
                        alt="Image 4"
                    />
               
                
                    <img
                        src="https://random.imagecdn.app/500/70"
                        className="h-[170px] w-[170px] rounded-[7px]"
                        alt="Image 4"
                    />
              
            </div>
        </div>
</>
  )
}

export default Card