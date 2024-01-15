import React from 'react'
import logo from '../../assets/logo.png';
import icon from '../../assets/Icon.png';
function Navbar() {
  return (
    <div className=''>
      <div className="">
        <div className=" bg-yellow-300" />
      </div>
<div className=' bg-white text-black '>
      <div className='flex justify-between items-center p-2'>
     
          <div className='flex justify-center gap-3 items-center ml-6' >
            <img className='' src={logo} alt="" />
            <span><h1>Delícias à Mesa</h1></span>
          </div>
          
            <ul className='flex justify-center items-center gap-4'> 
              {/* <li >
                <a href="#">Home</a>
               
              </li>
              <li >
                <a href="#">Home</a> 
               
              </li>
              <li >
                <a href="#">Home</a>
               
              </li> */}
            </ul>
        <div className=''>
          <img className='relative left-4 top-12 p-1' src={icon} alt="" />
          <input className=' p-1 m-4 border-4 rounded-lg'  type="text" />
        </div>
        
      </div>
      </div>

    </div>
  )
}

export default Navbar






