import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import hmaburger from '../../assets/Vector (2).png';
import closeHamburger from '../../assets/icons8-multiply-32.png'

import icon from '../../assets/Icon.png'
interface NavLink {
  name: string;
  link: string;
}

const Navbar: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to the dynamic search results page with the search query
    navigate(`/search/${encodeURIComponent(searchQuery)}`);
  };


  const [showMenu, setShowMenu] = useState(false);

  const toggleNavbar = () => {
    setShowMenu(!showMenu);
  };

  const navLinks: NavLink[] = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div>
      <div className='box bg-yellow-400 w-sm-[360px] h-full md:px-4'>
        <div className='text-2'>.</div>
      </div>
      <nav className='w-full h-full bg-white flex justify-between px-5 md:px-4 my-4'>
        <div className='flex justify-between text-xl font-bold items-center'>
          <img className='m-3 w-9' src={logo} alt="" />
          <span className='md:flex hidden'>Delícias à Mesa</span>
        </div>
        <ul className='md:flex hidden font-semibold '>
          {navLinks.map((link) => (
            <li className='m-4 ' key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className='md:flex hidden font-semibold  border-spacing-1 h-11 rounded-full   bg-stone-100 rounded-1xl'>
          <form className='flex flex-row m-0' onSubmit={handleSearch} >
            <button ><img className='m-2' src={icon} alt="" /></button>
            <input className=' m-2 h-7 rounded-full p-3 text-center border-yellow-300' type="text"
              placeholder="Search recipes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />
          </form>
        </div>


        {showMenu && (
          <div className=" flex flex-col items-center  md:hidden">
            <section className="my-8 flex flex-col items-center gap-6 ">
              {navLinks.map((link) => (
                <li className='list-none' key={link.name}>
                  <a className="hover:opacity-70" href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </section>
            <hr className="mx-auto w-[80%] border-gray-600" />

            <section className="flex flex-col gap-6 items-center w-full py-6">
              <div className=' font-semibold  border-spacing-1 h-11 rounded-full   bg-stone-100 rounded-1xl'>
                <form className='flex flex-row m-0' onSubmit={handleSearch} >
                  <button ><img className='m-2' src={icon} alt="" /></button>
                  <input className=' m-2 h-7 rounded-full p-3 text-center border-yellow-300' type="text"
                    placeholder="Search recipes"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                </form>
              </div>


            </section>
          </div>
        )}

        <div className='md:hidden'>
          <button className='m-5' onClick={toggleNavbar}>
            {showMenu ? (
              <img src={closeHamburger} alt="" />
            ) : (
              <img src={hmaburger} alt='' />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
