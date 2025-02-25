import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white p-5 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button className="md:hidden z-50 " onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo Centered in Mobile View */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="https://vimoviglobaltech.com/images/logo-light.png"
            alt="Logo"
            className="h-16 w-28 mx-auto md:mx-10"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 flex flex-col md:flex-row justify-between items-center w-full md:w-auto">
          <ul
            className={`fixed top-0 left-0 h-full w-3/4 bg-green-700 text-white p-6 transform transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:space-x-6 md:w-auto md:p-0 md:translate-x-0 z-40 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <button className="absolute top-4 right-4  text-white md:hidden" onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
            <li><a href="#home" className="hover:underline block py-2">Home</a></li>
            <li><a href="https://www.hackerrank.com/profile/22015001973_sd" className="hover:underline block py-2">HackerRank</a></li>
            <li><a href="#services" className="hover:underline block py-2">Services</a></li>
            <li><a href="https://leetcode.com/Saiyam_Dubey_/" className="hover:underline block py-2">LeetCode</a></li>
          </ul>

          <ul className="hidden md:flex space-x-6">
            <li><a href="https://codeforces.com/profile/Saiyam_Dubey_" className="hover:underline">CodeForces</a></li>
            <li><a href="https://github.com/saiyamdubey" className="hover:underline">Github</a></li>
            <li><a href="https://www.linkedin.com/in/saiyam-dubey-77a5371b8/" className="hover:underline">LinkedIn</a></li>
            <li><a href="mailto:saiyamdubey8787@gmail.com" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
