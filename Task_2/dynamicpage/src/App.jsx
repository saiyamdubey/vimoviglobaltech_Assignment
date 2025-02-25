import  { useState } from 'react';
import Header  from '../src/components/Header';
import About from '../src/components/AboutUs';
import Services from '../src/components/Services';
import Products from '../src/components/Products';
import Carousel from '../src/components/Carousel';
import Contact from '../src/components/ContactForm';
import Footer from '../src/components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Carousel />
      <About />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
