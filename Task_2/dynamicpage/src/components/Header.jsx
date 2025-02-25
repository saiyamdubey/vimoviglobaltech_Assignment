import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={`flex justify-between items-center px-6 py-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 shadow-lg'}`}>
        {/* Logo */}
        <img
          className={`w-24 h-16 ${darkMode ? 'invert' : ''}`}
          src="https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/logo.png?raw=true"
          alt="Logo"
        />

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:flex md:space-x-6 md:items-center p-4 md:p-0 transition-all text-amber-50 ${
            menuOpen ? 'block p-5 mt-10' : 'hidden'
          } md:block`}
        >
          <li><Link to="https://www.hackerrank.com/profile/22015001973_sd" className='p-5 font-extrabold '>HackerRank</Link></li>
          <li><Link to="https://leetcode.com/u/Saiyam_Dubey_/" className='p-5  font-extrabold '>Leetcode</Link></li>
          <li><Link to="https://github.com/saiyamdubey" className='p-5 font-extrabold '>Github</Link></li>
          <li><Link to="https://www.linkedin.com/in/saiyam-dubey-77a5371b8/" className='p-5 font-extrabold '>LinkedIn</Link></li>
          <li><Link to="https://drive.google.com/file/d/1Ir-qwteWkAc8s96FIIu7Kul1din1RXXj/view?usp=drive_link" className='p-5 font-extrabold '>Resume</Link></li>
        </ul>

        {/* Dark Mode Toggle */}
        <button className='font-extrabold text-lg md:text-2xl' onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={`h-[85vh] p-6 flex flex-col md:flex-row justify-center items-center text-center md:text-left ${darkMode ? 'text-white bg-gray-900' : 'bg-white text-black shadow-md'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-4xl md:text-5xl font-bold">Welcome to Our Site</h1>
            <p className="text-lg mt-2">This is a hero section where you can learn more about our services and products.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-6">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-1/2 p-6">
            <img
              src="https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/marketing.png?raw=true"
              alt="Hero Image"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header ;