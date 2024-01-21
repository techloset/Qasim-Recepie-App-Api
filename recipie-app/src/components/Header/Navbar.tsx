import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/Vector (2).png';
import closeHamburger from '../../assets/icons8-multiply-32.png';
import icon from '../../assets/Icon.png';

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
    { name: 'Home', link: '/home' },
    { name: 'Receitas', link: '/about' },
    { name: 'Sobre nós', link: '/contact' },
  ];

  return (
    <div>
      <div className="box bg-yellow-300 w-sm-[360px] h-full md:px-4">
        <div className="text-2">.</div>
      </div>
      <nav className="w-full h-full bg-white-100 flex justify-between px-5 md:px-4 my-4">
        <div className="flex justify-between text-xl font-bold items-center">
          <Link to="/home">
            <img className="m-3 w-9" src={logo} alt="Logo" />
          </Link>
          <span className="md:flex hidden">Delícias à Mesa</span>
        </div>

        <ul className="md:flex hidden font-semibold m-3">
          {navLinks.map((link) => (
            <li className="mx-3" key={link.name}>
              <Link className="font-semibold text-xl" to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:flex hidden ">
          <Link to="/search">
            <img className='m-3 w-6' src={icon} alt="Search" />
          </Link>
        </div>

        {showMenu && (
          <div className="flex flex-col items-center md:hidden">
            <section className="my-8 flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li className="list-none" key={link.name}>
                  <Link className="hover:opacity-70" to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </section>
            <hr className="mx-auto w-[80%] " />
            <section className="flex flex-col gap-6 items-center w-full py-6">
              <div className=" ">
                <Link to="/search">
                  <img src={icon} alt="Search" />
                </Link>
              </div>
            </section>
          </div>
        )}

        <div className="md:hidden">
          <button className="m-5" onClick={toggleNavbar}>
            {showMenu ? (
              <img className="" src={closeHamburger} alt="Close Menu" />
            ) : (
              <img src={hamburger} alt="Open Menu" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
