import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import hmaburger from '../../assets/Vector (2).png';
import closeHamburger from '../../assets/icons8-multiply-32.png'
import icon from '../../assets/Icon.png'
interface NavLink {
  name: string;
  link: string;
}

const Navbar: React.FC = () => {
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
      <nav className='w-full h-full bg-white flex justify-between px-4 md:px-4 my-4'>
        <div className='flex justify-between text-2xl font-bold items-center'>
          <img className='m-4 w-9' src={logo} alt="" />
          <span className='md:flex hidden'>Delícias à Mesa</span>
        </div>
        <ul className='md:flex hidden font-semibold '>
          {navLinks.map((link) => (
            <li className='m-4 ' key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className='md:flex hidden font-semibold  border-spacing-2 rounded-3xlBackground  bg-stone-100 rounded-3xl'>
          <img className=' m-5 w-4' src={icon} alt="" />
          <input className=' m-5 w-40  bg-stone-100 text-slate-700' type="text"  placeholder='Search Recipe'/>
        </div>

        {showMenu && (
          <div className=" flex flex-col items-center rounded-xl  bg-stone-800 text-black md:hidden">
            <section className="my-8 flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a className="hover:opacity-70" href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </section>
            <hr className="mx-auto w-[80%] border-gray-600" />

            <section className="flex flex-col gap-6 items-center w-full py-6"></section>
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
