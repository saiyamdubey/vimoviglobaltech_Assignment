import  { useState } from 'react';
import { Header } from './Components/Header';
import About from './components/AboutUs';
import Services from './Components/Services';
import Products from './Components/Products';
import Carousel from './Components/Carousel';
import Contact from './Components/ContactForm';
import Footer from './Components/Footer';

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
