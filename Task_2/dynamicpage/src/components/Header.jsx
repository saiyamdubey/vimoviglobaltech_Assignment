import { Link } from 'react-router-dom';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <>
      <nav className={`flex justify-evenly items-center px-6 py-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 shadow-lg'}`}>
        <img className={`w-32 h-24 ${darkMode ? ' invert text-white' : 'bg-white text-gray-800 shadow-md'}`} src="https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/logo.png?raw=true" alt="" />
        <ul className="flex space-x-6">
          <li><Link to="https://www.hackerrank.com/profile/22015001973_sd">HackerRank</Link></li>
          <li><Link to="https://leetcode.com/u/Saiyam_Dubey_/">Leetcode</Link></li>
          <li><Link to="https://github.com/saiyamdubey">Github</Link></li>
          <li><Link to="https://www.linkedin.com/in/saiyam-dubey-77a5371b8/">LinkedIn</Link></li>
          <li><Link to="https://drive.google.com/file/d/1Ir-qwteWkAc8s96FIIu7Kul1din1RXXj/view?usp=drive_link">Resume</Link></li>
        </ul>
        <button className='font-extrabold text-2xl' onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
        </button>
      </nav>
      <section id="hero" className={`h-[85vh] p-18 flex justify-center items-center ${darkMode ? 'text-white bg-gray-900' : 'bg-white text-black shadow-md'}`}>
        <div className="container mx-auto flex justify-center items-center">
          <div className="w-1/2 text-left p-6">
            <h1 className="text-5xl font-bold">Welcome to Our Site</h1>
            <p className="text-lg mt-2">This is a hero section where you can learn more about our services and products.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-8">
              Learn More
            </button>
          </div>
          <div className="w-1/2 p-18">
            <img src="https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/marketing.png?raw=true" alt="Hero Image" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

    </>
  );
}



export { Header };
