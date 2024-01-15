import React from 'react'
import imageUrl from '../../assets/ban.png'
function Banner() {
    return (
       <div>
         <div className=" flex items-center ">
     
      <div
        className="bg-no-repeat bg-cover bg-center  "
        style={{ backgroundImage: `url(${imageUrl})` }} 
      ></div>

     
      <div className=" text-white text-center">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
          Your Hero Title
        </h1>
        <p className="text-lg lg:text-xl leading-relaxed mb-8">
          Your hero description or tagline goes here. It can be multiline.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Call to Action
        </button>
      </div>
    </div>
       </div>
    
    )
}

export default Banner ;




//





